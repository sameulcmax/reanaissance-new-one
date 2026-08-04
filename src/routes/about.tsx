import { AboutSection } from "@/components/AboutSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Renaissance Meetings & Special Events" },
      {
        name: "description",
        content:
          "The modern-day experiential media company. Built for premium events, hospitality and executive networks.",
      },
      { property: "og:title", content: "About — Renaissance Meetings & Special Events" },
      {
        property: "og:description",
        content: "Production-led media for premium events, hospitality and executive networks.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div><AboutSection/></div>
    </>
  );
}
