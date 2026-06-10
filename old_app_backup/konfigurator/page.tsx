'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

export default function Configurator() {
  const [activeStep, setActiveStep] = useState(1);
  const [config, setConfig] = useState({
    type: 'ppr-standard',
    diameter: '32',
    color: 'green',
    accessories: [] as string[]
  });

  const steps = [
    { id: 1, name: 'Systemwahl', icon: 'layers' },
    { id: 2, name: 'Dimensionen', icon: 'straighten' },
    { id: 3, name: 'Zubehör', icon: 'settings' },
    { id: 4, name: 'Zusammenfassung', icon: 'check_circle' }
  ];

  // Mock data for options
  const types = [
    { id: 'ppr-standard', name: 'PP-R Standard', desc: 'Für Kalt- und Warmwasser', price: 'ab 2,45 €/m' },
    { id: 'ppr-fiber', name: 'PP-R Faserverbund', desc: 'Reduzierte Längenausdehnung', price: 'ab 3,80 €/m' },
    { id: 'ppr-uv', name: 'PP-R UV-Stabil', desc: 'Für Außeninstallationen', price: 'ab 4,10 €/m' }
  ];

  const diameters = ['20', '25', '32', '40', '50', '63', '75', '90', '110'];
  const colors = [
    { id: 'green', name: 'K-Aqua Grün', hex: '#10b981' },
    { id: 'white', name: 'Sanitär Weiß', hex: '#f8fafc' },
    { id: 'grey', name: 'Industrie Grau', hex: '#64748b' }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background pt-6 pb-24 lg:pb-0">

      {/* Header & Steps */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto w-full mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">3D System-Konfigurator</h1>

        <div className="flex items-center justify-between w-full overflow-x-auto no-scrollbar pb-4 gap-4">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;
            const isCompleted = activeStep > step.id;

            return (
              <div key={step.id} className="flex items-center gap-2 shrink-0">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${isActive ? 'border-primary bg-primary/10 text-primary' : isCompleted ? 'border-primary bg-primary text-white' : 'border-border bg-surface text-text-secondary'}`}>
                  {isCompleted ? <Icon name="check_circle" className="text-[20px]" /> : <Icon name={step.icon} className="text-[20px]" />}
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-text-secondary'}`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <Icon name="chevron_right" className="text-[16px] text-border mx-2" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 gap-8">

        {/* Left: 3D Viewport (Simulated) */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="relative w-full aspect-square md:aspect-video bg-surface rounded-2xl border border-border overflow-hidden shadow-inner flex items-center justify-center group">

            {/* Simulated 3D Canvas Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* 3D Object Placeholder */}
            <div className="relative z-10 w-1/2 h-1/2 flex items-center justify-center animate-pulse">
              <Icon name="layers" className="text-[128px] text-primary/40" />
            </div>

            {/* Viewport Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              <button className="p-2 rounded-lg bg-background/80 backdrop-blur border border-border text-text-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
                <Icon name="zoom_in" className="text-[20px]" />
              </button>
              <button className="p-2 rounded-lg bg-background/80 backdrop-blur border border-border text-text-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
                <Icon name="zoom_out" className="text-[20px]" />
              </button>
              <button className="p-2 rounded-lg bg-background/80 backdrop-blur border border-border text-text-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
                <Icon name="3d_rotation" className="text-[20px]" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-background/80 backdrop-blur px-3 py-1.5 rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-foreground">Live Preview</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-text-secondary bg-surface p-4 rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <Icon name="info" className="text-[16px] text-primary" />
              <span>Ziehen zum Rotieren, Scrollen zum Zoomen.</span>
            </div>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="download" className="text-[16px]" /> CAD Export
            </button>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">

          {/* Step 1: Type Selection */}
          {activeStep === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-xl font-bold text-foreground mb-2">Rohrsystem wählen</h3>
              {types.map(type => (
                <button
                  key={type.id}
                  onClick={() => setConfig({ ...config, type: type.id })}
                  className={`flex flex-col p-4 rounded-xl border-2 text-left transition-all ${config.type === type.id ? 'border-primary bg-primary/5 shadow-md' : 'border-border bg-surface hover:border-primary/50'}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-foreground">{type.name}</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">{type.price}</span>
                  </div>
                  <span className="text-sm text-text-secondary">{type.desc}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Dimensions */}
          {activeStep === 2 && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Durchmesser (mm)</h3>
                <div className="grid grid-cols-3 gap-3">
                  {diameters.map(d => (
                    <button
                      key={d}
                      onClick={() => setConfig({ ...config, diameter: d })}
                      className={`py-3 rounded-xl border-2 font-bold text-center transition-all ${config.diameter === d ? 'border-primary bg-primary text-white shadow-md' : 'border-border bg-surface text-foreground hover:border-primary/50'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Farbe</h3>
                <div className="flex gap-4">
                  {colors.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setConfig({ ...config, color: c.id })}
                      className={`w-12 h-12 rounded-full border-4 transition-all relative ${config.color === c.id ? 'border-primary scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {config.color === c.id && <Icon name="check_circle" className="absolute -bottom-2 -right-2 text-[20px] text-primary bg-background rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-auto pt-6 flex gap-4">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className="flex-1 py-3 rounded-xl border border-border bg-surface text-foreground font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              Zurück
            </button>
            <button
              onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
              className="flex-1 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
            >
              {activeStep === 4 ? 'In den Warenkorb' : 'Weiter'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Bottom Bar (Summary) */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 lg:hidden z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs text-text-secondary uppercase font-bold tracking-wider">Aktuelle Konfiguration</span>
          <span className="text-sm font-bold text-foreground truncate max-w-[200px]">
            {types.find(t => t.id === config.type)?.name} | Ø {config.diameter}mm
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-xs text-text-secondary">Richtpreis</span>
            <span className="block text-lg font-black text-primary">~ 8,50 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
