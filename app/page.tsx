'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  Eye,
  FileCode2,
  Filter,
  Globe2,
  LayoutDashboard,
  LogOut,
  Menu,
  Monitor,
  Moon,
  MoreHorizontal,
  PanelLeft,
  Plus,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  Trash2,
  TrendingUp,
  UserRound,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Status = 'Em Andamento' | 'Concluído' | 'Pausado' | 'Aguardando Aprovação'
type Project = {
  id: string
  clientName: string
  siteUrl: string
  status: Status
  category: string
  currency: 'BRL' | 'USD'
  totalValue: number
  startDate: string
  estimatedEndDate: string
  progressPercentage: number
  updates: { id: string; date: string; description: string; notes: string }[]
}

const seedProjects: Project[] = [
  { id: '1', clientName: 'Lumina Studio', siteUrl: 'https://lumina.studio', status: 'Em Andamento', category: 'Institucional', currency: 'BRL', totalValue: 12800, startDate: '2026-09-08', estimatedEndDate: '2026-10-28', progressPercentage: 72, updates: [{ id: 'u1', date: '2026-10-11', description: 'Nova home publicada', notes: 'Aguardando retorno sobre o bloco de depoimentos.' }, { id: 'u2', date: '2026-10-05', description: 'Sistema visual aprovado', notes: 'Tokens de cor e tipografia definidos.' }] },
  { id: '2', clientName: 'Mobi Commerce', siteUrl: 'https://mobi-commerce.com', status: 'Aguardando Aprovação', category: 'E-commerce', currency: 'BRL', totalValue: 24600, startDate: '2026-08-18', estimatedEndDate: '2026-10-21', progressPercentage: 91, updates: [{ id: 'u3', date: '2026-10-09', description: 'Checkout integrado', notes: 'Pronto para validação do cliente.' }] },
  { id: '3', clientName: 'Atlas Finance', siteUrl: 'https://atlas.finance', status: 'Concluído', category: 'Landing Page', currency: 'USD', totalValue: 4800, startDate: '2026-07-12', estimatedEndDate: '2026-09-02', progressPercentage: 100, updates: [{ id: 'u4', date: '2026-09-02', description: 'Projeto entregue', notes: 'Acesso e documentação enviados.' }] },
  { id: '4', clientName: 'Nó Arquitetura', siteUrl: 'https://no.arq.br', status: 'Em Andamento', category: 'Portfólio', currency: 'BRL', totalValue: 8900, startDate: '2026-09-25', estimatedEndDate: '2026-11-14', progressPercentage: 38, updates: [{ id: 'u5', date: '2026-10-02', description: 'Galeria de projetos criada', notes: 'Imagens finais em produção.' }] },
  { id: '5', clientName: 'Vértice Educação', siteUrl: 'https://vertice.edu.br', status: 'Pausado', category: 'Landing Page', currency: 'BRL', totalValue: 6200, startDate: '2026-08-30', estimatedEndDate: '2026-10-10', progressPercentage: 54, updates: [] },
]

const statusStyles: Record<Status, string> = {
  'Em Andamento': 'border-blue-500/20 bg-blue-500/10 text-blue-300',
  'Concluído': 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  'Pausado': 'border-amber-500/20 bg-amber-500/10 text-amber-300',
  'Aguardando Aprovação': 'border-violet-500/20 bg-violet-500/10 text-violet-300',
}

const money = (value: number, currency: Project['currency']) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value)
const date = (value: string) => new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' }).format(new Date(value + 'T12:00:00')).replace('.', '')

