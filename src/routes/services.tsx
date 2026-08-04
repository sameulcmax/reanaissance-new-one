import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";
import { Coverage } from "@/components/sections/Coverage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Renaissance Meetings & Special Events" },
      {
        name: "description",
        content:
          "Event coverage, executive interviews, sponsorships, webcasts, hospitality and luxury event production.",
      },
      { property: "og:title", content: "Services — Renaissance Meetings & Special Events" },
      {
        property: "og:description",
        content: "A full-stack production studio for the events industry.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-26 md:pt-36 2xl:pt-50 pb-2 mx-auto max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Services</p>
      </div>
      <Coverage />
      <Contact />
    </>
  );
}
