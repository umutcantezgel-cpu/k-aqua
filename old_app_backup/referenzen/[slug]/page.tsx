import Link from 'next/link';
import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/data/case-studies';

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ref = getCaseStudyBySlug(slug);
  if (!ref) return { title: 'Referenz | K-Aqua' };
  return { title: ref.metadata.title, description: ref.metadata.description };
}

export default async function ReferenzDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ref = getCaseStudyBySlug(slug);

  if (!ref) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <Icon name="error" className="text-[64px] text-text-secondary mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2">Referenz nicht gefunden</h1>
        <p className="text-text-secondary mb-6">Das angeforderte Projekt existiert nicht.</p>
        <Link href="/referenzen" className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors">
          Alle Referenzen ansehen
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <Link href="/referenzen" className="hover:text-primary transition-colors">Referenzen</Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <span className="text-foreground font-medium">{ref.title}</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">{ref.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">{ref.title}</h1>
        <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
          <span className="flex items-center gap-1"><Icon name="location_on" className="text-[14px]" /> {ref.location}</span>
          <span className="flex items-center gap-1"><Icon name="calendar_today" className="text-[14px]" /> {ref.year}</span>
          <span className="flex items-center gap-1"><Icon name="schedule" className="text-[14px]" /> {ref.duration}</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ref.kpis.map((kpi) => (
            <div key={kpi.label} className="bg-surface rounded-xl border border-border p-5 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{kpi.value}</div>
              <div className="text-xs text-text-secondary uppercase tracking-wider font-medium">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge / Solution / Result */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          {[
            { title: 'Herausforderung', content: ref.challenge, icon: 'warning' },
            { title: 'Lösung', content: ref.solution, icon: 'lightbulb' },
            { title: 'Ergebnis', content: ref.result, icon: 'emoji_events' },
          ].map((section) => (
            <div key={section.title} className="flex gap-4 p-6 bg-surface rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon name={section.icon} className="text-[24px]" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">{section.title}</h3>
                <p className="text-text-secondary leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Eingesetzte Technologien</h2>
        <div className="flex flex-wrap gap-2">
          {ref.technologies.map((tech) => (
            <span key={tech} className="text-sm font-medium text-text-secondary bg-surface border border-border px-4 py-2 rounded-full">{tech}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-primary/5 border-t border-border py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Planen Sie ein ähnliches Projekt?</h2>
          <p className="text-text-secondary text-lg mb-8">Unsere Ingenieure beraten Sie weltweit bei der Planung und Umsetzung Ihres Projekts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center justify-center bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-hover transition-colors shadow-lg">
              Jetzt Projekt anfragen
            </Link>
            <Link href="/referenzen" className="inline-flex items-center justify-center bg-surface border border-border text-foreground font-bold py-4 px-8 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-colors">
              Weitere Referenzen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
