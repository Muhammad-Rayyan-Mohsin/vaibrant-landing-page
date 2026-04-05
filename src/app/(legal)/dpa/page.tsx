import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
};

export default function DPAPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Legal</p>
        <h1 className="text-4xl font-bold tracking-tighter">Data Processing Agreement</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Effective: April 5, 2026</span>
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service between Vaibrant Agency (&quot;Processor&quot;) and the client (&quot;Controller&quot;) and governs processing of personal data by the Processor on behalf of the Controller through Vaibrant&apos;s AI services. Entered into pursuant to GDPR Article 28.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">1. Scope</h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5 space-y-3">
            <div><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Subject Matter:</span> <span className="text-white/80 block mt-1">Processing personal data through AI agent development, workflow automation, advertising management, and consulting services</span></div>
            <div><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Duration:</span> <span className="text-white/80 block mt-1">Term of the service engagement plus data retention period</span></div>
            <div><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Nature:</span> <span className="text-white/80 block mt-1">Collection, storage, analysis, optimization, retrieval, and deletion of business and campaign data</span></div>
            <div><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Data Types:</span> <span className="text-white/80 block mt-1">Business data, campaign metrics, audience data, user identifiers, engagement data, workflow data</span></div>
            <div><span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">Data Subjects:</span> <span className="text-white/80 block mt-1">Controller&apos;s employees, customers, advertising audiences, end users</span></div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">2. Processing on Instructions</h2>
          <p>The Processor processes personal data only on documented instructions from the Controller, unless required by EU or Member State law (with prior notification). Instructions provided via the service interface, written communications, or this DPA.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">3. Confidentiality</h2>
          <p>All personnel authorized to process personal data are bound by confidentiality obligations — employees, contractors, and temporary workers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">4. Security (Article 32)</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Encryption at rest (AES-256) and in transit (TLS 1.2+)</li>
            <li>Pseudonymization where appropriate</li>
            <li>Ongoing confidentiality, integrity, availability, and resilience</li>
            <li>Timely data restoration capability</li>
            <li>Regular security testing and evaluation</li>
            <li>RBAC with MFA and regular penetration testing</li>
          </ul>
          <p>Full details in our <a href="/security" className="text-foreground underline underline-offset-4">Security Policy</a>.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">5. Sub-Processors</h2>
          <p>General written authorization granted. The Processor shall maintain a sub-processor list (available on request), notify Controller 30 days before changes, allow objection, impose equivalent obligations on all sub-processors, and remain fully liable for their performance.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">6. Data Subject Rights (Articles 15-22)</h2>
          <p>The Processor assists the Controller in responding to access, rectification, erasure, restriction, portability, objection, and automated decision-making requests. Data subject requests received by the Processor are forwarded to the Controller without undue delay.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">7. Controller Obligations Assistance</h2>
          <p>Assistance with security (Art. 32), breach notification (Arts. 33-34), data protection impact assessments (Art. 35), and prior consultation (Art. 36).</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">8. Breach Notification</h2>
          <p>Notification without undue delay including: nature of breach, affected categories and numbers, consequences, and remediation measures.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">9. End of Processing</h2>
          <p>Upon termination, the Processor returns all data in machine-readable format or deletes it (at Controller&apos;s choice) within 30 days, including from sub-processors. Retention only where required by law, with notification.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">10. Audit Rights</h2>
          <p>The Processor makes compliance information available and allows annual audits with 30 days&apos; notice. Additional audits permitted after security incidents. Third-party audit reports (SOC 2, ISO 27001) may satisfy requirements.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">11. International Transfers</h2>
          <p>Safeguards via EU Standard Contractual Clauses (Commission Decision 2021/914) with supplementary measures per Schrems II.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">12. Contact</h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5">
            <p className="text-white/80">DPA inquiries: <strong>privacy@vaibrant.agency</strong></p>
            <p className="text-white/60 mt-1 text-xs">To execute a signed copy, contact us at the address above.</p>
          </div>
        </section>
      </div>
    </article>
  );
}
