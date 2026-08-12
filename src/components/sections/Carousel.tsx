import { animate, motion, useMotionValue } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    img: "/a4.png",
    sub: "50th Anniversary of Roberto Clemente",
    overTitle: "Roberto Clemente Foundation",
  },
  {
    img: "/nnn.jpeg",
    overTitle: "Phillips & Jordan Career Fair",
    sub: "PJ",
  },
  {
    img: "/e2.jpeg",
    overTitle: "NBA 45th Annual Midyear Conference",
    sub: "Heman Marion Sweatt",
  },
  {
    img: "/n3.jpeg",
    overTitle: "National Association 100th Annual Conference",
    sub: "NBA 100",
  },
];

const SLIDE_COUNT = SLIDES.length;
const MIDDLE_SET_START = SLIDE_COUNT;
const MIDDLE_SET_END = SLIDE_COUNT * 2 - 1;
const extendedSlides = [...SLIDES, ...SLIDES, ...SLIDES];

export function Carousel({ heading }: { heading?: string }) {
  const [i, setI] = useState(MIDDLE_SET_START);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const indexRef = useRef(MIDDLE_SET_START);
  const initialized = useRef(false);

  const updatePosition = useCallback(
    (index: number, jump = false) => {
      const track = trackRef.current;
      const card = track?.children[0];
      const container = track?.parentElement;

      if (!track || !card || !container) return;

      const cardWidth = card.getBoundingClientRect().width;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const containerWidth = container.getBoundingClientRect().width;
      const targetX = -(index * (cardWidth + gap)) + containerWidth / 2 - cardWidth / 2;

      if (jump) {
        x.set(targetX);
      } else {
        animate(x, targetX, { type: "spring", stiffness: 120, damping: 22 });
      }
    },
    [x],
  );

  useEffect(() => {
    const container = trackRef.current?.parentElement;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updatePosition(indexRef.current, true);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [updatePosition]);

  useEffect(() => {
    if (!initialized.current) {
      updatePosition(i, true);
      initialized.current = true;
    } else {
      updatePosition(i);
    }
  }, [i, updatePosition]);

  const selectSlide = useCallback((slideIndex: number) => {
    const baseIndex = slideIndex % SLIDE_COUNT;
    const candidates = [baseIndex, baseIndex + SLIDE_COUNT, baseIndex + SLIDE_COUNT * 2];
    const closestIndex = candidates.reduce((closest, candidate) =>
      Math.abs(candidate - indexRef.current) < Math.abs(closest - indexRef.current)
        ? candidate
        : closest,
    );

    indexRef.current = closestIndex;
    setI(closestIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = indexRef.current;

      if (nextIndex >= MIDDLE_SET_END) {
        nextIndex -= SLIDE_COUNT;
        updatePosition(nextIndex, true);
      }

      nextIndex += 1;
      indexRef.current = nextIndex;
      setI(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [updatePosition]);

  const activeDot = i % SLIDE_COUNT;

  return (
  <>
    <section className="relative bg-secondary py-20 md:py-25 overflow-hidden">
      {heading && (
        <div className="mx-auto max-w-[1600px] px-6 mb-8 text-center">
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-foreground/60">
            {heading}
          </p>
        </div>
      )}
      <div className="overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 will-change-transform">
          {extendedSlides.map((s, idx) => {
            const active = idx === i;
            return (
              <article
                key={`${s.overTitle}-${idx}`}
                onClick={() => selectSlide(idx)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectSlide(idx);
                  }
                }}
                tabIndex={0}
                className="group relative shrink-0 w-[78vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw] cursor-pointer"
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-md transition-all duration-700 ${
                    active ? "opacity-100 scale-100" : "opacity-50 scale-95"
                  }`}
                >
                  <img
                    src={s.img}
                    alt={`${s.overTitle} ${s.sub}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                  <div className="absolute top-3 sm:top-6 left-0 right-0 text-center text-white font-display px-3 sm:px-0">
                    <p className="mt-2 sm:mt-3 text-[1.75rem] sm:text-4xl md:text-5xl leading-[0.95]">
                      {s.overTitle}
                    </p>
                    <p className="mt-1 text-lg sm:text-3xl md:text-4xl italic font-display">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-6 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2 px-4">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            aria-current={idx === activeDot ? "true" : undefined}
            onClick={() => selectSlide(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              idx === activeDot
                ? "w-6 sm:w-10 bg-accent"
                : "w-1.5 sm:w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
    </>
  );
}
