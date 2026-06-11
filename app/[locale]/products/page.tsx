import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { KButton } from '@/components/ui/KButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { Photo } from '@/components/ui/Photo';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'K-Aqua | Products - PP-R/PP-RCT Pipes & Fittings',
  description: 'Explore the comprehensive K-Aqua PP-R/PP-RCT piping system including mono layer and multilayer reinforced pipes, fittings from 20mm to 630mm, and accessories.',
  keywords: 'PP-R, PP-RCT, Pipes, Fittings, SDR 6, SDR 11, Water Supply, K-Aqua Products',
};

const PICS = {
  products: 'https://www.k-aqua.de/Pics/mobile_products.jpg',
};

export default function Page() {
  const range = [
    { icon: 'Layers', title: 'Rohre — Mono & Multilayer', text: 'Monolayer- und glasfaserverstärkte Multilayer-Rohre in SDR 6, 7,4, 9, 11 und 17. Dimensionen von 20 mm bis 630 mm.' },
    { icon: 'Wrench', title: 'Formteile & Armaturen', text: 'Fittings von 20 mm bis 315 mm, ergänzt um Ventile, Verschraubungen und Übergangsstücke.' },
    { icon: 'Flame', title: 'Schweißtechnik & Werkzeug', text: 'Schneidwerkzeuge, Schweißgeräte und Schweißmaschinen für Muffen-, Stumpf- und Elektroschweißverfahren.' },
    { icon: 'Thermometer', title: 'Heiß- & Kaltwasser', text: 'Ausgelegt für Trinkwasser — heiß und kalt — mit hoher Temperatur- und Druckbeständigkeit über Jahrzehnte.' },
  ] as const;

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <section className="k-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.9fr)', gap: 'var(--sp-12)', alignItems: 'center' }}>
            <div>
              <Reveal><Eyebrow>Produkte</Eyebrow></Reveal>
              <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>PP-R/PP-RCT Rohre & Formteile für <span className="k-grad-text">Trinkwasser.</span></h1></Reveal>
              <Reveal delay={140}>
                <p className="k-lead">Ein vollständiges Rohrleitungssystem für heißes und kaltes Trinkwasser — vom Rohr über das Formteil bis zur Schweißtechnik.</p>
              </Reveal>
              <Reveal delay={220}>
                <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
                  <KButton href="https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf" icon={<Icons.Download size={18} />}>Produktkatalog (PDF)</KButton>
                  <KButton variant="ghost" href="/service">Installationsvideos</KButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Photo src={PICS.products} alt="K-Aqua Produktprogramm" ratio="4 / 3.4" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Das System" title="Vier Bausteine, ein System." />
          <div className="k-bento">
            {range.map((r, i) => {
              const Ic = Icons[r.icon as keyof typeof Icons];
              return (
                <Reveal key={r.title} delay={i * 80} style={{ gridColumn: 'span 3' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div className="k-icon-chip"><Ic size={24} /></div>
                    <h3 className="k-h3">{r.title}</h3>
                    <p className="k-body">{r.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 'var(--sp-12)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <SectionHead eyebrow="Technische Daten" title="Dimensionen & Druckstufen" lead="Je nach Rohrtyp ab 20 mm bis 630 mm — Formteile bis 315 mm." />
              <KButton href="https://www.k-aqua.de/PDF/K-Aqua_Product_Features_en.pdf" variant="ghost" icon={<Icons.Download size={18} />}>Produkteigenschaften (PDF)</KButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard style={{ padding: 'var(--sp-6)' }}>
              <table className="k-table">
                <thead>
                  <tr><th>Komponente</th><th>Dimension</th><th>Druckstufen</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monolayer-Rohre</td><td>20 – 630 mm</td><td>SDR 6 / 7,4 / 9 / 11 / 17</td></tr>
                  <tr><td>Multilayer-Rohre (GF-verstärkt)</td><td>20 – 630 mm</td><td>SDR 6 / 7,4 / 9 / 11 / 17</td></tr>
                  <tr><td>Formteile</td><td>20 – 315 mm</td><td>systemkompatibel</td></tr>
                  <tr><td>Ventile & Verschraubungen</td><td>systemabhängig</td><td>—</td></tr>
                  <tr><td>Schweißtechnik & Werkzeuge</td><td>alle Dimensionen</td><td>—</td></tr>
                </tbody>
              </table>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
