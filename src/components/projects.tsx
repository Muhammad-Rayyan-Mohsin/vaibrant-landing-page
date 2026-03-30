"use client";

import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Project Aether",
    tag: "Industrial LLM",
    description:
      "Challenge: Fragmented operational data across 4 continents. Result: A unified RAG-driven intelligence layer reducing retrieval latency by 84%.",
    year: "2024",
    client: "Nexus Corp",
    image: "https://picsum.photos/seed/aether-ai/800/500",
  },
  {
    title: "Stratis",
    tag: "Predictive Grid",
    description:
      "Challenge: Volatile supply chain signal noise. Result: Bespoke forecasting engine achieving 99.2% accuracy in predictive maintenance cycles.",
    year: "2023",
    client: "Lumina Systems",
    image: "https://picsum.photos/seed/stratis-ml/800/500",
  },
];

export function Projects() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 w-full">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
                Proof of Concept
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Field-tested implementations of synthetic intelligence across
                high-stakes industrial environments.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground font-medium tracking-widest uppercase text-xs border-b border-foreground pb-2 hover:text-muted hover:border-muted transition-all duration-300 shrink-0"
            >
              View All Projects
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6 md:mb-8 border border-white/[0.08] bg-[#131315]">
                  <img
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.85] transition-all duration-1000"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-md text-foreground text-[10px] font-medium tracking-[0.2em] uppercase border border-white/[0.1]">
                      {project.tag}
                    </span>
                  </div>

                  {/* Arrow button */}
                  <div className="absolute bottom-5 right-5 h-10 w-10 border border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-white group-hover:text-background transition-colors duration-500"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="border-l border-white/[0.15] pl-5 md:pl-6 py-1">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-muted transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-5 max-w-md">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.15em] text-muted/60 font-medium">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
