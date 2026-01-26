import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description: "Spectrum Galactic LEO satellite technology - inter-satellite laser links, ground stations, and Omega integration.",
};

export default function Technology() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)] starfield">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Technology</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Advanced LEO satellite infrastructure designed for sovereignty,
            privacy, and unstoppable connectivity.
          </p>
        </div>
      </section>

      {/* Satellite Specs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-cyan">Spectrum Satellites</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Each Spectrum satellite is a compact, high-performance communications node
                designed for LEO operation. With inter-satellite laser links, they form
                a self-routing mesh network in orbit.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--space-surface)] rounded-lg p-4 border border-[var(--space-border)]">
                  <div className="text-2xl font-bold text-[var(--spectrum-cyan)]">550 km</div>
                  <div className="text-sm text-[var(--text-muted)]">Orbital Altitude</div>
                </div>
                <div className="bg-[var(--space-surface)] rounded-lg p-4 border border-[var(--space-border)]">
                  <div className="text-2xl font-bold text-[var(--spectrum-cyan)]">97 min</div>
                  <div className="text-sm text-[var(--text-muted)]">Orbital Period</div>
                </div>
                <div className="bg-[var(--space-surface)] rounded-lg p-4 border border-[var(--space-border)]">
                  <div className="text-2xl font-bold text-[var(--spectrum-cyan)]">250 kg</div>
                  <div className="text-sm text-[var(--text-muted)]">Satellite Mass</div>
                </div>
                <div className="bg-[var(--space-surface)] rounded-lg p-4 border border-[var(--space-border)]">
                  <div className="text-2xl font-bold text-[var(--spectrum-cyan)]">5 yr</div>
                  <div className="text-sm text-[var(--text-muted)]">Design Life</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Satellite diagram */}
              <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-2xl p-8">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* Main body */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--spectrum-cyan)] to-[var(--spectrum-blue)] rounded-lg flex items-center justify-center glow-cyan">
                    <svg className="w-12 h-12 text-[var(--space-black)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  {/* Solar panels */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-32 bg-gradient-to-r from-[var(--spectrum-blue)]/30 to-[var(--spectrum-cyan)]/50 rounded border border-[var(--spectrum-cyan)]/30" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-32 bg-gradient-to-l from-[var(--spectrum-blue)]/30 to-[var(--spectrum-cyan)]/50 rounded border border-[var(--spectrum-cyan)]/30" />
                  {/* Antenna */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 border-4 border-[var(--spectrum-cyan)]/50 rounded-full" />
                </div>
                <div className="mt-4 text-center text-sm text-[var(--text-muted)]">
                  Spectrum LEO Satellite - Gen 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-Satellite Links */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient-cyan">Inter-Satellite Links</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Optical laser communication between satellites enables data routing
              entirely in orbit, bypassing terrestrial networks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-t-[var(--spectrum-cyan)]">
              <h3 className="text-xl font-semibold text-[var(--spectrum-cyan)] mb-4">Laser Links</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Free-space optical communication at 10 Gbps per link.
                Each satellite maintains 4 active inter-satellite connections.
              </p>
              <div className="text-sm text-[var(--text-muted)]">
                Range: 5,000+ km
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--spectrum-purple)]">
              <h3 className="text-xl font-semibold text-[var(--spectrum-purple)] mb-4">Mesh Routing</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Distributed routing protocol automatically finds optimal paths.
                Traffic reroutes instantly if a satellite is unavailable.
              </p>
              <div className="text-sm text-[var(--text-muted)]">
                Failover: &lt;100ms
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--spectrum-pink)]">
              <h3 className="text-xl font-semibold text-[var(--spectrum-pink)] mb-4">Encryption</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                End-to-end encryption on all inter-satellite links.
                Quantum-resistant key exchange protocols.
              </p>
              <div className="text-sm text-[var(--text-muted)]">
                Standard: AES-256-GCM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ground Infrastructure */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ground Infrastructure</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Distributed ground stations provide terrestrial network integration
              while maintaining censorship resistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--spectrum-cyan)] mb-4">Gateway Stations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">High-Throughput Antennas</div>
                    <div className="text-sm text-[var(--text-muted)]">Ka-band phased array with 100+ Gbps capacity</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Geographic Distribution</div>
                    <div className="text-sm text-[var(--text-muted)]">Stations in 12+ countries for redundancy</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--spectrum-cyan)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Peering Points</div>
                    <div className="text-sm text-[var(--text-muted)]">Direct IX connections for low-latency egress</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Omega Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Direct Uplink</div>
                    <div className="text-sm text-[var(--text-muted)]">Omega Routers connect directly to satellites</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Hybrid Mode</div>
                    <div className="text-sm text-[var(--text-muted)]">Seamless failover between terrestrial and satellite</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Mesh Extension</div>
                    <div className="text-sm text-[var(--text-muted)]">Omega devices extend satellite coverage locally</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
          <div className="bg-[var(--space-black)] border border-[var(--space-border)] rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--space-border)]">
                  <th className="text-left p-4 text-[var(--spectrum-cyan)]">Parameter</th>
                  <th className="text-left p-4 text-[var(--spectrum-cyan)]">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Constellation Size", "24 satellites (Phase 1)"],
                  ["Orbital Altitude", "550 km LEO"],
                  ["Orbital Inclination", "53 degrees"],
                  ["User Latency", "< 20ms (typical)"],
                  ["Downlink Capacity", "Up to 1 Gbps per satellite"],
                  ["Inter-Satellite Link", "10 Gbps optical"],
                  ["Frequency Bands", "Ka-band (user), V-band (gateway)"],
                  ["Encryption", "AES-256-GCM, quantum-resistant KEM"],
                  ["Ground Stations", "12+ globally distributed"],
                  ["Design Life", "5 years per satellite"],
                ].map(([param, value], i) => (
                  <tr key={i} className="border-b border-[var(--space-border)]/50 last:border-0">
                    <td className="p-4 text-[var(--text-secondary)]">{param}</td>
                    <td className="p-4 font-mono text-[var(--text-primary)]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-cyan">Connect</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Partner with Spectrum to bring unstoppable connectivity to your region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us
            </a>
            <Link href="/coverage" className="btn-secondary">
              View Coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
