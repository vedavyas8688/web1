import type { Blog } from "../../data/blogs";
import { RouteLink } from "../layout/TransitionProvider";
import Media from "./Media";
export default function BlogCard({ blog: b }: { blog: Blog }) {
  return (
    <article data-reveal className="group">
      <RouteLink to={"/blog-post/" + b.slug} className="block">
        <Media
          src={b.image}
          alt={b.title}
          className="aspect-[1.25] rounded-xl"
        />
        <p className="mb-4 mt-6 text-sm opacity-50">{b.date}</p>
        <h2 className="text-[clamp(1.4rem,2vw,2rem)] leading-tight tracking-[-.035em] transition-opacity group-hover:opacity-60">
          {b.title}
        </h2>
        <div className="mt-6 flex items-center gap-3">
          <img
            src={b.avatar}
            alt=""
            className="size-9 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-sm opacity-65">{b.author}</span>
        </div>
      </RouteLink>
    </article>
  );
}
