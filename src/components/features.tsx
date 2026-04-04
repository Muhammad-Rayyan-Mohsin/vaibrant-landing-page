"use client";

import { Robot, Lightning, ChartLineUp, ArrowRight } from "@phosphor-icons/react";
import { ScrollReveal } from "./scroll-reveal";

const TOPO_SVG = `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 799c43.6 0 87.2-4.1 129.5-12.2C256.4 761.6 373.1 701 480 620c75.3-57 141.2-126.8 196-206 43.6-63 77.2-132.3 100-205C789.7 165.7 797.3 122.9 800 80V0M0 599c30.4 0 60.8-2.3 90.3-6.8 88.5-13.6 170.1-55.9 244.7-112.5C417 416.7 483.5 334.8 544 246c30.1-44.2 55.4-91.4 75.3-141.4 13.7-34.6 23.5-70.3 29.3-104.6H0v600z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`;

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top fade — blends from previous section */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom fade — blends into CTA */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
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
        <ScrollReveal>
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
        </ScrollReveal>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-stretch">

          {/* Card 1: Autonomous AI Agents (7-col) */}
          <ScrollReveal className="lg:col-span-7" offset={10}>
            <div className="group relative overflow-hidden rounded-2xl bg-[#111113] p-8 md:p-12 h-full transition-[background-color] duration-500 hover:bg-[#151517]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 md:mb-12 flex items-center justify-between">
                  <Robot size={32} weight="regular" className="text-foreground" />
                  <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                    Core // 01
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                  Autonomous AI Agents
                </h3>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-md">
                  Custom LLM-powered agents that plug into your stack and operate
                  independently. They manage ad campaigns, triage support tickets,
                  classify data, monitor for churn signals, and execute multi-step
                  workflows — making real decisions, not just suggestions.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-12 text-[10px] font-mono uppercase tracking-widest text-muted/50">
                  <span>Ad Management</span>
                  <span>Support Triage</span>
                  <span>Lead Scoring</span>
                  <span>Risk Detection</span>
                </div>

                <div className="mt-auto">
                  <a href="/projects" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    See Agent Builds
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Workflow & Platform Automation (5-col) */}
          <ScrollReveal className="lg:col-span-5" offset={30}>
            <div className="group relative overflow-hidden rounded-2xl bg-[#161618] p-8 md:p-12 h-full transition-[background-color] duration-500 hover:bg-[#1a1a1d]">
              <div
                className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: TOPO_SVG, backgroundSize: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-[#161618]/80 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 md:mb-12 flex items-center justify-between">
                  <Lightning size={32} weight="regular" className="text-foreground" />
                  <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                    Core // 02
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">
                  Workflow &amp; Platform Automation
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  End-to-end automation across Make.com, n8n, OpenClaw, and
                  Google Workspace. Describe what you need in plain English —
                  our AI agent builds the workflow, tests it, and deploys it live.
                  From email sequences to full ERP integrations.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-12 text-[10px] font-mono uppercase tracking-widest text-muted/50">
                  <span>Make.com</span>
                  <span>n8n</span>
                  <span>OpenClaw</span>
                  <span>Google Workspace</span>
                </div>

                <div className="mt-auto">
                  <a href="/projects" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    View Automation Stack
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Data Intelligence & Growth (Full width) */}
          <ScrollReveal className="lg:col-span-12" offset={20}>
            <div className="group relative overflow-hidden rounded-2xl bg-[#111113] p-8 md:p-12 transition-[background-color] duration-500 hover:bg-[#151517]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] -mt-32 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/2">
                  <div className="mb-8 flex items-center justify-between">
                    <ChartLineUp size={32} weight="regular" className="text-foreground" />
                    <span className="text-[0.65rem] font-semibold tracking-widest text-muted/40 uppercase">
                      Core // 03
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                    Data Intelligence &amp; Growth
                  </h3>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                    Turn scattered signals into business leverage. We build systems
                    that monitor, classify, and act on your data in real time —
                    from social media analytics and content trend detection to
                    predictive churn scoring and automated outreach engines.
                  </p>

                  <a href="/projects" className="group/link inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-widest uppercase transition-colors hover:text-muted">
                    Explore Intelligence Systems
                    <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>

                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
                    <div className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground mb-1">70%</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted/60">Social hours saved</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
                    <div className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground mb-1">5</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted/60">Platforms covered</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
                    <div className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground mb-1">0-100</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted/60">Churn risk scores</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
                    <div className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground mb-1">Real-time</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted/60">Signal processing</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
