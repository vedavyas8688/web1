import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  type ReactNode,
  type AnchorHTMLAttributes,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { reducedMotion } from "../../lib/motion";
const TransitionContext = createContext<(to: string) => void>(() => {});
/** Native scrolling keeps the reference's sticky scenes aligned with scroll position. */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [location.key]);
  const go = useCallback(
    (to: string) => {
      if (to === location.pathname) {
        window.scrollTo({
          top: 0,
          behavior: reducedMotion() ? "instant" : "smooth",
        });
        return;
      }
      navigate(to);
    },
    [navigate, location.pathname],
  );
  return (
    <TransitionContext.Provider value={go}>
      {children}
    </TransitionContext.Provider>
  );
}
export function RouteLink({
  to,
  children,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const go = useContext(TransitionContext);
  return (
    <a
      href={to}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (
          !e.defaultPrevented &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey &&
          e.button === 0 &&
          (!props.target || props.target === "_self")
        ) {
          e.preventDefault();
          go(to);
        }
      }}
    >
      {children}
    </a>
  );
}
