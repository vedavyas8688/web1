export default function Media({
  src,
  alt,
  className = "",
  parallax = false,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        data-parallax={parallax ? "" : undefined}
        className={`h-full w-full object-cover image-hover ${parallax ? "scale-[1.13]" : ""}`}
      />
    </div>
  );
}
