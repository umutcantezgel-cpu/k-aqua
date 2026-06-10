import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export default function References() {
  const references = [
    {
      id: 'dubai-jumeirah-palm',
      title: 'Dubai Jumeirah Palm',
      location: 'Dubai, VAE',
      year: '2023',
      category: 'Infrastruktur',
      desc: 'Komplette Wasserversorgung für die künstliche Inselgruppe unter extremen klimatischen Bedingungen.',
      icon: 'domain'
    },
    {
      id: 'klinikum-stuttgart',
      title: 'Klinikum Stuttgart',
      location: 'Stuttgart, Deutschland',
      year: '2022',
      category: 'Gesundheitswesen',
      desc: 'Installation von hochreinen PP-R Systemen für die Trinkwasserversorgung und medizinische Gase.',
      icon: 'domain'
    },
    {
      id: 'industrie-park-shanghai',
      title: 'Industriepark Shanghai',
      location: 'Shanghai, China',
      year: '2021',
      category: 'Industrie',
      desc: 'Großflächige Kühlsysteme und chemikalienbeständige Rohrleitungen für Produktionsanlagen.',
      icon: 'factory'
    },
    {
      id: 'wohnquartier-muenchen',
      title: 'Wohnquartier München',
      location: 'München, Deutschland',
      year: '2024',
      category: 'Wohnungsbau',
      desc: 'Nachhaltige Flächenheizung und Trinkwasserinstallation für 500 Wohneinheiten.',
      icon: 'home'
    },
    {
      id: 'hotel-resort-malediven',
      title: 'Eco Resort Malediven',
      location: 'Malé, Malediven',
      year: '2020',
      category: 'Gewerbe',
      desc: 'Salzwasserbeständige Entsalzungsanlagen-Anbindung und Abwassersysteme.',
      icon: 'domain'
    },
    {
      id: 'rechenzentrum-frankfurt',
      title: 'Data Center Frankfurt',
      location: 'Frankfurt, Deutschland',
      year: '2023',
      category: 'Industrie',
      desc: 'Ausfallsichere Kühlwasserversorgung für Hochleistungsserver.',
      icon: 'factory'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Erfolgreiche Projekte weltweit</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Von der Wüste bis zur Arktis, vom Einfamilienhaus bis zum Mega-Projekt. K-Aqua Systeme beweisen sich täglich unter den härtesten Bedingungen.
          </p>
        </div>
      </div>

      {/* Filter Bar (Simulated) */}
      <div className="w-full border-b border-border bg-background sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-4 overflow-x-auto no-scrollbar">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-bold whitespace-nowrap shadow-md">Alle Projekte</button>
          <button className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary text-sm font-medium whitespace-nowrap transition-colors">Infrastruktur</button>
          <button className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary text-sm font-medium whitespace-nowrap transition-colors">Industrie</button>
          <button className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary text-sm font-medium whitespace-nowrap transition-colors">Wohnungsbau</button>
          <button className="px-4 py-2 rounded-full bg-surface border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary text-sm font-medium whitespace-nowrap transition-colors">Gewerbe</button>
        </div>
      </div>

      {/* References Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref) => {

            return (
              <Link href={`/referenzen/${ref.id}`} key={ref.id} className="group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/5 flex items-center justify-center">
                  <Icon name={ref.icon} className="text-[96px] text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    <Icon name={ref.icon} className="text-[12px] text-primary" />
                    {ref.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{ref.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-2">{ref.desc}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-text-secondary font-medium">
                      <span className="flex items-center gap-1"><Icon name="location_on" className="text-[12px]" /> {ref.location}</span>
                      <span className="flex items-center gap-1"><Icon name="calendar_today" className="text-[12px]" /> {ref.year}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-surface border border-border hover:bg-primary hover:text-white hover:border-primary text-foreground font-bold py-3 px-8 rounded-xl transition-colors">
            Weitere Projekte laden
          </button>
        </div>
      </div>
    </div>
  );
}
