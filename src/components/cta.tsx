"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

export function CTA() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <div className="relative rounded-[2.5rem] border border-border/50 bg-surface/30 p-10 md:p-16 lg:p-20 overflow-hidden">
            {/* Topographic background image */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              aria-hidden="true"
            >
              <img
                src="/topo-lines.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* Edge fade overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-surface/60" aria-hidden="true" />

            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                Let&apos;s talk
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tighter leading-tight">
                Your AI
                <br />
                advantage starts here.
              </h2>
              <p className="mt-6 text-base text-muted leading-relaxed max-w-[45ch]">
                Book a free strategy call. We&apos;ll audit your workflows, identify
                automation opportunities, and map out a 90-day AI roadmap for your business.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-foreground text-background transition-transform duration-200 active:scale-[0.97]"
                >
                  Book a Call
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground transition-colors duration-200 hover:bg-surface"
                >
                  See Case Studies
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
