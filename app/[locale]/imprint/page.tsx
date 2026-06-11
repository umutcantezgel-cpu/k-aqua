import React from 'react';
import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { BentoCard } from '@/components/ui/BentoCard';
import { PageHero } from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'K-Aqua | Imprint',
  description: 'Legal information and imprint for KWT GmbH (K-Aqua).',
  keywords: 'Imprint, Legal, KWT GmbH',
};

export default function ImprintPage() {
  const rows = [
    ['Unternehmen', 'KWT GmbH, Auweg 3, 35647 Waldsolms-Brandoberndorf'],
    ['Geschäftsführung', 'Philipp Nickel, Marcello Gallio'],
    ['Registergericht', 'Wetzlar HRB 6732'],
    ['Sitz', 'Waldsolms'],
    ['USt-IdNr.', 'DE 296238486'],
    ['Telefon / Fax', '+49 (0)60 85 / 9868-410 · Fax -420'],
    ['E-Mail', 'info@k-aqua.de'],
  ];

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ maxWidth: 820 }}>
          <Reveal>
            <BentoCard style={{ padding: 'var(--sp-6)' }}>
              <table className="k-table w-full text-left border-collapse">
                <tbody>
                  {rows.map(([k, v]) => (
                    <tr key={k}>
                      <th style={{ borderBottom: '1px solid var(--card-border)', width: 180, padding: '12px 0', fontWeight: 600 }}>{k}</th>
                      <td style={{ borderBottom: '1px solid var(--card-border)', padding: '12px 0' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
