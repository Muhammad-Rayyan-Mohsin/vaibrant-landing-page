"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "@phosphor-icons/react";
import { useEffect, useState, useRef, useCallback } from "react";

const LS_DISMISSED_KEY = "vaibrant_exit_popup_dismissed";
const LS_SUBSCRIBER_KEY = "vaibrant_subscriber_email";
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const TRIGGER_DELAY_MS = 5000;

function shouldShowPopup(): boolean {
  try {
    // Never show to existing subscribers
    if (localStorage.getItem(LS_SUBSCRIBER_KEY)) return false;

    const raw = localStorage.getItem(LS_DISMISSED_KEY);
    if (!raw) return true;

    const ts = parseInt(raw, 10);
    if (isNaN(ts)) return true;

    return Date.now() - ts > DISMISS_TTL_MS;
  } catch {
    return false;
  }
}

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const hasTriggeredRef = useRef(false);
  const readyRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsVisible(true);
    // Focus trap: shift focus into modal after animation
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  }, []);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    try {
      localStorage.setItem(LS_DISMISSED_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }, []);

  // Mobile/touch detection + delay gate
  useEffect(() => {
    // Skip entirely on touch/mobile devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) return;
    if (!shouldShowPopup()) return;

    const timer = setTimeout(() => {
      readyRef.current = true;
    }, TRIGGER_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  // Exit-intent: top-edge mouse leave
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (!readyRef.current) return;
      if (e.clientY <= 0) {
        open();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!isVisible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();

      // Focus trap within modal
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, input, a, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isVisible, dismiss]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      localStorage.setItem(LS_SUBSCRIBER_KEY, trimmed);
    } catch {
      // ignore
    }

    setSubmitted(true);

    // Auto-close after success state is shown
    setTimeout(() => {
      setIsVisible(false);
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            aria-modal="true"
            role="dialog"
            aria-label="Weekly AI Briefing subscription"
          >
            <div
              ref={modalRef}
              className="relative w-full max-w-sm rounded-2xl border border-white/[0.1] bg-[#111111] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                ref={closeButtonRef}
                onClick={dismiss}
                className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-lg text-muted hover:text-foreground hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Close popup"
              >
                <X size={16} weight="bold" />
              </button>

              {/* Content — success or form */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col items-center text-center py-3 gap-3"
                  >
                    <CheckCircle
                      size={36}
                      weight="fill"
                      className="text-foreground opacity-90"
                    />
                    <p className="text-base font-semibold tracking-tight text-foreground leading-snug">
                      You&apos;re in. First briefing drops Tuesday.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {/* Label */}
                    <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-muted/50 mb-3">
                      Weekly AI Briefing
                    </span>

                    {/* Headline */}
                    <h2 className="text-lg font-semibold tracking-tight text-foreground leading-snug mb-1.5">
                      Get AI automation insights every Tuesday
                    </h2>

                    {/* Subtext */}
                    <p className="text-xs text-muted leading-relaxed mb-5">
                      One trend. One idea. One project spotlight. No spam.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                      {/* sr-only label for accessibility */}
                      <label htmlFor="exit-popup-email" className="sr-only">
                        Email address
                      </label>

                      <input
                        id="exit-popup-email"
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        placeholder="your@email.com"
                        autoComplete="email"
                        className={`w-full rounded-lg border bg-white/[0.04] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/40 outline-none transition-colors duration-200 focus:bg-white/[0.06] mb-3 ${
                          error
                            ? "border-red-500/50 focus:border-red-500/70"
                            : "border-white/[0.1] focus:border-white/[0.2]"
                        }`}
                      />

                      {error && (
                        <p className="text-[10px] text-red-400/80 mb-3 -mt-1">
                          {error}
                        </p>
                      )}

                      {/* Subscribe CTA */}
                      <button
                        type="submit"
                        className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-black tracking-tight transition-opacity duration-200 hover:opacity-90 active:opacity-80 cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </form>

                    {/* Decline */}
                    <div className="mt-3.5 text-center">
                      <button
                        type="button"
                        onClick={dismiss}
                        className="text-[11px] text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
                      >
                        No thanks
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
