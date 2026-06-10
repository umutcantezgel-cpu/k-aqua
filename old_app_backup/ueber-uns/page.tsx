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
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Über Uns | K-Aqua',
  description: 'Wir sind die Experten für ganzheitliche und nachhaltige Wassertechnologie.',
};

export default function UeberUns() {
  const team = getAllTeamMembers();

  return (
    <>
      <HeroSection 
        title="10 Jahre Innovation im Wasserkreislauf" 
        subtitle="Erfahren Sie mehr über unsere Geschichte, unsere Mission und die Köpfe hinter K-Aqua, die täglich für höchste Wasserqualität sorgen."
        ctaText="Lernen Sie uns kennen"
        ctaHref="#team"
      />

      <Section background="white" spacing="lg">
        <Container>
          <Grid columns={2} gap="lg" className="items-center">
            <div>
              <Heading variant="h2" className="mb-6">Unsere Mission</Heading>
              <Paragraph size="lg" className="mb-4 text-[#1E3A5C] font-medium">
                K-Aqua steht für exzellente Wassertechnologie. Wir schaffen nachhaltige Infrastrukturen, die Effizienz und Ressourcenschonung vereinen.
              </Paragraph>
              <Paragraph className="mb-6">
                Seit unserer Gründung vor über 10 Jahren verfolgen wir ein klares Ziel: Den Zugang zu sauberem Wasser und effizienten Wasserkreisläufen für Industrie und Kommunen weltweit zu sichern. 
                Mit modernster Technik und einem starken Fokus auf Nachhaltigkeit realisieren wir Projekte jeder Größenordnung.
              </Paragraph>
            </div>
            <div className="bg-[#EEF5FF] rounded-3xl h-80 w-full flex items-center justify-center p-8">
               <div className="grid grid-cols-2 gap-4 w-full h-full">
                 <div className="bg-[#1A6FD4] rounded-2xl"></div>
                 <div className="bg-[#B8D1EE] rounded-2xl mt-8"></div>
                 <div className="bg-[#0A2E5C] rounded-2xl -mt-8"></div>
                 <div className="bg-[#5A9FE6] rounded-2xl"></div>
               </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="team" background="gray" spacing="lg">
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
        variant="blue"
      />
    </>
  );
}
