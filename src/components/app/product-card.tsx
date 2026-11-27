import { Plus, Snowflake, Recycle } from "lucide-react";
import { brl, type Product } from "@/data/mock";

export function Tag({ tag }: { tag: string }) {
  const Icon = tag === "Gelada" ? Snowflake : Recycle;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
      <Icon className="size-3" /> {tag}
    </span>
  );
}

export function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="group grid w-full grid-cols-[minmax(0,1fr)_auto] gap-3 rounded-2xl border border-border bg-card p-3 text-left transition-colors hover:border-primary/40">
      <div className="flex min-w-0 flex-col">
        <h3 className="truncate text-sm font-bold text-foreground">{product.name}</h3>
        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">{product.tags.map((t) => <Tag key={t} tag={t} />)}</div>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-base font-extrabold text-primary">{brl(product.price)}</span>
          {product.oldPrice && <span className="text-xs text-muted-foreground line-through">{brl(product.oldPrice)}</span>}
        </div>
      </div>
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-background">
        <img src={product.image} alt={product.name} loading="lazy" className="size-full object-cover transition-transform group-hover:scale-105" />
        {product.oldPrice && (
          <span className="absolute left-1 top-1 rounded-md bg-wine px-1.5 py-0.5 text-[10px] font-bold text-wine-foreground">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
        <span className="absolute bottom-1 right-1 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold"><Plus className="size-4" /></span>
      </div>
    </button>
  );
}
