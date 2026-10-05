import { projects, type Project } from "../../data/projects";
import ProjectCard from "../shared/ProjectCard";
export default function RelatedProjectsSection({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="bg-paper section-space">
      <div className="shell">
        <h2 data-reveal className="title-lg mb-12">
          Our latest projects.
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(-5, -3)
            .map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
