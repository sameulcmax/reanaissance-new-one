import { Link } from "@tanstack/react-router";
import { SITE, NAV } from "@/lib/site";
import logoWhite from "/logo-white.png";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--renaissance-blue)] text-background">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.9fr] items-start">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logoWhite}
                alt="Renaissance Meetings & Special Events"
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-5 font-display text-2xl text-white sm:text-3xl italic">
              Where Creativity Begins
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">{SITE.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <a
              href={`mailto:${SITE.emails[1]}`}
              className="group flex items-center justify-between gap-3 rounded-full bg-white text-ink px-6 py-3.5 font-bold transition-colors hover:bg-background"
            >
              <span>Contact Us</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-background transition-colors group-hover:bg-white group-hover:text-ink">
                →
              </span>
            </a>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              {SITE.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block text-white/70 transition-colors hover:text-accent">
                  {e}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
