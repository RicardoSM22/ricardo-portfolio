import { experiences } from "./data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A timeline of building immersive products.
          </h2>
        </div>
        <ol className="relative mt-12 border-l border-border pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex size-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{exp.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
