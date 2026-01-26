import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with Spectrum Galactic - bring LEO satellite connectivity to your region or integrate with your infrastructure.",
};

export default function Partners() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)] starfield">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Partner</span> With Us
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Join the Spectrum network as a regional partner, ground station operator,
            or technology integrator.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Multiple ways to participate in the Spectrum network expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-t-[var(--spectrum-cyan)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-cyan)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--spectrum-cyan)] mb-2">Regional Partner</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Become the exclusive Spectrum partner for your region. Provide connectivity
                services to local customers and earn revenue share.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                  Exclusive territory rights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                  Revenue sharing model
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                  Marketing support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                  Technical training
                </li>
              </ul>
            </div>

            <div className="card border-t-4 border-t-[var(--spectrum-purple)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-purple)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--spectrum-purple)] mb-2">Ground Station Host</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Host a Spectrum ground station at your facility. Ideal for data centers,
                telecom providers, and large enterprises.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-purple)]">&#10003;</span>
                  Monthly hosting fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-purple)]">&#10003;</span>
                  Priority connectivity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-purple)]">&#10003;</span>
                  Direct peering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--spectrum-purple)]">&#10003;</span>
                  Equipment provided
                </li>
              </ul>
            </div>

            <div className="card border-t-4 border-t-[var(--gold)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Technology Integrator</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Integrate Spectrum connectivity into your products or services.
                SDKs and APIs available for custom solutions.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">&#10003;</span>
                  API access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">&#10003;</span>
                  SDK & documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">&#10003;</span>
                  Technical support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">&#10003;</span>
                  Co-marketing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Stack */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Part of the <span className="text-gradient-cyan">Sovereign Stack</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Spectrum partners gain access to the entire Sovereign Stack ecosystem.
                Integrate with Alpha Protocol, Omega hardware, Pythia AI, and VIBE token
                for complete sovereignty solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Omega Integration:</strong> Sell
                    Spectrum-enabled Omega devices in your region
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">VIBE Payments:</strong> Accept
                    VIBE token for services through integrated billing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Pythia Access:</strong> Offer
                    edge AI compute to your customers
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { layer: "L6", name: "Spectrum", color: "spectrum-cyan", active: true },
                { layer: "L5", name: "VIBE", color: "gold" },
                { layer: "L4", name: "Pythia", color: "spectrum-purple" },
                { layer: "L3", name: "PCG", color: "spectrum-blue" },
                { layer: "L2", name: "Omega", color: "spectrum-pink" },
                { layer: "L1", name: "Alpha", color: "signal-green" },
              ].map((item) => (
                <div
                  key={item.layer}
                  className={`p-4 rounded-lg border ${
                    item.active
                      ? `bg-[var(--${item.color})]/10 border-[var(--${item.color})] glow-cyan`
                      : "bg-[var(--space-black)] border-[var(--space-border)]"
                  }`}
                >
                  <div className={`text-xs font-mono mb-1 ${
                    item.active ? `text-[var(--${item.color})]` : "text-[var(--text-muted)]"
                  }`}>
                    {item.layer}
                  </div>
                  <div className={`font-semibold ${
                    item.active ? `text-[var(--${item.color})]` : "text-[var(--text-primary)]"
                  }`}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Backed By</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Spectrum Galactic is backed by OKB Ventures and part of the Sovereign Stack portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://okb-ventures.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:border-[var(--gold)] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--gold)]">OKB</span>
              </div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                OKB Ventures
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Lead Investor</p>
            </a>

            <a
              href="https://alphaprotocol.network"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:border-[var(--signal-green)] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--signal-green)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--signal-green)]">&#945;</span>
              </div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--signal-green)] transition-colors">
                Alpha Protocol
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Technology Partner</p>
            </a>

            <a
              href="https://omegawireless.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:border-[var(--spectrum-pink)] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--spectrum-pink)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[var(--spectrum-pink)]">&#937;</span>
              </div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--spectrum-pink)] transition-colors">
                Omega Wireless
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Hardware Partner</p>
            </a>
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Become a <span className="text-gradient-cyan">Partner</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Interested in partnering with Spectrum Galactic? Contact us to discuss
            opportunities in your region or industry.
          </p>
          <div className="bg-[var(--space-black)] border border-[var(--space-border)] rounded-2xl p-8 max-w-lg mx-auto mb-8">
            <h3 className="text-lg font-semibold text-[var(--spectrum-cyan)] mb-4">What We Look For</h3>
            <ul className="text-left space-y-3 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                Regional expertise and local market knowledge
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                Technical infrastructure or deployment capability
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                Alignment with sovereignty and privacy values
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--spectrum-cyan)]">&#10003;</span>
                Long-term partnership mindset
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply Now
            </a>
            <Link href="/technology" className="btn-secondary">
              Learn About Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
