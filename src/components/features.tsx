"use client";

import { Robot, GearSix, Megaphone, ChartLineUp, ArrowRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const services = [
  {
    icon: Robot,
    title: "LLM-Powered AI Agents",
    description:
      "We build autonomous agents that plug into your tools and act on your behalf. From a 40-tool Meta Ads agent to Discord bots that triage bugs and score churn risk — our agents make decisions, not just suggestions.",
    cta: "See Agent Builds",
  },
  {
    icon: GearSix,
    title: "Workflow Automation",
    description:
      "We connect your CRMs, email platforms, and internal tools into end-to-end automated pipelines using Make.com, n8n, and custom agents. Describe what you need in plain English — we build, test, and deploy the full workflow.",
    cta: "View Automation Stack",
  },
  {
    icon: Megaphone,
    title: "AI-Managed Ad Campaigns",
    description:
      "Our AI agent handles audience research, campaign creation, copywriting, A/B testing, and budget optimization across Meta Ads — autonomously. Agency-level media buying without the agency retainer.",
    cta: "Campaign Architecture",
  },
  {
    icon: ChartLineUp,
    title: "Intelligence Platforms",
    description:
      "Full-stack dashboards with multi-agent backends for client health scoring, support ticket analysis, predictive churn detection, and real-time sentiment classification — all streaming, all automated.",
    cta: "Platform Deep Dive",
  },
];

const meta = [
  { label: "Agents Deployed", value: "40+ Tool Integrations" },
  { label: "Platforms", value: "Meta, Google, Discord, Whop" },
  { label: "Stack", value: "Next.js / Mastra / LangGraph" },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <span className="inline-block font-mono text-[10px] tracking-[0.3em] text-foreground uppercase mb-4 border-l-2 border-foreground pl-3">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] max-w-2xl">
              AI that works for
              <br />
              <span className="text-muted">your business.</span>
            </h2>
          </div>
        </FadeIn>

        {/* 2x2 Bento Grid — sharp corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="group relative bg-[#131315] p-8 md:p-12 transition-all duration-500 hover:bg-[#19191b] h-full flex flex-col justify-between">
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="mb-8 inline-flex items-center justify-center w-12 h-12 bg-[#252628] border border-white/[0.08] group-hover:border-white/20 transition-colors duration-300">
                    <service.icon size={24} weight="regular" className="text-foreground" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* CTA link */}
                <div className="relative z-10 mt-10 md:mt-12 flex items-center gap-2 text-[10px] tracking-[0.2em] font-mono text-white/30 group-hover:text-white/70 transition-colors duration-300 uppercase cursor-pointer">
                  <span>{service.cta}</span>
                  <ArrowRight size={12} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>

                {/* Hover corner gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer meta strip */}
        <FadeIn delay={0.3}>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {meta.map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] tracking-widest text-muted/60 uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/10" />
              <span className="text-[10px] font-mono text-muted/50 tracking-widest">
                EST. 2024 / PROTOCOL ALPHA
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Background glow */}
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" aria-hidden="true" />
    </section>
  );
}
