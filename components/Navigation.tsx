"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Droplet, Menu, X, Sun, Moon } from 'lucide-react';

const NAV_PAGES = [
  { id: '/', label: 'Start' },
  { id: '/products', label: 'Produkte' },
  { id: '/solutions', label: 'Lösungen' },
  { id: '/service', label: 'Service' },
  { id: '/references', label: 'Referenzen' },
  { id: '/about', label: 'Über uns' },
  { id: '/news', label: 'News' },
  { id: '/career', label: 'Karriere' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { 
    setMenuOpen(false); 
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <React.Fragment>
      <header className={`k-nav ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
        <div className="k-container k-nav-inner">
          <Link href="/" aria-label="K-Aqua Startseite" style={{ textDecoration: 'none', display: 'inline-flex', minHeight: 44, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 28, height: 28, backgroundColor: 'var(--brand-500, #5B2D8C)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplet size={16} color="white" strokeWidth={2} />
              </div>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--k-text, inherit)' }}>K-Aqua</span>
            </div>
          </Link>
          <nav className="k-nav-links" aria-label="Hauptnavigation">
            {NAV_PAGES.map((p) => {
              const isActive = pathname === p.id || (pathname.startsWith(p.id) && p.id !== '/');
              return (
                <Link key={p.id} href={p.id as any}
                  className={`k-nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}>
                  {p.label}
                </Link>
              );
            })}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2, 8px)' }}>
            <button type="button" className="k-icon-btn" aria-label={dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'} onClick={() => setDark(!dark)}>
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <span className="k-nav-cta" style={{ display: 'inline-flex' }}>
              <Link href="/contact" className="k-btn" style={{ fontSize: 13, padding: '0 16px', height: 32, borderRadius: 'var(--radius, 16px)', background: 'var(--brand-500, #5B2D8C)', color: '#fff', display: 'inline-flex', alignItems: 'center', fontWeight: 600, textDecoration: 'none' }}>
                Kontakt
              </Link>
            </span>
            <button type="button" className="k-icon-btn k-menu-btn" aria-label="Menü öffnen" aria-expanded={menuOpen}
              style={{ display: 'none' }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen ? (
        <div className="k-mobile-menu">
          {NAV_PAGES.concat([{ id: '/contact', label: 'Kontakt' }]).map((p) => {
            const isActive = pathname === p.id || (pathname.startsWith(p.id) && p.id !== '/');
            return (
              <Link key={p.id} href={p.id as any} className={`k-nav-link ${isActive ? 'is-active' : ''}`}>
                {p.label}
              </Link>
            );
          })}
        </div>
      ) : null}
      <style>{`
        @media (max-width: 980px) { 
          .k-menu-btn { display: grid !important; } 
          .k-nav-cta { display: none !important; } 
        }
      `}</style>
    </React.Fragment>
  );
}
