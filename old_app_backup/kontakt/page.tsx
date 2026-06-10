import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Icon } from '@/components/ui/Icon';
import { ContactForm } from '@/components/forms/ContactForm';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { companyInfo } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Kontakt | K-Aqua',
  description: 'Nehmen Sie Kontakt mit unserem Expertenteam für Wassertechnologie auf.',
};

export default function Kontakt() {
  return (
    <>
      <Section background="blue" spacing="lg">
        <Container size="md" className="text-center">
          <div className="flex justify-center mb-4"><Breadcrumb /></div>
          <Heading variant="h1" className="text-white mb-6">Wie können wir Ihnen helfen?</Heading>
          <Paragraph size="lg" className="text-[#D4E5F7]">
            Ob konkrete Projektanfrage, technische Beratung oder allgemeine Fragen – unser Team ist gerne für Sie da.
          </Paragraph>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <Grid columns={2} gap="lg">
            {/* Contact Info Column */}
            <div>
              <Heading variant="h2" className="mb-6">Sprechen Sie mit uns</Heading>
              <Paragraph className="mb-8 text-[#4A7299]">
                Füllen Sie das Formular aus, und ein Mitarbeiter unseres Teams wird sich in Kürze bei Ihnen melden. Alternativ erreichen Sie uns direkt über die nachstehenden Kontaktdaten.
              </Paragraph>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#EEF5FF] border border-[#D4E5F7]">
                  <div className="w-12 h-12 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center shrink-0">
                    <Icon name="location_on" size="md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1929] mb-1">Zentrale</h4>
                    <p className="text-[#4A7299]">{companyInfo.address.street}<br/>{companyInfo.address.zip} {companyInfo.address.city}, {companyInfo.address.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#EEF5FF] border border-[#D4E5F7]">
                  <div className="w-12 h-12 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center shrink-0">
                    <Icon name="phone" size="md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1929] mb-1">Telefon</h4>
                    <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-[#1A6FD4] hover:underline">{companyInfo.phone}</a>
                    <p className="text-sm text-[#4A7299] mt-1">{Object.entries(companyInfo.openingHours)[0][0]}, {Object.entries(companyInfo.openingHours)[0][1]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#EEF5FF] border border-[#D4E5F7]">
                  <div className="w-12 h-12 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center shrink-0">
                    <Icon name="mail" size="md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C1929] mb-1">E-Mail</h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#1A6FD4] hover:underline">{companyInfo.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white rounded-2xl shadow-xl border border-[#D4E5F7] p-8">
              <ContactForm />
            </div>
          </Grid>
        </Container>
      </Section>

      <CTASection variant="gray" />
    </>
  );
}
