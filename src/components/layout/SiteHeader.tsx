import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoWhite from "/logo-white.png";
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[var(--renaissance-blue)]"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoWhite}
              alt="Renaissance Meetings & Special Events"
              className="h-11 w-auto sm:h-12 md:h-13 lg:h-22 transition-all duration-300"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-white">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative px-4 py-2 transition-colors",
                    active ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href={`mailto:${SITE.emails[1]}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
          >
            <span>Contact Us</span>
            <ArrowCircle />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function ArrowCircle() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/15 transition-colors group-hover:bg-foreground/15">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}
