import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Network Status",
  description: "Spectrum Galactic network status - real-time constellation health and performance metrics.",
};

export default function Network() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/30 rounded-full text-[var(--signal-green)] text-sm mb-8">
            <span className="status-online" />
            All Systems Operational
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Network Status</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Real-time health and performance metrics for the Spectrum constellation.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10003;</span>
              </div>
              <div className="text-sm text-[var(--text-muted)] mb-1">Constellation</div>
              <div className="text-lg font-semibold text-[var(--signal-green)]">Operational</div>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10003;</span>
              </div>
              <div className="text-sm text-[var(--text-muted)] mb-1">Ground Stations</div>
              <div className="text-lg font-semibold text-[var(--signal-green)]">All Online</div>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10003;</span>
              </div>
              <div className="text-sm text-[var(--text-muted)] mb-1">Inter-Sat Links</div>
              <div className="text-lg font-semibold text-[var(--signal-green)]">100% Active</div>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10003;</span>
              </div>
              <div className="text-sm text-[var(--text-muted)] mb-1">User Services</div>
              <div className="text-lg font-semibold text-[var(--signal-green)]">Normal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Satellite Status */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Satellite Status</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Individual satellite health and operational status.
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="bg-[var(--space-black)] border border-[var(--space-border)] rounded-lg p-4 text-center hover:border-[var(--spectrum-cyan)] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--signal-green)] mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--space-black)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)]">SG-{String(i + 1).padStart(2, '0')}</div>
                <div className="text-xs text-[var(--signal-green)]">Online</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--signal-green)]" />
              <span className="text-[var(--text-muted)]">Online (24)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--signal-yellow)]" />
              <span className="text-[var(--text-muted)]">Maintenance (0)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--signal-red)]" />
              <span className="text-[var(--text-muted)]">Offline (0)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Current network performance across key indicators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Average Latency</div>
              <div className="text-3xl font-bold text-[var(--spectrum-cyan)] mb-2">18ms</div>
              <div className="flex items-center gap-2 text-xs text-[var(--signal-green)]">
                <span>&#9660;</span>
                <span>2ms from yesterday</span>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Network Throughput</div>
              <div className="text-3xl font-bold text-[var(--spectrum-cyan)] mb-2">847 Gbps</div>
              <div className="flex items-center gap-2 text-xs text-[var(--signal-green)]">
                <span>&#9650;</span>
                <span>12% from yesterday</span>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Packet Loss</div>
              <div className="text-3xl font-bold text-[var(--spectrum-cyan)] mb-2">0.01%</div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span>&#8212;</span>
                <span>No change</span>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Uptime (30d)</div>
              <div className="text-3xl font-bold text-[var(--spectrum-cyan)] mb-2">99.97%</div>
              <div className="flex items-center gap-2 text-xs text-[var(--signal-green)]">
                <span>&#10003;</span>
                <span>Above SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ground Stations */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ground Stations</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Status of gateway ground stations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "North America - West", location: "Oregon, USA", status: "online", load: 67 },
              { name: "North America - East", location: "Virginia, USA", status: "online", load: 72 },
              { name: "North America - Central", location: "Texas, USA", status: "online", load: 58 },
              { name: "Europe - West", location: "Ireland", status: "online", load: 81 },
              { name: "Europe - Central", location: "Germany", status: "online", load: 76 },
              { name: "Europe - North", location: "Sweden", status: "online", load: 45 },
              { name: "Europe - South", location: "Italy", status: "online", load: 52 },
              { name: "Asia - East", location: "Japan", status: "online", load: 84 },
              { name: "Asia - Southeast", location: "Singapore", status: "online", load: 69 },
              { name: "Asia - South", location: "India", status: "online", load: 61 },
              { name: "Oceania", location: "Australia", status: "online", load: 38 },
              { name: "South America", location: "Brazil", status: "online", load: 43 },
            ].map((station) => (
              <div key={station.name} className="bg-[var(--space-black)] border border-[var(--space-border)] rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{station.name}</h4>
                    <p className="text-sm text-[var(--text-muted)]">{station.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="status-online" />
                    <span className="text-xs text-[var(--signal-green)]">Online</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--text-muted)]">Load</span>
                    <span className="text-[var(--text-primary)]">{station.load}%</span>
                  </div>
                  <div className="w-full bg-[var(--space-surface)] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        station.load > 80
                          ? "bg-[var(--signal-yellow)]"
                          : "bg-[var(--spectrum-cyan)]"
                      }`}
                      style={{ width: `${station.load}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Incident History</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Recent network events and maintenance windows.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center">
                    <span className="text-[var(--signal-green)]">&#10003;</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">All Systems Operational</h4>
                </div>
                <span className="text-xs text-[var(--text-muted)]">Now</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] ml-11">
                No ongoing incidents. All satellites and ground stations operating normally.
              </p>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 opacity-60">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--signal-yellow)]/20 flex items-center justify-center">
                    <span className="text-[var(--signal-yellow)]">&#9888;</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Scheduled Maintenance</h4>
                </div>
                <span className="text-xs text-[var(--text-muted)]">Jan 20, 2026</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] ml-11">
                Ground station firmware upgrade in Europe-Central. No service impact.
              </p>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6 opacity-60">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--signal-green)]/20 flex items-center justify-center">
                    <span className="text-[var(--signal-green)]">&#10003;</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">SG-15 Back Online</h4>
                </div>
                <span className="text-xs text-[var(--text-muted)]">Jan 15, 2026</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] ml-11">
                Satellite SG-15 returned to service after planned orbital adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About <span className="text-gradient-cyan">Service</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Our team is available 24/7 to assist with connectivity issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Support
            </a>
            <Link href="/technology" className="btn-secondary">
              View Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
