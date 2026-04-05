"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Robot,
  ChartLineUp,
  Envelope,
  VideoCamera,
  MagnifyingGlass,
  ChatCircleDots,
  ShieldCheck,
  Heartbeat,
  TagChevron,
  Bell,
  GoogleLogo,
  GearSix,
} from "@phosphor-icons/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { allProjects, getFeaturedProject } from "@/lib/projects";
import type { ElementType } from "react";

const filters = [
  "All",
  "AI Agents",
  "Automation",
  "Analytics",
  "Managed Services",
];

const iconMap: Record<string, ElementType> = {
  "cold-email-engine": Envelope,
  "caio-intelligence-platform": Brain,
  "yt-trends-dashboard": VideoCamera,
  "content-scraping-search-api": MagnifyingGlass,
  "discord-intelligence-viewer": ChatCircleDots,
  "bug-alert-bot": Bell,
  "client-intelligence-listener": Heartbeat,
  "whop-support-classifier": TagChevron,
  "predictive-churn-monitor": ChartLineUp,
  "google-workspace-ai-automation": GoogleLogo,
  "ai-automation-builder": GearSix,
  "ai-meta-ads-service": Robot,
};

const featured = getFeaturedProject();
const gridProjects = allProjects.filter((p) => !p.featured);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? gridProjects
      : gridProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Hero */}
          <section className="mb-24 md:mb-32 grid md:grid-cols-2 gap-12 items-end">
            <FadeIn>
              <div>
                <span className="inline-block font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-6 border-l-2 border-foreground pl-3">
                  Project Archive
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
                  Proof of
                  <br />
                  <span className="text-muted">Intelligence</span>
                </h1>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-muted text-lg leading-relaxed font-light border-l border-border pl-6 max-w-md pb-2">
                Every project listed here is a production system we built and
                deployed. LLM agents, automation pipelines, and intelligence
                platforms — operating in the real world.
              </p>
            </FadeIn>
          </section>

          {/* Filters */}
          <FadeIn>
            <section className="mb-16">
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 text-xs font-mono tracking-wide transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-foreground text-background"
                        : "bg-transparent text-muted border border-white/[0.08] hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Featured Case Study */}
          <FadeIn>
            <section className="mb-24 md:mb-32">
              <div className="group grid md:grid-cols-12 gap-0 overflow-hidden bg-[#131315] border border-white/[0.08]">
                <div className="md:col-span-7 relative h-[360px] md:h-[500px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#131315] via-transparent to-transparent" />
                </div>

                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-foreground" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-foreground uppercase">
                      Featured Build
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight mb-6">
                    {featured.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {featured.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {featured.stats?.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl md:text-3xl font-mono font-semibold tracking-tighter text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-muted mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${featured.slug}`}
                    className="group/link inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors duration-300 uppercase"
                  >
                    View Details
                    <ArrowRight
                      size={12}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Project Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden mb-24 md:mb-32">
            {filteredProjects.map((project, i) => {
              const Icon = iconMap[project.slug];
              return (
                <FadeIn key={project.title} delay={i * 0.06}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group bg-[#131315] p-8 flex flex-col h-full transition-[background-color] duration-500 hover:bg-[#19191b] block"
                  >
                    {/* Image */}
                    <div className="h-48 mb-8 overflow-hidden bg-black relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500"
                      />
                      {Icon && (
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-white/[0.06] border border-white/[0.08]">
                            <Icon
                              size={20}
                              weight="fill"
                              className="text-foreground"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold tracking-tight mb-6">
                      {project.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                          Objective
                        </span>
                        <p className="text-xs text-muted/80 leading-relaxed">
                          {project.objective}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                          Outcome
                        </span>
                        <p className="text-xs text-muted/80 leading-relaxed">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </section>

          {/* CTA */}
          <FadeIn>
            <section className="relative bg-[#131315] border border-white/[0.08] p-10 md:p-16 overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                aria-hidden="true"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 799c43.6 0 87.2-4.1 129.5-12.2C256.4 761.6 373.1 701 480 620c75.3-57 141.2-126.8 196-206 43.6-63 77.2-132.3 100-205C789.7 165.7 797.3 122.9 800 80V0M0 599c30.4 0 60.8-2.3 90.3-6.8 88.5-13.6 170.1-55.9 244.7-112.5C417 416.7 483.5 334.8 544 246c30.1-44.2 55.4-91.4 75.3-141.4 13.7-34.6 23.5-70.3 29.3-104.6H0v600z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "cover",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#131315] via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div className="max-w-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted">
                    Next step
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
                    Still doing this manually?
                  </h2>
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-[50ch]">
                    We build and ship AI systems like these every month — 13
                    deployed and counting.{" "}
                    <a href="/team" className="text-foreground hover:text-muted transition-colors underline underline-offset-2">
                      Meet the team behind the builds.
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[240px]">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-foreground text-background transition-transform duration-200 active:scale-[0.97]"
                  >
                    Scope Your AI Build — Free
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                  <div className="flex items-center gap-2 justify-center">
                    <ShieldCheck
                      size={14}
                      weight="bold"
                      className="text-muted"
                    />
                    <span className="text-[10px] font-mono text-muted tracking-widest uppercase">
                      NDA Available on Request
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
