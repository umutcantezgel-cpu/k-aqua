import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { getAllPartners } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Partner & Netzwerk | K-Aqua',
  description: 'Das K-Aqua Partnernetzwerk: Zertifizierte Fachpartner, Forschungskooperationen und strategische Allianzen weltweit.',
};

export default function Partner() {
  const partners = getAllPartners();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Partner & Netzwerk</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Starke Partnerschaften bilden das Fundament unseres Erfolgs. Gemeinsam mit führenden Institutionen und Unternehmen treiben wir Innovation voran.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-surface rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center border border-border">
                  <Icon name={partner.icon || 'handshake'} className="text-[32px] text-primary/40" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">{partner.category}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{partner.name}</h3>
              <p className="text-text-secondary text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
