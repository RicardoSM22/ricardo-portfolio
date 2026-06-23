import { Badge } from "@/components/ui/badge";
import { skillCategories } from "./data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools and technologies I work with.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-base font-semibold">{cat.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
