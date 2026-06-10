import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs, getFeaturedServices } from '@/lib/data/services';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Stack } from '@/components/layout/Stack';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Icon } from '@/components/ui/Icon';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CTASection } from '@/components/sections/CTASection';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  // For related services, we use featured services excluding current
  const related = getFeaturedServices().filter(s => s.id !== service.id).slice(0, 3);

  return (
    <>
      <Section background="blue" spacing="lg">
        <Container>
          <Breadcrumb />

          <Grid columns={2} gap="lg" className="items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white text-[#1A6FD4] flex items-center justify-center mb-6 shadow-sm">
                <Icon name={service.icon} size="lg" />
              </div>
              <Heading variant="h1" className="text-[#0A2E5C] mb-6">{service.title}</Heading>
              <Paragraph size="lg" className="text-[#1E3A5C]">{service.shortDescription}</Paragraph>
            </div>
            <div className="hidden md:block w-full h-64 bg-white/50 rounded-2xl border border-white/20 flex items-center justify-center">
              <Icon name="image" size="xl" className="text-[#B8D1EE]" />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <TableOfContents />
              </div>

              <div className="prose prose-blue max-w-none">
                <Heading variant="h2" className="mb-6">Unsere Expertise</Heading>
                <Paragraph className="mb-12">
                  Detaillierte Informationen und Spezifikationen zu {service.title}. Wir arbeiten nach den neuesten Branchenstandards und setzen auf nachhaltige, effiziente Lösungen für unsere Kunden.
                </Paragraph>

                {/* Simulated Content for TOC generation */}
                <Heading variant="h2" className="mb-4">Vorteile</Heading>
                <ul className="mb-12 space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="check_circle" className="text-[#1A6FD4] mt-1 shrink-0" size="sm" />
                    <span>Maximale Energieeffizienz und Kosteneinsparung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check_circle" className="text-[#1A6FD4] mt-1 shrink-0" size="sm" />
                    <span>Zukunftssichere Technologien nach ISO-Norm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check_circle" className="text-[#1A6FD4] mt-1 shrink-0" size="sm" />
                    <span>Nahtlose Integration in bestehende Systeme</span>
                  </li>
                </ul>

                <Heading variant="h2" className="mb-4">Prozessablauf</Heading>
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4 p-6 bg-[#EEF5FF] rounded-xl border border-[#D4E5F7]">
                    <div className="w-10 h-10 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <Heading variant="h3" className="mb-2">Analyse & Planung</Heading>
                      <Paragraph size="sm">Umfassende Bestandsaufnahme und Ausarbeitung eines passgenauen Konzepts.</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-[#EEF5FF] rounded-xl border border-[#D4E5F7]">
                    <div className="w-10 h-10 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <Heading variant="h3" className="mb-2">Umsetzung</Heading>
                      <Paragraph size="sm">Fachgerechte Installation durch unsere zertifizierten Techniker.</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-[#EEF5FF] rounded-xl border border-[#D4E5F7]">
                    <div className="w-10 h-10 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <Heading variant="h3" className="mb-2">Wartung</Heading>
                      <Paragraph size="sm">Langfristige Betreuung und 24/7 Support für maximale Ausfallsicherheit.</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop TOC Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <TableOfContents />
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section background="gray" spacing="lg">
          <Container>
            <div className="text-center mb-12">
              <Heading variant="h2">Verwandte Leistungen</Heading>
            </div>
            <Grid columns={3} responsive gap="lg">
              {related.map(rel => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <CTASection />
    </>
  );
}
