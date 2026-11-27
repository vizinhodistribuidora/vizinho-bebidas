import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, CreditCard, Bell, Snowflake, ChevronRight, Receipt } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { PageHeader } from "@/components/app/page-header";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Meu Perfil — Vizinho Distribuidora" },
      { name: "description", content: "Seus dados, endereços e preferências de entrega." },
      { property: "og:title", content: "Vizinho Distribuidora — Meu Perfil" },
      { property: "og:description", content: "Seus dados, endereços e preferências de entrega." },
      { property: "og:image", content: "/logo-vizinho.jpeg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Perfil,
});

const info = [
  { icon: Phone, label: "Telefone", value: "(11) 98765-4321" },
  { icon: Mail, label: "E-mail", value: "joao.silva@email.com" },
  { icon: MapPin, label: "Endereço principal", value: "Rua das Flores, 120 — Apto 32" },
  { icon: CreditCard, label: "Pagamento", value: "Pix · Cartão final 4821" },
];
const prefs = [
  { icon: Snowflake, label: "Sempre gelada por padrão", on: true },
  { icon: Bell, label: "Avisar sobre promoções", on: true },
  { icon: Receipt, label: "Enviar nota fiscal por e-mail", on: false },
];

function Perfil() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl pb-32">
      <PageHeader title="Meu Perfil">
        <div className="mt-5 flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-2xl font-extrabold text-primary-foreground">JS</div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold text-foreground">João Silva</p>
            <p className="text-sm text-muted-foreground">Cliente desde 2024 · 37 pedidos</p>
          </div>
        </div>
      </PageHeader>
      <div className="space-y-6 p-5">
        <section>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Meus dados</h2>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {info.map(({ icon: Icon, label, value }) => (
              <button key={label} className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 text-left hover:bg-accent">
                <Icon className="size-5 text-primary" />
                <span className="min-w-0"><span className="block text-xs text-muted-foreground">{label}</span><span className="block truncate text-sm font-semibold text-foreground">{value}</span></span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Preferências</h2>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {prefs.map(({ icon: Icon, label, on }) => (
              <label key={label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5">
                <Icon className="size-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <Switch defaultChecked={on} />
              </label>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
