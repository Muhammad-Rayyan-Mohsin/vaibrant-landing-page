"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Meta Ads Manager",
    tag: "Autonomous Ad Ops",
    description:
      "Challenge: Manual ad management bleeding $2K-$5K/month in agency fees. Result: A full-stack LLM agent with 40+ tools that autonomously creates campaigns, generates creatives, and optimizes spend with real-time ROAS tracking.",
    year: "2024",
    client: "Internal Platform",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-ads.png",
  },
  {
    title: "CAIO Intelligence Platform",
    tag: "Multi-Agent Dashboard",
    description:
      "Challenge: Disconnected client health signals across support channels. Result: Full-stack intelligence dashboard with specialized LLM agents for ticket analysis, risk reporting, and automated health assessment via real-time streaming.",
    year: "2024",
    client: "Enterprise SaaS",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/caio-platform.png",
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
                Field-tested AI systems deployed across real businesses &mdash;
                from autonomous ad management to multi-agent intelligence platforms.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground font-medium tracking-widest uppercase text-xs border-b border-foreground pb-2 hover:text-muted hover:border-muted transition-colors duration-300 shrink-0"
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
                  <Image
                    alt={project.title}
                    src={project.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.85] transition-[transform,filter] duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 bg-white/[0.06] backdrop-blur-md text-foreground text-[10px] font-medium tracking-[0.2em] uppercase border border-white/[0.1]">
                      {project.tag}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 h-10 w-10 border border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-[background-color,border-color] duration-500">
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
