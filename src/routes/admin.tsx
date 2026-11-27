import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Package, ClipboardList, Palette, Settings, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, combos, brl } from "@/data/mock";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Vizinho Distribuidora — Área do Lojista" },
      { name: "description", content: "Painel de pedidos, estoque e vitrine da Vizinho Distribuidora." },
      { property: "og:title", content: "Vizinho Distribuidora — Área do Lojista" },
      { property: "og:description", content: "Painel de pedidos, estoque e vitrine da Vizinho Distribuidora." },
      { property: "og:image", content: "/logo-vizinho.jpeg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admin,
});

const orders = [
  { id: "#1042", client: "João S.", items: 4, total: 54.6, status: "Novo" },
  { id: "#1041", client: "Mariana L.", items: 2, total: 139.9, status: "Em preparo" },
  { id: "#1040", client: "Carlos P.", items: 6, total: 88.4, status: "Saiu p/ entrega" },
  { id: "#1039", client: "Ana R.", items: 1, total: 189.9, status: "Entregue" },
];
const stats = [
  { label: "Pedidos hoje", value: "28" },
  { label: "Faturamento", value: brl(2384.5) },
  { label: "Ticket médio", value: brl(85.16) },
];
const tabs = [
  { v: "pedidos", label: "Pedidos", icon: ClipboardList },
  { v: "estoque", label: "Estoque", icon: Package },
  { v: "curadoria", label: "Curadoria Visual", icon: Palette },
  { v: "config", label: "Configurações", icon: Settings },
];

function Admin() {
  return (
    <main className="min-h-screen bg-sidebar pb-10">
      <header className="flex items-center justify-between gap-3 border-b border-wine/50 bg-gradient-wine px-5 py-4 pl-14">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Área do Lojista</p>
          <h1 className="truncate text-lg font-extrabold text-foreground">Vizinho Distribuidora</h1>
        </div>
        <Link to="/" className="flex shrink-0 items-center gap-1 rounded-lg bg-foreground/10 px-3 py-2 text-xs font-semibold text-foreground"><ArrowLeft className="size-3.5" /> Loja</Link>
      </header>
      <div className="mx-auto max-w-5xl p-5 pl-14 sm:pl-5">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-3">
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
              <p className="mt-1 truncate text-base font-extrabold text-foreground sm:text-xl">{s.value}</p>
            </div>
          ))}
        </div>
        <Tabs defaultValue="pedidos" className="mt-6">
          <TabsList className="no-scrollbar h-auto w-full justify-start gap-1 overflow-x-auto rounded-2xl border border-border bg-card p-1">
            {tabs.map(({ v, label, icon: Icon }) => (
              <TabsTrigger key={v} value={v} className="shrink-0 gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon className="size-4" /> {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="pedidos" className="mt-4 space-y-2">
            {orders.map((o) => (
              <div key={o.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground">{o.id} · {o.client}</p>
                  <p className="text-xs text-muted-foreground">{o.items} itens · {brl(o.total)}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${o.status === "Novo" ? "bg-wine text-wine-foreground" : o.status === "Entregue" ? "bg-muted text-muted-foreground" : "bg-primary/15 text-primary"}`}>{o.status}</span>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="estoque" className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
            {products.map((p, i) => (
              <div key={p.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3 last:border-0">
                <img src={p.image} alt="" loading="lazy" className="size-10 rounded-lg object-cover" />
                <div className="min-w-0"><p className="truncate text-sm font-semibold text-foreground">{p.name}</p><p className="text-xs text-muted-foreground">{p.category}</p></div>
                <span className={`text-sm font-bold ${(i * 7) % 30 < 8 ? "text-wine" : "text-foreground"}`}>{(i * 7) % 30 + 2} un</span>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="curadoria" className="mt-4">
            <p className="mb-3 text-sm text-muted-foreground">Escolha o que aparece em destaque na vitrine.</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {combos.map((c) => (
                <div key={c.id} className="overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-card">
                  <img src={c.image} alt="" loading="lazy" className="aspect-square w-full object-cover opacity-80" />
                  <p className="truncate p-2 text-xs font-semibold text-foreground">{c.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="config" className="mt-4 space-y-2">
            {["Horário de funcionamento", "Área de entrega", "Taxa de entrega", "Formas de pagamento"].map((s) => (
              <div key={s} className="flex items-center justify-between rounded-2xl border border-border bg-card p-4">
                <span className="text-sm font-semibold text-foreground">{s}</span>
                <TrendingUp className="size-4 text-muted-foreground" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
