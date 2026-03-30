"use client";

import { Brain, Robot, ChartLineUp, FlowArrow, ArrowRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const services = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description:
      "Bespoke neural architectures designed for proprietary data environments. We engineer precision-tuned intelligence that evolves with your unique operational requirements.",
    cta: "Explore Capabilities",
  },
  {
    icon: Robot,
    title: "Intelligent Automation",
    description:
      "Autonomous workflows that transcend traditional RPA. We deploy cognitive agents capable of complex decision-making, reducing latency across your entire value chain.",
    cta: "View Automation Stack",
  },
  {
    icon: ChartLineUp,
    title: "AI Strategy & Consulting",
    description:
      "High-level architectural roadmaps for enterprise-wide digital transformation. We bridge the gap between abstract AI potential and tangible ROI-driven execution.",
    cta: "Strategic Framework",
  },
  {
    icon: FlowArrow,
    title: "Seamless Integration",
    description:
      "Low-friction deployment across existing legacy systems and cloud infrastructures. Our integration protocols ensure high availability and minimal operational disruption.",
    cta: "Technical Specs",
  },
];

const meta = [
  { label: "Architecture", value: "Distributed Neural Core" },
  { label: "Latency", value: "< 14ms Global Avg." },
  { label: "Compliance", value: "Enterprise Grade v2.0" },
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
