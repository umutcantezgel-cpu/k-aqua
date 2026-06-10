import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { getAllJobs } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Karriere bei K-Aqua | Offene Stellen',
  description: 'Starten Sie Ihre Karriere bei K-Aqua. Entdecken Sie offene Stellen in Technik, Vertrieb, Forschung und vielen weiteren Bereichen.',
};

export default function Karriere() {
  const jobs = getAllJobs();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Karriere bei K-Aqua</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Gestalten Sie die Zukunft der Wassertechnologie mit uns. Wir bieten spannende Herausforderungen in einem internationalen Umfeld.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Warum K-Aqua?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: 'public', title: 'Internationales Umfeld', desc: 'Arbeiten Sie mit Kollegen und Kunden in über 40 Ländern.' },
            { icon: 'trending_up', title: 'Wachstum & Entwicklung', desc: 'Individuelle Weiterbildungsprogramme und Karrierepfade.' },
            { icon: 'eco', title: 'Sinnvolle Arbeit', desc: 'Tragen Sie zu nachhaltiger Wasserinfrastruktur weltweit bei.' },
          ].map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon name={benefit.icon} className="text-[28px]" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-text-secondary text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <h2 className="text-2xl font-bold text-foreground mb-8">Offene Stellen</h2>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-surface rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">{job.department}</span>
                    <span className="text-xs text-text-secondary">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-text-secondary text-sm mb-2">{job.description}</p>
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <Icon name="location_on" className="text-[14px]" /> {job.location}
                  </div>
                </div>
                <Link href="/kontakt" className="shrink-0 inline-flex items-center justify-center bg-surface border border-border hover:bg-primary hover:text-white hover:border-primary text-foreground font-bold py-3 px-6 rounded-xl transition-colors">
                  Jetzt bewerben
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
