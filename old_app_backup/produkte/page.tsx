'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

// Mock Data
const products = [
  {
    id: '1',
    name: 'Winkel 90°',
    articleNumber: '104523',
    category: 'fittings',
    material: 'PP-R',
    status: 'Auf Lager',
    statusType: 'available'
  },
  {
    id: '2',
    name: 'Rohrschere Profi',
    articleNumber: '992100',
    category: 'werkzeuge',
    material: 'Stahl',
    status: 'bis 42mm',
    statusType: 'format'
  },
  {
    id: '3',
    name: 'T-Stück Reduziert',
    articleNumber: '104688',
    category: 'fittings',
    material: 'PP-R / Messing',
    status: 'Auf Lager',
    statusType: 'available'
  }
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('alle');

  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-20 md:pb-0">

      {/* Page Title & Search */}
      <div className="px-4 md:px-8 pt-6 pb-2 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Produktkatalog</h1>
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Icon name="search" className="text-[20px] text-text-secondary" />
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-12 pr-12 text-sm rounded-xl bg-surface border border-border placeholder-text-secondary text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 focus:outline-none transition-all"
            placeholder="Artikelnummer oder Name suchen..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
              <Icon name="qr_code_scanner" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-3 px-4 md:px-8 py-4 overflow-x-auto no-scrollbar max-w-7xl mx-auto w-full">
        <button
          onClick={() => setActiveCategory('alle')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'alle' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary'}`}
        >
          <Icon name="water_drop" className="text-[16px]" /> Alle
        </button>
        <button
          onClick={() => setActiveCategory('rohre')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'rohre' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary'}`}
        >
          <div className="h-4 w-4 rounded-full border-2 border-current"></div> Rohre
        </button>
        <button
          onClick={() => setActiveCategory('fittings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'fittings' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary'}`}
        >
          <Icon name="settings" className="text-[16px]" /> Fittings
        </button>
        <button
          onClick={() => setActiveCategory('werkzeuge')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === 'werkzeuge' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary'}`}
        >
          <Icon name="build" className="text-[16px]" /> Werkzeuge
        </button>
      </div>

      {/* Active Filters & Sort */}
      <div className="px-4 md:px-8 pb-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <p className="text-sm text-text-secondary">Showing <span className="text-foreground font-semibold">124</span> results</p>
        <button className="flex items-center gap-2 text-primary text-sm font-bold hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-primary/20">
          <Icon name="tune" className="text-[16px]" /> Filter
        </button>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Featured/Bestseller Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-background border border-border shadow-lg">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
              Bestseller
            </div>
            <div className="p-5 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 h-48 rounded-xl bg-primary/5 flex items-center justify-center relative group">
                <Icon name="water_drop" className="text-[64px] text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-primary font-bold text-xl">PP-R Rohr System</h3>
                  <p className="text-text-secondary text-sm">Premium Qualität für Trinkwasser</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                <div>
                  <p className="text-text-secondary text-sm">Abmessung</p>
                  <p className="text-foreground font-medium text-lg">20mm - 110mm</p>
                </div>
                <button className="bg-primary text-white rounded-xl px-6 py-3 text-sm font-bold hover:bg-primary-hover transition-colors w-fit">
                  Katalog ansehen
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className="group bg-surface rounded-2xl border border-border p-4 flex gap-4 hover:border-primary/50 transition-colors cursor-pointer shadow-sm hover:shadow-md">
                <div className="w-24 h-24 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center overflow-hidden border border-border relative">
                  <Icon name="settings" className="text-[32px] text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-foreground font-bold text-base leading-tight">{product.name}</h3>
                      <button className="text-text-secondary hover:text-primary transition-colors">
                        <Icon name="bookmark" className="text-[20px]" />
                      </button>
                    </div>
                    <p className="text-text-secondary text-xs mt-1">Art. Nr. {product.articleNumber}</p>
                  </div>
                  <div className="flex items-end justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                        {product.statusType === 'available' ? 'Verfügbar' : 'Format'}
                      </span>
                      <span className={`text-sm font-bold ${product.statusType === 'available' ? 'text-primary' : 'text-foreground'}`}>
                        {product.status}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Icon name="add" className="text-[16px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / Extra */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Download CTA Card */}
          <div className="rounded-2xl bg-primary p-6 text-center relative overflow-hidden shadow-lg">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-hover/50 rounded-full blur-2xl"></div>

            <Icon name="download" className="text-[40px] text-white mx-auto mb-3 relative z-10" />
            <h3 className="text-white font-bold text-lg mb-2 relative z-10">Gesamtkatalog 2024</h3>
            <p className="text-white/80 text-sm mb-6 relative z-10">Alle technischen Daten offline verfügbar.</p>

            <button className="w-full bg-surface text-primary font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 relative z-10 border border-primary/20 group">
              <span>PDF Herunterladen</span>
              <span className="text-xs bg-primary/10 px-2 py-0.5 rounded text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">24 MB</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
