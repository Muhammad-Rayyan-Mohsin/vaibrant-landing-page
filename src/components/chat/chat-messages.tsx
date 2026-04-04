"use client";

import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Robot, GearSix, Megaphone, ChatCircleDots } from "@phosphor-icons/react";
import { ChatBubble } from "./chat-bubble";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const starters = [
  { icon: Robot, text: "I run a 20-person agency and we're drowning in manual work" },
  { icon: GearSix, text: "My team spends hours on reporting every week" },
  { icon: Megaphone, text: "We're scaling but can't hire fast enough to keep up" },
  { icon: ChatCircleDots, text: "I want to explore AI but don't know where to start" },
];

interface ChatMessagesProps {
  messages: Message[];
  isStreaming: boolean;
  onStarterClick: (prompt: string) => void;
}

export const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(
  function ChatMessages({ messages, isStreaming, onStarterClick }, ref) {
    return (
      <div ref={ref} className="flex-1 overflow-y-auto px-4 md:px-6" data-lenis-prevent>
        <div className="mx-auto max-w-2xl py-6">
          <AnimatePresence mode="wait">
            {messages.length === 0 ? (
              <motion.div
                key="starters"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center min-h-[60vh]"
              >
                <div className="mb-2">
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted/50">
                    Vaibrant AI
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tighter text-foreground mb-1.5 text-center">
                  Where&apos;s your bottleneck?
                </h2>
                <p className="text-xs text-muted mb-8 text-center max-w-sm">
                  Tell us about your business. We&apos;ll find what&apos;s slowing
                  you down and show you exactly how AI can fix it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
                  {starters.map((starter) => (
                    <button
                      key={starter.text}
                      onClick={() => onStarterClick(starter.text)}
                      className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-left text-xs text-muted hover:text-foreground hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-200"
                    >
                      <starter.icon
                        size={15}
                        weight="regular"
                        className="text-muted/60 group-hover:text-foreground shrink-0 transition-colors duration-200"
                      />
                      <span className="leading-snug">{starter.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="messages"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                {messages
                  .filter((msg) => msg.content !== "")
                  .map((msg) => (
                    <ChatBubble
                      key={msg.id}
                      role={msg.role}
                      content={msg.content}
                    />
                  ))}

                {/* Streaming indicator */}
                {isStreaming &&
                  messages[messages.length - 1]?.content === "" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-1 px-4 py-2"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1 h-1 rounded-full bg-muted/60"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);
