import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
export default function Lightbox({
  images,
  index,
  onChange,
  onClose,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    d.showModal();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d.close();
      document.body.style.overflow = prev;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          onChange((index + 1) % images.length);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          onChange((index + images.length - 1) % images.length);
        }
      }}
      aria-label="Project image gallery"
      data-lenis-prevent
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-black/95 p-4 text-white backdrop:bg-black/80"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        autoFocus
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3"
      >
        <X />
      </button>
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <div className="relative flex w-full max-w-7xl items-center justify-center">
          <button
            aria-label="Previous image"
            onClick={() =>
              onChange((index + images.length - 1) % images.length)
            }
            className="absolute left-0 z-10 rounded-full bg-black/50 p-3"
          >
            <ChevronLeft />
          </button>
          <img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            className="swap-in max-h-[75dvh] max-w-full object-contain"
          />
          <button
            aria-label="Next image"
            onClick={() => onChange((index + 1) % images.length)}
            className="absolute right-0 z-10 rounded-full bg-black/50 p-3"
          >
            <ChevronRight />
          </button>
        </div>
        <p aria-live="polite" className="text-sm text-white/60">
          {index + 1} / {images.length} — {images[index].alt}
        </p>
        <div className="flex gap-3">
          {images.map((im, i) => (
            <button
              key={im.src + i}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => onChange(i)}
              className={`overflow-hidden border-2 ${i === index ? "border-white opacity-100" : "border-transparent opacity-40"}`}
            >
              <img src={im.src} alt="" className="h-12 w-16 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
}
