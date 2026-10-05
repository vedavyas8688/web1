import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { RouteLink } from "./TransitionProvider";
import { navigation } from "../../data/site";
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const light = pathname === "/home-two" || pathname.startsWith("/project/");
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    s();
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const els = () =>
      Array.from(
        panel.current?.querySelectorAll<HTMLElement>("a,button") || [],
      );
    els()[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const a = els();
        const first = a[0],
          last = a[a.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[110] -translate-y-40 bg-white px-5 py-3 text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={`absolute inset-x-0 top-0 z-40 border-b ${light ? "border-black/15 text-ink" : "border-white/20 text-white"}`}
      >
        <div className="mx-auto w-full max-w-[1920px] px-[15px] flex h-[85px] items-center justify-between gap-5">
          <RouteLink
            to="/home-one"
            className="text-2xl font-medium tracking-[.17em]"
            aria-label="Linoxa home"
          >
            LINOXA
          </RouteLink>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {navigation.slice(0, -1).map((n) => (
              <RouteLink
                key={n.path}
                to={n.path}
                aria-current={pathname === n.path ? "page" : undefined}
                className={`relative py-3 text-base transition-opacity hover:opacity-60 ${pathname === n.path ? "after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-current" : ""}`}
              >
                {n.label}
              </RouteLink>
            ))}
          </nav>
          <RouteLink
            to="/contact-three"
            className={`hidden items-center gap-5 rounded-full px-5 py-3.5 text-sm transition-colors sm:flex ${light ? "bg-ink text-white hover:bg-neutral-700" : "bg-white text-ink hover:bg-neutral-200"}`}
          >
            Get in touch
            <ArrowUpRight size={20} />
          </RouteLink>
          <button
            ref={toggle}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>
      {open && (
        <div
          ref={panel}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          data-lenis-prevent
          className="fixed inset-0 z-50 overflow-y-auto bg-ink p-6 text-white swap-in"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl tracking-[.17em]">LINOXA</span>
            <button
              aria-label="Close navigation"
              onClick={() => {
                setOpen(false);
                toggle.current?.focus();
              }}
              className="p-3"
            >
              <X />
            </button>
          </div>
          <nav className="mt-12 flex flex-col">
            {navigation.map((n, i) => (
              <RouteLink
                key={n.path}
                to={n.path}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/20 py-5 text-3xl"
              >
                <span>
                  <span className="mr-4 text-xs text-white/40">0{i + 1}</span>
                  {n.label}
                </span>
                <ArrowUpRight />
              </RouteLink>
            ))}
          </nav>
        </div>
      )}
      {scrolled && !open && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-30 flex size-11 items-center justify-center rounded-full border border-white/20 bg-ink text-white shadow-lg"
        >
          <ArrowUpRight className="-rotate-45" size={18} />
        </button>
      )}
    </>
  );
}
