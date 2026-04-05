import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — AI Systems We've Built & Deployed",
  description:
    "Explore 13+ production AI systems: autonomous ad managers, LLM agents, predictive churn monitors, and workflow automation platforms built by Vaibrant.",
  alternates: { canonical: "/projects" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vaibrant.agency",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://vaibrant.agency/projects",
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
