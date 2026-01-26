import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coverage",
  description: "Spectrum Galactic global coverage map - LEO satellite connectivity across all continents.",
};

export default function Coverage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--signal-green)]/10 border border-[var(--signal-green)]/30 rounded-full text-[var(--signal-green)] text-sm mb-8">
            <span className="status-online" />
            Live Coverage
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cyan">Global Coverage</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            24 LEO satellites providing continuous connectivity
            across all inhabited continents.
          </p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-2xl p-8">
            {/* Simplified world map visualization */}
            <div className="relative aspect-[2/1] bg-[var(--space-black)] rounded-xl overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-[var(--space-border)]/20" />
                ))}
              </div>

              {/* Coverage overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--spectrum-cyan)]/5 via-[var(--spectrum-cyan)]/20 to-[var(--spectrum-cyan)]/5" />

              {/* Satellite paths (horizontal lines representing orbital planes) */}
              <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--spectrum-cyan)]/50 to-transparent" />
              <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--spectrum-cyan)]/50 to-transparent" />
              <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--spectrum-cyan)]/50 to-transparent" />
              <div className="absolute top-[65%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--spectrum-cyan)]/50 to-transparent" />
              <div className="absolute top-[80%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--spectrum-cyan)]/50 to-transparent" />

              {/* Satellite positions (animated dots) */}
              {[
                { top: '20%', left: '15%' },
                { top: '20%', left: '45%' },
                { top: '20%', left: '75%' },
                { top: '35%', left: '25%' },
                { top: '35%', left: '55%' },
                { top: '35%', left: '85%' },
                { top: '50%', left: '10%' },
                { top: '50%', left: '40%' },
                { top: '50%', left: '70%' },
                { top: '65%', left: '20%' },
                { top: '65%', left: '50%' },
                { top: '65%', left: '80%' },
                { top: '80%', left: '30%' },
                { top: '80%', left: '60%' },
                { top: '80%', left: '90%' },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[var(--spectrum-cyan)] signal-pulse"
                  style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.2}s` }}
                />
              ))}

              {/* Ground stations */}
              {[
                { top: '30%', left: '12%', label: 'NA' },
                { top: '45%', left: '48%', label: 'EU' },
                { top: '55%', left: '75%', label: 'AS' },
                { top: '70%', left: '85%', label: 'OC' },
                { top: '65%', left: '22%', label: 'SA' },
                { top: '60%', left: '55%', label: 'AF' },
              ].map((station, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{ top: station.top, left: station.left }}
                >
                  <div className="w-3 h-3 rounded-sm bg-[var(--gold)] rotate-45" />
                  <span className="text-xs text-[var(--gold)] mt-1 font-mono">{station.label}</span>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-[var(--space-black)]/80 rounded-lg p-3 text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--spectrum-cyan)]" />
                  <span className="text-[var(--text-muted)]">Satellite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-[var(--gold)] rotate-45" />
                  <span className="text-[var(--text-muted)]">Ground Station</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Regional Coverage</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Current satellite constellation coverage by region.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "North America",
                coverage: "99%",
                satellites: "6",
                stations: "3",
                status: "Full Coverage",
              },
              {
                region: "Europe",
                coverage: "99%",
                satellites: "5",
                stations: "4",
                status: "Full Coverage",
              },
              {
                region: "Asia Pacific",
                coverage: "95%",
                satellites: "6",
                stations: "3",
                status: "Full Coverage",
              },
              {
                region: "South America",
                coverage: "90%",
                satellites: "3",
                stations: "1",
                status: "Expanding",
              },
              {
                region: "Africa",
                coverage: "85%",
                satellites: "3",
                stations: "1",
                status: "Expanding",
              },
              {
                region: "Oceania",
                coverage: "92%",
                satellites: "3",
                stations: "2",
                status: "Full Coverage",
              },
            ].map((region) => (
              <div key={region.region} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{region.region}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    region.status === "Full Coverage"
                      ? "bg-[var(--signal-green)]/20 text-[var(--signal-green)]"
                      : "bg-[var(--signal-yellow)]/20 text-[var(--signal-yellow)]"
                  }`}>
                    {region.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Coverage</span>
                    <span className="font-mono text-[var(--spectrum-cyan)]">{region.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Satellites</span>
                    <span className="font-mono text-[var(--text-primary)]">{region.satellites}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Ground Stations</span>
                    <span className="font-mono text-[var(--text-primary)]">{region.stations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Expansion */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Coverage Expansion</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our constellation is continuously expanding to provide
              even better coverage worldwide.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-[var(--spectrum-cyan)]">Phase 1 - Current</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--signal-green)]/20 text-[var(--signal-green)]">
                  ACTIVE
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                24 satellites providing global coverage with focus on populated regions.
              </p>
              <div className="w-full bg-[var(--space-black)] rounded-full h-2">
                <div className="bg-[var(--spectrum-cyan)] h-2 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-[var(--spectrum-purple)]">Phase 2 - 2026</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--spectrum-purple)]/20 text-[var(--spectrum-purple)]">
                  PLANNED
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                48 satellites for enhanced capacity and polar coverage.
              </p>
              <div className="w-full bg-[var(--space-black)] rounded-full h-2">
                <div className="bg-[var(--spectrum-purple)] h-2 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>

            <div className="bg-[var(--space-surface)] border border-[var(--space-border)] rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-[var(--gold)]">Phase 3 - 2027+</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                  FUTURE
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                72+ satellites for maximum redundancy and lowest latency.
              </p>
              <div className="w-full bg-[var(--space-black)] rounded-full h-2">
                <div className="bg-[var(--gold)] h-2 rounded-full" style={{ width: '10%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--space-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Check Your <span className="text-gradient-cyan">Location</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Contact us to verify coverage in your area and discuss connectivity options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check Coverage
            </a>
            <Link href="/partners" className="btn-secondary">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
