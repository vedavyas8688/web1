import { useState } from "react";
import { Expand } from "lucide-react";
import type { Project } from "../../data/projects";
import { images } from "../../data/images";
import Media from "../shared/Media";
import Lightbox from "../shared/Lightbox";
export default function GallerySection({ project: p }: { project: Project }) {
  const [index, setIndex] = useState<number | null>(null);
  const gallery = (
    p.slug === "contemporary-retreat"
      ? images.gallery
      : [p.largeImage, p.image, ...images.gallery.slice(2)]
  ).map((src, i) => ({
    src,
    alt:
      p.title +
      " — " +
      [
        "Exterior and landscape",
        "Living spaces",
        "Architectural detail",
        "Material and light",
      ][i],
  }));
  return (
    <section className="shell pb-20">
      <div className="grid gap-5 md:grid-cols-2">
        {gallery.map((im, i) => (
          <button
            key={im.src + i}
            data-reveal
            onClick={() => setIndex(i)}
            aria-label={"Enlarge " + im.alt}
            className="group relative block overflow-hidden rounded-xl"
          >
            <Media src={im.src} alt={im.alt} className="aspect-[1.25]" />
            <span className="absolute bottom-5 right-5 rounded-full bg-white p-3 transition-transform group-hover:scale-110">
              <Expand size={20} />
            </span>
          </button>
        ))}
      </div>
      {index !== null && (
        <Lightbox
          images={gallery}
          index={index}
          onChange={setIndex}
          onClose={() => setIndex(null)}
        />
      )}
    </section>
  );
}
