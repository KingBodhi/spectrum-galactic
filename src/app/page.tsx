import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden starfield">
        {/* Animated background overlay */}
        <div className="absolute inset-0 cosmic-gradient opacity-80" />

        {/* Orbital rings decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-[var(--spectrum-cyan)]/10 rounded-full" />
          <div className="absolute w-[450px] h-[450px] border border-[var(--spectrum-cyan)]/20 rounded-full" />
          <div className="absolute w-[300px] h-[300px] border border-[var(--spectrum-cyan)]/30 rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/30 rounded-full text-[var(--signal-green)] text-sm mb-8">
            <span className="status-online" />
            Constellation Active - 24 Satellites Online
          </div>

          {/* Satellite visual */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--spectrum-cyan)] to-[var(--spectrum-blue)] flex items-center justify-center glow-cyan">
                <svg className="w-8 h-8 text-[var(--space-black)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            {/* Solar panels */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-12 h-24 bg-gradient-to-r from-[var(--spectrum-blue)]/50 to-[var(--spectrum-cyan)]/50 rounded" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-12 h-24 bg-gradient-to-l from-[var(--spectrum-blue)]/50 to-[var(--spectrum-cyan)]/50 rounded" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-space">Spectrum</span>
            <br />
            <span className="text-[var(--text-primary)]">Galactic</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            LEO satellite connectivity for the Sovereign Stack.
            Global coverage. Zero censorship. Unstoppable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coverage" className="btn-primary">
              View Coverage Map
            </Link>
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Connected
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--spectrum-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">24</div>
              <div className="text-sm text-[var(--text-muted)]">LEO Satellites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">550km</div>
              <div className="text-sm text-[var(--text-muted)]">Orbital Altitude</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">Global</div>
              <div className="text-sm text-[var(--text-muted)]">Coverage Area</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--signal-green)] mb-2">99.9%</div>
              <div className="text-sm text-[var(--text-muted)]">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spectrum */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-cyan">Spectrum Galactic</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The final layer of the Sovereign Stack - providing unstoppable connectivity
              from space to every device on the network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-cyan)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--spectrum-cyan)] mb-2">Global Coverage</h3>
              <p className="text-[var(--text-secondary)]">
                24 LEO satellites providing continuous coverage across all continents.
                No dead zones, no blackouts.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-purple)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--spectrum-purple)] mb-2">Censorship Resistant</h3>
              <p className="text-[var(--text-secondary)]">
                Direct satellite links bypass terrestrial infrastructure.
                Your connection cannot be blocked or throttled.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--spectrum-pink)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--spectrum-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--spectrum-pink)] mb-2">Low Latency</h3>
              <p className="text-[var(--text-secondary)]">
                550km orbital altitude means sub-20ms latency.
                Fast enough for real-time applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-cyan">Mesh Network</span> in Space
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Spectrum satellites form an interconnected mesh, relaying data across the
                constellation. If one path is blocked, traffic automatically routes through
                alternative satellites.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Inter-Satellite Links:</strong> Laser
                    connections between satellites for orbital data routing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Ground Stations:</strong> Distributed
                    earth stations for terrestrial network integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Omega Integration:</strong> Direct
                    satellite uplink from Omega Router devices
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              {/* Earth visual */}
              <div className="earth-visual mx-auto" />
              {/* Orbital path */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] border border-dashed border-[var(--spectrum-cyan)]/30 rounded-full" />
              </div>
              {/* Satellite dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-[var(--spectrum-cyan)] absolute -top-36 left-0 signal-pulse" />
                <div className="w-3 h-3 rounded-full bg-[var(--spectrum-cyan)] absolute top-0 -right-36 signal-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-3 h-3 rounded-full bg-[var(--spectrum-cyan)] absolute -bottom-36 left-0 signal-pulse" style={{ animationDelay: '1s' }} />
                <div className="w-3 h-3 rounded-full bg-[var(--spectrum-cyan)] absolute top-0 -left-36 signal-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Stack Position */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layer 6 of the <span className="text-gradient-cyan">Sovereign Stack</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Spectrum completes the stack, providing the final connectivity layer
              that makes the entire ecosystem truly unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { layer: "L6", name: "Spectrum Galactic", desc: "LEO Satellites", active: true },
              { layer: "L5", name: "VIBE Token", desc: "Economics Layer", href: "https://vibetoken.xyz" },
              { layer: "L4", name: "Pythia AI", desc: "Intelligence Layer", href: "https://pythia-ai.xyz" },
              { layer: "L3", name: "PCG Dashboard", desc: "User Interface", href: "https://powerclubglobal.com" },
              { layer: "L2", name: "Omega Hardware", desc: "Privacy Devices", href: "https://omegawireless.xyz" },
              { layer: "L1", name: "Alpha Protocol", desc: "Core Network", href: "https://alphaprotocol.network" },
            ].map((item) => (
              item.active ? (
                <div
                  key={item.layer}
                  className="p-4 rounded-lg border bg-[var(--spectrum-cyan)]/10 border-[var(--spectrum-cyan)] glow-cyan"
                >
                  <div className="text-xs font-mono mb-1 text-[var(--spectrum-cyan)]">{item.layer}</div>
                  <div className="font-semibold text-[var(--spectrum-cyan)]">{item.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                </div>
              ) : (
                <a
                  key={item.layer}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border bg-[var(--space-surface)] border-[var(--space-border)] hover:border-[var(--gold)] transition-colors group"
                >
                  <div className="text-xs font-mono mb-1 text-[var(--text-muted)]">{item.layer}</div>
                  <div className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">{item.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/30 rounded-full text-[var(--signal-green)] text-sm mb-6">
            <span className="status-online" />
            Network Active
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect to <span className="text-gradient-cyan">Spectrum</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Get unstoppable connectivity from space. Partner with us to bring
            Spectrum coverage to your region or integrate with your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Become a Partner
            </a>
            <Link href="/technology" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
