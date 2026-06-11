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
  title: 'K-Aqua | Customer Service & Downloads',
  description: 'Access K-Aqua customer service resources, including PDF downloads for product ranges, features, quality assurance, and step-by-step installation videos.',
  keywords: 'Downloads, Installation videos, PDF, K-Aqua Service, PP-R welding, Socket welding, Electrofusion',
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
  const downloads = [
    { title: 'K-Aqua Produktprogramm', sub: 'Vollständiger Katalog mit Dimensionen & Artikeln', href: 'https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf' },
    { title: 'K-Aqua Produkteigenschaften', sub: 'Technische Eigenschaften & Materialdaten', href: 'https://www.k-aqua.de/PDF/K-Aqua_Product_Features_en.pdf' },
    { title: 'K-Aqua Qualitätssicherung', sub: 'Prüfverfahren & Qualitätsstandards', href: 'https://www.k-aqua.de/PDF/K-Aqua_Quality_Assurance_en.pdf' },
  ];
  const videos = [
    { title: 'Muffenschweißen mit Handschweißgerät', sub: 'PP-R/PP-RCT Rohr & Formteil', href: 'https://www.youtube.com/watch?v=d56p048YB2o&t=20s' },
    { title: 'Muffenschweißen mit Schweißmaschine', sub: 'PP-R Socket Welding', href: 'https://www.youtube.com/watch?v=yD99teROIKc&t=59s' },
    { title: 'Elektroschweißen (Electrofusion)', sub: 'PP-R/PP-RCT Rohr & Formteil', href: 'https://www.youtube.com/watch?v=ob2wMFZgm0k' },
    { title: 'Stumpfschweißen (Butt Fusion)', sub: 'PP-R/PP-RCT Großdimensionen', href: 'https://www.youtube.com/watch?v=Ws7-whaL-q8&t=43s' },
  ];
  
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Service" title={<span>Kunden&shy;service & <span className="k-grad-text">Know-how.</span></span>}
        lead="Technische Unterlagen zum Download und Schritt-für-Schritt-Videos zu allen Schweißverfahren." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <SectionHead eyebrow="Downloads" title="Technische Unterlagen" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-4)' }}>
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <a href={d.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <BentoCard style={{ height: '100%', flexDirection: 'row', alignItems: 'center', gap: 'var(--sp-4)' }}>
                    <div className="k-icon-chip"><Icons.FileText size={24} /></div>
                    <div style={{ flex: 1 }}>
                      <h3 className="k-h3" style={{ fontSize: 17 }}>{d.title}</h3>
                      <p className="k-body" style={{ fontSize: 14 }}>{d.sub}</p>
                    </div>
                    <Icons.Download size={20} style={{ color: 'var(--primary)' }} />
                  </BentoCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Installation" title="Schweißverfahren im Video" lead="Vier Verfahren, vier Videos — direkt aus der Praxis." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--sp-4)' }}>
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <a href={v.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div style={{ aspectRatio: '16 / 9', borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, var(--inverse-surface), oklch(0.3 0.08 302))', display: 'grid', placeItems: 'center', color: '#fff' }}>
                      <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'oklch(1 0 0 / 0.15)', backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', border: '1px solid oklch(1 0 0 / 0.3)' }}>
                        <Icons.Play size={26} strokeWidth={1.8} />
                      </span>
                    </div>
                    <h3 className="k-h3" style={{ fontSize: 17 }}>{v.title}</h3>
                    <p className="k-body" style={{ fontSize: 14, marginTop: -8 }}>{v.sub}</p>
                  </BentoCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
