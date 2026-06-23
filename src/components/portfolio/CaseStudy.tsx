import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import {
  ArrowLeft,
  ExternalLink,
  PlayCircle,
  Clock,
  Tag,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "./data";
import { ProjectCard } from "./ProjectCard";

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Sparkles;
  return <Cmp className={className} />;
}

export function CaseStudy({
  project,
  related,
}: {
  project: Project;
  related: Project[];
}) {
  const cs = project.caseStudy;

  if (!cs) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-muted-foreground">
          A detailed case study for this project is coming soon.
        </p>
        <Button asChild className="mt-8">
          <Link to="/" hash="projects">
            <ArrowLeft className="mr-2 size-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8">
            <Link to="/" hash="projects">
              <ArrowLeft className="mr-1.5 size-4" /> Back to Projects
            </Link>
          </Button>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 text-primary">
                  <Tag className="size-3.5" /> {cs.category}
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {cs.duration}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {cs.videoUrl && (
                  <Button asChild>
                    <a href={cs.videoUrl} target="_blank" rel="noreferrer">
                      <PlayCircle className="mr-1.5 size-4" /> Watch Video
                    </a>
                  </Button>
                )}
                {cs.liveDemoUrl && (
                  <Button asChild variant="outline">
                    <a href={cs.liveDemoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1.5 size-4" /> Live Demo
                    </a>
                  </Button>
                )}
                <Button asChild variant="ghost">
                  <Link to="/" hash="projects">
                    <ArrowLeft className="mr-1.5 size-4" /> Back to Projects
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW + GOAL */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title="Project overview" />
            <p className="mt-6 text-muted-foreground">{cs.overview}</p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Goal
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {cs.goal}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-border/60 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="The Problem" title="What needed solving">
            The context that made this project necessary and the business pain it
            had to address.
          </SectionHeading>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {cs.problem.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="The Solution" title="How it was designed and built">
            The architectural decisions, why they were the most appropriate choice, and the main systems that were implemented.
          </SectionHeading>
          <ol className="mt-10 space-y-4">
            {cs.solution.map((s, i) => (
              <li
                key={s}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-b border-border/60 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="My Role" title="What I owned on this project" />
            <div className="mt-6 flex flex-wrap gap-2">
              {cs.roles.map((r) => (
                <Badge key={r} className="bg-primary/10 text-primary hover:bg-primary/15">
                  {r}
                </Badge>
              ))}
            </div>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {cs.roleResponsibilities.map((r) => (
              <li key={r} className="flex gap-3 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Stack" title="Technologies used" />
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b border-border/60 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Key Features" title="What the product does" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cs.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <DynamicIcon name={f.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Technical Challenges"
            title="Hard problems and how they were solved"
          />
          <div className="mt-10 space-y-4">
            {cs.challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-b border-border/60 bg-primary/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Results & Impact"
            title="Results following implementation"
          >
            {cs.resultsNarrative}
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {r.metric}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA GALLERY */}
      <section className="border-b border-border/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Media Gallery" title="Screenshots, videos & demos" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cs.media.map((m, i) => (
              <figure
                key={`${m.src}-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-video bg-muted">
                  {m.type === "image" && (
                    <img
                      src={m.src}
                      alt={m.caption ?? project.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  )}
                  {m.type === "video" && (
                    <video
                      src={m.src}
                      controls
                      poster={m.thumbnail}
                      className="h-full w-full object-cover"
                    />
                  )}
                  {m.type === "youtube" && (
                    <iframe
                      src={m.src}
                      title={m.caption ?? project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  )}
                  {m.type === "webgl" && (
                    <iframe
                      src={m.src}
                      title={m.caption ?? project.title}
                      className="h-full w-full"
                    />
                  )}
                </div>
                {m.caption && (
                  <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                    {m.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LESSONS + FUTURE */}
      <section className="border-b border-border/60 bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Lessons Learned" title="What I took away" />
            <ul className="mt-8 space-y-3">
              {cs.lessonsLearned.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed"
                >
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Future Improvements" title="Where it could go next" />
            <ul className="mt-8 space-y-3">
              {cs.futureImprovements.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed"
                >
                  <Rocket className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Related Projects" title="Explore more case studies" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link to="/" hash="projects">
                  <ArrowLeft className="mr-1.5 size-4" /> Back to all projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
