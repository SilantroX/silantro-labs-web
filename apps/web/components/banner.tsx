export function Banner() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-light">
            Download this template for free at
          </span>
          <a
            href="https://www.alimadjaji.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            alimadjaji.com/templates
          </a>
        </div>
        <div className="hidden items-center gap-1 text-xs font-light sm:flex">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>&middot;</span>
          <span>Developed by</span>
          <a
            href="https://www.alimadjaji.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            Ali Madjaji
          </a>
          <span className="text-red-400">&hearts;</span>
        </div>
      </div>
    </footer>
  )
}
