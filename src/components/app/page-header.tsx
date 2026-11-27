import type { ReactNode } from "react";

export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden border-b border-wine/40 px-5 pb-6 pl-14 pt-8">
      <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-wine/40 blur-3xl" />
      <div className="relative">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
