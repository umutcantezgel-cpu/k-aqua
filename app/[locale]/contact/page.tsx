import React from 'react';
import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { BentoCard } from '@/components/ui/BentoCard';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'K-Aqua | Contact',
  description: 'Get in touch with KWT GmbH for K-Aqua sales and support.',
  keywords: 'Contact KWT GmbH, K-Aqua Support, Sales',
};

export default function ContactPage() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero 
        eyebrow="Kontakt" 
        title={<span>Sprechen wir über Ihr <span className="k-grad-text">Projekt.</span></span>} 
      />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-4)' }}>
          <Reveal>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.MapPin size={24} /></div>
              <h3 className="k-h3">Standort Deutschland</h3>
              <p className="k-body">KWT GmbH<br />Auweg 3<br />35647 Waldsolms-Brandoberndorf</p>
            </BentoCard>
          </Reveal>
          <Reveal delay={80}>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Phone size={24} /></div>
              <h3 className="k-h3">Vertrieb</h3>
              <p className="k-body">Tel. +49 (0)60 85 / 9868-410<br />Fax +49 (0)60 85 / 9868-420</p>
              <a className="k-link" href="mailto:info@k-aqua.de">info@k-aqua.de <Icons.ArrowUpRight size={16} /></a>
            </BentoCard>
          </Reveal>
          <Reveal delay={160}>
            <BentoCard tint style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Wrench size={24} /></div>
              <h3 className="k-h3">Qualität & technischer Support</h3>
              <p className="k-body">Unser Support-Team hilft bei technischen Fragen rund um Planung, Material und Verarbeitung.</p>
              <a className="k-link" href="mailto:support@k-aqua.de">support@k-aqua.de <Icons.ArrowUpRight size={16} /></a>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
