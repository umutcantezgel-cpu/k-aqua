import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export default function ReferenceDetail() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <Link href="/referenzen" className="hover:text-primary transition-colors">Referenzen</Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <span className="text-foreground font-medium">Dubai Jumeirah Palm</span>
        </div>
      </div>

      {/* Project Header */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 text-center mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto mb-2">
          <Icon name="water_drop" className="text-[16px]" />
          Infrastruktur & Wasserversorgung
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Dubai Jumeirah Palm:<br />Wasserversorgung der Zukunft
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Ein Meilenstein in der modernen Infrastrukturversorgung unter extremen Wüstenbedingungen. Wie K-Aqua eine nachhaltige Wasserader für 25.000 Menschen schuf.
        </p>
      </div>

      {/* Hero Gallery */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Visual */}
          <div className="lg:col-span-8 relative group rounded-2xl overflow-hidden shadow-sm border border-border h-[400px] md:h-[500px] bg-primary/5 flex items-center justify-center">
            <Icon name="domain" className="text-[128px] text-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-bold uppercase">Nachher: 2023</span>
              </div>
              <h3 className="text-foreground text-2xl font-bold">Vollständige Integration in das städtische Netz</h3>
            </div>
          </div>

          {/* Stats & Details Side */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Icon name="straighten" className="text-[20px]" />
                <span className="text-sm font-bold uppercase tracking-wide">Rohrleitungen</span>
              </div>
              <div className="text-5xl font-bold text-foreground mb-1">145<span className="text-2xl text-text-secondary align-top ml-1">km</span></div>
              <p className="text-text-secondary text-sm">Hochleistungs-PE-Rohre verlegt unter extremen Hitzebedingungen.</p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Icon name="speed" className="text-[20px]" />
                <span className="text-sm font-bold uppercase tracking-wide">Druckklassen</span>
              </div>
              <div className="text-5xl font-bold text-foreground mb-1">SDR<span className="text-3xl text-text-secondary ml-2">11</span></div>
              <p className="text-text-secondary text-sm">Spezialanfertigung für erhöhte Salzwasserresistenz und Bodendruck.</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col justify-center items-start gap-4">
              <h4 className="font-bold text-foreground">Technische Dokumentation</h4>
              <p className="text-sm text-text-secondary">Detaillierte Spezifikationen und CAD-Pläne des Projekts.</p>
              <button className="flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-sm transition-colors">
                <Icon name="download" className="text-[16px]" />
                Case Study herunterladen (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive Section */}
      <div className="w-full bg-surface border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 md:sticky md:top-24">
              <h2 className="text-3xl font-bold text-foreground mb-6">Technische Herausforderungen & Lösungen</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Die künstliche Inselgruppe stellte unsere Ingenieure vor einzigartige Probleme. Der sandige Untergrund erforderte flexible, aber extrem widerstandsfähige Verbindungen.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="bg-surface p-2 rounded-lg shadow-sm text-primary group-hover:scale-110 transition-transform">
                    <Icon name="device_thermostat" className="text-[24px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Temperaturresistenz</h4>
                    <p className="text-xs text-text-secondary">Bis zu 50°C Bodentemperatur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="bg-surface p-2 rounded-lg shadow-sm text-primary group-hover:scale-110 transition-transform">
                    <Icon name="shield_with_error" className="text-[24px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Korrosionsschutz</h4>
                    <p className="text-xs text-text-secondary">100% salzwasserbeständig</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="bg-surface p-2 rounded-lg shadow-sm text-primary group-hover:scale-110 transition-transform">
                    <Icon name="bolt" className="text-[24px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Installationsgeschwindigkeit</h4>
                    <p className="text-xs text-text-secondary">2.5km Verlegung pro Tag</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 grid gap-8">
              {/* Technical Diagram Card */}
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Systemarchitektur</h3>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">CAD V.2.0</span>
                </div>
                <div className="aspect-[16/9] w-full bg-primary/5 rounded-xl flex items-center justify-center relative overflow-hidden group border border-border">
                  <Icon name="search" className="text-[64px] text-primary/20" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-surface text-foreground px-4 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2">
                      <Icon name="search" className="text-[16px] text-primary" /> Plan vergrößern
                    </button>
                  </div>
                </div>
              </div>

              {/* Testimonial Section */}
              <div className="bg-primary/5 text-foreground rounded-2xl overflow-hidden relative border border-border">
                <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-sm relative bg-surface flex items-center justify-center">
                      <Icon name="format_quote" className="text-[32px] text-primary/40" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1.5 flex items-center justify-center shadow-md">
                      <Icon name="format_quote" className="text-[16px]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg md:text-xl font-medium italic mb-4 leading-relaxed text-foreground">
                      &quot;Die Logistik von K-Aqua war beispiellos. Trotz der Insellage hatten wir nie Materialengpässe. Die SDR11-Rohre haben unsere Erwartungen bei den Drucktests sogar übertroffen.&quot;
                    </blockquote>
                    <div>
                      <div className="font-bold text-foreground">Ing. Ahmed Al-Sayed</div>
                      <div className="text-sm text-primary">Chief Project Engineer, Nakheel Properties</div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all group">
                      <Icon name="play_arrow" className="text-[24px] ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Impact Section */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">K-Aqua Green Tech</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nachhaltigkeits-Impact</h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Moderne Wasserwirtschaft bedeutet Verantwortung. Dieses Projekt setzt neue Maßstäbe in Sachen Ressourceneffizienz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                <Icon name="water_drop" className="text-[32px]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">-35% Wasserverlust</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Durch unsere patentierte Verbindungstechnik konnten Leckagen im Vergleich zu herkömmlichen Systemen drastisch reduziert werden.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1A6FD4]/10 text-[#1A6FD4] flex items-center justify-center mb-6">
                <Icon name="recycling" className="text-[32px]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">100% Recycelbar</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Das verwendete Polypropylen kann am Ende des Lebenszyklus vollständig wiederverwertet werden ohne Qualitätsverlust.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <Icon name="eco" className="text-[32px]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Geringer CO2-Fußabdruck</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Leichtere Rohre bedeuteten weniger Transportemissionen. Lokale Extrusion vor Ort sparte zusätzlich Logistikwege.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full bg-primary/5 text-foreground py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Planen Sie ein ähnliches Großprojekt?</h2>
          <p className="text-text-secondary mb-10 text-lg">
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen entwickeln. Unsere Ingenieure beraten Sie weltweit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-primary/30">
              Jetzt Projekt anfragen
            </button>
            <button className="bg-surface border-2 border-border hover:border-primary hover:bg-primary hover:text-white text-foreground font-bold py-4 px-8 rounded-xl transition-colors">
              Experten-Rückruf vereinbaren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
