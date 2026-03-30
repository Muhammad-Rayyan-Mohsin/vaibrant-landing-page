"use client";

import { useState } from "react";
import { ArrowRight, Database, TreeStructure, Cpu, ShieldCheck } from "@phosphor-icons/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

const filters = ["All Systems", "LLM Fine-tuning", "Predictive Models", "Data Infrastructure"];

const featured = {
  title: "Project Aether: Neural Search Engine",
  description:
    "Implementing a semantic retrieval system across 40TB of unstructured legal documentation using custom vector embeddings and low-latency inference pipelines.",
  stats: [
    { value: "85%", label: "Latency Reduction" },
    { value: "99.9%", label: "Inference Reliability" },
  ],
  tags: ["PyTorch", "Rust", "Kubernetes"],
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBD2KZ1Y5TBplaKvHMIbCEP1EKu6kEsCkAf_72utuGGHlzcOIF90gpsurD2AXwenDD0OtpKzTWmkErt1RTA-pWm1z0MSRWFaRA1fJAlrot-fjN1Fwgb4Emb8Xe-HBCqtDgR4B8__2LLnSbBTUUvYMO8GsAAvFyTNeQBAo_PEkTK61vxFKBJJzrMmMDmri_dqGEDk09HmJ83oqOZ_BAvELce3fLJKAJhbLOq0oo3-2sVSd84iq2-XpZ0OAYMmnA0Ad7YgBqfb0ZgG_5R",
};

const projects = [
  {
    icon: Database,
    title: "Stratis: Predictive Liquidity Model",
    objective: "Real-time market volatility forecasting for high-frequency trading desks.",
    outcome: "Achieved sub-10ms prediction windows with 94% accuracy on tail-risk events.",
    tags: ["TensorFlow", "C++"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJTiG6nauVxuLesa0FGW8BHe1AJQrif4Ju8sEq23cGWLK_jjImx77XbxwMoyX4rtWF9wIl3yS2FARIZwH7YQ9HIUIGHF-CbWUa6C-XrMikDHECtpHXGFI0VEhqiATdon0ekmQpS_VcNS3Vg8LyBCSvkStmWwipGBG6OauzPTPWwuopqXN4vu8-9FcVx8Lmq7TnIRt19bK_fJAvzBfLW2Dt2q5uY4RNg0aVNcS4k8G_mwBdBfzOR0GXKwCv9BeHZ--kzYxgZF3gKYHy",
  },
  {
    icon: TreeStructure,
    title: "Chronos: Data Ingestion Fabric",
    objective: "Unified data layer for multi-cloud IoT sensor networks.",
    outcome: "Reduced data siloing by 60% and optimized cloud egress costs by 22%.",
    tags: ["Apache Kafka", "Go"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNv3OArciCXMpz6aPlI-Qp5mPwLEQEcIpJ1EW39cl-HJZm5gVTPTeLyZTqZ5unQKQOiCyMqdrHd0WYXJozeiAUuFpyctCmnTuZx3Qpg0aTd1_fYBcZBxj1Zt6w1Ju8ulAUaQyvFoNZseBmplQHwPkwH02-z4MD2ibm9-Q2xAYGHwpv70tHhe4IswFSt4hBBgtUsMNj9uGjLYaV1fAybAMZVHOmOEFlLjgi-npqRm8yZCyq_HtkLgJyZWQOC3CzwYAH8q-iuwub1Qwy",
  },
  {
    icon: Cpu,
    title: "Iris: Visual Inspection AI",
    objective: "Edge-AI computer vision for semiconductor manufacturing defect detection.",
    outcome: "Near-zero false negative rate on micro-fracture identification pipelines.",
    tags: ["OpenCV", "CUDA"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB74lSc43uMhs0eg8UVLF871etaHnaIRivYRMVYYOgINWAziX1_2Zqb7ZthxnL7wWDjdoZ3SCYq-6Q3JoK0kqqmJF89GkwEGvWvfx8yH0EpLvTjV2CkU1M-uN0KmIjxcr_wDsgpWTJUQxCd5Aqf_ErgYkceeDjrkizjZN1s_nYCeorqwMkJBEefcKb_m283ph2FtEC1tdBiSDnf4hccUQ0k-tJ1rBw7Dhe5DA_xdJqtN5E0HvEqIC14EGl3ca8HqRVH9YhGKztsNnVq",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Systems");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* ── Hero ── */}
          <section className="mb-24 md:mb-32 grid md:grid-cols-2 gap-12 items-end">
            <FadeIn>
              <div>
                <span className="inline-block font-mono text-[10px] tracking-[0.3em] text-muted uppercase mb-6 border-l-2 border-foreground pl-3">
                  Project Demonstrations
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
                A curated archive of high-performance AI deployments. We bridge
                the gap between architectural theory and operational reality
                through precise engineering.
              </p>
            </FadeIn>
          </section>

          {/* ── Filters ── */}
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

          {/* ── Featured Case Study ── */}
          <FadeIn>
            <section className="mb-24 md:mb-32">
              <div className="group grid md:grid-cols-12 gap-0 overflow-hidden bg-[#131315] border border-white/[0.08]">
                {/* Image */}
                <div className="md:col-span-7 relative h-[360px] md:h-[500px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt="Neural network visualization"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#131315] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-foreground" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-foreground uppercase">
                      Featured Architecture
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight mb-6">
                    {featured.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {featured.description}
                  </p>

                  {/* Stats */}
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

                  {/* Tags */}
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
                    View Technical Whitepaper
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

          {/* ── Project Cards Grid ── */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden mb-24 md:mb-32">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="group bg-[#131315] p-8 flex flex-col h-full transition-all duration-500 hover:bg-[#19191b]">
                  {/* Image */}
                  <div className="h-48 mb-8 overflow-hidden bg-black relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-white/[0.06] border border-white/[0.08]">
                        <project.icon size={20} weight="fill" className="text-foreground" />
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

          {/* ── CTA ── */}
          <FadeIn>
            <section className="relative bg-[#131315] border border-white/[0.08] p-10 md:p-16 overflow-hidden">
              {/* Topo bg */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                aria-hidden="true"
              >
                <img
                  src="/topo-lines.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
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
                    Request a Technical Briefing
                  </h2>
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-[50ch]">
                    Schedule a consultation with our lead architects to discuss
                    how we can implement these methodologies into your specific
                    infrastructure.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[240px]">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-foreground text-background transition-transform duration-200 active:scale-[0.97]"
                  >
                    Start Consultation
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                  <div className="flex items-center gap-2 justify-center">
                    <ShieldCheck size={14} weight="bold" className="text-muted" />
                    <span className="text-[10px] font-mono text-muted tracking-widest uppercase">
                      Secure Data Protocol
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
