import type { Blog } from "../../data/blogs";
import { articleContent } from "../../data/articleContent";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
export default function ArticleSection({ blog }: { blog: Blog }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setError(true);
    }
  }
  return (
    <section className="shell section-space">
      <div className="grid items-start gap-14 lg:grid-cols-[.65fr_1.6fr]">
        <aside data-reveal className="lg:sticky lg:top-12">
          <img
            src={blog.avatar}
            alt={blog.author}
            className="mb-5 size-20 rounded-full object-cover"
          />
          <p className="eyebrow mb-3 text-neutral-500">Author</p>
          <p className="text-xl">{blog.author}</p>
          <p className="mt-2 text-sm text-neutral-500">
            Lead Architectural Designer
          </p>
          <p className="mt-5 text-sm text-neutral-500">
            {blog.date} · 5 min read
          </p>
          <button
            onClick={copy}
            className="mt-7 flex items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm"
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
            {copied ? "Link copied" : "Copy article link"}
          </button>
          {error && (
            <p role="status" className="mt-3 text-sm">
              Copy the article address from your browser to share it.
            </p>
          )}
        </aside>
        <article className="max-w-3xl">
          <p
            data-reveal
            className="mb-10 text-2xl leading-relaxed tracking-tight"
          >
            {blog.excerpt}
          </p>
          {articleContent.map((block, i) => (
            <section key={block.title} data-reveal className="mb-12">
              <h2 className="title-md mb-6">{block.title}</h2>
              {block.paragraphs.map((p) => (
                <p key={p} className="copy mb-6">
                  {p}
                </p>
              ))}
              {block.list && (
                <ul className="list-disc space-y-4 pl-5 text-neutral-600">
                  {block.list.map((x) => (
                    <li key={x} className="pl-2 leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>
              )}
              {i === 0 && (
                <blockquote className="my-10 border-l-2 border-ink pl-7 text-2xl leading-relaxed tracking-tight">
                  “Thoughtful design creates spaces that feel as good to live in
                  as they look.”
                </blockquote>
              )}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
