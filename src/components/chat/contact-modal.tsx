"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CalendarBlank,
  EnvelopeSimple,
  ArrowLeft,
} from "@phosphor-icons/react";
import { useEffect, useState, useCallback } from "react";

// TODO: Replace these with your real links
const CALENDLY_URL = "https://calendly.com/vaibrant";
const EMAIL = "info@vaibrant.co";

// Calendly embed with dark theme colors matching the site
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?embed_type=Inline&embed_domain=1&hide_gdpr_banner=1&background_color=111111&text_color=fafafa&primary_color=fafafa`;

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleClose = useCallback(() => {
    setShowCalendly(false);
    setIframeLoaded(false);
    onClose();
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setShowCalendly(false);
      setIframeLoaded(false);
    }
  }, [open]);

  const contactOptions = [
    {
      icon: EnvelopeSimple,
      label: "Send an Email",
      description: EMAIL,
      href: `mailto:${EMAIL}`,
      color:
        "bg-white/[0.06] text-foreground hover:bg-white/[0.1] border border-white/[0.1]",
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={handleClose}
          >
            <motion.div
              layout
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border border-white/[0.1] bg-[#111111] shadow-2xl ${
                showCalendly
                  ? "w-full max-w-md p-0 overflow-hidden"
                  : "w-full max-w-xs p-5"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Calendly Embed View ── */}
              <AnimatePresence mode="wait">
                {showCalendly ? (
                  <motion.div
                    key="calendly"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Calendly Header */}
                    <div className="flex items-center gap-3 px-4 pt-4 pb-2">
                      <button
                        onClick={() => {
                          setShowCalendly(false);
                          setIframeLoaded(false);
                        }}
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] text-muted hover:text-foreground hover:bg-white/[0.1] transition-all duration-200"
                      >
                        <ArrowLeft size={16} weight="bold" />
                      </button>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold tracking-tight text-foreground">
                          Book a Call
                        </h3>
                        <p className="text-[10px] text-muted leading-tight mt-0.5">
                          Free 30-min strategy session
                        </p>
                      </div>
                      <button
                        onClick={handleClose}
                        className="text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <X size={18} weight="bold" />
                      </button>
                    </div>

                    {/* Calendly iframe */}
                    <div className="relative w-full" style={{ height: "480px" }}>
                      {/* Loading spinner */}
                      {!iframeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                            <span className="text-xs text-muted">
                              Loading calendar…
                            </span>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={CALENDLY_EMBED_URL}
                        title="Schedule a call with Vaibrant"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        onLoad={() => setIframeLoaded(true)}
                        className={`transition-opacity duration-300 ${
                          iframeLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          borderRadius: "0 0 1rem 1rem",
                          colorScheme: "dark",
                        }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Close button */}
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors duration-200"
                    >
                      <X size={18} weight="bold" />
                    </button>

                    {/* Header */}
                    <div className="mb-5">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted/50">
                        Get in touch
                      </span>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                        Let&apos;s talk about your AI roadmap
                      </h3>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        Pick whichever works best for you.
                      </p>
                    </div>

                    {/* Options */}
                    <div className="flex flex-col gap-2.5">
                      {/* Book a Call — opens inline Calendly */}
                      <button
                        onClick={() => setShowCalendly(true)}
                        className="group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-white text-black hover:bg-white/90 text-left cursor-pointer"
                      >
                        <CalendarBlank
                          size={20}
                          weight="fill"
                          className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-medium leading-tight">
                            Book a Call
                          </div>
                          <div className="text-[10px] opacity-60 leading-tight mt-0.5 truncate">
                            Free 30-min strategy session
                          </div>
                        </div>
                      </button>

                      {/* Email — external link */}
                      {contactOptions.map((opt) => (
                        <a
                          key={opt.label}
                          href={opt.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${opt.color}`}
                        >
                          <opt.icon
                            size={20}
                            weight="fill"
                            className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-medium leading-tight">
                              {opt.label}
                            </div>
                            <div className="text-[10px] opacity-60 leading-tight mt-0.5 truncate">
                              {opt.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
