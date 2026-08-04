import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Renaissance Meetings & Special Events" },
      {
        name: "description",
        content:
          "Tell us about your next room. Email info@specialeventschannel.com or info@renaissanceevents.com.",
      },
      { property: "og:title", content: "Contact — Renaissance Meetings & Special Events" },
      {
        property: "og:description",
        content: "Get in touch about premium event coverage, broadcasts and sponsorships.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-0">
      <ContactSection />
    </div>
  );
}
