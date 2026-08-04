import { createFileRoute } from "@tanstack/react-router";
import { Carousel } from "@/components/sections/Carousel";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renaissance Meetings & Special Events — Where Experiences Become Influence" },
      {
        name: "description",
        content:
          "The modern-day experiential media company. We cover conferences, hospitality, sponsorships, executive interviews and luxury events.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Carousel heading="Gallery" />
      <Partners />
      <Contact />
    </>
  );
}
