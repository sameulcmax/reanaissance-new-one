export const SITE = {
  name: "Renaissance Meetings & Special Events",
  short: "RMSE",
  tagline: "Where Experiences Become Influence",
  description:
    "Renaissance Meetings & Special Events is a premium experiential media platform — covering conferences, hospitality, sponsorships, executive interviews, and luxury events.",
  emails: ["info@renaissanceevents.com", "info@specialeventschannel.com"],
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Portfolio" },
  { to: "/contact", label: "Get In Touch" },
] as const;
