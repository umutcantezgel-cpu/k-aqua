import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import Link from 'next/link';
import { getAllFAQs, getFAQCategories } from '@/lib/data/faq';

export const metadata: Metadata = {
  title: 'FAQ – Häufig gestellte Fragen | K-Aqua',
  description: 'Antworten auf die häufigsten Fragen zu K-Aqua Produkten, Installation, Wartung, Bestellung und technischen Spezifikationen.',
};

export default function FAQ() {
  const faqs = getAllFAQs();
  const categories = getFAQCategories();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="w-full bg-surface border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Häufig gestellte Fragen</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Finden Sie schnell Antworten auf die häufigsten Fragen zu unseren Produkten und Dienstleistungen.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Icon name="category" className="text-[20px] text-primary" /> {category}
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.filter((f) => f.category === category).map((faq) => (
                <details key={faq.id} className="group bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-foreground text-lg">
                    <span className="pr-4">{faq.question}</span>
                    <Icon name="expand_more" className="text-[24px] text-text-secondary group-open:rotate-180 transition-transform duration-300 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center bg-primary/5 rounded-2xl border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ihre Frage nicht gefunden?</h2>
          <p className="text-text-secondary mb-6">Kontaktieren Sie unser Support-Team – wir helfen Ihnen gerne weiter.</p>
          <Link href="/kontakt" className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-lg">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
