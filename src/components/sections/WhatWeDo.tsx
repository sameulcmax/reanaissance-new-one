import { motion } from "motion/react";
import interview from "/a1.jpeg";
import gala from "/e2.jpeg";
import webcast from "/b1.jpeg";
import networking from "/n3.jpeg";

type Block = {
  title: string;
  body: string;
  bg: string;
  fg: string;
  img: string;
  variant: "blob1" | "blob2" | "blob3" | "blob4";
};

const BLOCKS: Block[] = [
  {
    title: "ROBERTO CLEMENTE FOUNDATION",
    body: "Commemorating the 50th anniversary of Roberto Clemente's Hall of Fame induction at the Heinz History Center in Pittsburgh, PA. This milestone fundraising gala featured MLB alumni and honored community leaders.",
    bg: "var(--sage)",
    fg: "var(--ink)",
    img: interview,
    variant: "blob1",
  },
  {
    title: "NBA 100th Centennial Convention",
    body: "The historic 100-year Centennial Convention for the National Bar Association — an expansive multi-day gathering in Chicago, IL. Featuring high-profile keynotes, networking events, and the 'Igniting Justice' celebration.",
    bg: "var(--sage)",
    fg: "var(--ink)",
    img: networking,
    variant: "blob4",
  },
  {
    title: "VERUS",
    body: "A comprehensive mass tort litigation support summit for Verus in New York — featuring expert panels, strategic networking, and end-to-end case management workshops for law firms.",
    bg: "var(--cream)",
    fg: "var(--background)",
    img: webcast,
    variant: "blob3",
  },
  {
    title: "NBA 45th Annual Midyear Conference",
    body: "Featuring the signature Heman Marion Sweatt Awards Luncheon honoring civil rights trailblazers. Renaissance provided full infrastructure management, including VIP seating, stage production, and banquet coordination.",
    bg: "var(--ink)",
    fg: "var(--background)",
    img: gala,
    variant: "blob2",
  },
];

function BlockCard({ block, idx }: { block: Block; idx: number }) {
  const isLightSurface = block.bg === "var(--sage)" || block.bg === "var(--ink)";
  const textColor = isLightSurface ? "#ffffff" : "var(--ink)";
  const buttonStyle = isLightSurface
    ? { background: "#ffffff", color: "var(--sage-deep)", borderColor: "#ffffff" }
    : { background: "var(--ink)", color: "#ffffff", borderColor: "var(--ink)" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[40px] p-4 sm:p-12 md:p-16 min-h-[360px] sm:min-h-[440px] md:min-h-[520px] flex"
      style={{ background: block.bg, color: block.fg }}
    >
      {/* Left content */}
      <div className="relative z-10 flex flex-col justify-between w-full md:w-[55%] pr-4 sm:pr-0 sm:bg-transparent bg-black/40 p-3 sm:p-0 rounded-lg sm:rounded-none">
        <h3
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance sm:text-current"
          style={{ color: textColor }}
        >
          {block.title}
        </h3>
        <div className="mt-6 sm:mt-8">
          <p
            className="font-sans font-normal text-base sm:text-2xl max-w-md text-balance leading-tight sm:text-current"
            style={{ color: textColor }}
          >
            {block.body}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold border-2 transition-transform hover:scale-105"
            style={buttonStyle}
          >
            Learn More
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Right image in a formal standard container */}
      <div className="absolute right-0 sm:right-4 md:right-8 top-0 sm:top-6 bottom-0 sm:bottom-6 w-full sm:w-[50%] md:w-[42%]">
        <div className="relative w-full h-full overflow-hidden rounded-none sm:rounded-3xl">
          <img
            src={block.img}
            alt={block.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-background py-8 md:py-2 lg:py-10">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">

        <div className="space-y-6 md:space-y-10">
          {BLOCKS.map((b, i) => (
            <BlockCard key={b.title} block={b} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
