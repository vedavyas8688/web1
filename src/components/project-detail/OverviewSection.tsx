import type { Project } from "../../data/projects";
export default function OverviewSection({ project: p }: { project: Project }) {
  return (
    <section className="shell py-14">
      <dl
        data-reveal
        className="grid grid-cols-2 gap-8 border-b border-black/15 pb-12 lg:grid-cols-4"
      >
        {[
          { t: "Services", v: "Concept development & ideation" },
          { t: "Type", v: p.type },
          { t: "Project date", v: p.date },
          { t: "Client", v: p.client },
        ].map((x) => (
          <div key={x.t}>
            <dt className="eyebrow mb-4 text-neutral-500">{x.t}</dt>
            <dd className="text-lg">{x.v}</dd>
          </div>
        ))}
      </dl>
      <div data-reveal className="grid gap-8 pb-6 pt-16 lg:grid-cols-2">
        <h2 className="title-lg">
          Our best work,
          <br />
          curated for you.
        </h2>
        <p className="copy lg:pt-3">
          {p.description} We combine creative design and careful planning to
          craft memorable spaces, bringing the relationship between people,
          architecture and place into focus.
        </p>
      </div>
    </section>
  );
}
