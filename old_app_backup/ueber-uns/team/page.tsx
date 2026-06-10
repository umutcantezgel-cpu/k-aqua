import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { TeamCard } from '@/components/cards/TeamCard';
import { CTASection } from '@/components/sections/CTASection';
import { getAllTeamMembers } from '@/lib/data/team';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Das Team | Experten für Wassertechnologie',
  description: 'Lernen Sie die Führungsköpfe und Fachexperten hinter K-Aqua kennen.',
};

export default function TeamPage() {
  const team = getAllTeamMembers();

  return (
    <>
      <div className="bg-[#EEF5FF] pt-8 pb-4">
        <Container>
          <Breadcrumb />
        </Container>
      </div>
      <HeroSection 
        title="Die Menschen hinter K-Aqua" 
        subtitle="Unser multidisziplinäres Team vereint jahrzehntelange Erfahrung mit Innovationsgeist und Leidenschaft für Wasser."
        ctaText="Ihre Ansprechpartner"
        ctaHref="#team"
      />

      <Section id="team" background="white" spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Heading variant="h2" className="mb-4">Unsere Experten</Heading>
            <Paragraph size="lg" muted>
              Lernen Sie die Führungskräfte und Spezialisten kennen, die Ihre Projekte zum Erfolg führen.
            </Paragraph>
          </div>
          
          <Grid columns={3} responsive gap="lg">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection 
        heading="Werden Sie Teil des Teams" 
        text="Wir sind stets auf der Suche nach motivierten Talenten, die mit uns die Zukunft der Wassertechnik gestalten möchten."
        buttonText="Zu den Karrieremöglichkeiten"
        buttonHref="/ueber-uns/karriere"
        variant="gray"
      />
    </>
  );
}
