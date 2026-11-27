import { createContext, useContext, useState, type ReactNode } from "react";

type CartCtx = { count: number; total: number; add: (price: number, qty?: number) => void };
const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ count: 3, total: 34.7 });
  const add = (price: number, qty = 1) =>
    setState((s) => ({ count: s.count + qty, total: s.total + price * qty }));
  return <Ctx.Provider value={{ ...state, add }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart fora do CartProvider");
  return c;
}
