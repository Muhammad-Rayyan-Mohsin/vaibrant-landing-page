"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "vaibrant-chat-messages";

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveMessages(messages: Message[]) {
  try {
    // Only persist completed messages (non-empty)
    const completed = messages.filter((m) => m.content !== "");
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  } catch {
    // storage full or unavailable
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hydrated = useRef(false);

  // Load from sessionStorage on mount
  useEffect(() => {
    setMessages(loadMessages());
    hydrated.current = true;
  }, []);

  // Persist to sessionStorage on change (after hydration)
  useEffect(() => {
    if (hydrated.current) saveMessages(messages);
  }, [messages]);

  // Auto-scroll to bottom on new content
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(
    async (text: string) => {
      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
      };
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
      };

      const updatedMessages = [...messages, userMsg];
      setMessages([...updatedMessages, assistantMsg]);
      setInput("");
      setIsStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map(({ role, content }) => ({
              role,
              content,
            })),
          }),
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Request failed");

        const reader = res.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

          for (const line of lines) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const { content } = JSON.parse(data);
              if (content) {
                setMessages((prev) => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + content,
                  };
                  return updated;
                });
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              content: "Sorry, something went wrong. Please try again.",
            };
            return updated;
          });
        }
      } finally {
        setIsStreaming(false);
        abortRef.current = null;
      }
    },
    [messages]
  );

  function handleSend() {
    if (!input.trim() || isStreaming) return;
    sendMessage(input.trim());
  }

  function handleStarterClick(prompt: string) {
    sendMessage(prompt);
  }

  return (
    <div className="relative flex flex-col h-dvh bg-background overflow-hidden">
      {/* Ambient glow layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Top-right cool glow */}
        <div
          className="absolute -top-[20%] -right-[15%] w-[60%] h-[60%] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(120,119,198,0.8), transparent 70%)",
          }}
        />
        {/* Bottom-left warm glow */}
        <div
          className="absolute -bottom-[15%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(180,140,255,0.7), transparent 70%)",
          }}
        />
        {/* Center subtle vignette */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        {/* Noise texture overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <filter id="chat-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#chat-noise)" />
        </svg>
      </div>

      {/* Back button */}
      <div className="relative z-10 shrink-0 px-4 md:px-6 pt-3 pb-1">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={14} weight="bold" />
          <span>Back</span>
        </a>
      </div>

      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        <ChatMessages
          ref={scrollRef}
          messages={messages}
          isStreaming={isStreaming}
          onStarterClick={handleStarterClick}
        />

        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
          disabled={isStreaming}
        />
      </div>
    </div>
  );
}
