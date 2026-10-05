import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, reducedMotion } from "../lib/motion";
import motionData from "../data/referenceMotion.json";

type Target = {
  id?: string;
  selector?: string;
  useEventTarget?: boolean | string;
};
type Action = {
  actionTypeId: string;
  config: Record<string, any> & { target: Target };
};
type ActionList = {
  useFirstGroupAsInitialState?: boolean;
  actionItemGroups?: { actionItems: Action[] }[];
  continuousParameterGroups?: {
    id: string;
    continuousActionGroups: { keyframe: number; actionItems: Action[] }[];
  }[];
};
const data = motionData as unknown as {
  events: Record<string, any>;
  actionLists: Record<string, ActionList>;
};

/** Replays the reference's measured keyframes with GSAP; no Webflow runtime. */
export function useReferenceMotion(key: string) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const listeners: (() => void)[] = [];
    const on = (el: Element, event: string, cb: EventListener) => {
      el.addEventListener(event, cb);
      listeners.push(() => el.removeEventListener(event, cb));
    };
    const query = (s: string, scope: ParentNode = root) => {
      try {
        return Array.from(scope.querySelectorAll<HTMLElement>(s));
      } catch {
        return [];
      }
    };
    const targets = (t: Target, event?: HTMLElement): HTMLElement[] => {
      if (t.useEventTarget && event) {
        if (t.useEventTarget === "CHILDREN")
          return t.selector ? query(t.selector, event) : [event];
        if (t.useEventTarget === "SIBLINGS")
          return event.parentElement
            ? query(t.selector || "*", event.parentElement).filter(
                (x) => x !== event,
              )
            : [];
        if (t.useEventTarget === "PARENT") {
          const p = event.closest<HTMLElement>(t.selector || "*");
          return p ? [p] : [];
        }
        return [event];
      }
      if (t.selector) return query(t.selector);
      if (t.id)
        return query(
          `[data-w-id="${t.id.split("|").pop()}"], [data-reference-id="${t.id}"]`,
        );
      return [];
    };
    const unit = (v: number, u = "px") =>
      `${v}${u.toLowerCase() === "auto" ? "" : u.toLowerCase()}`;
    const vars = (a: Action): gsap.TweenVars => {
      const c = a.config,
        v: gsap.TweenVars = {};
      switch (a.actionTypeId) {
        case "TRANSFORM_MOVE":
          for (const axis of ["x", "y", "z"])
            if (c[axis + "Value"] != null)
              v[axis] = unit(c[axis + "Value"], c[axis + "Unit"]);
          break;
        case "TRANSFORM_SCALE":
          for (const axis of ["x", "y", "z"])
            if (c[axis + "Value"] != null)
              v["scale" + axis.toUpperCase()] = c[axis + "Value"];
          break;
        case "TRANSFORM_ROTATE":
          if (c.xValue != null) v.rotationX = c.xValue;
          if (c.yValue != null) v.rotationY = c.yValue;
          if (c.zValue != null) v.rotation = c.zValue;
          break;
        case "TRANSFORM_SKEW":
          if (c.xValue != null) v.skewX = c.xValue;
          if (c.yValue != null) v.skewY = c.yValue;
          break;
        case "STYLE_OPACITY":
          v.opacity = c.value;
          break;
        case "STYLE_SIZE":
          for (const dim of ["width", "height"])
            if (c[dim + "Unit"] === "AUTO") v[dim] = "auto";
            else if (c[dim + "Value"] != null)
              v[dim] = unit(c[dim + "Value"], c[dim + "Unit"]);
          break;
        case "GENERAL_DISPLAY":
          v.display = c.value;
          break;
        case "STYLE_FILTER":
          v.filter = (c.filters || [])
            .map((f: any) => `${f.type}(${f.value}${f.unit || ""})`)
            .join(" ");
          break;
        case "STYLE_BACKGROUND_COLOR":
        case "STYLE_TEXT_COLOR":
        case "STYLE_BORDER": {
          let color = `rgba(${c.rValue},${c.gValue},${c.bValue},${c.aValue ?? 1})`;
          if (c.rValue === 16 && c.gValue === 29 && c.bValue === 56)
            color = "#111";
          v[
            a.actionTypeId === "STYLE_BACKGROUND_COLOR"
              ? "backgroundColor"
              : a.actionTypeId === "STYLE_TEXT_COLOR"
                ? "color"
                : "borderColor"
          ] = color;
          break;
        }
      }
      return v;
    };
    const easing = (name: string) =>
      ({
        ease: "power1.inOut",
        easeIn: "power1.in",
        easeOut: "power1.out",
        easeInOut: "power1.inOut",
        outQuart: "power3.out",
        inOutQuart: "power3.inOut",
        outCubic: "power2.out",
        inOutCubic: "power2.inOut",
      })[name] ||
      name ||
      "none";
    const ctx = gsap.context(() => {
      gsap.set(query(".rt-button-text-two"), { yPercent: 100 });
      if (reducedMotion()) {
        query("[data-w-id]").forEach((el) => {
          el.style.opacity = "1";
          el.style.filter = "none";
        });
        return;
      }
      query(".rt-button-v1").forEach((button) => {
        const one = query(".rt-button-text-one", button),
          two = query(".rt-button-text-two", button),
          overlay = query(".rt-button-overlay-1", button);
        gsap.set(one, { yPercent: 0 });
        gsap.set(two, { yPercent: 100 });
        const hover = (active: boolean) => {
          gsap.to(one, {
            yPercent: active ? -100 : 0,
            duration: 0.35,
            overwrite: true,
          });
          gsap.to(two, {
            yPercent: active ? 0 : 100,
            duration: 0.35,
            overwrite: true,
          });
          gsap.to(overlay, {
            yPercent: active ? -100 : 0,
            duration: 0.4,
            overwrite: true,
          });
        };
        on(button, "mouseenter", () => hover(true));
        on(button, "mouseleave", () => hover(false));
        on(button, "focusin", () => hover(true));
        on(button, "focusout", () => hover(false));
      });
      const mm = gsap.matchMedia();
      mm.add(
        {
          main: "(min-width: 992px)",
          medium: "(min-width: 768px) and (max-width: 991px)",
          small: "(min-width: 480px) and (max-width: 767px)",
          tiny: "(max-width: 479px)",
        },
        (context) => {
          const listenerStart = listeners.length;
          const init = new Set<string>();
          for (const ev of Object.values(data.events)) {
            if (
              !(ev.mediaQueries || ["main", "medium", "small", "tiny"]).some(
                (q: string) => context.conditions?.[q],
              )
            )
              continue;
            const list = data.actionLists[ev.action?.config?.actionListId];
            if (!list) continue;
            const eventEls = targets(ev.target);
            if (!eventEls.length) continue;
            for (const el of eventEls) {
              if (
                ev.eventTypeId === "SCROLLING_IN_VIEW" ||
                ev.eventTypeId === "PAGE_SCROLL"
              ) {
                for (const config of Array.isArray(ev.config)
                  ? ev.config
                  : []) {
                  const group = list.continuousParameterGroups?.find(
                    (g) => g.id === config.continuousParameterGroupId,
                  );
                  if (!group) continue;
                  const tl = gsap.timeline({
                    scrollTrigger: {
                      trigger: el,
                      start:
                        ev.eventTypeId === "PAGE_SCROLL"
                          ? "top top"
                          : "top bottom",
                      end:
                        ev.eventTypeId === "PAGE_SCROLL"
                          ? "bottom bottom"
                          : "bottom top",
                      scrub: Math.min(0.9, (config.smoothing || 0) / 100),
                      invalidateOnRefresh: true,
                    },
                  });
                  const tracks = new Map<
                    string,
                    { frame: number; action: Action }[]
                  >();
                  for (const frame of group.continuousActionGroups)
                    for (const action of frame.actionItems) {
                      const id =
                        action.actionTypeId +
                        JSON.stringify(action.config.target);
                      const track = tracks.get(id) || [];
                      track.push({ frame: frame.keyframe, action });
                      tracks.set(id, track);
                    }
                  for (const track of tracks.values()) {
                    const els = targets(track[0].action.config.target, el);
                    if (!els.length) continue;
                    tl.set(els, vars(track[0].action), 0);
                    for (let i = 1; i < track.length; i++) {
                      const p = track[i - 1],
                        n = track[i];
                      tl.to(
                        els,
                        {
                          ...vars(n.action),
                          duration: (n.frame - p.frame) / 100,
                          ease: "none",
                        },
                        p.frame / 100,
                      );
                    }
                  }
                  tl.to({}, { duration: 0.001 }, 1);
                }
                continue;
              }
              if (el.classList.contains("rt-button-v1")) continue;
              const groups = list.actionItemGroups;
              if (!groups?.length) continue;
              const signature = ev.action.config.actionListId + el.dataset.wId;
              if (list.useFirstGroupAsInitialState && !init.has(signature)) {
                for (const action of groups[0].actionItems) {
                  const els = targets(action.config.target, el);
                  if (els.length) gsap.set(els, vars(action));
                }
                init.add(signature);
              }
              const make = () => {
                const tl = gsap.timeline({ paused: true });
                let position = 0;
                for (const group of groups.slice(
                  list.useFirstGroupAsInitialState ? 1 : 0,
                )) {
                  let span = 0;
                  for (const action of group.actionItems) {
                    const c = action.config,
                      els = targets(c.target, el);
                    const delay = (c.delay || 0) / 1000,
                      duration = (c.duration || 0) / 1000;
                    span = Math.max(span, delay + duration);
                    if (els.length)
                      tl.to(
                        els,
                        {
                          ...vars(action),
                          duration,
                          ease: easing(c.easing),
                          overwrite: "auto",
                        },
                        position + delay,
                      );
                  }
                  position += span;
                }
                return tl;
              };
              if (ev.eventTypeId === "SCROLL_INTO_VIEW") {
                const tl = make();
                ScrollTrigger.create({
                  trigger: el,
                  start: `top ${100 - (ev.config?.scrollOffsetValue || 0)}%`,
                  once: !ev.config?.loop,
                  onEnter: () => tl.play(0),
                  onEnterBack: ev.config?.loop ? () => tl.play(0) : undefined,
                });
              } else if (ev.eventTypeId === "SLIDER_ACTIVE") {
                const tl = make();
                on(el, "slideactive", () => tl.restart());
                if (el === el.parentElement?.querySelector(".w-slide"))
                  tl.play();
              } else if (["MOUSE_OVER", "MOUSE_OUT"].includes(ev.eventTypeId)) {
                const tl = make();
                on(
                  el,
                  ev.eventTypeId === "MOUSE_OVER" ? "mouseenter" : "mouseleave",
                  () => tl.restart(),
                );
                on(
                  el,
                  ev.eventTypeId === "MOUSE_OVER" ? "focusin" : "focusout",
                  () => tl.restart(),
                );
              } else if (
                ["MOUSE_CLICK", "MOUSE_SECOND_CLICK"].includes(ev.eventTypeId)
              ) {
                const tl = make();
                let count = 0;
                on(el, "click", () => {
                  count++;
                  if ((count % 2 === 1) === (ev.eventTypeId === "MOUSE_CLICK"))
                    tl.restart();
                });
              } else if (["PAGE_START", "PAGE_FINISH"].includes(ev.eventTypeId))
                make()
                  .repeat(ev.config?.loop ? -1 : 0)
                  .play();
            }
          }
          return () => {
            listeners.splice(listenerStart).forEach((fn) => fn());
          };
        },
      );
      // The second home uses GSAP heading reveals rather than the first template's events.
      query(
        '[data-reference-page="HomeTwo"] h1, [data-reference-page="HomeTwo"] h2, [data-reference-page="HomeTwo"] .animate-on-scroll',
      ).forEach((el) =>
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        }),
      );
    }, root);
    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 450);
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      listeners.forEach((fn) => fn());
      ctx.revert();
    };
  }, [key]);
  return ref;
}
