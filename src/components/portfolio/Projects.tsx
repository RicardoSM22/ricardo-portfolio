import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Featured projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work in XR, simulation and enterprise.
          </h2>
          <p className="mt-4 text-muted-foreground">
           Development, implementation, shaders, Three.js and more
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
