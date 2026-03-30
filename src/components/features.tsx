"use client";

import { Brain, Robot, ChartLineUp, FlowArrow } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const features = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description:
      "Fine-tuned models trained on your proprietary data. Purpose-built for your domain, not generic off-the-shelf solutions.",
  },
  {
    icon: Robot,
    title: "Intelligent Automation",
    description:
      "End-to-end workflow automation powered by AI agents. Eliminate repetitive tasks and let your team focus on high-value work.",
  },
  {
    icon: ChartLineUp,
    title: "AI Strategy & Consulting",
    description:
      "Identify the highest-impact AI opportunities in your business. We map your data, processes, and goals to a concrete roadmap.",
  },
  {
    icon: FlowArrow,
    title: "Seamless Integration",
    description:
      "Deploy AI into your existing stack without disruption. We connect to your CRMs, ERPs, and internal tools out of the box.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            What we do
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tighter leading-tight max-w-xl">
            AI that works
            <br />
            for your business.
          </h2>
        </FadeIn>

        {/* 2-column zig-zag grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 rounded-[2rem] overflow-hidden border border-border/50">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-10 group transition-colors duration-300 hover:bg-surface/50">
                <feature.icon
                  size={28}
                  weight="duotone"
                  className="text-foreground mb-6"
                />
                <h3 className="text-lg font-medium tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-[45ch]">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
