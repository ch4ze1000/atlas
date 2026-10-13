import { Button } from "@/components/ui/button";
import { Search, Plus, PlayCircle, Eye, RefreshCcw, Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Barra lateral */}
      <aside className="w-16 border-r border-red-900/30 flex flex-col items-center py-6 gap-6 bg-black/50">
        <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center mb-4">
          <span className="font-bold text-white text-xs">A</span>
        </div>
       <nav className="flex flex-col gap-6 text-gray-500">
  <Button variant="ghost" size="icon" className="text-red-500 bg-red-500/10 hover:bg-red-500/20"><PlayCircle size={20} /></Button>
  <Button variant="ghost" size="icon" className="hover:text-white"><Bell size={20} /></Button>
  
  {/* O Link com o href fica aqui na estrutura visual */}
  <Link href="/pagamentos">
    <Button variant="ghost" className="text-gray-500 hover:text-white text-xs">
      Ir para Pagamentos
    </Button>
  </Link>
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
              placeholder="Buscar cliente ou projeto" 
              className="w-full bg-[#141414] border border-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-600/20 text-red-500 px-3 py-1.5 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              AO VIVO
            </div>
            <Button variant="ghost" size="icon" className="bg-[#141414] rounded-full hover:bg-gray-800"><Eye size={16} /></Button>
            <Button variant="ghost" size="icon" className="bg-[#141414] rounded-full hover:bg-gray-800"><RefreshCcw size={16} /></Button>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-8 h-8 rounded-full bg-gray-700"></div>
              <div className="text-xs">
                <p className="font-medium">everson barbosa</p>
                <p className="text-gray-500">@c4ze</p>
              </div>
            </div>
          </div>
        </header>

        {/* Grelha do Dashboard */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Coluna Esquerda (Gráficos) */}
          <div className="col-span-2 space-y-6">
            {/* Gráfico Principal */}
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Lucro no periodo
                  </h2>
                  <p className="text-4xl font-bold">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded ml-2">↗ 0%</span></p>
                </div>
                <Button className="bg-red-600/20 text-red-500 hover:bg-red-600/30 rounded-full border border-red-500/30">
                  Gerar resumo do periodo
                </Button>
              </div>
              <div className="h-48 w-full border-b border-red-900/50 flex items-end">
                <div className="w-full h-1 bg-gradient-to-r from-red-900 to-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Banner de Próxima Venda */}
              <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-2xl p-6 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2 relative z-10">Sua próxima venda começa agora.</h3>
                <p className="text-sm text-red-200 mb-8 relative z-10">2 empresas esperando seu próximo movimento.</p>
                <Button className="w-full bg-white text-red-900 hover:bg-gray-100 relative z-10 rounded-xl">
                  Registrar cliente
                </Button>
              </div>

              {/* Lucro por período */}
              <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-sm text-gray-400 mb-2">Lucro por período</h3>
                <p className="text-2xl font-bold mb-6">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">↗ 0%</span></p>
                <div className="flex justify-between items-end h-24">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-8 h-2 bg-red-900/50 rounded-t-sm border-t border-red-500/50"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Carteira e Vendas) */}
          <div className="col-span-1 space-y-6">
            {/* Carteira */}
            <div className="bg-gradient-to-b from-red-600/20 to-transparent border border-red-900/30 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold">Minha carteira</h2>
                <Button size="sm" className="bg-red-500/20 text-red-500 hover:bg-red-500/30 rounded-full">
                  <Plus size={14} className="mr-1" /> Nova venda
                </Button>
              </div>
              
              {/* Cartão Virtual */}
              <div className="bg-gradient-to-br from-gray-800 to-black p-5 rounded-xl border border-gray-700 shadow-2xl mb-4 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start mb-8">
                  <div className="font-mono text-xl tracking-widest text-gray-400">{'</>'}</div>
                  <div className="w-8 h-6 bg-gray-300 rounded-sm opacity-80"></div>
                </div>
                <p className="text-xs text-gray-400 mb-1">Lucro disponível</p>
                <p className="text-2xl font-bold">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded ml-2">↗ 0%</span></p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent border-gray-700 hover:bg-gray-800 rounded-xl">Cliente</Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl">Venda</Button>
              </div>
            </div>

            {/* Vendas Recentes */}
            <div className="bg-red-600 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-64 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <div className="w-full flex justify-between items-center mb-8">
                <h3 className="font-semibold text-left">Vendas recentes</h3>
                <span className="text-xs text-red-200 cursor-pointer">Ver todas</span>
              </div>
              <div className="mt-auto mb-auto">
                <p className="font-semibold text-lg mb-1">Nenhuma venda registrada</p>
                <p className="text-xs text-red-200 mb-6">Seus resultados aparecerão aqui.</p>
                <Button className="bg-red-900/50 text-white hover:bg-red-900/70 border border-red-400/30 rounded-full px-6">
                  Registrar primeira venda
                </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}