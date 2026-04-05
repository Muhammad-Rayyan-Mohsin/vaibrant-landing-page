"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { FadeIn } from "./fade-in";

const STORAGE_KEY = "vaibrant_subscriber_email";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check localStorage on mount — show success state if already subscribed
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSubscribed(true);
    } catch {
      // localStorage unavailable (SSR / private browsing) — do nothing
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    try {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {
      // Silently continue if localStorage is unavailable
    }

    setSubscribed(true);
  }

  return (
    <section
      aria-label="Newsletter signup"
      className="border-y border-white/[0.06] py-16"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn direction="up" delay={0.05}>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Left — copy */}
            <div className="md:max-w-sm">
              <span className="mb-4 inline-block border border-white/[0.06] bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-foreground">
                Stay Sharp
              </span>
              <h2 className="mb-2 text-2xl font-bold tracking-tighter md:text-3xl">
                The AI Ops Briefing
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                One AI trend, one automation idea, one Vaibrant project insight.
                Every Tuesday.
              </p>
            </div>

            {/* Right — form or success */}
            <div className="md:min-w-[360px]">
              {subscribed ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>You&apos;re in. See you Tuesday.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  role="form"
                  aria-label="Email subscription form"
                  noValidate
                >
                  <div className="flex items-stretch">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      ref={inputRef}
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="min-w-0 flex-1 rounded-l-full border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors duration-200 focus:border-white/[0.18] focus:bg-white/[0.06]"
                      aria-required="true"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-r-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity duration-200 hover:opacity-85 active:opacity-70"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-2.5 pl-1 text-[10px] text-muted/50">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
