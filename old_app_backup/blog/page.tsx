import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Blog & News | K-Aqua',
  description: 'Aktuelle Nachrichten, Fachartikel und Insights aus der Welt der modernen Wassertechnologie.',
};

export default function Blog() {
  return (
    <>
      <Section background="gray" spacing="lg">
        <Container size="md" className="text-center">
          <div className="flex justify-center mb-4"><Breadcrumb /></div>
          <Heading variant="h1" className="text-[#0C1929] mb-6">Blog & Insights</Heading>
          <Paragraph size="lg" muted>
            Nachrichten, Fachartikel und Best Practices für nachhaltige Wasserinfrastruktur.
          </Paragraph>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <BlogPreview limit={100} /> {/* Render all posts */}
        </Container>
      </Section>
    </>
  );
}
