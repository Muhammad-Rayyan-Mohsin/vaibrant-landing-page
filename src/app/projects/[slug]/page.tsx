import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { allProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} — AI Project Case Study`;
  const description = project.description;
  const url = `https://vaibrant.agency/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: project.image,
    url: `https://vaibrant.agency/projects/${project.slug}`,
    author: {
      "@type": "Organization",
      "@id": "https://vaibrant.agency/#organization",
      name: "Vaibrant",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://vaibrant.agency/#organization",
      name: "Vaibrant",
    },
    keywords: project.tags.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Back link */}
          <div className="mb-12">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-200 uppercase"
            >
              <ArrowLeft
                size={12}
                weight="bold"
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              All Projects
            </Link>
          </div>

          {/* Header */}
          <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-muted">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95]">
                {project.title}
              </h1>
            </div>
            <div>
              <p className="text-muted text-lg leading-relaxed font-light border-l border-border pl-6 max-w-md pb-2">
                {project.description}
              </p>
            </div>
          </section>

          {/* Hero image */}
          <section className="mb-16 md:mb-24">
            <div className="relative h-[320px] md:h-[520px] overflow-hidden bg-[#131315] border border-white/[0.08]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </section>

          {/* Stats (if present) */}
          {project.stats && project.stats.length > 0 && (
            <section className="mb-16 md:mb-24">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#131315] p-8 md:p-12 flex flex-col justify-center"
                  >
                    <div className="text-3xl md:text-5xl font-mono font-semibold tracking-tighter text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Objective & Outcome */}
          <section className="mb-16 md:mb-24 grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.08] overflow-hidden">
            <div className="bg-[#131315] p-8 md:p-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted block mb-6 border-l-2 border-foreground pl-3">
                Objective
              </span>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {project.objective}
              </p>
            </div>
            <div className="bg-[#131315] p-8 md:p-12">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted block mb-6 border-l-2 border-foreground pl-3">
                Outcome
              </span>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </section>

          {/* Tech tags */}
          <section className="mb-16 md:mb-24">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted block mb-6 border-l-2 border-foreground pl-3">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
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
                  Have a similar challenge?
                </h2>
                <p className="mt-4 text-sm text-muted leading-relaxed max-w-[50ch]">
                  We build AI systems like this for businesses every week. Tell
                  us what you need automated and we&apos;ll scope it out.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[240px]">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-foreground text-background transition-transform duration-200 active:scale-[0.97]"
                >
                  Start a Conversation
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-200 uppercase"
                >
                  View all projects
                  <ArrowRight size={10} weight="bold" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
