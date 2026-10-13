import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Inicializar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, customerEmail, value, description } = body;

    // 1. Criar cliente ou cobrança no Asaas
    const asaasResponse = await fetch('https://sandbox.asaas.com/api/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': process.env.ASAAS_API_KEY!
      },
      body: JSON.stringify({
        customer: 'cus_000005035783', // Substituir pelo ID do cliente criado previamente no Asaas
        billingType: 'PIX', // ou 'CREDIT_CARD', 'BOLETO'
        value: value,
        dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Vence amanhã
        description: description,
      })
    });

    const asaasData = await asaasResponse.json();

    if (!asaasResponse.ok) {
      throw new Error(asaasData.errors[0].description);
    }

    // 2. Guardar o registo no Supabase
    const { data: dbData, error: dbError } = await supabase
      .from('sales')
      .insert([
        {
          asaas_payment_id: asaasData.id,
          customer_name: customerName,
          amount: value,
          status: 'PENDING',
          payment_url: asaasData.invoiceUrl,
        }
      ])
      .select();

    if (dbError) throw dbError;

    // 3. Retornar o link de pagamento para o Frontend
    return NextResponse.json({ 
      success: true, 
      paymentUrl: asaasData.invoiceUrl,
      sale: dbData[0] 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}