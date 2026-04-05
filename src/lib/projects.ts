export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  objective: string;
  outcome: string;
  stats?: ProjectStat[];
  tags: string[];
  category: string;
  image: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    slug: "meta-ads-manager",
    title: "Meta Ads Manager",
    description:
      "Full-stack Facebook/Instagram ad management system powered by an LLM agent with 40+ tools that autonomously creates campaigns, generates ad creatives, analyzes performance metrics, and recommends optimizations through natural language conversation.",
    objective:
      "Build a full-stack ad management system that replaces manual campaign management with an autonomous LLM agent capable of handling the full Meta Ads lifecycle through natural language.",
    outcome:
      "Deployed a production system with 40+ agent tools covering campaign creation, creative generation, audience targeting, budget optimization, and real-time ROAS analytics — all accessible through a conversational interface backed by the Meta Graph API.",
    stats: [
      { value: "40+", label: "Agent Tools" },
      { value: "Real-time", label: "ROAS Analytics" },
    ],
    tags: ["LLM Agent", "Meta Graph API", "OAuth", "Redis"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-ads.png",
    featured: true,
  },
  {
    slug: "cold-email-engine",
    title: "Cold Email Engine",
    description:
      "Multi-step cold email campaign system with a context-aware LLM agent for personalized outreach at scale. Combines AI-driven sentiment classification, automated lead scoring, and domain health verification into a unified outreach platform — backed by 177 automated tests.",
    objective:
      "Multi-step cold email campaign system with context-aware LLM agent for personalized outreach at scale.",
    outcome:
      "AI-driven sentiment classification, automated lead scoring (hot/warm/cold), domain health verification (SPF/DKIM/DMARC), 14-day warmup scheduler, and unified inbox — backed by 177 automated tests.",
    tags: ["LLM Agent", "SMTP/IMAP", "HMAC Tracking"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/cold-email.png",
  },
  {
    slug: "caio-intelligence-platform",
    title: "CAIO Intelligence Platform",
    description:
      "Full-stack intelligence dashboard for client success using multiple specialized LLM agents. Deploys agents for support ticket analysis, client health assessment, and automated risk reporting — with BullMQ worker pipelines, Clerk auth, and real-time response streaming.",
    objective:
      "Full-stack intelligence dashboard for client success using multiple specialized LLM agents.",
    outcome:
      "Deployed agents for support ticket analysis, client health assessment, and automated risk reporting — with BullMQ worker pipelines, Clerk auth, and real-time response streaming.",
    tags: ["Mastra AI", "LangGraph", "Next.js 16"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/caio-platform.png",
  },
  {
    slug: "yt-trends-dashboard",
    title: "YT Trends Dashboard",
    description:
      "YouTube trending video discovery platform with keyword search, category/region filtering, and duration segmentation. Integrates an LLM agent via OpenRouter for AI-powered trend analysis, content pattern recognition, and actionable insights on viral video performance.",
    objective:
      "YouTube trending video discovery platform with keyword search, category/region filtering, and duration segmentation.",
    outcome:
      "Integrated LLM agent via OpenRouter for AI-powered trend analysis, content pattern recognition, and actionable insights on viral video performance.",
    tags: ["YouTube Data API", "OpenRouter", "LLM Agent"],
    category: "Analytics",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/yt-trends.png",
  },
  {
    slug: "content-scraping-search-api",
    title: "Content Scraping & Search API",
    description:
      "Multi-platform content scraping and semantic search API with Redis job queues and priority scheduling. Provides vector embedding-based semantic search across TikTok, YouTube, and Reddit — consumed by Mastra AI agents for automated storyboard creation, with Gemini AI handling video classification.",
    objective:
      "Multi-platform content scraping and semantic search API with Redis job queues and priority scheduling.",
    outcome:
      "Vector embedding-based semantic search across TikTok, YouTube, and Reddit — consumed by Mastra AI agents for automated storyboard creation. Gemini AI for video classification.",
    tags: ["Redis Queues", "Gemini AI", "Bunny CDN"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/scrape-search.png",
  },
  {
    slug: "discord-intelligence-viewer",
    title: "Discord Intelligence Viewer",
    description:
      "Internal web app for navigating Discord server data with real-time message polling and rich media display. A conversational AI agent ingests full channel context to answer natural language questions about team discussions, surface key topics, and provide source-attributed insights.",
    objective:
      "Internal web app for navigating Discord server data with real-time message polling and rich media display.",
    outcome:
      "Conversational AI agent ingests full channel context to answer natural language questions about team discussions, surface key topics, and provide source-attributed insights.",
    tags: ["Next.js 15", "OpenRouter", "Real-time"],
    category: "Analytics",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/discord-intel.png",
  },
  {
    slug: "bug-alert-bot",
    title: "Bug Alert Bot",
    description:
      "Discord bot that monitors channels and routes messages through an LLM for autonomous classification. Classifies bugs vs. feature requests vs. general chat, generates severity-tagged reports, stores in Turso DB, and auto-posts formatted alerts to a dedicated error channel.",
    objective:
      "Discord bot that monitors channels and routes messages through an LLM for autonomous classification.",
    outcome:
      "Classifies bugs vs. feature requests vs. general chat, generates severity-tagged reports, stores in Turso DB, and auto-posts formatted alerts to a dedicated error channel.",
    tags: ["Discord Bot", "LLM Agent", "Turso"],
    category: "Automation",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/bug-alert.png",
  },
  {
    slug: "client-intelligence-listener",
    title: "Client Intelligence Listener",
    description:
      "Real-time Discord intelligence bot for autonomous client message processing and risk assessment. Performs AI triage with urgency scoring, sentiment classification, churn signal detection, response quality evaluation, and risk radar scoring across 10+ enriched database tables.",
    objective:
      "Real-time Discord intelligence bot for autonomous client message processing and risk assessment.",
    outcome:
      "AI triage with urgency scoring, sentiment classification, churn signal detection, response quality evaluation, and risk radar scoring across 10+ enriched database tables.",
    tags: ["LLM Agent", "Sentiment AI", "Real-time"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/client-listener.png",
  },
  {
    slug: "whop-support-classifier",
    title: "Whop Support Classifier",
    description:
      "Whop API poller that fetches support messages and pipes each through an LLM classification agent. Categorizes messages (client question, bug report, team response, announcement, spam) and persists enriched structured data for automated support intelligence.",
    objective:
      "Whop API poller that fetches support messages and pipes each through an LLM classification agent.",
    outcome:
      "Categorizes messages (client question, bug report, team response, announcement, spam) and persists enriched structured data for automated support intelligence.",
    tags: ["Whop API", "LLM Classification", "Turso"],
    category: "Automation",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/whop-classifier.png",
  },
  {
    slug: "predictive-churn-monitor",
    title: "Predictive Churn Monitor",
    description:
      "Predictive churn detection system with daily health scans computing 0–100 risk scores across five metrics. Uses a two-tier cost-optimized architecture: heuristic pre-filtering at Tier 1, deep-analysis LLM at Tier 2 with rolling context windows — delivering actionable red/yellow/green risk classifications.",
    objective:
      "Predictive churn detection with daily health scans computing 0-100 risk scores across five metrics.",
    outcome:
      "Two-tier cost-optimized architecture: heuristic pre-filtering at Tier 1, deep-analysis LLM at Tier 2 with rolling context windows — delivering actionable red/yellow/green risk classifications.",
    tags: ["Predictive AI", "Two-tier Agent", "Heuristics"],
    category: "AI Agents",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/churn-predict.png",
  },
  {
    slug: "google-workspace-ai-automation",
    title: "Google Workspace AI Automation",
    description:
      "Managed deployment of AI agents with full access to every Google Workspace service through a single interface. Clients describe tasks in plain English — the agent pulls from Sheets, drafts in Gmail, checks Calendar, and logs to Drive. New capabilities auto-ship with Google updates.",
    objective:
      "Managed deployment of AI agents with full access to every Workspace service through a single interface.",
    outcome:
      "Clients describe tasks in plain English — agent pulls from Sheets, drafts in Gmail, checks Calendar, and logs to Drive. New capabilities auto-ship with Google updates.",
    tags: ["Google Workspace", "AI Agent", "Managed Service"],
    category: "Managed Services",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/google-workspace.png",
  },
  {
    slug: "ai-automation-builder",
    title: "AI Automation Builder",
    description:
      "Managed Make.com & n8n setup — an AI agent that builds, configures, and manages entire workflows on behalf of the client. Clients describe automations in plain English. The agent builds the full workflow end-to-end, tests it, deploys it live, and modifies or scales as the business evolves.",
    objective:
      "Managed Make.com & n8n setup — AI agent that builds, configures, and manages entire workflows on behalf of the client.",
    outcome:
      "Clients describe automations in plain English. Agent builds the full workflow end-to-end, tests it, deploys it live, and modifies/scales as the business evolves.",
    tags: ["Make.com", "n8n", "AI Agent"],
    category: "Managed Services",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/auto-builder.png",
  },
  {
    slug: "ai-meta-ads-service",
    title: "AI Meta Ads Service",
    description:
      "Fully managed Meta Ads campaign automation replacing traditional agency retainers. The AI agent handles audience research, campaign creation, copywriting, budget allocation, A/B testing, performance monitoring — killing underperformers and scaling winners autonomously.",
    objective:
      "Fully managed Meta Ads campaign automation replacing traditional agency retainers.",
    outcome:
      "AI agent handles audience research, campaign creation, copywriting, budget allocation, A/B testing, performance monitoring, kills underperformers, and scales winners autonomously.",
    tags: ["Meta Ads", "AI Agent", "Managed Service"],
    category: "Managed Services",
    image:
      "https://jjn46rcnnayepb32.public.blob.vercel-storage.com/thumbnails/meta-service.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return allProjects.find((p) => p.featured)!;
}
