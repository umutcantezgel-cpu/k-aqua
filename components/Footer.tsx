import React from 'react';
import { Link } from '@/i18n/routing';
import { Droplet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -left-[300px] -bottom-[600px] w-[900px] h-[900px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" aria-label="K-Aqua Startseite" className="flex items-center gap-2 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Droplet size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">K-Aqua</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              K-Aqua — Leading in Water Supply. Premium PP-R/PP-RCT Rohrsysteme für Trinkwasser, gefertigt von der KWT GmbH in Waldsolms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-heading font-bold text-sm tracking-widest uppercase text-slate-500 mb-2">Produkte</span>
            <Link href="/products" className="text-slate-300 hover:text-white transition-colors text-sm">Produktprogramm</Link>
            <Link href="/solutions" className="text-slate-300 hover:text-white transition-colors text-sm">Materialvorteile</Link>
            <Link href="/service" className="text-slate-300 hover:text-white transition-colors text-sm">Downloads & Videos</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-heading font-bold text-sm tracking-widest uppercase text-slate-500 mb-2">Unternehmen</span>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">Über uns</Link>
            <Link href="/references" className="text-slate-300 hover:text-white transition-colors text-sm">Referenzen</Link>
            <Link href="/news" className="text-slate-300 hover:text-white transition-colors text-sm">News & Events</Link>
            <Link href="/career" className="text-slate-300 hover:text-white transition-colors text-sm">Karriere</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-heading font-bold text-sm tracking-widest uppercase text-slate-500 mb-2">Kontakt</span>
            <a href="tel:+4960859868410" className="text-slate-300 hover:text-white transition-colors text-sm">+49 (0)60 85 / 9868-410</a>
            <a href="mailto:info@k-aqua.de" className="text-slate-300 hover:text-white transition-colors text-sm">info@k-aqua.de</a>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Anfahrt & Standort</Link>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-slate-800">
          <span className="text-slate-500 text-sm">© {new Date().getFullYear()} KWT GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="text-slate-500 hover:text-white transition-colors text-sm">Impressum</Link>
            <a href="https://www.k-aqua.de/privacy.php" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
