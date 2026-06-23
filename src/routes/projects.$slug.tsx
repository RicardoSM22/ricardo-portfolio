import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { getProjectBySlug, getRelatedProjects } from "@/components/portfolio/data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    const related = getRelatedProjects(params.slug, 3);
    return { project, related };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.title} — Case Study`
      : "Project Case Study";
    const description =
      project?.caseStudy?.overview ?? project?.description ?? "Unity / XR project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
        { property: "og:type", content: "article" },
        ...(project?.image ? [{ property: "og:image", content: project.image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailsPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4 text-muted-foreground">
          The case study you are looking for does not exist.
        </p>
      </div>
      <Footer />
    </div>
  ),
});

function ProjectDetailsPage() {
  const { project, related } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <CaseStudy project={project} related={related} />
      </main>
      <Footer />
    </div>
  );
}
