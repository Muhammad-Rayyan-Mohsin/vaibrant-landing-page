import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ChatFab } from "@/components/chat-fab";
import "./globals.css";

const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  display: "swap",
  weight: "200 700",
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaibrant.agency"),
  title: {
    default: "Vaibrant | AI Services Agency",
    template: "%s | Vaibrant",
  },
  description:
    "We architect, build, and deploy AI systems that drive real business outcomes. AI agents, workflow automation, and strategy for enterprise.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibrant.agency",
    siteName: "Vaibrant",
    title: "Vaibrant | AI Services Agency",
    description:
      "We architect, build, and deploy AI systems that drive real business outcomes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibrant — AI Services Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibrant | AI Services Agency",
    description:
      "We architect, build, and deploy AI systems that drive real business outcomes.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${satoshi.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://jjn46rcnnayepb32.public.blob.vercel-storage.com" crossOrigin="" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://vaibrant.agency/#organization",
                  name: "Vaibrant",
                  url: "https://vaibrant.agency",
                  description:
                    "AI services agency that architects, builds, and deploys autonomous AI systems for businesses.",
                  foundingDate: "2025",
                  serviceType: [
                    "AI Agent Development",
                    "Workflow Automation",
                    "AI Strategy Consulting",
                  ],
                  areaServed: "Worldwide",
                  knowsAbout: [
                    "Artificial Intelligence",
                    "AI Agents",
                    "Workflow Automation",
                    "LLM Integration",
                    "Business Process Automation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://vaibrant.agency/#website",
                  name: "Vaibrant",
                  url: "https://vaibrant.agency",
                  publisher: {
                    "@id": "https://vaibrant.agency/#organization",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What does Vaibrant do?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Vaibrant is an AI services agency that architects, builds, and deploys AI systems for businesses. We specialize in Autonomous AI Agents, Workflow & Platform Automation, and Data Intelligence & Growth. Every system we build is production-grade and deployed in the real world.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are Autonomous AI Agents?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Autonomous AI Agents are custom LLM-powered software agents that plug into your existing tech stack and operate independently. They manage ad campaigns, triage support tickets, classify data, score leads, monitor for churn signals, and execute multi-step workflows without human intervention.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does Vaibrant offer a free consultation?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We offer a free 30-minute strategy call where we audit your current workflows, identify automation opportunities, and map out a 90-day AI roadmap for your business.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What platforms does Vaibrant automate?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We build end-to-end automation across Make.com, n8n, OpenClaw, and Google Workspace. You describe what you need in plain English, and our AI agent builds the workflow, tests it, and deploys it live.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How is Vaibrant different from traditional automation agencies?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Traditional automation agencies build rule-based if/then workflows. Vaibrant builds LLM-powered agents that understand context, make decisions, and adapt. Our agents reason about problems, classify unstructured data, generate content, and take autonomous action.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-dvh bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
        <ChatFab />
      </body>
    </html>
  );
}
