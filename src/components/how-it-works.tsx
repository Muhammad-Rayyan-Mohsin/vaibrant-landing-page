"use client";

import { FadeIn } from "./fade-in";
import { ScrollReveal } from "./scroll-reveal";

const steps = [
  {
    number: "01",
    duration: "30 min",
    title: "Strategy Call",
    description:
      "We audit your workflows and identify the highest-ROI automation opportunity. Free, no commitment.",
  },
  {
    number: "02",
    duration: "2 weeks",
    title: "Proof of Concept",
    description:
      "We build a working prototype in your environment. You see real results before committing to a full build.",
  },
  {
    number: "03",
    duration: "Ongoing",
    title: "Deploy & Scale",
    description:
      "Full production deployment with monitoring, iteration, and ongoing support. Most clients see ROI within 30 days.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Top fade — blends from previous section */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom fade — blends into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="inline-block px-3 py-1 mb-6 bg-white/[0.04] text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-foreground border border-white/[0.06]">
              The Process
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
              FROM FIRST CALL
              <br />
              TO LIVE SYSTEM.
            </h2>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
              Three steps. No ambiguity. You know exactly what happens at every
              stage — and you only commit when you&apos;ve seen it work.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <li key={step.number} className="relative bg-[#0a0a0a]">
              <FadeIn delay={i * 0.12} direction="up">
                <div className="group relative p-8 md:p-10 h-full flex flex-col overflow-hidden transition-[background-color] duration-500 hover:bg-[#111113]">
                  {/* Ghost number — decorative background */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 -right-2 font-mono font-bold text-[7rem] md:text-[9rem] leading-none text-white/[0.04] select-none"
                  >
                    {step.number}
                  </span>

                  {/* Step indicator row */}
                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <span className="font-mono text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-foreground/30">
                      Step {step.number}
                    </span>
                    <span className="flex-1 h-px bg-white/[0.06]" />
                    <span className="font-mono text-[0.6rem] tracking-widest uppercase text-muted/40">
                      {step.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4 relative z-10">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-base leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Arrow connector — visible on desktop between steps, hidden on last */}
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden md:flex absolute top-1/2 -right-[1px] -translate-y-1/2 z-30 items-center justify-center w-8 h-8"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/20"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>

        {/* Bottom note */}
        <FadeIn delay={0.4} direction="up">
          <p className="mt-8 text-center text-[0.7rem] font-mono uppercase tracking-[0.25em] text-muted/40">
            No retainers. No hidden fees. Pay only when you&apos;re confident it works.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
