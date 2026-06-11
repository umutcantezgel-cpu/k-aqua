import React from 'react';
import { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'K-Aqua | Imprint',
  description: 'Legal information and imprint for KWT GmbH (K-Aqua).',
  keywords: 'Imprint, Legal, KWT GmbH',
};

function PageHero({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-[40vh] flex items-center pt-24 pb-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 leading-[1.05] tracking-tight max-w-4xl text-balance">
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

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
    <main className="bg-white min-h-screen pb-24">
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="relative -mt-12 z-20">
        <div className="max-w-[820px] mx-auto px-6">
          <Reveal>
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Info size={24} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Angaben gemäß § 5 TMG</h2>
                  <p className="text-slate-500 text-sm mt-1">Haftungsausschluss und rechtliche Hinweise</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {rows.map(([k, v], i) => (
                      <tr key={k} className={`group ${i !== rows.length - 1 ? 'border-b border-slate-200/60' : ''} hover:bg-white transition-colors`}>
                        <th className="py-4 px-6 text-sm font-bold text-slate-900 w-1/3 align-top">
                          {k}
                        </th>
                        <td className="py-4 px-6 text-sm text-slate-600 align-top">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
