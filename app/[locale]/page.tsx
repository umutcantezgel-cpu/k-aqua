import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { Photo } from '@/components/ui/Photo';
import { SectionHead } from '@/components/ui/SectionHead';

export const metadata: Metadata = {
  title: 'K-Aqua | Leading in Water Supply',
  description: 'The business field of KWT GmbH is manufacturing pipes and fittings for water supply in several plastic materials, positioning the company as a premium construction material supplier.',
  keywords: 'K-Aqua, water supply, pipes, fittings, plastic materials, construction, KWT GmbH',
};

const PICS = {
  house: 'https://www.k-aqua.de/Pics/products_kaqua_house.jpg',
  products: 'https://www.k-aqua.de/Pics/mobile_products.jpg',
  env: 'https://www.k-aqua.de/Pics/solutions_environmentally_friendly.jpg',
  recycle: 'https://www.k-aqua.de/Pics/solutions_recycleable.jpg',
  superior: 'https://www.k-aqua.de/Pics/solutions_superior.png',
  kaqua: 'https://www.k-aqua.de/Pics/mobile_k-aqua.jpg',
  kessel: 'https://www.k-aqua.de/Pics/mobile_kessel.jpg',
  dakks: 'https://www.k-aqua.de/Pics/news_dakks_logo.jpg',
};

