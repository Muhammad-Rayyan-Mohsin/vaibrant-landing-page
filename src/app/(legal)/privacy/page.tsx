import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4 pb-8 border-b border-border/30">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted">
          Legal
        </p>
        <h1 className="text-4xl font-bold tracking-tighter">Privacy Policy</h1>
        <div className="flex gap-6 text-xs font-mono text-muted">
          <span>Effective: April 5, 2026</span>
          <span>Last Updated: April 5, 2026</span>
        </div>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-white/70">
        <section className="space-y-4">
          <p>
            Vaibrant Agency (&quot;Vaibrant,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates vaibrant.agency
            and related products including Quantum Ads. This Privacy Policy describes how we
            collect, use, store, share, and protect your personal information when you visit
            our website, use our services, or interact with our AI-powered platforms
            (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By using our Services, you acknowledge that you have read and understood this
            Privacy Policy. If you do not agree with our practices, please do not use our
            Services.
          </p>
          <div className="bg-surface border border-border/50 rounded-xl p-5">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-2">
              Company Information
            </p>
            <p className="text-white/80">
              Vaibrant Agency<br />
              Email: privacy@vaibrant.agency<br />
              Website: vaibrant.agency
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            1. Data We Collect
          </h2>

          <h3 className="text-base font-semibold text-foreground mt-6">1.1 Information You Provide</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Name, email address, and organization details when you contact us or book a consultation</li>
            <li>Information submitted through our contact forms and newsletter signup</li>
            <li>Account credentials and profile data when you create an account on our platforms</li>
            <li>Billing and payment information (processed by our payment provider)</li>
            <li>Communications you send to us (emails, chat messages, support requests)</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-6">1.2 Data from Third-Party Platforms</h3>
          <p>When you connect third-party accounts (such as Meta, Google, or other platforms) to our services via OAuth, we access data based on the permissions you grant. This may include:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Advertising account data, campaign information, and performance metrics</li>
            <li>Business asset information and organizational data</li>
            <li>Page and profile data necessary to provide our services</li>
          </ul>
          <p>We only request the minimum permissions necessary. You may revoke access at any time through the respective platform&apos;s settings.</p>

          <h3 className="text-base font-semibold text-foreground mt-6">1.3 Technical and Usage Data</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>IP address and approximate geolocation</li>
            <li>Browser type, version, and language preferences</li>
            <li>Device type, operating system, and screen resolution</li>
            <li>Pages visited, features used, and interaction patterns</li>
            <li>Timestamps, session duration, and referring URLs</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-6">1.4 AI Interaction Data</h3>
          <p>
            When you use our AI-powered features (including our chat assistant, AI agents,
            and automation tools), we process the inputs you provide and the outputs generated.
            This data is used solely to deliver the service and, with aggregated de-identified
            data only, to improve our AI systems.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            2. How We Use Your Data
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Providing Services:</strong> Delivering AI agent development, workflow automation, advertising management, and consulting services as requested</li>
            <li><strong className="text-white/90">Communication:</strong> Responding to inquiries, sending service notifications, performance alerts, and newsletters (with consent)</li>
            <li><strong className="text-white/90">Account Management:</strong> Authenticating your identity, managing subscriptions, and processing payments</li>
            <li><strong className="text-white/90">Security:</strong> Detecting fraud, preventing unauthorized access, and maintaining platform integrity</li>
            <li><strong className="text-white/90">Service Improvement:</strong> Analyzing aggregated, de-identified usage patterns to improve features</li>
            <li><strong className="text-white/90">Legal Compliance:</strong> Meeting regulatory obligations and responding to lawful requests</li>
          </ul>
          <p>We process your data only as described in this Privacy Policy. Data obtained via third-party platform APIs is used exclusively for the stated purposes.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p>If you are in the EEA, UK, or Switzerland, we rely on:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Consent (Art. 6(1)(a)):</strong> When you authorize third-party platform access, subscribe to newsletters, or accept non-essential cookies</li>
            <li><strong className="text-white/90">Contractual Necessity (Art. 6(1)(b)):</strong> To perform obligations under our service agreements</li>
            <li><strong className="text-white/90">Legitimate Interest (Art. 6(1)(f)):</strong> For security, fraud prevention, and aggregated analytics — balanced against your rights</li>
            <li><strong className="text-white/90">Legal Obligation (Art. 6(1)(c)):</strong> To comply with applicable laws</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            4. How We Share Your Data
          </h2>
          <p><strong className="text-white/90">We do not sell, license, or purchase personal data.</strong></p>
          <p>We may share data with:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Third-Party Platforms:</strong> Through their APIs to manage services as directed by you (Meta, Google, etc.)</li>
            <li><strong className="text-white/90">Cloud Infrastructure Providers:</strong> For hosting and data storage, under strict data processing agreements</li>
            <li><strong className="text-white/90">Payment Processors:</strong> To process payments (they do not receive platform data)</li>
            <li><strong className="text-white/90">Analytics Services:</strong> Using aggregated, de-identified data only</li>
            <li><strong className="text-white/90">Legal Authorities:</strong> When required by law or to protect our legal rights</li>
          </ul>
          <p>All service providers are contractually obligated to use data only at our direction, solely for providing their services, and to maintain equivalent security standards.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            5. Data Retention and Deletion
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-white/90">Account Data:</strong> Duration of your active engagement, plus 30 days after closure</li>
            <li><strong className="text-white/90">Platform Data:</strong> Only while actively needed. Deleted within 120 days when no longer required or when you revoke access</li>
            <li><strong className="text-white/90">Newsletter Data:</strong> Until you unsubscribe</li>
            <li><strong className="text-white/90">Billing Records:</strong> As required by tax law (typically 7 years)</li>
            <li><strong className="text-white/90">Security Logs:</strong> Up to 12 months</li>
          </ul>
          <p>Request deletion anytime — see <Link href="/data-deletion" className="text-foreground underline underline-offset-4">Data Deletion</Link> for instructions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            6. Data Security
          </h2>
          <p>We implement industry-standard safeguards including:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Encryption at rest and in transit (TLS 1.2+)</li>
            <li>Multi-factor authentication for administrative access</li>
            <li>Role-based access controls with regular reviews</li>
            <li>Regular vulnerability scanning and penetration testing</li>
            <li>Tokens and secrets stored in encrypted secrets management systems</li>
          </ul>
          <p>See our <Link href="/security" className="text-foreground underline underline-offset-4">Security Policy</Link> for full details.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            7. International Data Transfers
          </h2>
          <p>Your data may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards through EU Standard Contractual Clauses, EU-U.S. Data Privacy Framework certification (where applicable), and supplementary technical measures.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            8. Your Rights
          </h2>
          <h3 className="text-base font-semibold text-foreground mt-6">8.1 GDPR Rights (EEA, UK, Switzerland)</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Access your personal data (Art. 15)</li>
            <li>Rectify inaccurate data (Art. 16)</li>
            <li>Erase your data (Art. 17)</li>
            <li>Restrict processing (Art. 18)</li>
            <li>Data portability (Art. 20)</li>
            <li>Object to processing (Art. 21)</li>
            <li>Rights related to automated decision-making (Art. 22)</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your supervisory authority</li>
          </ul>
          <h3 className="text-base font-semibold text-foreground mt-6">8.2 CCPA/CPRA Rights (California)</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Right to know, delete, correct, and opt-out of sale/sharing</li>
            <li>Right to limit sensitive data use and non-discrimination</li>
          </ul>
          <p><strong className="text-white/90">We do not sell or share personal information.</strong> We honor Global Privacy Control (GPC) signals.</p>
          <p className="mt-4">For full instructions, visit <Link href="/data-rights" className="text-foreground underline underline-offset-4">Your Data Rights</Link>.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            9. AI and Automated Decision-Making
          </h2>
          <p>Vaibrant uses AI across its services — AI agents, content generation, campaign optimization, and workflow automation. All AI features provide recommendations that require human review and approval. No decisions with legal or similarly significant effects are made solely by automated means.</p>
          <p>You have the right to human intervention, to express your point of view, and to contest any automated recommendation. Contact privacy@vaibrant.agency to exercise these rights.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            10. Cookies
          </h2>
          <p>We use cookies for authentication, security, preferences, and analytics. See our <Link href="/cookies" className="text-foreground underline underline-offset-4">Cookie Policy</Link> for full details.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            11. Children&apos;s Privacy
          </h2>
          <p>Our Services are not directed at individuals under 18. We do not knowingly collect data from children under 13 (or 16 in the EEA). Contact us if you believe a child has provided us data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            12. Changes to This Policy
          </h2>
          <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be notified via email at least 30 days before taking effect.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            13. Contact Us
          </h2>
          <div className="bg-surface border border-border/50 rounded-xl p-5 space-y-2">
            <p className="text-white/80"><strong>Email:</strong> privacy@vaibrant.agency</p>
            <p className="text-white/80"><strong>Organization:</strong> Vaibrant Agency</p>
            <p className="text-white/80"><strong>Website:</strong> vaibrant.agency</p>
          </div>
          <p>If not satisfied with our response, you may lodge a complaint with your local data protection supervisory authority.</p>
        </section>
      </div>
    </article>
  );
}
