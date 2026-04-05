export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="text-lg font-semibold tracking-tight hover:text-muted transition-colors duration-200">
              vaibrant
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-[34ch]">
              AI services agency. 13 production systems deployed.
              Zero still in beta.
            </p>
            <a
              href="/chat"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-white/[0.1] text-muted hover:text-foreground hover:border-white/[0.2] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.34-3.8l.09-.07L83.27,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216Z"/></svg>
              Chat with AI
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              Pages
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="/projects" className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
                  Team
                </a>
              </li>
              <li>
                <a href="/chat" className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
                  AI Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              Contact
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://calendly.com/vaibrant/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  Book a Strategy Call
                </a>
              </li>
              <li>
                <a href="mailto:hello@vaibrant.agency" className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
                  hello@vaibrant.agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs text-muted">
            2026 Vaibrant. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
