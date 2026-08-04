import { motion } from "motion/react";
import { SITE } from "@/lib/site";

export function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-30 pb:10 md:pt-45 pb-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-10"
      >
        <div>
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-foreground/60">
            ABOUT
          </p>
          <h2 className="mt-6 font-display text-xl sm:text-3xl md:text-5xl leading-tight tracking-tight text-foreground">
            For three decades, Renaissance Meetings &amp; Special Events has been a trusted partner for global brands, Fortune 500 companies, associations, sports, non-profits, and visionary leaders.
          </h2>
        </div>
        <p className="mx-auto max-w-3xl text-sm sm:text-xl leading-relaxed text-foreground/80">
          We create moments that transcend the ordinary.<br />
          From intimate executive gatherings to large-scale productions reaching thousands,
          we bring expertise, creativity, and precision to every event.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#what-we-do" className="pill-btn metallic">
            Learn More
            <span className="pill-arrow">→</span>
          </a>
          <a href={`mailto:${SITE.emails[1]}`} className="pill-btn metallic">
            Contact Us
            <span className="pill-arrow">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}