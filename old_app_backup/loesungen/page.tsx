import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export default function Solutions() {
  const solutions = [
    {
      id: 'gewerbe',
      title: 'Gewerbe & Industrie',
      desc: 'Hochleistungssysteme für anspruchsvolle industrielle Anwendungen und große Gewerbekomplexe.',
      icon: 'factory',
      features: ['Chemikalienbeständig', 'Hohe Drucktoleranz', 'Wartungsarm']
    },
    {
      id: 'wohnungsbau',
      title: 'Wohnungsbau',
      desc: 'Sichere und langlebige Trinkwasser- und Heizungsinstallationen für Mehrfamilienhäuser.',
      icon: 'business',
      features: ['Schallschutz', 'Trinkwasserhygiene', 'Einfache Montage']
    },
    {
      id: 'einfamilienhaus',
      title: 'Einfamilienhaus',
      desc: 'Komplettlösungen für das moderne Eigenheim. Von der Wasserversorgung bis zur Flächenheizung.',
      icon: 'home',
      features: ['Energieeffizient', 'Langlebig', 'Komplettsystem']
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header */}
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Lösungen für jede Anforderung</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Entdecken Sie unsere maßgeschneiderten Systemlösungen für verschiedene Einsatzbereiche. K-Aqua bietet die passende Technologie für Ihr Projekt.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-16">
        {solutions.map((solution, index) => {
          const isEven = index % 2 === 0;


          return (
            <div key={solution.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm group bg-primary/5 flex items-center justify-center">
                  <Icon name={solution.icon} className="text-[128px] text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="flex items-center gap-3 text-primary">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon name={solution.icon} className="text-[32px]" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {solution.desc}
                </p>

                <ul className="flex flex-col gap-3 mt-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                        <Icon name="verified_user" className="text-[16px]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link href={`/loesungen/${solution.id}`} className="inline-flex items-center gap-2 bg-surface hover:bg-primary hover:text-white hover:border-primary border border-border text-foreground font-bold py-3 px-6 rounded-xl transition-colors group">
                    Details ansehen
                    <Icon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="w-full bg-primary/5 text-foreground py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nicht die passende Lösung gefunden?</h2>
          <p className="text-text-secondary text-lg mb-10">
            Kontaktieren Sie unsere Experten für eine individuelle Beratung. Wir entwickeln Sonderlösungen für spezifische Anforderungen.
          </p>
          <Link href="/kontakt" className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-hover transition-colors shadow-lg">
            Experten kontaktieren
          </Link>
        </div>
      </div>
    </div>
  );
}
