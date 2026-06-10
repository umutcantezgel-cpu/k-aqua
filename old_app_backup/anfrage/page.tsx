import type { Metadata } from 'next';
import { RequestForm } from '@/components/forms/RequestForm';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Kostenlose Projektanfrage | K-Aqua',
  description: 'Fordern Sie unverbindlich ein Angebot für Ihr Anlagen- oder Wasserinfrastruktur-Projekt an.',
};

export default function AnfragePage() {
  return (
    <>
      <Section background="blue" spacing="lg">
        <Container size="md" className="text-center">
          <div className="flex justify-center mb-4"><Breadcrumb /></div>
          <Heading variant="h1" className="text-white mb-6">
            Projektanfrage starten
          </Heading>
          <Paragraph size="lg" className="text-[#D4E5F7]">
            Beschreiben Sie Ihr geplantes Vorhaben in 4 einfachen Schritten. Wir analysieren Ihre Anforderungen und senden Ihnen innerhalb eines Werktags ein unverbindliches Erstangebot zu.
          </Paragraph>
        </Container>
      </Section>

      <Section background="gray" spacing="lg">
        <Container size="md">
          <div className="bg-white rounded-2xl shadow-xl border border-[#D4E5F7] p-8 md:p-12 mb-16">
            <RequestForm />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12 mb-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#EAF3FF] text-[#1A6FD4] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-[#0C1929] mb-2">Anfrage stellen</h3>
              <p className="text-[#4A7299] text-sm">Füllen Sie das detaillierte Formular aus.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#EAF3FF] text-[#1A6FD4] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-[#0C1929] mb-2">Erst-Analyse</h3>
              <p className="text-[#4A7299] text-sm">Unsere Ingenieure prüfen die Machbarkeit.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#EAF3FF] text-[#1A6FD4] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-[#0C1929] mb-2">Angebot erhalten</h3>
              <p className="text-[#4A7299] text-sm">Sie erhalten ein transparentes Konzeptangebot.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
