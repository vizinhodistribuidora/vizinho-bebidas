import { ShoppingBag, ChevronRight } from "lucide-react";
import { useCart } from "./cart-context";
import { brl } from "@/data/mock";

export function CartBar() {
  const { count, total } = useCart();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-4">
      <button className="mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-border bg-glass px-4 py-3 shadow-2xl backdrop-blur-xl">
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <ShoppingBag className="size-5" />
          <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-wine text-[10px] font-bold text-wine-foreground">{count}</span>
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="block text-xs text-muted-foreground">Ver sacola · entrega ~25 min</span>
          <span className="block text-base font-bold text-foreground">{brl(total)}</span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-primary" />
      </button>
    </div>
  );
}
