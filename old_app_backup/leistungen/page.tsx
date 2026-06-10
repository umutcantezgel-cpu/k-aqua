import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { CTASection } from '@/components/sections/CTASection';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Leistungen() {
  return (
    <>
      <Section background="blue" spacing="lg">
        <Container size="md" className="text-center">
          <div className="flex justify-center mb-4"><Breadcrumb /></div>
          <Heading variant="h1" className="text-white mb-6">Alle Leistungen</Heading>
          <Paragraph size="lg" className="text-[#D4E5F7]">
            Von der Konzeptentwicklung bis zum 24/7-Support bieten wir Ihnen ein ganzheitliches Portfolio im Bereich der modernen Wassertechnik.
          </Paragraph>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <ServiceGrid />
        </Container>
      </Section>

      <CTASection variant="gray" />
    </>
  );
}
