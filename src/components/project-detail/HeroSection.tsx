import type { Project } from "../../data/projects";
import { images } from "../../data/images";
import { RouteLink } from "../layout/TransitionProvider";
export default function HeroSection({ project: p }: { project: Project }) {
  return (
    <section className="shell pt-44">
      <p data-hero className="eyebrow mb-6 text-neutral-500">
        <RouteLink to="/portfolio-three">Projects</RouteLink> / {p.type}
      </p>
      <h1 data-hero className="title-xl mb-16">
        {p.title}
      </h1>
      <div data-hero className="overflow-hidden rounded-2xl">
        <img
          src={
            p.slug === "contemporary-retreat"
              ? images.projectHero
              : p.largeImage
          }
          alt={p.title}
          fetchPriority="high"
          className="aspect-[1.6] w-full object-cover md:aspect-[2]"
        />
      </div>
    </section>
  );
}
