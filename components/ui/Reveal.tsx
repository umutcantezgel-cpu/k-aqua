'use client';

import React, { useRef, useState, useEffect } from 'react';

export function Reveal({ children, delay = 0, as = 'div', style, className = '' }: any) {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!vis) return;
    const t = setTimeout(() => {
      setSettled(true);
      const el = ref.current as any;
      if (el && el.getAnimations) {
        el.getAnimations().forEach((a: any) => { try { a.finish(); } catch (e) {} });
      }
    }, 700 + delay);
    return () => clearTimeout(t);
  }, [vis, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.95 && r.bottom > 0;
    };
    if (inView()) { setVis(true); return; }
    let io: IntersectionObserver | null = null;
    const onScroll = () => { if (inView()) { setVis(true); cleanup(); } };
    const cleanup = () => {
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); cleanup(); }
      }, { threshold: 0.1 });
      io.observe(el);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return cleanup;
  }, []);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal ${vis ? '' : 'reveal-pre'} ${settled ? 'reveal-settled' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}
