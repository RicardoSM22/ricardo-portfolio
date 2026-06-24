import { ArrowRight, ExternalLink, Github, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "./data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          width={1024}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <Badge key={t} variant="secondary" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
            My responsibilities
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            {project.responsibilities.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          <Button asChild size="sm">
<Link to={`/projects/${project.slug}`}>
          View Case Study <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </Button>
          {project.demoUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-1.5 size-3.5" /> Demo
              </a>
            </Button>
          )}
          {project.galleryUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.galleryUrl} target="_blank" rel="noreferrer">
                <Images className="mr-1.5 size-3.5" /> Gallery
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-1.5 size-3.5" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
