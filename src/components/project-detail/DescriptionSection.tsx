import { projectOverview } from "../../data/projectContent";
import type { Project } from "../../data/projects";
export default function DescriptionSection({ project }: { project: Project }) {
  return (
    <section className="shell pb-24">
      <h2 data-reveal className="title-lg mb-14 max-w-5xl">
        {projectOverview.title}
      </h2>
      <div className="grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div data-reveal className="border-t border-black/20 pt-7">
          <h3 className="mb-6 text-xl">Project scope</h3>
          <ul className="space-y-3 text-neutral-500">
            {projectOverview.files.map((x) => (
              <li key={x}>— {x}</li>
            ))}
          </ul>
        </div>
        <div data-reveal className="border-t border-black/20 pt-7">
          <h3 className="mb-6 text-xl">Project overview</h3>
          {project.slug === "contemporary-retreat" ? (
            projectOverview.paragraphs.map((x) => (
              <p key={x} className="copy mb-6">
                {x}
              </p>
            ))
          ) : (
            <>
              <p className="copy mb-6">
                {project.description} Developed in close collaboration with{" "}
                {project.client}, the project takes its cues from the
                surrounding landscape and the rhythm of everyday life.
              </p>
              <p className="copy mb-6">
                Careful attention to proportion, natural light and material
                brings clarity to every space. Shared areas encourage
                connection, while quieter rooms provide a sense of retreat.
              </p>
              <p className="copy">
                From the earliest concept studies to the final detailing, the
                design balances enduring character with practical, adaptable
                spaces.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
