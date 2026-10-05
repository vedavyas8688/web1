import type { Blog } from "../../data/blogs";
import { RouteLink } from "../layout/TransitionProvider";
export default function HeroSection({ blog }: { blog: Blog }) {
  return (
    <section className="bg-ink pb-0 pt-44 text-white">
      <div className="shell">
        <p data-hero className="eyebrow mb-6 text-white/50">
          <RouteLink to="/blog-one">Journal</RouteLink> / {blog.category}
        </p>
        <h1 data-hero className="title-xl max-w-5xl pb-16">
          {blog.title}
        </h1>
        <div className="overflow-hidden rounded-t-2xl">
          <img
            data-hero
            src={blog.image}
            alt={blog.title}
            fetchPriority="high"
            className="max-h-[670px] w-full object-cover aspect-[1.7]"
          />
        </div>
      </div>
    </section>
  );
}
