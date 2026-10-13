import { Button } from "@/components/ui/button";
import { Search, Plus, PlayCircle, Eye, RefreshCcw, Bell, Download } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Barra lateral */}
      <aside className="w-16 border-r border-gray-800 flex flex-col items-center py-6 gap-6 bg-[#0a0a0a]">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mb-4">
          <span className="font-bold text-black text-xs">A</span>
        </div>
        <nav className="flex flex-col gap-6 text-gray-500">
          <Button variant="ghost" size="icon" className="text-white bg-white/10 hover:bg-white/20"><PlayCircle size={20} /></Button>
          <Button variant="ghost" size="icon" className="hover:text-white"><Bell size={20} /></Button>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Cabeçalho */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar cliente ou pagamento..." 
              className="w-full bg-[#141414] border border-gray-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1.5 rounded-full text-xs font-medium border border-green-500/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AO VIVO
            </div>
            <Button variant="ghost" size="icon" className="bg-[#141414] rounded-full border border-gray-800 hover:bg-gray-800"><Eye size={16} /></Button>
            <Button variant="ghost" size="icon" className="bg-[#141414] rounded-full border border-gray-800 hover:bg-gray-800"><RefreshCcw size={16} /></Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-medium">
                DC
              </div>
              <div className="text-xs">
                <p className="font-medium text-sm">Dev. Ch4ze</p>
                <p className="text-gray-500">CEO · Acesso total</p>
              </div>
            </div>
          </div>
        </header>

        {/* Grelha do Dashboard */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          
          {/* Coluna Esquerda (Gráficos) */}
          <div className="col-span-2 space-y-6">
            {/* Gráfico Principal */}
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Receita total
                  </h2>
                  <p className="text-4xl font-bold">R$ 4.700,00 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded ml-2 font-medium">↗ 12%</span></p>
                </div>
                <Button className="bg-[#1a1a1a] text-white hover:bg-gray-800 rounded-full border border-gray-700">
                  Gerar relatório
                </Button>
              </div>
              <div className="h-24 w-full border-b border-gray-800 flex items-end pb-2">
                <div className="w-full h-1 bg-gradient-to-r from-gray-800 to-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Ações Rápidas) */}
          <div className="col-span-1">
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 h-full flex flex-col justify-center">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Ações de Pagamento</h2>
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl font-medium mb-3 py-6">
                <Plus size={18} className="mr-2" /> Nova Cobrança (Asaas)
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-gray-700 text-white hover:bg-gray-800 rounded-xl py-6">
                Sincronizar Supabase
              </Button>
            </div>
          </div>
        </div>

        {/* TABELA DE PAGAMENTOS */}
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Histórico de Pagamentos</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Download size={14} className="mr-2" /> Exportar
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-500 border-b border-gray-800">
                <tr>
                  <th className="pb-4 font-medium pl-2">Cliente / Projeto</th>
                  <th className="pb-4 font-medium">Data de Vencimento</th>
                  <th className="pb-4 font-medium">Método</th>
                  <th className="pb-4 font-medium">Valor</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium text-right pr-2">Ação</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {/* Linha 1 */}
                <tr className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                  <td className="py-4 pl-2 font-medium text-white">Lumina Studio</td>
                  <td className="py-4 text-gray-400">13 Out 2026</td>
                  <td className="py-4 text-gray-400">PIX</td>
                  <td className="py-4 font-medium text-white">R$ 1.200,00</td>
                  <td className="py-4">
                    <span className="bg-green-500/10 text-green-500 px-2.5 py-1 rounded-full text-xs font-medium border border-green-500/20">Pago</span>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <Button size="sm" variant="ghost" className="h-8 text-gray-400 hover:text-white">Detalhes</Button>
                  </td>
                </tr>

                {/* Linha 2 */}
                <tr className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                  <td className="py-4 pl-2 font-medium text-white">Mobi Commerce</td>
                  <td className="py-4 text-gray-400">15 Out 2026</td>
                  <td className="py-4 text-gray-400">Boleto</td>
                  <td className="py-4 font-medium text-white">R$ 3.500,00</td>
                  <td className="py-4">
                    <span className="bg-yellow-500/10 text-yellow-500 px-2.5 py-1 rounded-full text-xs font-medium border border-yellow-500/20">Pendente</span>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <Button size="sm" variant="ghost" className="h-8 text-gray-400 hover:text-white">Copiar Link</Button>
                  </td>
                </tr>

                {/* Linha 3 */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 pl-2 font-medium text-white">Nó Arquitetura</td>
                  <td className="py-4 text-gray-400">10 Out 2026</td>
                  <td className="py-4 text-gray-400">Cartão de Crédito</td>
                  <td className="py-4 font-medium text-white">R$ 8.900,00</td>
                  <td className="py-4">
                    <span className="bg-red-500/10 text-red-500 px-2.5 py-1 rounded-full text-xs font-medium border border-red-500/20">Atrasado</span>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <Button size="sm" variant="ghost" className="h-8 text-gray-400 hover:text-white">Reenviar</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}