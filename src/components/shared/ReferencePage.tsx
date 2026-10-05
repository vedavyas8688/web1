import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger, reducedMotion } from "../../lib/motion";
import Lightbox from "./Lightbox";

/** Shared accessible controls for the section-based reference layouts. */
export default function ReferencePage({
  children,
  page,
  className,
  sourcePage,
}: {
  children: ReactNode;
  page: string;
  sourcePage?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [gallery, setGallery] = useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanup: (() => void)[] = [];
    const listen = (el: Element | Window, type: string, fn: EventListener) => {
      el.addEventListener(type, fn);
      cleanup.push(() => el.removeEventListener(type, fn));
    };
    const animate = (els: gsap.TweenTarget, v: gsap.TweenVars) =>
      gsap.to(els, {
        duration: reducedMotion() ? 0 : 0.55,
        ease: "power2.inOut",
        ...v,
      });
    root.querySelectorAll<HTMLElement>(".w-slider").forEach((slider) => {
      const mask = slider.querySelector<HTMLElement>(".w-slider-mask");
      const slides = Array.from(
        slider.querySelectorAll<HTMLElement>(".w-slide"),
      );
      if (!mask || !slides.length) return;
      const dots = Array.from(
        slider.querySelectorAll<HTMLElement>(".rt-slider-nav, .w-slider-dot"),
      );
      let index = 0;
      let hover = false;
      const show = (next: number) => {
        const step = slides[0].getBoundingClientRect().width;
        const max = Math.max(
          0,
          Math.ceil((step * slides.length - mask.clientWidth) / step),
        );
        index = (next + max + 1) % (max + 1);
        dots.forEach((dot, i) => {
          dot.setAttribute("aria-pressed", String(i === index));
          if (dot.classList.contains("rt-slider-nav"))
            animate(dot, { width: i === index ? 37 : 11 });
        });
        slides.forEach((el, i) => {
          animate(el, {
            x: -Math.min(index * step, step * slides.length - mask.clientWidth),
          });
          el.setAttribute("aria-hidden", String(i !== index));
          if (i === index)
            el.dispatchEvent(new Event("slideactive", { bubbles: true }));
        });
      };
      dots.forEach((dot, i) => {
        dot.tabIndex = 0;
        dot.setAttribute("role", "button");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        listen(dot, "click", () => show(i));
        listen(dot, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            show(i);
          }
        }) as EventListener);
      });
      const buttons = [
        slider.querySelector<HTMLElement>(".w-slider-arrow-left"),
        slider.querySelector<HTMLElement>(".w-slider-arrow-right"),
      ];
      buttons.forEach((b, i) => {
        if (!b) return;
        b.setAttribute("role", "button");
        b.tabIndex = 0;
        b.setAttribute("aria-label", i ? "Next slide" : "Previous slide");
        const fn = () => show(index + (i ? 1 : -1));
        listen(b, "click", fn);
        listen(b, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fn();
          }
        }) as EventListener);
      });
      if (slider.dataset.autoplay === "true" && !reducedMotion()) {
        const id = window.setInterval(
          () => {
            if (!hover && !document.hidden) show(index + 1);
          },
          Number(slider.dataset.delay) || 5000,
        );
        cleanup.push(() => clearInterval(id));
        listen(slider, "mouseenter", () => {
          hover = true;
        });
        listen(slider, "mouseleave", () => {
          hover = false;
        });
        listen(slider, "focusin", () => {
          hover = true;
        });
        listen(slider, "focusout", () => {
          hover = false;
        });
      }
      listen(window, "resize", () => show(index));
    });
    root.querySelectorAll<HTMLElement>(".w-tabs").forEach((tabs) => {
      const links = Array.from(
        tabs.querySelectorAll<HTMLElement>(".w-tab-link"),
      );
      const panes = Array.from(
        tabs.querySelectorAll<HTMLElement>(".w-tab-pane"),
      );
      const activate = (link: HTMLElement) => {
        links.forEach((l) => {
          const active = l === link;
          l.setAttribute("aria-selected", String(active));
          l.tabIndex = active ? 0 : -1;
          l.classList.toggle("w--current", active);
        });
        panes.forEach((p) => {
          const active = p.dataset.wTab === link.dataset.wTab;
          p.style.display = active ? "block" : "none";
          p.setAttribute("aria-hidden", String(!active));
          if (active)
            gsap.fromTo(
              p,
              { opacity: 0 },
              { opacity: 1, duration: reducedMotion() ? 0 : 0.4 },
            );
        });
        ScrollTrigger.refresh();
      };
      links.forEach((l, i) => {
        l.setAttribute("role", "tab");
        listen(l, "click", ((e: Event) => {
          e.preventDefault();
          activate(l);
        }) as EventListener);
        listen(l, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const next =
              links[
                (i + (e.key === "ArrowRight" ? 1 : links.length - 1)) %
                  links.length
              ];
            activate(next);
            next.focus();
          }
        }) as EventListener);
      });
      activate(
        links.find((l) => l.classList.contains("w--current")) || links[0],
      );
    });
    // Reference accordions retain their original layout but gain keyboard controls.
    root
      .querySelectorAll<HTMLElement>(
        ".rt-faq-question-wrap, .accordion-item-wrapper",
      )
      .forEach((item) => {
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        listen(item, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            item.click();
          }
        }) as EventListener);
      });
    root.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
      video.muted = true;
      const io = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            !reducedMotion() &&
            video.dataset.paused !== "true"
          )
            video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0.05 },
      );
      io.observe(video);
      cleanup.push(() => io.disconnect());
    });
    root
      .querySelectorAll<HTMLElement>(".w-background-video--control")
      .forEach((control) => {
        const video = control.parentElement?.querySelector("video");
        if (!video) return;
        control.setAttribute("role", "button");
        control.tabIndex = 0;
        control.setAttribute("aria-label", "Pause video");
        const toggle = () => {
          if (video.paused) {
            video.dataset.paused = "false";
            video.play().catch(() => {});
            control.setAttribute("aria-label", "Pause video");
          } else {
            video.dataset.paused = "true";
            video.pause();
            control.setAttribute("aria-label", "Play video");
          }
        };
        listen(control, "click", toggle);
        listen(control, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "Enter") {
            e.preventDefault();
            toggle();
          }
        }) as EventListener);
      });
    const links = Array.from(
      root.querySelectorAll<HTMLElement>("[data-lightbox-src]"),
    );
    links.forEach((link, index) => {
      link.setAttribute("aria-label", `Enlarge project image ${index + 1}`);
      listen(link, "click", ((e: Event) => {
        e.preventDefault();
        setGallery({
          images: links.map((l) => ({
            src: l.dataset.lightboxSrc!,
            alt: l.querySelector("img")?.alt || "Project gallery",
          })),
          index,
        });
      }) as EventListener);
    });
    root.querySelectorAll<HTMLFormElement>("form").forEach((form) => {
      listen(form, "submit", ((e: Event) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        let result = form.querySelector<HTMLElement>('[role="status"]');
        if (!result) {
          result = document.createElement("p");
          result.setAttribute("role", "status");
          result.className = "mt-5 text-base";
          form.appendChild(result);
        }
        result.textContent =
          "Thank you. This preview is valid; your details have not been sent or stored. The backend will be connected later.";
      }) as EventListener);
      const done =
        form.parentElement?.querySelector<HTMLElement>(".w-form-done");
      if (done) done.style.display = "none";
      const fail =
        form.parentElement?.querySelector<HTMLElement>(".w-form-fail");
      if (fail) fail.style.display = "none";
    });
    return () => cleanup.forEach((fn) => fn());
  }, [page]);
  return (
    <div
      ref={ref}
      data-reference-page={page}
      data-reference-id={sourcePage}
      className={className}
    >
      {children}
      {gallery && (
        <Lightbox
          images={gallery.images}
          index={gallery.index}
          onChange={(index) => setGallery({ ...gallery, index })}
          onClose={() => setGallery(null)}
        />
      )}
    </div>
  );
}
