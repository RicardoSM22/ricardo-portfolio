import { Sparkles } from "lucide-react";
import { futureTech } from "./data";

export function FutureTech() {
  return (
    <section id="future" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Future technologies
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What I'm exploring next.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Areas I'm actively learning to bring the next generation of
            industrial and immersive solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {futureTech.map((t) => (
            <div
              key={t}
              className="group flex items-center gap-3 rounded-xl border border-dashed border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <Sparkles className="size-5 text-primary transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
