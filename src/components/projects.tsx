"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const projects = [
  {
    title: "Meta Ads Manager",
    tag: "Autonomous Ad Ops",
    pain: "Agency retainers bleeding $2K-$5K/month with inconsistent results and zero transparency.",
    outcome:
      "Full-stack LLM agent with 40+ tools that autonomously manages Facebook & Instagram campaigns end-to-end — from audience research and creative generation to budget allocation, A/B testing, and real-time ROAS optimization. Kills underperformers. Scales winners. No human in the loop.",
    stats: [
      { value: "40+", label: "Agent Tools" },
      { value: "24/7", label: "Autonomous" },
      { value: "$0", label: "Agency Fees" },
    ],
    tags: ["LLM Agent", "Meta Graph API", "Redis", "OAuth"],
    year: "2024",
    client: "Internal Platform",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-ads.png",
  },
  {
    title: "OpenClaw Enterprise Integration",
    tag: "AI Agent Deployment",
    pain: "Companies want AI agents but lack the infrastructure to deploy, manage, and integrate them into existing workflows.",
    outcome:
      "Turnkey OpenClaw deployment service — we configure, customize, and connect autonomous AI agents to your business stack. From Slack and Discord to CRM and ERP systems, agents handle support triage, internal ops, and customer-facing interactions across 50+ platform integrations. Enterprise-grade with audit logs and human-in-the-loop guardrails.",
    stats: [
      { value: "50+", label: "Integrations" },
      { value: "Days", label: "Not Months" },
      { value: "100%", label: "White-label" },
    ],
    tags: ["OpenClaw", "Enterprise", "Multi-Platform", "Custom Agents"],
    year: "2025",
    client: "Multi-Industry",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/caio-platform.png",
  },
  {
    title: "AI Social Media Engine",
    tag: "Autonomous Growth",
    pain: "Social media consuming 15-20 hours/week across the team — inconsistent posting, no strategy, zero compounding.",
    outcome:
      "Autonomous social media agent that researches trending topics, generates platform-native content in your brand voice, schedules optimally across channels, and adapts strategy based on real-time engagement analytics. Cuts manual social hours by 70% while growing reach consistently — the team that never sleeps, never forgets to post, and learns from every interaction.",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "5", label: "Platforms" },
      { value: "Auto", label: "Optimization" },
    ],
    tags: ["LLM Agent", "Multi-Platform", "Analytics", "Brand Voice AI"],
    year: "2025",
    client: "Growth Teams",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-ads.png",
  },
];

export function Projects() {
  return (
    <section id="about" className="relative pt-0 pb-24 md:pb-32 overflow-hidden">
      {/* Top fade — blends from hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom fade — blends into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full pt-24 md:pt-32">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-6 bg-white/[0.04] text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-foreground border border-white/[0.06]">
                Deployed &amp; Delivering
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-5">
                Systems that
                <br />
                <span className="text-muted">prove themselves.</span>
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
                Not mockups. Not demos. These are production AI systems running
                inside real businesses right now — saving time, cutting costs,
                and scaling operations without adding headcount.
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground font-medium tracking-widest uppercase text-xs border-b border-foreground pb-2 hover:text-muted hover:border-muted transition-colors duration-300 shrink-0"
            >
              View All 13 Projects
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </FadeIn>

        {/* Project Cards */}
        <div className="flex flex-col gap-16 md:gap-20">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-white/[0.08] bg-[#131315] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    alt={project.title}
                    src={project.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7] transition-[filter] duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                    <span className="px-3 py-1.5 bg-white/[0.06] backdrop-blur-md text-foreground text-[10px] font-medium tracking-[0.2em] uppercase border border-white/[0.1]">
                      {project.tag}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 h-10 w-10 border border-white/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-[background-color,border-color] duration-500">
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-white group-hover:text-background transition-colors duration-500"
                    />
                  </div>

                  {/* Stats overlay — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="flex gap-6 sm:gap-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-[9px] uppercase tracking-widest text-white/50 mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="border-l border-white/[0.15] pl-5 md:pl-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4 group-hover:text-muted transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Pain point */}
                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted/60 block mb-1.5">
                        The problem
                      </span>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.pain}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted/60 block mb-1.5">
                        What we built
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.15em] text-muted/50 font-medium">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{project.client}</span>
                    </div>
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
