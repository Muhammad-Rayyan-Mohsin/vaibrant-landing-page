"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Robot,
  ChartLineUp,
  Envelope,
  VideoCamera,
  MagnifyingGlass,
  ChatCircleDots,
  ShieldCheck,
  Heartbeat,
  TagChevron,
  Bell,
  GoogleLogo,
  GearSix,
} from "@phosphor-icons/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

const filters = [
  "All",
  "AI Agents",
  "Automation",
  "Analytics",
  "Managed Services",
];

const featured = {
  title: "Meta Ads Manager",
  description:
    "Full-stack Facebook/Instagram ad management system powered by an LLM agent with 40+ tools that autonomously creates campaigns, generates ad creatives, analyzes performance metrics, and recommends optimizations through natural language conversation.",
  stats: [
    { value: "40+", label: "Agent Tools" },
    { value: "Real-time", label: "ROAS Analytics" },
  ],
  tags: ["LLM Agent", "Meta Graph API", "OAuth", "Redis"],
  category: "AI Agents",
  image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-ads.png",
};

const projects = [
  {
    icon: Envelope,
    title: "Cold Email Engine",
    objective:
      "Multi-step cold email campaign system with context-aware LLM agent for personalized outreach at scale.",
    outcome:
      "AI-driven sentiment classification, automated lead scoring (hot/warm/cold), domain health verification (SPF/DKIM/DMARC), 14-day warmup scheduler, and unified inbox — backed by 177 automated tests.",
    tags: ["LLM Agent", "SMTP/IMAP", "HMAC Tracking"],
    category: "AI Agents",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/cold-email.png",
  },
  {
    icon: Brain,
    title: "CAIO Intelligence Platform",
    objective:
      "Full-stack intelligence dashboard for client success using multiple specialized LLM agents.",
    outcome:
      "Deployed agents for support ticket analysis, client health assessment, and automated risk reporting — with BullMQ worker pipelines, Clerk auth, and real-time response streaming.",
    tags: ["Mastra AI", "LangGraph", "Next.js 16"],
    category: "AI Agents",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/caio-platform.png",
  },
  {
    icon: VideoCamera,
    title: "YT Trends Dashboard",
    objective:
      "YouTube trending video discovery platform with keyword search, category/region filtering, and duration segmentation.",
    outcome:
      "Integrated LLM agent via OpenRouter for AI-powered trend analysis, content pattern recognition, and actionable insights on viral video performance.",
    tags: ["YouTube Data API", "OpenRouter", "LLM Agent"],
    category: "Analytics",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/yt-trends.png",
  },
  {
    icon: MagnifyingGlass,
    title: "Content Scraping & Search API",
    objective:
      "Multi-platform content scraping and semantic search API with Redis job queues and priority scheduling.",
    outcome:
      "Vector embedding-based semantic search across TikTok, YouTube, and Reddit — consumed by Mastra AI agents for automated storyboard creation. Gemini AI for video classification.",
    tags: ["Redis Queues", "Gemini AI", "Bunny CDN"],
    category: "AI Agents",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/scrape-search.png",
  },
  {
    icon: ChatCircleDots,
    title: "Discord Intelligence Viewer",
    objective:
      "Internal web app for navigating Discord server data with real-time message polling and rich media display.",
    outcome:
      "Conversational AI agent ingests full channel context to answer natural language questions about team discussions, surface key topics, and provide source-attributed insights.",
    tags: ["Next.js 15", "OpenRouter", "Real-time"],
    category: "Analytics",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/discord-intel.png",
  },
  {
    icon: Bell,
    title: "Bug Alert Bot",
    objective:
      "Discord bot that monitors channels and routes messages through an LLM for autonomous classification.",
    outcome:
      "Classifies bugs vs. feature requests vs. general chat, generates severity-tagged reports, stores in Turso DB, and auto-posts formatted alerts to a dedicated error channel.",
    tags: ["Discord Bot", "LLM Agent", "Turso"],
    category: "Automation",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/bug-alert.png",
  },
  {
    icon: Heartbeat,
    title: "Client Intelligence Listener",
    objective:
      "Real-time Discord intelligence bot for autonomous client message processing and risk assessment.",
    outcome:
      "AI triage with urgency scoring, sentiment classification, churn signal detection, response quality evaluation, and risk radar scoring across 10+ enriched database tables.",
    tags: ["LLM Agent", "Sentiment AI", "Real-time"],
    category: "AI Agents",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/client-listener.png",
  },
  {
    icon: TagChevron,
    title: "Whop Support Classifier",
    objective:
      "Whop API poller that fetches support messages and pipes each through an LLM classification agent.",
    outcome:
      "Categorizes messages (client question, bug report, team response, announcement, spam) and persists enriched structured data for automated support intelligence.",
    tags: ["Whop API", "LLM Classification", "Turso"],
    category: "Automation",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/whop-classifier.png",
  },
  {
    icon: ChartLineUp,
    title: "Predictive Churn Monitor",
    objective:
      "Predictive churn detection with daily health scans computing 0-100 risk scores across five metrics.",
    outcome:
      "Two-tier cost-optimized architecture: heuristic pre-filtering at Tier 1, deep-analysis LLM at Tier 2 with rolling context windows — delivering actionable red/yellow/green risk classifications.",
    tags: ["Predictive AI", "Two-tier Agent", "Heuristics"],
    category: "AI Agents",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/churn-predict.png",
  },
  {
    icon: GoogleLogo,
    title: "Google Workspace AI Automation",
    objective:
      "Managed deployment of AI agents with full access to every Workspace service through a single interface.",
    outcome:
      "Clients describe tasks in plain English — agent pulls from Sheets, drafts in Gmail, checks Calendar, and logs to Drive. New capabilities auto-ship with Google updates.",
    tags: ["Google Workspace", "AI Agent", "Managed Service"],
    category: "Managed Services",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/google-workspace.png",
  },
  {
    icon: GearSix,
    title: "AI Automation Builder",
    objective:
      "Managed Make.com & n8n setup — AI agent that builds, configures, and manages entire workflows on behalf of the client.",
    outcome:
      "Clients describe automations in plain English. Agent builds the full workflow end-to-end, tests it, deploys it live, and modifies/scales as the business evolves.",
    tags: ["Make.com", "n8n", "AI Agent"],
    category: "Managed Services",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/auto-builder.png",
  },
  {
    icon: Robot,
    title: "AI Meta Ads Service",
    objective:
      "Fully managed Meta Ads campaign automation replacing traditional agency retainers.",
    outcome:
      "AI agent handles audience research, campaign creation, copywriting, budget allocation, A/B testing, performance monitoring, kills underperformers, and scales winners autonomously.",
    tags: ["Meta Ads", "AI Agent", "Managed Service"],
    category: "Managed Services",
    image: "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-service.png",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Hero */}
          <section className="mb-24 md:mb-32 grid md:grid-cols-2 gap-12 items-end">
            <FadeIn>
              <div>
                <span className="inline-block font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-6 border-l-2 border-foreground pl-3">
                  Project Archive
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
                  Proof of
                  <br />
                  <span className="text-muted">Intelligence</span>
                </h1>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-muted text-lg leading-relaxed font-light border-l border-border pl-6 max-w-md pb-2">
                Every project listed here is a production system we built and
                deployed. LLM agents, automation pipelines, and intelligence
                platforms — operating in the real world.
              </p>
            </FadeIn>
          </section>

          {/* Filters */}
          <FadeIn>
            <section className="mb-16">
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 text-xs font-mono tracking-wide transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-foreground text-background"
                        : "bg-transparent text-muted border border-white/[0.08] hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Featured Case Study */}
          <FadeIn>
            <section className="mb-24 md:mb-32">
              <div className="group grid md:grid-cols-12 gap-0 overflow-hidden bg-[#131315] border border-white/[0.08]">
                <div className="md:col-span-7 relative h-[360px] md:h-[500px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#131315] via-transparent to-transparent" />
                </div>

                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-foreground" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-foreground uppercase">
                      Featured Build
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight mb-6">
                    {featured.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {featured.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {featured.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl md:text-3xl font-mono font-semibold tracking-tighter text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-muted mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors duration-300 uppercase"
                  >
                    View Details
                    <ArrowRight
                      size={12}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Project Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden mb-24 md:mb-32">
            {filteredProjects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.06}>
                <div className="group bg-[#131315] p-8 flex flex-col h-full transition-[background-color] duration-500 hover:bg-[#19191b]">
                  {/* Image */}
                  <div className="h-48 mb-8 overflow-hidden bg-black relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-white/[0.06] border border-white/[0.08]">
                        <project.icon
                          size={20}
                          weight="fill"
                          className="text-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-tight mb-6">
                    {project.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                        Objective
                      </span>
                      <p className="text-xs text-muted/80 leading-relaxed">
                        {project.objective}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                        Outcome
                      </span>
                      <p className="text-xs text-muted/80 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </section>

          {/* CTA */}
          <FadeIn>
            <section className="relative bg-[#131315] border border-white/[0.08] p-10 md:p-16 overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                aria-hidden="true"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 799c43.6 0 87.2-4.1 129.5-12.2C256.4 761.6 373.1 701 480 620c75.3-57 141.2-126.8 196-206 43.6-63 77.2-132.3 100-205C789.7 165.7 797.3 122.9 800 80V0M0 599c30.4 0 60.8-2.3 90.3-6.8 88.5-13.6 170.1-55.9 244.7-112.5C417 416.7 483.5 334.8 544 246c30.1-44.2 55.4-91.4 75.3-141.4 13.7-34.6 23.5-70.3 29.3-104.6H0v600z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "cover",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#131315] via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div className="max-w-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted">
                    Next step
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
                    Have a similar problem?
                  </h2>
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-[50ch]">
                    We build AI systems like these for businesses every week.
                    Tell us what you need automated and we&apos;ll scope it out.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[240px]">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-foreground text-background transition-transform duration-200 active:scale-[0.97]"
                  >
                    Start a Conversation
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                  <div className="flex items-center gap-2 justify-center">
                    <ShieldCheck
                      size={14}
                      weight="bold"
                      className="text-muted"
                    />
                    <span className="text-[10px] font-mono text-muted tracking-widest uppercase">
                      NDA Available on Request
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
