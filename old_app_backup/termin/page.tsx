import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';
import { Icon } from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Termin vereinbaren | K-Aqua',
  description: 'Buchen Sie direkt online einen Termin mit unseren Experten für Wassertechnologie.',
};

export default function TerminPage() {
  return (
    <>
      <Section background="blue" spacing="lg">
        <Container size="md" className="text-center">
          <div className="flex justify-center mb-4"><Breadcrumb /></div>
          <Heading variant="h1" className="text-white mb-6">
            Kostenloses Erstgespräch vereinbaren
          </Heading>
          <Paragraph size="lg" className="text-[#D4E5F7] mb-8">
            Wählen Sie einfach einen passenden Termin in unserem Kalender aus. Wir rufen Sie zur vereinbarten Zeit an und beraten Sie unverbindlich zu Ihrem Projekt.
          </Paragraph>
        </Container>
      </Section>

      <Section background="gray" spacing="lg">
        <Container size="md">
          {/* Why book a call? */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4E5F7]">
              <Icon name="video_call" size="md" className="text-[#1A6FD4] mb-4" />
              <h3 className="font-bold text-[#0C1929] mb-2">Persönliche Beratung</h3>
              <p className="text-sm text-[#4A7299]">Sprechen Sie direkt mit einem unserer Fach-Ingenieure via Teams oder Telefon.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4E5F7]">
              <Icon name="engineering" size="md" className="text-[#1A6FD4] mb-4" />
              <h3 className="font-bold text-[#0C1929] mb-2">Projekt-Analyse</h3>
              <p className="text-sm text-[#4A7299]">Wir besprechen Ihre spezifischen Anforderungen und technische Machbarkeit.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D4E5F7]">
              <Icon name="money_off" size="md" className="text-[#1A6FD4] mb-4" />
              <h3 className="font-bold text-[#0C1929] mb-2">100% Unverbindlich</h3>
              <p className="text-sm text-[#4A7299]">Das Erstgespräch ist kostenfrei und verpflichtet Sie zu nichts.</p>
            </div>
          </div>

          <CalendlyEmbed hideEventTypeDetails />
        </Container>
      </Section>
    </>
  );
}
