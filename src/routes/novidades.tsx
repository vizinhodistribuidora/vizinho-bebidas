import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { newArrivals, type Product } from "@/data/mock";
import { ProductCard } from "@/components/app/product-card";
import { ProductModal } from "@/components/app/product-modal";
import { PageHeader } from "@/components/app/page-header";

export const Route = createFileRoute("/novidades")({
  head: () => ({
    meta: [
      { title: "Novidades — Vizinho Distribuidora" },
      { name: "description", content: "Os lançamentos que acabaram de chegar na geladeira." },
      { property: "og:title", content: "Novidades — Vizinho Distribuidora" },
      { property: "og:description", content: "Os lançamentos que acabaram de chegar na geladeira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Novidades,
});

function Novidades() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [first, ...rest] = newArrivals;
  return (
    <main className="mx-auto min-h-screen max-w-2xl pb-32">
      <PageHeader title="Novidades" subtitle="Acabou de chegar na geladeira." />
      <div className="space-y-4 p-5">
        {first && (
          <button onClick={() => setSelected(first)} className="relative block h-64 w-full overflow-hidden rounded-3xl border border-primary/40 text-left">
            <img src={first.image} alt={first.name} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground">Lançamento</span>
              <p className="mt-2 text-xl font-extrabold text-foreground">{first.name}</p>
              <p className="text-sm text-muted-foreground">{first.description}</p>
            </div>
          </button>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {rest.map((p) => <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />)}
        </div>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} onSelect={setSelected} />
    </main>
  );
}
