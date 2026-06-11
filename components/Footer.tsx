import React from 'react';
import { Link } from '@/i18n/routing';
import { Droplet } from 'lucide-react';

export default function Footer() {
  const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' };
  const head: React.CSSProperties = { fontFamily: 'var(--font-heading, inherit)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 10 };
  
  return (
    <footer className="k-footer">
      <div className="k-container" style={{ position: 'relative', paddingBlock: 'clamp(48px, 6vw, 80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 1.4fr) repeat(3, minmax(140px, 1fr))', gap: 'var(--sp-8, 2rem)', flexWrap: 'wrap' }} className="k-footer-grid">
          <div style={{ ...col, gap: 'var(--sp-4, 1rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 26, height: 26, background: 'var(--brand-500, #5B2D8C)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Droplet size={14} color="white" strokeWidth={2} />
              </div>
              <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--k-text, inherit)' }}>K-Aqua</span>
            </div>
            <p style={{ fontSize: 15, opacity: 0.65, maxWidth: 320 }}>
              K-Aqua — Leading in Water Supply. PP-R/PP-RCT Rohrsysteme für Trinkwasser, gefertigt von der KWT GmbH in Waldsolms.
            </p>
          </div>
          <div style={col}>
            <span style={head}>Produkte</span>
            <Link href="/products" className="k-footer-link">Produktprogramm</Link>
            <Link href="/solutions" className="k-footer-link">Materialvorteile</Link>
            <Link href="/service" className="k-footer-link">Downloads & Videos</Link>
          </div>
          <div style={col}>
            <span style={head}>Unternehmen</span>
            <Link href="/about" className="k-footer-link">Über uns</Link>
            <Link href="/references" className="k-footer-link">Referenzen</Link>
            <Link href="/news" className="k-footer-link">News & Events</Link>
            <Link href="/career" className="k-footer-link">Karriere</Link>
          </div>
          <div style={col}>
            <span style={head}>Kontakt</span>
            <a className="k-footer-link" href="tel:+4960859868410">+49 (0)60 85 / 9868-410</a>
            <a className="k-footer-link" href="mailto:info@k-aqua.de">info@k-aqua.de</a>
            <Link href="/contact" className="k-footer-link">Anfahrt & Standort</Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--sp-4, 1rem)', flexWrap: 'wrap', marginTop: 'var(--sp-12, 3rem)', paddingTop: 'var(--sp-6, 1.5rem)', borderTop: '1px solid oklch(1 0 0 / 0.12)' }}>
          <span style={{ fontSize: 14, opacity: 0.5 }}>© {new Date().getFullYear()} KWT GmbH. Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: 'var(--sp-6, 1.5rem)' }}>
            <Link href="/contact" className="k-footer-link">Impressum</Link>
            <a className="k-footer-link" href="https://www.k-aqua.de/privacy.php" target="_blank" rel="noreferrer">Datenschutz</a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 800px) { .k-footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}
