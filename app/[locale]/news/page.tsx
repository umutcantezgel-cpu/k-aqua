import React from 'react';
import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { KButton } from '@/components/ui/KButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'K-Aqua | News & Events',
  description: 'Stay updated with K-Aqua news. We are officially ISO certified with ISO 9001:2015, ISO 14001:2015, and ISO 50001:2018.',
  keywords: 'K-Aqua news, ISO 9001, ISO 14001, ISO 50001, DAkkS certification, KWT GmbH updates',
};

export default function Page() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero 
        eyebrow="News & Events" 
        title={<span>Aktuelles von <span className="k-grad-text">K-Aqua.</span></span>} 
      />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: 'var(--sp-4)', alignItems: 'start' }}>
          <Reveal>
            <BentoCard>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--faint-foreground)' }}>Oktober 2025</span>
              <h2 className="k-h2" style={{ fontSize: 'clamp(24px, 2.6vw, 34px)' }}>Wir sind dreifach ISO-zertifiziert</h2>
              <p className="k-body">Unser ISO-Managementsystem wurde erweitert und umfasst nun Qualitäts-, Umwelt- und Energiemanagement:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {[
                  ['ISO 9001:2015', 'Qualitätsmanagementsystem'],
                  ['ISO 14001:2015', 'Umweltmanagementsystem'],
                  ['ISO 50001:2018', 'Energiemanagementsystem'],
                ].map(([code, label]) => (
                  <li key={code} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'center', color: 'var(--muted-foreground)' }}>
                    <span style={{ color: 'var(--accent-strong)' }}><Icons.Check size={18} /></span>
                    <span><strong style={{ color: 'var(--foreground)' }}>{code}</strong> — {label}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-2)' }}>
                <KButton size="sm" href="https://www.k-aqua.de/PDF/KWT%20Zertifikat%20Deutsch.pdf" icon={<Icons.Download size={16} />}>Zertifikat (DE)</KButton>
                <KButton size="sm" variant="ghost" href="https://www.k-aqua.de/PDF/KWT%20Zertifikate%20English.pdf" icon={<Icons.Download size={16} />}>Certificate (EN)</KButton>
              </div>
            </BentoCard>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint>
              <div className="k-icon-chip"><Icons.MapPin size={24} /></div>
              <h3 className="k-h3">Messen & Events</h3>
              <p className="k-body">Besuchen Sie K-Aqua auf kommenden Veranstaltungen. Aktuell sind keine Termine angekündigt — schauen Sie bald wieder vorbei.</p>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
