import { blogs, type Blog } from "../../data/blogs";
import BlogCard from "../shared/BlogCard";
export default function RelatedArticlesSection({ blog }: { blog: Blog }) {
  return (
    <section className="bg-paper section-space">
      <div className="shell">
        <h2 data-reveal className="title-lg mb-12 max-w-3xl">
          More perspectives on architecture and living.
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {blogs
            .filter((b) => b.slug !== blog.slug)
            .slice(0, 2)
            .map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
        </div>
      </div>
    </section>
  );
}
