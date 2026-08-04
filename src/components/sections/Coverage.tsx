import { motion } from "motion/react";

const COVERAGE = [
  "Ideation, Branding and Event Design",
  "Site Selection and Contract Negotiations",
  " Event Management + Job Fairs",
  " Hospitality Consulting",
  " Exhibit Sales + Show Management",
  "Sponsorship Sales + On-Site Activation and Fulfillment",
   "Donor Development and Media Relations",
  "Program and Speaker Management",
];

export function Coverage() {
  return (
    <section className="bg-background py-14 md:py-18">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="display-xl text-[clamp(2.4rem,6vw,6rem)]">Services</h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70 text-pretty">
            
In today’s global and competitive marketplace, it is important to partner with organizations that understand your business and strategies for success. We create signature, one-of-a-kind events and sales campaigns for our clients, while building a solid reputation for delivering excellence. Producing events is time consuming – from selecting the perfect venue to implementing the marketing strategy – we manage every detail, so you can manage your business.
          </p>
          <a
            href="#"
            className="pill-btn mt-8"
            style={{ background: "var(--ink)", color: "var(--background)" }}
          >
            Explore the work →
          </a>
        </div>

        <ul className="md:border-l md:border-foreground/15 md:pl-12">
          {COVERAGE.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border-b border-foreground/10 py-5"
            >
              <a
                href="#"
                className="flex items-center justify-between font-display text-3xl sm:text-4xl md:text-4  xl transition-colors group-hover:text-accent"
              >
                <span>{c}</span>
                <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
