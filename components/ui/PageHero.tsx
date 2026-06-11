import React, { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { Eyebrow } from './Eyebrow';

export interface PageHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="k-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
      <div className="k-container" style={{ position: 'relative' }}>
        {eyebrow && <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>}
        <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>{title}</h1></Reveal>
        {lead && <Reveal delay={140}><p className="k-lead">{lead}</p></Reveal>}
      </div>
    </section>
  );
}
