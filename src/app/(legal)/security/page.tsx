import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">Trust &amp; Security</p>
        <h1 className="text-4xl font-bold tracking-tighter">Security Policy</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>At Vaibrant, security is foundational to how we build and operate our AI systems and client platforms. This page describes the technical and organizational measures we implement to protect your data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">1. Data Encryption</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">In Transit:</strong> All data encrypted using TLS 1.2+. SSL v2/v3 and TLS 1.0/1.1 disabled.</li>
            <li><strong className="text-white/90">At Rest:</strong> AES-256 encryption for all stored data in production.</li>
            <li><strong className="text-white/90">Tokens &amp; Secrets:</strong> OAuth tokens and API credentials stored in dedicated secrets management with hardware-backed encryption — never in logs, databases, or client-side storage.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">2. Access Controls</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">RBAC:</strong> Minimum-necessary permissions for all team members. Production data access strictly limited.</li>
            <li><strong className="text-white/90">MFA:</strong> Enforced across all tools, repositories, deployment pipelines, and admin consoles.</li>
            <li><strong className="text-white/90">Reviews:</strong> Quarterly access audits. Immediate revocation on role change or departure.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">3. Vulnerability Management</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Regular SAST/DAST application security testing</li>
            <li>Annual penetration testing by qualified assessors</li>
            <li>Dependency scanning for third-party vulnerabilities</li>
            <li>Cloud infrastructure configuration assessments</li>
            <li>CVSS-based triage with defined remediation SLAs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">4. Endpoint Protection</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Full disk encryption on all team devices</li>
            <li>Endpoint DLP monitoring</li>
            <li>Auto-updating endpoint protection</li>
            <li>Written acceptable-use policies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">5. Logging and Monitoring</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Audit Logs:</strong> Failed logins, privilege changes, configuration modifications</li>
            <li><strong className="text-white/90">Application Logs:</strong> Data access, API queries, exports, permission changes</li>
            <li><strong className="text-white/90">Retention:</strong> 12 months minimum, encrypted, immutable</li>
            <li><strong className="text-white/90">Alerting:</strong> Real-time alerts for anomalous activity</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">6. Incident Response</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Immediate containment and remediation</li>
            <li>Notification to affected platforms and parties within legally required timeframes</li>
            <li>User notification per GDPR Articles 33-34 (72 hours to authorities)</li>
            <li>Post-incident analysis and corrective action</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">7. Infrastructure</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Enterprise-grade cloud with SOC 2, ISO 27001 certifications</li>
            <li>Encrypted backups with cross-region redundancy</li>
            <li>Disaster recovery and business continuity procedures</li>
            <li>Logical data isolation between client accounts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">8. Vulnerability Disclosure</h2>
          <p>Discovered a vulnerability? Report it to <strong className="text-white/90">info@vaibrant.co</strong>.</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Acknowledgment within 48 hours</li>
            <li>Resolution timeline within 5 business days</li>
            <li>90-day target for confirmed vulnerability resolution</li>
            <li>No legal action against good-faith researchers</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">9. Contact</h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5 space-y-2">
            <p className="text-white/80"><strong>Security:</strong> info@vaibrant.co</p>
            <p className="text-white/80"><strong>Privacy:</strong> info@vaibrant.co</p>
          </div>
        </section>
      </div>
    </article>
  );
}
