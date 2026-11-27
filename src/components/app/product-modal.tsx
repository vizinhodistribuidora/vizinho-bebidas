import { useState } from "react";
import { Minus, Plus, Snowflake, ThermometerSun, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { brl, products, type Product } from "@/data/mock";
import { useCart } from "./cart-context";
import { Tag } from "./product-card";

export function ProductModal({ product, onClose, onSelect }: { product: Product | null; onClose: () => void; onSelect: (p: Product) => void }) {
  const [qty, setQty] = useState(1);
  const [temp, setTemp] = useState<"Gelada" | "Natural">("Gelada");
  const { add } = useCart();
  const pairs = product ? products.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, 4) : [];

  return (
    <Dialog open={!!product} onOpenChange={(o) => { if (!o) { onClose(); setQty(1); } }}>
      <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-md gap-0 overflow-y-auto rounded-3xl border-border bg-card p-0 [&>button]:hidden">
        {product && (
          <>
            <div className="relative grid grid-cols-[minmax(0,1fr)_auto] gap-3 bg-background p-4">
              <div className="relative h-60 overflow-hidden rounded-2xl">
                <img src={product.image} alt={product.name} className="size-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card px-2 py-3">
                <button aria-label="Aumentar" onClick={() => setQty((q) => q + 1)} className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Plus className="size-4" /></button>
                <span className="w-10 text-center text-xl font-extrabold text-foreground">{qty}</span>
                <button aria-label="Diminuir" onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground"><Minus className="size-4" /></button>
              </div>
              <DialogClose aria-label="Fechar" className="absolute right-6 top-6 rounded-full bg-glass p-2 text-foreground backdrop-blur-md"><X className="size-4" /></DialogClose>
            </div>
            <div className="min-w-0 space-y-4 p-5">
              <div>
                <div className="mb-2 flex flex-wrap gap-1">{product.tags.map((t) => <Tag key={t} tag={t} />)}</div>
                <DialogTitle className="text-xl font-extrabold text-foreground">{product.name}</DialogTitle>
                <DialogDescription className="mt-1 text-sm text-muted-foreground">{product.description}</DialogDescription>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(["Gelada", "Natural"] as const).map((t) => {
                  const Icon = t === "Gelada" ? Snowflake : ThermometerSun;
                  return (
                    <button key={t} onClick={() => setTemp(t)} aria-pressed={temp === t}
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-muted py-3 text-sm font-semibold text-muted-foreground aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary">
                      <Icon className="size-4" /> {t}
                    </button>
                  );
                })}
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Combina com isso</p>
                <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5">
                  {pairs.map((p) => (
                    <button key={p.id} onClick={() => onSelect(p)} className="w-28 shrink-0 rounded-xl border border-border bg-background p-2 text-left">
                      <img src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
                      <p className="mt-1.5 truncate text-xs font-semibold text-foreground">{p.name}</p>
                      <p className="text-xs font-bold text-primary">{brl(p.price)}</p>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => { add(product.price, qty); onClose(); setQty(1); }}
                className="flex w-full items-center justify-between rounded-2xl bg-gradient-gold px-5 py-4 font-bold text-primary-foreground shadow-gold">
                <span>Adicionar</span><span>{brl(product.price * qty)}</span>
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
