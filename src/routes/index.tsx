import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MapPin, Search, Flame } from "lucide-react";
import { categories, combos, products, weeklyPromos, brl, type Category, type Product } from "@/data/mock";
import { ProductCard } from "@/components/app/product-card";
import { ProductModal } from "@/components/app/product-modal";
import { ComboCard } from "@/components/app/combo-card";
import { Logo } from "@/components/app/logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizinho Distribuidora — Bebidas geladas no seu bairro" },
      { name: "description", content: "Peça cerveja, energético, destilados e conveniência com entrega rápida." },
      { property: "og:title", content: "Vizinho Distribuidora — Bebidas geladas no seu bairro" },
      { property: "og:description", content: "Peça cerveja, energético, destilados e conveniência com entrega rápida." },
      { property: "og:image", content: "/logo-vizinho.jpeg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [active, setActive] = useState<Category>("Cervejas");
  const refs = useRef<Partial<Record<Category, HTMLElement | null>>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.getAttribute("data-cat") as Category)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-2xl pb-32">
      <header className="relative overflow-hidden px-5 pb-5 pl-14 pt-6">
        <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-wine/50 blur-3xl" />
        <div className="relative flex items-center justify-between gap-3">
          <Logo />
          <span className="flex min-w-0 items-center gap-1 rounded-full border border-wine/60 bg-wine/20 px-3 py-1.5 text-xs font-semibold text-foreground">
            <MapPin className="size-3.5 shrink-0 text-primary" /><span className="truncate">Rua das Flores, 120</span>
          </span>
        </div>
        <label className="relative mt-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input placeholder="Buscar cerveja, gelo, energético..." className="w-full bg-transparent text-sm text-foreground outline-hidden placeholder:text-muted-foreground" />
        </label>
      </header>

      <section className="mt-2">
        <div className="flex items-center gap-2 px-5">
          <Flame className="size-4 text-primary" />
          <h2 className="text-lg font-extrabold text-foreground">Promoção da Semana</h2>
        </div>
        <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1">
          {weeklyPromos.map((p, i) => (
            <button key={p.id} onClick={() => setSelected(p)} className="relative h-44 w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card text-left sm:w-80">
              <img src={p.image} alt={p.name} {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })} className="absolute right-0 top-0 h-full w-1/2 object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-card via-card/90 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-4">
                <span className="w-fit rounded-full bg-wine px-2.5 py-1 text-[10px] font-bold uppercase text-wine-foreground">
                  -{Math.round((1 - p.price / (p.oldPrice ?? p.price)) * 100)}% OFF
                </span>
                <div className="max-w-[60%]">
                  <p className="text-sm font-bold leading-tight text-foreground">{p.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-through">{p.oldPrice && brl(p.oldPrice)}</p>
                  <p className="text-xl font-extrabold text-primary">{brl(p.price)}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="px-5 text-lg font-extrabold text-foreground">Combos Prontos</h2>
        <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1">
          {combos.map((c) => <ComboCard key={c.id} combo={c} className="w-64 shrink-0 snap-start" />)}
        </div>
      </section>

      <nav className="sticky top-0 z-20 mt-6 border-y border-border bg-background/80 backdrop-blur-xl">
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3 pl-14">
          {categories.map((c) => (
            <button key={c} aria-pressed={active === c}
              onClick={() => refs.current[c]?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-muted-foreground transition-colors aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground">
              {c}
            </button>
          ))}
        </div>
      </nav>

      <div className="space-y-8 px-5 pt-5">
        {categories.map((c) => (
          <section key={c} data-cat={c} ref={(el) => { refs.current[c] = el; }} className="scroll-mt-20">
            <h2 className="mb-3 text-base font-extrabold text-foreground">{c}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {products.filter((p) => p.category === c).map((p) => <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />)}
            </div>
          </section>
        ))}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} onSelect={setSelected} />
    </main>
  );
}
