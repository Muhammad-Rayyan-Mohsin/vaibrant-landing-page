import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
};

export default function AcceptableUsePage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Legal</p>
        <h1 className="text-4xl font-bold tracking-tighter">Acceptable Use Policy</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Effective: April 5, 2026</span>
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>This Acceptable Use Policy (&quot;AUP&quot;) governs your use of all Vaibrant Agency services and is part of our <Link href="/terms" className="text-foreground underline underline-offset-4">Terms of Service</Link>. Violations may result in suspension or termination.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">1. General Prohibitions</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Violate any applicable law, regulation, or third-party rights</li>
            <li>Transmit malware, viruses, or destructive code</li>
            <li>Attempt unauthorized access to systems, accounts, or data</li>
            <li>Interfere with or disrupt any Vaibrant service or connected network</li>
            <li>Reverse-engineer, decompile, or disassemble any part of our services</li>
            <li>Circumvent usage limits, rate limits, or security measures</li>
            <li>Share account credentials with unauthorized parties</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">2. Third-Party Platform Compliance</h2>
          <p>When using Vaibrant services that integrate with third-party platforms (Meta, Google, etc.), you must comply with those platforms&apos; terms of service, advertising standards, and community guidelines.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">3. AI Feature Restrictions</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Human Oversight:</strong> Review and approve all AI-generated content before use. AI features assist decisions, not replace human judgment.</li>
            <li><strong className="text-white/90">No Deceptive Content:</strong> Do not use AI to generate deepfakes, impersonations, or misleading content.</li>
            <li><strong className="text-white/90">No Policy Circumvention:</strong> Do not use AI to bypass platform content policies or advertising standards.</li>
            <li><strong className="text-white/90">IP Compliance:</strong> Do not use AI to generate content infringing third-party IP rights.</li>
            <li><strong className="text-white/90">Responsibility:</strong> You are responsible for all content you deploy, regardless of AI involvement.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">4. Data Use Restrictions</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Do not sell, license, or share data obtained through our services</li>
            <li>Do not scrape or bulk-extract data</li>
            <li>Do not build user profiles for purposes beyond the intended service</li>
            <li>Do not use data for surveillance</li>
            <li>Do not collect data about minors</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">5. Content Standards</h2>
          <p>Content created, managed, or distributed through our services must not contain hate speech, harassment, incitement to violence, misleading claims, defamatory material, or content that infringes rights or promotes illegal activity.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">6. Consequences</h2>
          <p>Violations may result in warning, suspension, permanent termination without refund, reporting to third-party platforms, or reporting to law enforcement where required.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">7. Reporting</h2>
          <p>Report violations to <strong className="text-white/90">info@vaibrant.co</strong>.</p>
        </section>
      </div>
    </article>
  );
}
