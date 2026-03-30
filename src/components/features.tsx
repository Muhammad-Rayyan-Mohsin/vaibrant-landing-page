"use client";

import { Robot, GearSix, Megaphone, ArrowRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

export function Features() {
  return (
    <section id="features" className="relative pt-0 pb-24 md:pb-32 overflow-hidden">
      {/* Top gradient bridge — blends hero black into section */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Topographic SVG pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 799c43.6 0 87.2-4.1 129.5-12.2C256.4 761.6 373.1 701 480 620c75.3-57 141.2-126.8 196-206 43.6-63 77.2-132.3 100-205C789.7 165.7 797.3 122.9 800 80V0M0 599c30.4 0 60.8-2.3 90.3-6.8 88.5-13.6 170.1-55.9 244.7-112.5C417 416.7 483.5 334.8 544 246c30.1-44.2 55.4-91.4 75.3-141.4 13.7-34.6 23.5-70.3 29.3-104.6H0v600z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Top-right glow */}
      <div className="pointer-events-none absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-white/[0.03] blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <span className="inline-block px-3 py-1 mb-6 bg-white/[0.04] text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-foreground border border-white/[0.06]">
              Capabilities&ensp;|&ensp;Intelligence
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
              ADVANCED
              <br />
              ARCHITECTURES.
            </h2>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
              We engineer the cognitive infrastructure your business needs to operate
              at scale. Our systems don&apos;t just assist — they decide, act, and adapt.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch">

          {/* Card 1: LLM-Powered AI Agents (7-col) */}
          <FadeIn className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl bg-[#111113] p-8 md:p-12 h-full transition-[background-color] duration-500 hover:bg-[#151517]">
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 md:mb-12 flex items-center justify-between">
                  <Robot size={32} weight="regular" className="text-foreground" />
                  <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                    Agents // 01
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                  LLM-Powered AI Agents
                </h3>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-md">
                  Autonomous agents with 40+ tool integrations that plug into
                  your stack and act on your behalf. From Meta Ads management
                  to Discord triage bots — they make decisions, not suggestions.
                </p>

                <div className="mt-auto">
                  <a href="#" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    See Agent Builds
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Workflow Automation (5-col) */}
          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl bg-[#161618] p-8 md:p-12 h-full transition-[background-color] duration-500 hover:bg-[#1a1a1d]">
              {/* Image overlay */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
                <img
                  src="/topo-lines.png"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-[#161618]/80 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 md:mb-12 flex items-center justify-between">
                  <GearSix size={32} weight="regular" className="text-foreground" />
                  <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                    Automation // 02
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">
                  Workflow Automation
                </h3>
                <p className="text-muted leading-relaxed mb-10 md:mb-12">
                  End-to-end pipelines built on Make.com, n8n, and custom
                  agents. Describe what you need in plain English — we
                  build it, test it, deploy it live.
                </p>

                <div className="mt-auto">
                  <a href="#" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    View Automation Stack
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: AI-Managed Ad Campaigns (Full width) */}
          <FadeIn delay={0.2} className="lg:col-span-12">
            <div className="group relative overflow-hidden rounded-2xl bg-[#111113] p-8 md:p-12 transition-[background-color] duration-500 hover:bg-[#151517]">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image side */}
                <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-white/[0.04] blur-[60px] rounded-full pointer-events-none" />
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-white/[0.05]">
                    <img
                      src="/proj-meta-ads.png"
                      alt="Meta Ads AI visualization"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                    />
                  </div>
                </div>

                {/* Text side */}
                <div className="md:w-1/2">
                  <div className="mb-8 flex items-center justify-between">
                    <Megaphone size={32} weight="regular" className="text-foreground" />
                    <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                      Campaigns // 03
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                    AI-Managed Ad Campaigns
                  </h3>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                    Our agent handles audience research, campaign creation,
                    copywriting, A/B testing, and budget optimization across
                    Meta Ads — autonomously. Agency-level media buying
                    without the agency retainer.
                  </p>

                  <a href="#" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    Campaign Architecture
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
