import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';

export const metadata: Metadata = {
  title: 'K-Aqua | Global References',
  description: 'View K-Aqua global references. Our high-quality PP-R/PP-RCT products are trusted in high-rise buildings, hotel complexes, and commercial estates worldwide.',
  keywords: 'K-Aqua references, global projects, high-rise water supply, commercial plumbing, PP-R projects',
};

function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="k-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash, #f1f5f9)', pointerEvents: 'none' }}></div>
      <div className="k-container" style={{ position: 'relative' }}>
        <div>
          <span className="font-semibold text-sm tracking-wider uppercase text-[#1A6FD4] mb-4 block">
            {eyebrow}
          </span>
        </div>
        <div>
          <Heading variant="h1" className="k-h1 mb-6" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>
            {title}
          </Heading>
        </div>
        {lead ? (
          <div>
            <Paragraph className="k-lead text-lg max-w-3xl">
              {lead}
            </Paragraph>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero 
        eyebrow="Referenzen" 
        title={<span>Weltweit <span className="k-grad-text">bewährt.</span></span>}
        lead="Über Jahrzehnte haben sich K-Aqua-Produkte unzählige Male in Projekten auf der ganzen Welt bewährt. Die Referenzen spiegeln die umfangreichen Einsatzmöglichkeiten des Systems wider." 
      />
      
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {['Wohnungsbau & Hochhäuser', 'Hotels & öffentliche Gebäude', 'Industrie & Infrastruktur'].map((t, i) => (
              <div key={t}>
                <Card className="h-full p-4 flex flex-col gap-4">
                  <div style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius-md, 8px)', overflow: 'hidden', border: '1px solid var(--color-border-subtle, #e2e8f0)', background: 'var(--color-bg-muted, #f1f5f9)', position: 'relative' }}>
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 z-10 bg-black/5 text-center px-4">
                      Projektfoto: {t}
                    </div>
                  </div>
                  <Heading variant="h3" className="k-h3" style={{ fontSize: 18 }}>{t}</Heading>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Paragraph className="k-body" style={{ fontSize: 14.5 }}>
              Hinweis: Die Original-Website listet keine einzelnen Referenzprojekte. Diese Kategorien sind Vorschläge — echte Projektfotos und Namen sollten vom Kunden geliefert werden.
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}
