"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { ScrollReveal } from "./scroll-reveal";

const FAQS = [
  {
    q: "What does Vaibrant do?",
    a: "Vaibrant is an AI services agency that builds production-grade systems across three core areas: Autonomous AI Agents, Workflow & Platform Automation, and Data Intelligence & Growth. We don't ship demos — we ship live systems that operate inside your business from day one.",
  },
  {
    q: "What are Autonomous AI Agents and how do they work?",
    a: "Autonomous AI Agents are LLM-powered programs that plug into your existing stack and make decisions independently — without a human in the loop. For example, an agent might monitor your ad performance, detect underperforming campaigns, pause them, and reallocate budget, all while you sleep.",
  },
  {
    q: "How long does it take to deploy an AI system?",
    a: "Most clients see a working proof of concept within 2 weeks of kickoff. A full deployment with integrations, testing, and handoff typically takes 4–8 weeks depending on complexity. We move fast because we've built 13 production systems and know the patterns cold.",
  },
  {
    q: "What platforms does Vaibrant automate?",
    a: "We work across Make.com, n8n, OpenClaw, and Google Workspace. You can describe what you need in plain English — our AI agent builds the workflow, tests it, and deploys it live. From email sequences to full ERP integrations.",
  },
  {
    q: "How is Vaibrant different from other AI agencies?",
    a: "Most AI agencies build chatbots that answer questions. We build agents that make decisions. Our track record is 13 production systems shipped, not slide decks. And because we're a tight 4-person team, there are no account managers or handoffs — the people who talk to you build your system.",
  },
  {
    q: "What does a strategy call include?",
    a: "It's a free 30-minute session where we audit your current workflows, identify your top 3 automation opportunities, and map out a 90-day AI roadmap tailored to your business. No pitch deck, no sales script — just a concrete plan. We take on 3 new clients per month.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes — our Projects page showcases 13 systems including a Meta Ads Manager agent, a Cold Email Outreach Engine, and a full CAIO Platform. Client names are protected by NDAs, but we share full technical depth on architecture, stack, and outcomes.",
  },
  {
    q: "What industries do you serve?",
    a: "We work with businesses worldwide. Our systems have been deployed for clients in digital advertising, SaaS, e-commerce, customer support, and sales outreach. If your business has repetitive decision-making workflows, we can automate them.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <span className="inline-block px-3 py-1 mb-6 bg-white/[0.04] text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-foreground border border-white/[0.06]">
              FAQ
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
              QUESTIONS.
              <br />
              ANSWERED.
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion list — semantic dl for crawlers */}
        <dl className="divide-y divide-white/[0.06]">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <ScrollReveal key={item.q} offset={i * 4}>
                <div className="group">
                  <dt>
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-7 text-left cursor-pointer"
                    >
                      <span className="text-base md:text-lg font-semibold tracking-tight text-foreground leading-snug">
                        {item.q}
                      </span>
                      <span className="mt-0.5 shrink-0 text-muted transition-colors duration-200 group-hover:text-foreground">
                        {isOpen ? (
                          <Minus size={18} weight="bold" />
                        ) : (
                          <Plus size={18} weight="bold" />
                        )}
                      </span>
                    </button>
                  </dt>

                  {/* AnimatePresence for smooth mount/unmount */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.2, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-muted leading-relaxed text-base max-w-3xl">
                          {item.a}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
