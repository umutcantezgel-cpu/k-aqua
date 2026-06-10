import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { getAllResources } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Ressourcen & Downloads | K-Aqua',
  description: 'Technische Dokumentationen, Whitepaper, Planungshilfen und Kataloge zum kostenlosen Download. Alles für Ihre Projektplanung.',
};

export default function Ressourcen() {
  const resources = getAllResources();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Ressourcen & Downloads</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Technische Dokumentationen, Planungshilfen und Kataloge für Ihre Projekte. Kostenlos und sofort verfügbar.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="group bg-surface rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name={resource.icon} className="text-[28px]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text-secondary bg-background px-2 py-1 rounded border border-border">{resource.format}</span>
                  <span className="text-xs text-text-secondary">{resource.size}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{resource.title}</h3>
              <p className="text-text-secondary text-sm flex-grow mb-4">{resource.description}</p>
              <button className="w-full flex items-center justify-center gap-2 bg-surface border border-border hover:bg-primary hover:text-white hover:border-primary text-foreground font-bold py-3 px-4 rounded-xl transition-colors">
                <Icon name="download" className="text-[18px]" /> Herunterladen
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
