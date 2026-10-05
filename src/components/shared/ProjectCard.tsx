import type { Project } from "../../data/projects";
import { RouteLink } from "../layout/TransitionProvider";
import Media from "./Media";
import { ArrowUpRight } from "lucide-react";
export default function ProjectCard({
  project: p,
  index = 0,
  large = false,
}: {
  project: Project;
  index?: number;
  large?: boolean;
}) {
  return (
    <article data-reveal className="group">
      <RouteLink to={"/project/" + p.slug} className="block">
        <div className="relative">
          <Media
            src={large ? p.largeImage : p.image}
            alt={p.title}
            className={large ? "aspect-[1.35]" : "aspect-[1.15]"}
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
          <span className="absolute bottom-5 right-5 flex size-14 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight />
          </span>
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs text-ink">
            {p.type}
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider opacity-50">
              {p.date}
            </p>
            <h3 className="title-md">{p.title}</h3>
          </div>
          <span className="pt-7 text-sm opacity-40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </RouteLink>
    </article>
  );
}
