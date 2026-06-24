import { useParams } from "react-router-dom";

import {CaseStudy} from "@/components/portfolio/CaseStudy";
import { projects, getProjectBySlug } from "@/components/portfolio/data";
export default function ProjectPage() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
      </div>
    );
  }
const related = projects.filter(
  (p) => p.slug !== project.slug
).slice(0, 3);
  return (
  <CaseStudy
    key={slug}
    project={project}
    related={related}
  />
);
}