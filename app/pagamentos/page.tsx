import { Button } from "@/components/ui/button";
import { Search, Plus, PlayCircle, Eye, RefreshCcw, Bell } from "lucide-react";

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
          {/* Adicionar outros ícones do menu aqui */}
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
              placeholder="Buscar cliente ou projeto..." 
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
        <div className="grid grid-cols-3 gap-6">
          
          {/* Coluna Esquerda (Gráficos) */}
          <div className="col-span-2 space-y-6">
            {/* Gráfico Principal */}
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Lucro no periodo
                  </h2>
                  <p className="text-4xl font-bold">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded ml-2 font-medium">↗ 0%</span></p>
                </div>
                <Button className="bg-[#1a1a1a] text-white hover:bg-gray-800 rounded-full border border-gray-700">
                  Gerar resumo do periodo
                </Button>
              </div>
              <div className="h-48 w-full border-b border-gray-800 flex items-end pb-2">
                <div className="w-full h-1 bg-gradient-to-r from-gray-800 to-gray-300 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Banner de Próxima Venda */}
              <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Sua próxima venda começa agora.</h3>
                <p className="text-sm text-gray-400 mb-8 relative z-10">2 empresas esperando seu próximo movimento.</p>
                <Button className="w-full bg-white text-black hover:bg-gray-200 relative z-10 rounded-xl font-medium">
                  Registrar cliente
                </Button>
              </div>

              {/* Lucro por período */}
              <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-sm text-gray-400 mb-2">Lucro por período</h3>
                <p className="text-2xl font-bold mb-6">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded font-medium">↗ 0%</span></p>
                <div className="flex justify-between items-end h-24">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-8 h-2 bg-gray-800 rounded-t-sm border-t border-gray-700"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Carteira e Vendas) */}
          <div className="col-span-1 space-y-6">
            {/* Carteira */}
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Minha carteira</h2>
                <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full font-medium">
                  <Plus size={14} className="mr-1" /> Nova venda
                </Button>
              </div>
              
              {/* Cartão Virtual */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-5 rounded-xl border border-gray-800 shadow-xl mb-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-start mb-8">
                  <div className="font-mono text-xl tracking-widest text-gray-500">{'</>'}</div>
                  <div className="w-8 h-6 bg-gray-700 rounded-sm opacity-50"></div>
                </div>
                <p className="text-xs text-gray-500 mb-1">Lucro disponível</p>
                <p className="text-2xl font-bold">R$ 0 <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded ml-2 font-medium">↗ 0%</span></p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent border-gray-700 text-white hover:bg-gray-800 rounded-xl">Cliente</Button>
                <Button className="flex-1 bg-white text-black hover:bg-gray-200 rounded-xl font-medium">Venda</Button>
              </div>
            </div>

            {/* Vendas Recentes */}
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-64">
              <div className="w-full flex justify-between items-center mb-8">
                <h3 className="font-semibold text-left">Vendas recentes</h3>
                <span className="text-xs text-gray-400 cursor-pointer hover:text-white transition-colors">Ver todas</span>
              </div>
              <div className="mt-auto mb-auto">
                <p className="font-semibold text-lg mb-1 text-gray-300">Nenhuma venda</p>
                <p className="text-xs text-gray-500 mb-6">Seus resultados aparecerão aqui.</p>
                <Button variant="outline" className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-6">
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