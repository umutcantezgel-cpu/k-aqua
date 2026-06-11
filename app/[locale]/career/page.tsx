import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { KButton } from '@/components/ui/KButton';
import { BentoCard } from '@/components/ui/BentoCard';

export const metadata: Metadata = {
  title: 'K-Aqua | Career - Work with Us',
  description: 'Join K-Aqua, a modern and aggrandizing company leading in water supply. We value creativity and experience. Apply today!',
  keywords: 'K-Aqua jobs, KWT GmbH career, water supply careers, PP-R manufacturing jobs, Germany',
};

function PageHero({ eyebrow, title, lead }: { eyebrow: ReactNode; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="k-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
      <div className="k-container" style={{ position: 'relative' }}>
        <Reveal><p className="k-eyebrow">{eyebrow}</p></Reveal>
        <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>{title}</h1></Reveal>
        {lead && <Reveal delay={140}><p className="k-lead">{lead}</p></Reveal>}
      </div>
    </section>
  );
}

export default function CareerPage() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero 
        eyebrow="Karriere" 
        title={<span>Arbeiten bei <span className="k-grad-text">K-Aqua.</span></span>}
        lead="Kreativität und Erfahrung sind die Basis für Entwicklung, Fertigung und Vermarktung unserer marktführenden Lösungen in der Wasserversorgung." 
      />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)', alignItems: 'stretch' }}>
          <Reveal>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Users size={24} /></div>
              <h3 className="k-h3">Wachsen Sie mit uns</h3>
              <p className="k-body">
                Wir haben eine starke Marktposition erreicht, die wir weiter festigen und ausbauen. Wenn Sie Teil dieses Erfolgs werden möchten und Interesse an einem modernen, wachsenden Unternehmen haben, freuen wir uns auf Ihre Bewerbung.
              </p>
              <KButton href="mailto:andrea.nickel@k-aqua.de" icon={<Icons.ArrowUpRight size={18} />}>Jetzt bewerben</KButton>
            </BentoCard>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Phone size={24} /></div>
              <h3 className="k-h3">Fragen zu offenen Stellen?</h3>
              <p className="k-body">Weitere Informationen zu Jobangeboten und Ihrer Karriere bei K-Aqua erhalten Sie telefonisch:</p>
              <a className="k-link" href="tel:+4960859868410">+49 (0)60 85 / 9868-410</a>
              <a className="k-link" href="mailto:andrea.nickel@k-aqua.de">andrea.nickel@k-aqua.de</a>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
