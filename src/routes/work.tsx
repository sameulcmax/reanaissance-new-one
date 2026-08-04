import { createFileRoute } from "@tanstack/react-router";
import { Carousel } from "@/components/sections/Carousel";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Renaissance Meetings & Special Events" },
      {
        name: "description",
        content:
          "Selected productions from conferences, hospitality, golf, broadcasts and executive interviews.",
      },
      { property: "og:title", content: "Work — Renaissance Meetings & Special Events" },
      { property: "og:description", content: "Selected experiential media productions." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
<div className="pt-28 md:36 lg:pt-46 pb-2 mx-auto max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">PORTFOLIO</p>
        <h1 className="display-xl mt-8 md:mt-12 lg:mt-18 text-[clamp(2.6rem,8vw,8rem)]">Some of Our Amazing Works</h1>
      </div>
      <WhatWeDo />
    </>
  );
}
