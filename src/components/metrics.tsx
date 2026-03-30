"use client";

import { FadeIn } from "./fade-in";
import { CountUp } from "./count-up";

const stats = [
  { target: 63, suffix: "%", decimals: 0, label: "Avg Cost Reduction" },
  { target: 140, suffix: "+", decimals: 0, label: "AI Systems Deployed" },
  { target: 2.4, suffix: "M", decimals: 1, label: "Automated Decisions / Day" },
  { target: 18, suffix: "", decimals: 0, label: "Industries Served" },
];

export function Metrics() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left text block */}
          <div className="md:col-span-5">
            <FadeIn>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                Impact
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tighter leading-tight">
                Results that
                <br />
                compound.
              </h2>
              <p className="mt-6 text-base text-muted leading-relaxed max-w-[45ch]">
                We measure everything. Our AI systems deliver measurable ROI
                from day one, not vague promises about future potential.
              </p>
            </FadeIn>
          </div>

          {/* Right stats */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-2 gap-px bg-border/50 rounded-[2rem] overflow-hidden border border-border/50">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.08}>
                  <div className="bg-background p-8 md:p-10">
                    <CountUp
                      target={stat.target}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      className="block text-3xl md:text-4xl font-semibold tracking-tighter font-mono text-foreground"
                    />
                    <span className="mt-2 block text-sm text-muted">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