function Login({ onLogin }: { onLogin: () => void }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  return <main className="grid min-h-screen place-items-center bg-[#090a0d] px-5 text-foreground">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(68,75,103,.18),transparent_35%)]" />
    <section className="relative w-full max-w-[410px]">
      <div className="mb-8 flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/10"><Sparkles className="size-5" /></div><div><p className="font-semibold tracking-tight">Atlas</p><p className="text-xs text-muted-foreground">Workspace para developers</p></div></div>
      <div className="rounded-2xl border border-white/[.08] bg-[#111318]/90 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl"><div className="mb-7"><h1 className="text-2xl font-semibold tracking-tight">Bem-vindo de volta</h1><p className="mt-1 text-sm text-muted-foreground">Entre para acessar seus projetos.</p></div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); if (login === 'dev.ch4ze' && password === '25') onLogin(); else setError(true) }}>
          <label className="flex flex-col gap-2 text-sm font-medium">Identificador<input autoComplete="username" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="seu identificador" className="h-11 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20" /></label>
          <label className="flex flex-col gap-2 text-sm font-medium">Senha<input autoComplete="current-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="h-11 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20" /></label>
          {error && <p className="text-xs text-red-300">Identificador ou senha inválidos.</p>}
          <Button type="submit" className="mt-2 h-11 w-full">Entrar no workspace</Button>
        </form>
      </div><p className="mt-6 text-center text-xs text-muted-foreground">Acesso protegido · Atlas CRM</p>
    </section>
  </main>
}

function ProjectCard({ project, onClick, onDelete }: { project: Project; onClick: () => void; onDelete: () => void }) {
  return <div role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter') onClick() }} className="group relative flex cursor-pointer flex-col rounded-xl border border-white/[.07] bg-card/70 p-5 text-left transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-card hover:shadow-xl hover:shadow-black/20">
    <div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-center gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/[.06] text-muted-foreground"><Globe2 className="size-4" /></div><div className="min-w-0"><h3 className="truncate font-medium tracking-tight">{project.clientName}</h3><p className="mt-0.5 truncate text-xs text-muted-foreground">{project.category}</p></div></div><span className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-medium ${statusStyles[project.status]}`}>{project.status}</span></div>
    <div className="mt-7 flex items-end justify-between"><div><p className="text-xs text-muted-foreground">Progresso</p><p className="mt-1 text-2xl font-semibold tracking-tight">{project.progressPercentage}<span className="text-sm text-muted-foreground">%</span></p></div><div className="text-right"><p className="text-xs text-muted-foreground">Investimento</p><p className="mt-1 font-medium">{money(project.totalValue, project.currency)}</p></div></div>
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[.06]"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${project.progressPercentage}%` }} /></div>
    <div className="mt-5 flex items-center justify-between border-t border-white/[.06] pt-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />{date(project.startDate)} → {date(project.estimatedEndDate)}</span><ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" /></div>
  <button type="button" aria-label={`Apagar projeto ${project.clientName}`} onClick={(e) => { e.stopPropagation(); onDelete() }} className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-lg text-muted-foreground opacity-0 transition hover:bg-red-500/15 hover:text-red-400 focus:opacity-100 group-hover:opacity-100"><Trash2 className="size-4" /></button>
  </div>
}

