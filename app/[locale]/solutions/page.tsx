import { Metadata } from 'next';
import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Icons } from '@/components/ui/Icons';
import { KButton } from '@/components/ui/KButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { Photo } from '@/components/ui/Photo';
import { SectionHead } from '@/components/ui/SectionHead';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'K-Aqua | Solutions - Environmentally Responsible',
  description: 'Learn about K-Aqua\'s environmentally friendly solutions. Our PP-R/PP-RCT products are 100% recyclable, highly durable, and manufactured with ecological responsibility.',
  keywords: 'Environmentally-friendly, Recyclable, PP-R, PP-RCT, Sustainable piping, K-Aqua Solutions',
};

const PICS = {
  env: 'https://www.k-aqua.de/Pics/solutions_environmentally_friendly.jpg',
  recycle: 'https://www.k-aqua.de/Pics/solutions_recycleable.jpg',
  superior: 'https://www.k-aqua.de/Pics/solutions_superior.png',
};

export default function Page() {
  const benefits = [
    { icon: 'Leaf', img: PICS.env, title: 'Umweltfreundlich', text: 'Polypropylen entsteht aus Gasen, die früher nutzlos verbrannt wurden — und reduziert so die Luftverschmutzung drastisch. Die Produktion nutzt Wasser im geschlossenen Kühlkreislauf und schützt Flüsse, Bäche und Seen.' },
    { icon: 'Recycle', img: PICS.recycle, title: 'Recycelbar', text: 'PP trägt den Recycling-Code „5" und lässt sich sortenrein trennen. Wir recyceln sämtliche Produktionsabfälle und Verschnitte — bei hoher Nachfrage nach PP-Rezyklat.' },
    { icon: 'Shield', img: PICS.superior, title: 'Überlegen', text: 'Als technischer Kunststoff ist PP ungewöhnlich beständig gegen Lösungsmittel, Laugen und Säuren — und formt im Spritzguss komplexe Geometrien bei niedrigen Kosten und hohen Stückzahlen.' },
    { icon: 'Thermometer', img: null, title: 'Langlebig', text: 'PP-Produkte halten deutlich länger als vergleichbare Materialien: pflegeleicht, verschleißfest und beständig gegen Alterung und Temperaturextreme.' },
  ];

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <section className="k-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative' }}>
          <Reveal><Eyebrow>Lösungen</Eyebrow></Reveal>
          <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>Ein <span className="k-grad-text">verantwortungsvolles</span> Produkt.</h1></Reveal>
          <Reveal delay={140}><p className="k-lead">Warum Polypropylen das richtige Material für die Wasserversorgung von morgen ist — ökologisch, technisch und wirtschaftlich.</p></Reveal>
        </div>
      </section>

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div className="k-bento">
            {benefits.map((b, i) => {
              const Ic = Icons[b.icon as keyof typeof Icons];
              const wide = i === 0 || i === 3;
              return (
                <Reveal key={b.title} delay={i * 80} style={{ gridColumn: `span ${wide ? 4 : 2}` }}>
                  <BentoCard tint={i === 3} style={{ height: '100%' }}>
                    {b.img ? <Photo src={b.img} alt={b.title} ratio={wide ? '16 / 6' : '16 / 9'} /> : <div className="k-icon-chip" style={{ width: 56, height: 56 }}><Ic size={28} /></div>}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                      {b.img ? <div className="k-icon-chip" style={{ width: 40, height: 40, borderRadius: 12 }}><Ic size={20} /></div> : null}
                      <h3 className="k-h3">{b.title}</h3>
                    </div>
                    <p className="k-body">{b.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container" style={{ textAlign: 'center' }}>
          <Reveal>
            <SectionHead align="center" eyebrow="Nächster Schritt" title="Vom Material zum System." lead="Sehen Sie, wie diese Materialvorteile im K-Aqua Produktprogramm konkret werden." />
            <KButton size="lg" href="/products" icon={<Icons.ArrowRight size={18} />}>Zum Produktprogramm</KButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