export default function Page() {
  return (
    <main className="k-page">
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: 'var(--sp-12)', alignItems: 'center', paddingBlock: 'clamp(64px, 8vw, 120px)' }}>
          <div>
            <Reveal>
              <div className="k-chip" style={{ marginBottom: 'var(--sp-6)' }}>
                <Icon name="workspace_premium" size="sm" className="mr-2" />
                <span><strong>ISO 9001 · 14001 · 50001</strong> zertifiziert seit Oktober 2025</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="k-h1">
                Leading in <span className="k-grad-text">Water Supply.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="k-lead" style={{ fontSize: 19 }}>
                K-Aqua entwickelt und fertigt PP-R/PP-RCT-Rohrsysteme für Trinkwasser — von 20 bis 630 mm,
                in Partnerschaft mit dem Premiumhersteller KESSEL. Jahrzehnte Erfahrung, ein Ziel: Wasser sicher ans Ziel bringen.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
                <Button size="lg" asChild>
                  <Link href="/products">Produktsystem entdecken <Icon name="arrow_forward" size="sm" className="ml-2" /></Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="/contact">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="k-float" style={{ position: 'relative' }}>
              <Photo src={PICS.house} alt="K-Aqua PP-R/PP-RCT Rohrsystem im Gebäude" ratio="4 / 4.4" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
              <div className="k-card" style={{ position: 'absolute', left: -28, bottom: 28, padding: 'var(--sp-4) var(--sp-6)', gap: 2, maxWidth: 230 }}>
                <span className="k-stat-num" style={{ fontSize: 34 }}>20–630<span style={{ fontSize: 18, fontWeight: 600 }}> mm</span></span>
                <span className="k-stat-label" style={{ marginTop: 2 }}>Rohrdimensionen, SDR 6 bis SDR 17</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--sp-4)' }}>
            {[
              { n: '630', u: 'mm', l: 'maximale Rohrdimension im Programm' },
              { n: '5', u: 'SDR', l: 'Druckstufen: SDR 6 / 7,4 / 9 / 11 / 17' },
              { n: '3×', u: 'ISO', l: 'Qualität, Umwelt & Energie zertifiziert' },
              { n: '100', u: '%', l: 'Produktionsabfälle werden recycelt' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <Card style={{ height: '100%', gap: 0 }} className="p-6">
                  <span className="k-stat-num">{s.n}<span style={{ fontSize: '0.45em', fontWeight: 700, marginLeft: 3, color: 'var(--accent-strong)' }}>{s.u}</span></span>
                  <span className="k-stat-label">{s.l}</span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO: company + partnership */}
      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead
            eyebrow="Das Unternehmen"
            title={<span>Baustofflieferant und Hersteller — <span className="k-grad-text">aus einer Hand.</span></span>}
            lead="Die KWT GmbH fertigt Rohre und Formteile für die Wasserversorgung aus verschiedenen Kunststoffen und positioniert sich damit in der Wertschöpfungskette Bau als Lieferant und Hersteller zugleich."
          />
          <div className="k-bento">
            <Reveal style={{ gridColumn: 'span 4' }}>
              <Card style={{ height: '100%' }} className="p-0 overflow-hidden">
                <Photo src={PICS.kessel} alt="Partnerschaft mit KESSEL" ratio="16 / 7" radius="0" />
                <div className="p-6">
                  <h3 className="k-h3" style={{ marginBottom: 'var(--sp-2)' }}>Starke Partnerschaft mit KESSEL</h3>
                  <p className="k-body">Mit dem Premiumhersteller KESSEL — „Leading in drainage" — verbindet uns eine enge, langjährige Partnerschaft. Diese Erfahrung aus Jahrzehnten tragen wir in die Zukunft.</p>
                  <Link href="/about" className="k-link inline-flex items-center mt-4">Mehr über uns <Icon name="arrow_forward" size="sm" className="ml-1" /></Link>
                </div>
              </Card>
            </Reveal>
            <Reveal delay={100} style={{ gridColumn: 'span 2' }}>
              <Card style={{ height: '100%', justifyContent: 'space-between' }} className="bg-slate-50 p-6 flex flex-col">
                <div className="k-icon-chip mb-4"><Icon name="public" /></div>
                <div>
                  <h3 className="k-h3" style={{ marginBottom: 'var(--sp-2)' }}>Weltweit bewährt</h3>
                  <p className="k-body">K-Aqua-Produkte haben sich über Jahrzehnte unzählige Male in Projekten auf der ganzen Welt bewährt.</p>
                </div>
                <Link href="/references" className="k-link inline-flex items-center mt-4">Referenzen <Icon name="arrow_forward" size="sm" className="ml-1" /></Link>
              </Card>
            </Reveal>
            <Reveal delay={60} style={{ gridColumn: 'span 2' }}>
              <Card style={{ height: '100%' }} className="p-6">
                <div className="k-icon-chip mb-4"><Icon name="shield" /></div>
                <h3 className="k-h3">GENAU-Managementsystem</h3>
                <p className="k-body mt-2">Kontinuierliche Verbesserung von Arbeits-, Umwelt- und Gesundheitsschutz — nach DIN EN ISO 14001 und 50001.</p>
              </Card>
            </Reveal>
            <Reveal delay={120} style={{ gridColumn: 'span 2' }}>
              <Card style={{ height: '100%' }} className="p-6">
                <div className="k-icon-chip mb-4"><Icon name="factory" /></div>
                <h3 className="k-h3">Fertigung in Deutschland</h3>
                <p className="k-body mt-2">Entwicklung und Produktion am Standort Waldsolms — Qualität, Kosten und Termine immer im Einklang.</p>
              </Card>
            </Reveal>
            <Reveal delay={180} style={{ gridColumn: 'span 2' }}>
              <Card style={{ height: '100%' }} className="p-6">
                <div className="k-icon-chip mb-4"><Icon name="recycling" /></div>
                <h3 className="k-h3">Ökologische Verantwortung</h3>
                <p className="k-body mt-2">Ressourcenschonung und Umweltverträglichkeit sind fester Bestandteil unseres Qualitätsverständnisses.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="k-section">
        <div className="k-container">
          <Reveal>
            <div className="k-cta-band">
              <div style={{ position: 'relative', maxWidth: 640 }}>
                <h2 className="k-h2" style={{ marginBottom: 'var(--sp-4)' }}>Bereit für die nächste Generation der Wasserversorgung?</h2>
                <p style={{ opacity: 0.75, marginBottom: 'var(--sp-8)', fontSize: 17 }}>Sprechen Sie mit unserem Vertriebsteam über Ihr Projekt — von der Planung bis zur Schweißtechnik.</p>
                <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/contact">Jetzt Kontakt aufnehmen <Icon name="arrow_forward" size="sm" className="ml-2" /></Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild>
                    <Link href="/service">Downloads & Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