function ProjectSheet({ project, onClose, onSave, onPreview, onDelete }: { project: Project; onClose: () => void; onSave: (p: Project) => void; onPreview: (p: Project) => void; onDelete: () => void }) {
  const [tab, setTab] = useState<'overview' | 'updates'>('overview')
  const [draft, setDraft] = useState(project)
  const [newUpdate, setNewUpdate] = useState({ date: '2026-10-13', description: '', notes: '' })
  const saveUpdate = () => { if (!newUpdate.description) return; setDraft({ ...draft, updates: [{ ...newUpdate, id: crypto.randomUUID() }, ...draft.updates] }); setNewUpdate({ ...newUpdate, description: '', notes: '' }) }
  return <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm"><aside className="flex h-full w-full max-w-[620px] flex-col border-l border-white/10 bg-[#101216] shadow-2xl"><header className="flex items-center justify-between border-b border-white/[.07] px-6 py-5"><div><div className="flex items-center gap-2 text-xs text-muted-foreground"><span>Projet</span><span>/</span><span>{draft.category}</span></div><h2 className="mt-1 text-xl font-semibold tracking-tight">{draft.clientName}</h2></div><button onClick={onClose} aria-label="Fechar" className="rounded-lg p-2 text-muted-foreground hover:bg-white/[.06] hover:text-foreground"><X className="size-5" /></button></header>
    <div className="flex border-b border-white/[.07] px-6"><button onClick={() => setTab('overview')} className={`border-b-2 px-1 py-4 text-sm ${tab === 'overview' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'}`}>Visão geral</button><button onClick={() => setTab('updates')} className={`ml-6 border-b-2 px-1 py-4 text-sm ${tab === 'updates' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground'}`}>Atualizações <span className="ml-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px]">{draft.updates.length}</span></button></div>
    <div className="flex-1 overflow-y-auto p-6">{tab === 'overview' ? <div className="flex flex-col gap-6">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-muted-foreground">Modo de edição: altere qualquer campo abaixo e clique em <strong>Salvar alterações</strong>.</div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">Nome do cliente / projeto<input value={draft.clientName} onChange={(e) => setDraft({ ...draft, clientName: e.target.value })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Categoria<input value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Status<select value={draft.status} onChange={(e) => setDraft({ ...draft, status: e.target.value as Status })} className="h-10 rounded-lg border border-white/10 bg-[#17191f] px-3"><option>Em Andamento</option><option>Aguardando Aprovação</option><option>Concluído</option><option>Pausado</option></select></label>
        <label className="flex flex-col gap-2 text-sm">URL do site<input type="url" value={draft.siteUrl} onChange={(e) => setDraft({ ...draft, siteUrl: e.target.value })} placeholder="https://seusite.com" className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Data de início<input type="date" value={draft.startDate} onChange={(e) => setDraft({ ...draft, startDate: e.target.value })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Previsão de entrega<input type="date" value={draft.estimatedEndDate} onChange={(e) => setDraft({ ...draft, estimatedEndDate: e.target.value })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Valor do projeto<input type="number" min="0" step="0.01" value={draft.totalValue} onChange={(e) => setDraft({ ...draft, totalValue: Number(e.target.value) })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3" /></label>
        <label className="flex flex-col gap-2 text-sm">Moeda<select value={draft.currency} onChange={(e) => setDraft({ ...draft, currency: e.target.value as Project['currency'] })} className="h-10 rounded-lg border border-white/10 bg-[#17191f] px-3"><option value="BRL">Real (BRL)</option><option value="USD">Dólar (USD)</option></select></label>
      </div>
      <div><label className="mb-2 block text-sm font-medium">Progresso do projeto: {draft.progressPercentage}%</label><input type="range" min="0" max="100" value={draft.progressPercentage} onChange={(e) => setDraft({ ...draft, progressPercentage: Number(e.target.value) })} className="w-full accent-primary" /></div>
      <div className="grid gap-2 sm:grid-cols-2"><button type="button" onClick={() => onPreview(draft)} className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm text-primary-foreground hover:bg-primary/90"><Eye className="size-4" />Pré-visualizar site</button><a href={draft.siteUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-sm hover:bg-white/[.04]">Abrir em nova aba <ExternalLink className="size-4" /></a></div></div> : <div className="flex flex-col gap-6"><div className="rounded-xl border border-white/[.07] bg-white/[.02] p-4"><p className="mb-4 text-sm font-medium">Registrar atualização</p><div className="flex flex-col gap-3"><input type="date" value={newUpdate.date} onChange={(e) => setNewUpdate({ ...newUpdate, date: e.target.value })} className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm" /><input value={newUpdate.description} onChange={(e) => setNewUpdate({ ...newUpdate, description: e.target.value })} placeholder="O que foi incluído ou alterado?" className="h-10 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm" /><textarea value={newUpdate.notes} onChange={(e) => setNewUpdate({ ...newUpdate, notes: e.target.value })} placeholder="Observações gerais" rows={3} className="resize-none rounded-lg border border-white/10 bg-white/[.03] p-3 text-sm" /><Button onClick={saveUpdate} size="sm" className="self-end"><Plus data-icon="inline-start" />Adicionar log</Button></div></div><div className="flex flex-col gap-3">{draft.updates.length ? draft.updates.map((update) => <div key={update.id} className="relative flex flex-col gap-2 rounded-xl border border-white/10 p-4"><label className="flex flex-col gap-1 text-xs text-muted-foreground">Data<input type="date" value={update.date} onChange={(e) => setDraft({ ...draft, updates: draft.updates.map((u) => u.id === update.id ? { ...u, date: e.target.value } : u) })} className="h-9 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm text-foreground" /></label><label className="flex flex-col gap-1 text-xs text-muted-foreground">Título / atualização<input value={update.description} onChange={(e) => setDraft({ ...draft, updates: draft.updates.map((u) => u.id === update.id ? { ...u, description: e.target.value } : u) })} className="h-9 rounded-lg border border-white/10 bg-white/[.03] px-3 text-sm text-foreground" /></label><label className="flex flex-col gap-1 text-xs text-muted-foreground">Observações<textarea value={update.notes} onChange={(e) => setDraft({ ...draft, updates: draft.updates.map((u) => u.id === update.id ? { ...u, notes: e.target.value } : u) })} rows={2} className="rounded-lg border border-white/10 bg-white/[.03] p-3 text-sm text-foreground" /></label><Button variant="ghost" size="sm" onClick={() => setDraft({ ...draft, updates: draft.updates.filter((u) => u.id !== update.id) })} className="self-end text-red-400">Excluir atualização</Button></div>) : <p className="py-8 text-center text-sm text-muted-foreground">Nenhuma atualização registrada.</p>}</div></div>}</div>
    <footer className="flex items-center justify-between border-t border-white/[.07] px-6 py-4"><div className="flex items-center gap-2"><Button variant="ghost" onClick={onClose}>Cancelar</Button><Button variant="ghost" onClick={onDelete} className="text-red-400 hover:text-red-300"><Trash2 className="size-4" />Apagar</Button></div><Button onClick={() => { onSave(draft); onClose() }}><Check data-icon="inline-start" />Salvar alterações</Button></footer>
  </aside></div>
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [projects, setProjects] = useState<Project[]>(seedProjects)
  const [storageReady, setStorageReady] = useState(false)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('atlas-crm-projects')
      if (saved) setProjects(JSON.parse(saved) as Project[])
    } catch { /* mantém os projetos iniciais se o armazenamento estiver indisponível */ }
    setStorageReady(true)
  }, [])
  useEffect(() => {
    if (storageReady) window.localStorage.setItem('atlas-crm-projects', JSON.stringify(projects))
  }, [projects, storageReady])
  const [selected, setSelected] = useState<Project | null>(null)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'Todos' | Status>('Todos')
  const [preview, setPreview] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<'visao' | 'projetos' | 'clientes' | 'configuracoes'>('visao')
  const [theme, setTheme] = useState<'escuro' | 'claro' | 'azul' | 'bordo'>('escuro')
  const deleteProject = (project: Project) => { if (!window.confirm(`Apagar o projeto "${project.clientName}"? Essa ação não pode ser desfeita.`)) return; setProjects((current) => current.filter((p) => p.id !== project.id)); setSelected(null) }
  const deleteClient = (client: string) => { const count = projects.filter((p) => p.clientName === client).length; if (!window.confirm(`Apagar o cliente "${client}" e ${count} projeto(s) vinculado(s)? Essa ação não pode ser desfeita.`)) return; setProjects((current) => current.filter((p) => p.clientName !== client)) }
  const filtered = useMemo(() => projects.filter((p) => (filter === 'Todos' || p.status === filter) && p.clientName.toLowerCase().includes(query.toLowerCase())), [projects, filter, query])
  const stats = [{ label: 'Projetos ativos', value: projects.filter((p) => p.status === 'Em Andamento').length, icon: BarChart3, color: 'text-blue-300' }, { label: 'Aguardando você', value: projects.filter((p) => p.status === 'Aguardando Aprovação').length, icon: TrendingUp, color: 'text-violet-300' }, { label: 'Concluídos', value: projects.filter((p) => p.status === 'Concluído').length, icon: Check, color: 'text-emerald-300' }]
  const themeClass = theme === 'claro' ? 'light-theme' : theme === 'azul' ? 'blue-theme' : theme === 'bordo' ? 'wine-theme' : ''
  return <div className={`min-h-screen bg-background text-foreground ${themeClass}`}><aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-white/[.07] bg-[#0c0d10] px-4 py-5 lg:flex"><div className="flex items-center gap-3 px-2"><div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="size-4" /></div><span className="font-semibold tracking-tight">Atlas</span><span className="ml-auto rounded bg-white/[.06] px-1.5 py-0.5 text-[9px] text-muted-foreground">PRO</span></div><nav className="mt-10 flex flex-col gap-1"><p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Workspace</p>{[['Visão geral', LayoutDashboard], ['Projetos', FileCode2], ['Clientes', UserRound]].map(([label, Icon], index) => <button key={label as string} onClick={() => setActiveTab(index === 0 ? 'visao' : index === 1 ? 'projetos' : 'clientes')} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${activeTab === (index === 0 ? 'visao' : index === 1 ? 'projetos' : 'clientes') ? 'bg-white/[.07] text-foreground' : 'text-muted-foreground hover:bg-white/[.04] hover:text-foreground'}`}>{<Icon className="size-4" />}{label as string}{index === 1 && <span className="ml-auto text-xs text-muted-foreground">{projects.length}</span>}</button>)}</nav><div className="mt-auto flex flex-col gap-1"><button onClick={() => setActiveTab('configuracoes')} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${activeTab === 'configuracoes' ? 'bg-white/[.07] text-foreground' : 'text-muted-foreground hover:bg-white/[.04] hover:text-foreground'}`}><Settings2 className="size-4" />Configurações</button><button onClick={onLogout} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/[.04] hover:text-foreground"><LogOut className="size-4" />Sair</button><div className="mt-3 flex items-center gap-3 border-t border-white/[.07] px-2 pt-4"><div className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-blue-500 text-xs font-semibold">DC</div><div><p className="text-sm font-medium">Dev. Ch4ze</p><p className="text-xs text-muted-foreground">CEO · Acesso total</p></div><MoreHorizontal className="ml-auto size-4 text-muted-foreground" /></div></div></aside>
    <div className="lg:pl-64"><header className="flex h-16 items-center justify-between border-b border-white/[.07] px-5 sm:px-8"><div className="flex items-center gap-3"><button className="rounded-lg p-2 text-muted-foreground lg:hidden"><Menu className="size-5" /></button><div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><span>Workspace</span><span>/</span><span className="text-foreground">Projetos</span></div><p className="font-medium sm:hidden">Visão geral</p></div><div className="flex items-center gap-2"><button className="rounded-lg p-2 text-muted-foreground hover:bg-white/[.05]"><CircleHelp className="size-4" /></button><button onClick={() => setTheme(theme === 'escuro' ? 'claro' : 'escuro')} aria-label="Alternar tema" className="rounded-lg p-2 text-muted-foreground hover:bg-white/[.05]"><Moon className="size-4" /></button><div className="ml-2 grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-blue-500 text-[10px] font-semibold">DC</div></div></header>
      <main className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">{activeTab === 'clientes' && <section className="rounded-2xl border border-white/[.07] bg-card/60 p-6"><h1 className="text-3xl font-semibold">Clientes</h1><p className="mt-2 text-sm text-muted-foreground">Todos os clientes dos seus projetos em um só lugar.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{Array.from(new Set(projects.map((project) => project.clientName))).map((client) => <div key={client} className="rounded-xl border border-white/[.07] p-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">{client.slice(0, 2).toUpperCase()}</div><div><p className="font-medium">{client}</p><p className="text-xs text-muted-foreground">{projects.filter((project) => project.clientName === client).length} projeto(s)</p></div><button type="button" onClick={() => deleteClient(client)} aria-label={`Apagar cliente ${client}`} className="ml-auto grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-red-500/15 hover:text-red-400"><Trash2 className="size-4" /></button></div></div>)}</div></section>}{activeTab === 'configuracoes' && <section className="max-w-3xl rounded-2xl border border-white/[.07] bg-card/60 p-6"><h1 className="text-3xl font-semibold">Configurações</h1><p className="mt-2 text-sm text-muted-foreground">Personalize a aparência do Atlas. Você possui acesso total como CEO.</p><div className="mt-8"><p className="text-sm font-medium">Tema da interface</p><div className="mt-3 grid gap-3 sm:grid-cols-4">{(['escuro', 'claro', 'azul', 'bordo'] as const).map((option) => <button key={option} onClick={() => setTheme(option)} className={`rounded-xl border p-4 text-left text-sm capitalize transition ${theme === option ? 'border-primary bg-primary/10 text-foreground' : 'border-white/[.08] text-muted-foreground hover:bg-white/[.04]'}`}><span className={`mb-3 block size-8 rounded-lg ${option === 'escuro' ? 'bg-[#101216]' : option === 'claro' ? 'bg-white' : option === 'azul' ? 'bg-blue-950' : 'bg-rose-950'}`} />{option}</button>)}</div></div></section>}<div className={activeTab === 'visao' || activeTab === 'projetos' ? '' : 'hidden'}><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><Button onClick={() => setSelected({ id: crypto.randomUUID(), clientName: 'Novo projeto', siteUrl: 'https://example.com', status: 'Em Andamento', category: 'Landing Page', currency: 'BRL', totalValue: 0, startDate: '2026-10-13', estimatedEndDate: '2026-11-13', progressPercentage: 0, updates: [] })}><Plus data-icon="inline-start" />Novo projeto</Button></div>
        {activeTab === 'visao' && <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, icon: Icon, color }) => <div key={label} className="rounded-xl border border-white/[.07] bg-card/60 p-4"><div className="flex items-center justify-between"><p className="text-xs text-muted-foreground">{label}</p><Icon className={`size-4 ${color}`} /></div><p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p></div>)}</div>}
        <div className="mt-10 flex flex-col gap-4 border-b border-white/[.07] pb-4 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-1 overflow-x-auto">{['Todos', 'Em Andamento', 'Aguardando Aprovação', 'Concluído', 'Pausado'].map((item) => <button key={item} onClick={() => setFilter(item as typeof filter)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${filter === item ? 'bg-white/[.08] text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{item}</button>)}</div><div className="flex gap-2"><label className="flex h-9 min-w-48 items-center gap-2 rounded-lg border border-white/[.08] bg-white/[.02] px-3"><Search className="size-4 text-muted-foreground" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar projeto..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></label><button className="grid size-9 place-items-center rounded-lg border border-white/[.08] text-muted-foreground hover:bg-white/[.04]" aria-label="Filtros"><Filter className="size-4" /></button></div></div>
        <div className="mt-6 flex items-center justify-between"><h2 className="font-medium">Seus projetos <span className="ml-1 text-sm text-muted-foreground">{filtered.length}</span></h2><button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">Agrupar por <ChevronDown className="size-3.5" /></button></div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} onDelete={() => deleteProject(project)} />)}</div>
      </div></main></div>{selected && <ProjectSheet project={selected} onDelete={() => deleteProject(selected)} onClose={() => setSelected(null)} onPreview={(project) => { setSelected(null); setPreview(project) }} onSave={(saved) => setProjects((current) => current.some((p) => p.id === saved.id) ? current.map((p) => p.id === saved.id ? saved : p) : [saved, ...current])} />}{preview && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"><div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101216]"><header className="flex items-center justify-between border-b border-white/10 px-5 py-3"><div className="flex items-center gap-3"><button onClick={() => setPreview(null)} className="rounded-lg p-2 hover:bg-white/[.06]"><X className="size-4" /></button><span className="text-sm font-medium">Preview · {preview.clientName}</span></div><div className="flex gap-1 rounded-lg border border-white/10 p-1"><button className="rounded-md bg-white/10 p-1.5"><Monitor className="size-4" /></button><button className="p-1.5 text-muted-foreground"><Smartphone className="size-4" /></button></div></header><iframe title={`Preview de ${preview.clientName}`} src={preview.siteUrl} className="mx-auto h-full w-full bg-white" /></div></div>}</div>
}

export default function Page() { const [authenticated, setAuthenticated] = useState(false); return authenticated ? <Dashboard onLogout={() => setAuthenticated(false)} /> : <Login onLogin={() => setAuthenticated(true)} /> }
