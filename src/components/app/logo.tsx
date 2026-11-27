export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-gold text-lg font-extrabold text-primary-foreground">V</div>
      <div className="leading-tight">
        <p className="text-base font-extrabold tracking-tight text-foreground">Vizinho</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Distribuidora</p>
      </div>
    </div>
  );
}
