import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — AI Systems We've Built & Deployed",
  description:
    "Explore 13+ production AI systems: autonomous ad managers, LLM agents, predictive churn monitors, and workflow automation platforms built by Vaibrant.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
