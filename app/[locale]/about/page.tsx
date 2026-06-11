import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { KButton } from '@/components/ui/KButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { Photo } from '@/components/ui/Photo';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'K-Aqua | About Us - Company Policy & GENAU System',
  description: 'Discover KWT GmbH, our partnership with KESSEL, and our commitment to ecological responsibility through the GENAU Management System (ISO 14001 & 50001).',
  keywords: 'KWT GmbH, KESSEL, GENAU management system, ISO 14001, ISO 50001, ecological responsibility, water supply',
};

function PageHero({ eyebrow, title, lead }: { eyebrow: React.ReactNode, title: React.ReactNode, lead?: React.ReactNode }) {
  return (
    <section className="k-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
      <div className="k-container" style={{ position: 'relative' }}>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>{title}</h1></Reveal>
        {lead ? <Reveal delay={140}><p className="k-lead">{lead}</p></Reveal> : null}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Über uns" title={<span>Erfahrung ist Ihr <span className="k-grad-text">Vorteil.</span></span>}
        lead="Neue Strategien, gewachsenes Wissen: Die KWT GmbH verbindet jahrzehntelange Fertigungserfahrung mit einem klaren Blick nach vorn." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-12)', alignItems: 'center' }}>
          <Reveal>
            <Photo src="/images/about.jpg" alt="K-Aqua Produktion" ratio="4 / 3" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="k-h2" style={{ marginBottom: 'var(--sp-4)' }}>K-Aqua — Leading in Water Supply</h2>
              <p className="k-body" style={{ marginBottom: 'var(--sp-4)' }}>
                Das Geschäftsfeld der KWT GmbH ist die Fertigung von Rohren und Formteilen für die Wasserversorgung aus verschiedenen Kunststoffen. Damit positioniert sich das Unternehmen in der Wertschöpfungskette Bau als Baustofflieferant und Hersteller.
              </p>
              <p className="k-body">
                Mit dem Premiumhersteller KESSEL — „Leading in drainage" — besteht eine enge und langjährige Partnerschaft. Mit dieser Erfahrung aus Jahrzehnten tragen wir unseren Erfolg in die Zukunft.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Unternehmenspolitik" title="Nutzen entsteht im Zusammenspiel."
            lead="Kein Kundennutzen ohne Mitarbeiternutzen, kein Mitarbeiternutzen ohne Unternehmensnutzen — und kein Unternehmensnutzen ohne Nutzen für Umwelt und Mitwelt." />
          <div className="k-bento">
            {[
              { icon: 'Users', title: 'Menschen im Mittelpunkt', text: 'Alle Mitarbeitenden sind in den kontinuierlichen Verbesserungsprozess eingebunden — Qualität bleibt dabei stets mit Kosten und Terminen vereinbar.' },
              { icon: 'Handshake', title: 'Verlässlichkeit', text: 'Wünsche von Kunden und allen Interessierten werden unter Einhaltung gesetzlicher und sozialer Standards erkannt, ernst genommen und umgesetzt.' },
              { icon: 'Leaf', title: 'Ökologische Verantwortung', text: 'Alle Unternehmensaktivitäten erfolgen unter Beachtung von Ressourcenschonung, Umweltverträglichkeit und strikter Einhaltung aller Verpflichtungen.' },
            ].map((c, i) => {
              const Ic = Icons[c.icon as keyof typeof Icons];
              return (
                <Reveal key={c.title} delay={i * 80} style={{ gridColumn: 'span 2' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div className="k-icon-chip"><Ic size={24} /></div>
                    <h3 className="k-h3">{c.title}</h3>
                    <p className="k-body">{c.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: 'var(--sp-12)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <SectionHead eyebrow="GENAU-Managementsystem" title="Genau hinschauen. Genau verbessern."
                lead="Das GENAU-Managementsystem ist in das House of KWT integriert und damit ein zentrales Element unserer Philosophie." />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {[
                  'Kontinuierliche Verbesserung von Arbeits-, Umwelt- und Gesundheitsschutz',
                  'Optimierung der Energieeffizienz',
                  'Prävention, laufende Gefahrenermittlung und Risikobewertung',
                  'Jeder Mitarbeitende ist verpflichtet, Gefahren zu melden und aktiv mitzuwirken',
                ].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start', color: 'var(--muted-foreground)' }}>
                    <span style={{ color: 'var(--accent-strong)', marginTop: 3 }}><Icons.Check size={18} /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint>
              <div className="k-icon-chip"><Icons.Award size={24} /></div>
              <h3 className="k-h3">Zertifiziert nach Norm</h3>
              <p className="k-body">Das gelebte GENAU-Management erfüllt die Anforderungen der DIN EN ISO 14001 und 50001 — seit Oktober 2025 ergänzt um ISO 9001:2015.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 50001:2018'].map((c) => (
                  <span key={c} className="k-chip" style={{ background: 'var(--card)', fontSize: 13 }}><strong>{c}</strong></span>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
