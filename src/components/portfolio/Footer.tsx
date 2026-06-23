export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Ricardo Sánchez Medina. All rights reserved.</p>
        <p>Unity · XR · Simulation</p>
      </div>
    </footer>
  );
}
