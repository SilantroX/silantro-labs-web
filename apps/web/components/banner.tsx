export function Banner() {
  return (
    <footer className="w-full bg-background border-t border-border/60 py-4 mt-auto">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70">
        <div>&copy; {new Date().getFullYear()} SILANTRO LABS</div>
        <div>PRODUCTOS DIGITALES &middot; SOFTWARE &middot; IDEAS</div>
      </div>
    </footer>
  )
}
