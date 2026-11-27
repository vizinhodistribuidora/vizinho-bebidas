import { createFileRoute } from "@tanstack/react-router";
import { combos } from "@/data/mock";
import { ComboCard } from "@/components/app/combo-card";
import { PageHeader } from "@/components/app/page-header";

export const Route = createFileRoute("/combos")({
  head: () => ({
    meta: [
      { title: "Combos Perfeitos — Vizinho Distribuidora" },
      { name: "description", content: "Kits prontos de bebidas e conveniência com preço especial." },
      { property: "og:title", content: "Vizinho Distribuidora — Combos Perfeitos" },
      { property: "og:description", content: "Kits prontos de bebidas e conveniência com preço especial." },
      { property: "og:image", content: "/logo-vizinho.jpeg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Combos,
});

function Combos() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl pb-32">
      <PageHeader title="Combos Perfeitos" subtitle="Montamos o kit, você só curte." />
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {combos.map((c) => <ComboCard key={c.id} combo={c} />)}
      </div>
    </main>
  );
}
