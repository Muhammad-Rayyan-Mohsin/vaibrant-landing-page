"use client";

import { motion } from "framer-motion";
import Markdown from "react-markdown";

interface ChatBubbleProps {
  role: "user" | "assistant";
  content: string;
}

function BotAvatar() {
  return (
    <div className="hidden sm:flex shrink-0 w-6 h-6 rounded-full bg-white/[0.08] border border-white/[0.12] items-center justify-center">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path
          d="M6 0L11.5 9.5H0.5L6 0Z"
          fill="currentColor"
          className="text-foreground/80"
        />
      </svg>
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="hidden sm:flex shrink-0 w-6 h-6 rounded-full bg-white/[0.08] border border-white/[0.12] items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="4" r="2.2" fill="currentColor" className="text-foreground/70" />
        <path
          d="M1.5 11C1.5 8.5 3.5 7 6 7C8.5 7 10.5 8.5 10.5 11"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="text-foreground/70"
        />
      </svg>
    </div>
  );
}

export function ChatBubble({ role, content }: ChatBubbleProps) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-end gap-2 items-start"
      >
        <div className="max-w-[88%] sm:max-w-[75%] md:max-w-[65%] px-3.5 py-2.5 rounded-xl text-xs leading-relaxed whitespace-pre-wrap bg-white/[0.08] border border-white/[0.1] text-foreground">
          {content}
        </div>
        <UserAvatar />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-start gap-2 items-start"
    >
      <BotAvatar />
      <div className="max-w-[88%] sm:max-w-[75%] md:max-w-[65%] px-3.5 py-3 rounded-xl bg-surface border border-border text-foreground">
        <Markdown
          components={{
            h1: ({ children }) => (
              <h3 className="text-xs font-semibold tracking-tight text-foreground mt-3 mb-1.5 first:mt-0">
                {children}
              </h3>
            ),
            h2: ({ children }) => (
              <h4 className="text-xs font-semibold tracking-tight text-foreground mt-3 mb-1.5 first:mt-0">
                {children}
              </h4>
            ),
            h3: ({ children }) => (
              <h5 className="text-xs font-semibold text-foreground mt-2.5 mb-1 first:mt-0">
                {children}
              </h5>
            ),
            p: ({ children }) => (
              <p className="text-xs leading-relaxed text-foreground/90 mb-2 last:mb-0">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-foreground/80">{children}</em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 decoration-muted/40 hover:decoration-foreground transition-colors duration-200"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="text-xs leading-relaxed text-foreground/90 mb-2 last:mb-0 space-y-1 pl-3.5 list-disc marker:text-muted/50">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="text-xs leading-relaxed text-foreground/90 mb-2 last:mb-0 space-y-1 pl-3.5 list-decimal marker:text-muted/50">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="pl-0.5">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-muted/30 pl-3 my-2 text-foreground/70 italic">
                {children}
              </blockquote>
            ),
            code: ({ className, children }) => {
              const isBlock = className?.includes("language-");
              if (isBlock) {
                return (
                  <code className="text-[11px] font-mono">{children}</code>
                );
              }
              return (
                <code className="px-1 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-foreground">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="my-2 last:mb-0 rounded-lg bg-black/40 border border-white/[0.06] px-3 py-2 overflow-x-auto text-foreground/80">
                {children}
              </pre>
            ),
            hr: () => (
              <hr className="my-3 border-border" />
            ),
            table: ({ children }) => (
              <div className="my-2 last:mb-0 overflow-x-auto rounded-lg border border-white/[0.08]">
                <table className="w-full text-xs">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-white/[0.04] text-foreground text-left">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted border-b border-white/[0.08]">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-2.5 py-1.5 border-b border-white/[0.04] text-foreground/80">
                {children}
              </td>
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
    </motion.div>
  );
}
