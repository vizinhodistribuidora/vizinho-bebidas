import { brl, type Combo } from "@/data/mock";

export function ComboCard({ combo, className = "" }: { combo: Combo; className?: string }) {
  return (
    <article className={`relative overflow-hidden rounded-2xl border border-border bg-card ${className}`}>
      <img src={combo.image} alt={combo.name} loading="lazy" className="h-40 w-full object-cover" />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-t from-card via-card/20 to-transparent" />
      {combo.tag && <span className="absolute left-3 top-3 rounded-full bg-wine px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-wine-foreground">{combo.tag}</span>}
      <div className="relative -mt-6 p-4 pt-0">
        <h3 className="text-base font-extrabold text-foreground">{combo.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{combo.items}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-primary">{brl(combo.price)}</span>
            <span className="text-xs text-muted-foreground line-through">{brl(combo.oldPrice)}</span>
          </div>
          <button className="rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">Quero</button>
        </div>
      </div>
    </article>
  );
}
