import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — The Engineers Behind Vaibrant",
  description:
    "Meet the 4 co-founders who've shipped 13 production AI systems. Engineers, strategists, and builders specializing in LLM agents, platform automation, and AI strategy.",
  alternates: { canonical: "/team" },
};

const teamJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Team",
          item: "https://vaibrant.agency/team",
        },
      ],
    },
    {
      "@type": "Person",
      name: "Muhammad Rayyan Mohsin",
      jobTitle: "Co-Founder & Lead AI Engineer",
      url: "https://portfolio-rayyan-opal.vercel.app/",
      worksFor: { "@id": "https://vaibrant.agency/#organization" },
      knowsAbout: ["LLM Agents", "AI Systems", "Generative AI"],
    },
    {
      "@type": "Person",
      name: "Usman Abbas",
      jobTitle: "Co-Founder & Systems Architect",
      worksFor: { "@id": "https://vaibrant.agency/#organization" },
      knowsAbout: ["Platform Architecture", "Workflow Automation", "System Design"],
    },
    {
      "@type": "Person",
      name: "Abdullah Nadeem",
      jobTitle: "Co-Founder & AI Strategist",
      worksFor: { "@id": "https://vaibrant.agency/#organization" },
      knowsAbout: ["AI Strategy", "Client Success", "Business Intelligence"],
    },
    {
      "@type": "Person",
      name: "Haider Farooq",
      jobTitle: "Co-Founder & Operations Lead",
      worksFor: { "@id": "https://vaibrant.agency/#organization" },
      knowsAbout: ["AI Operations", "Quality Assurance", "Process Engineering"],
    },
  ],
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      {children}
    </>
  );
}
