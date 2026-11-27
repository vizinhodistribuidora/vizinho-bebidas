import { Link } from "@tanstack/react-router";
import { Home, Layers, Sparkles, User, Lock, Wine, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Logo } from "./logo";

const links = [
  { to: "/", label: "Início", icon: Home },
  { to: "/combos", label: "Combos Perfeitos", icon: Layers },
  { to: "/novidades", label: "Novidades", icon: Sparkles },
  { to: "/perfil", label: "Meu Perfil", icon: User },
] as const;

export function SideNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="fixed left-0 top-[20vh] z-40 flex h-14 w-10 items-center justify-center rounded-r-2xl border border-l-0 border-primary bg-glass text-primary shadow-gold backdrop-blur-md transition-all hover:w-12"
      >
        <Wine className="size-5" />
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="flex w-[82vw] max-w-xs flex-col border-border bg-sidebar/95 p-0 backdrop-blur-xl [&>button]:hidden">
          <div className="flex items-center justify-between border-b border-border bg-gradient-wine px-5 py-5">
            <SheetTitle asChild><div><Logo /></div></SheetTitle>
            <SheetClose aria-label="Fechar menu" className="rounded-full p-1.5 text-foreground/80 hover:bg-foreground/10"><X className="size-5" /></SheetClose>
          </div>
          <SheetDescription className="sr-only">Navegação do app</SheetDescription>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
              >
                <Icon className="size-5" /> {label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border p-3">
            <Link to="/admin" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs text-muted-foreground/70 hover:text-muted-foreground">
              <Lock className="size-3.5" /> Área do Lojista
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
