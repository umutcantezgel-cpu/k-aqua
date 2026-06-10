import { getAllServices } from './services';
import { companyInfo } from './company';

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavigationItem[];
  isExternal?: boolean;
};

export type NavigationConfig = {
  main: NavigationItem[];
  legal: NavigationItem[];
  social: NavigationItem[];
};

export function getNavigationConfig(): NavigationConfig {
  const services = getAllServices();
  
  const serviceChildren: NavigationItem[] = services.map(service => ({
    label: service.title,
    href: `/leistungen/${service.slug}`,
    description: service.shortDescription,
    icon: service.icon
  }));

  return {
    main: [
      {
        label: 'Startseite',
        href: '/',
      },
      {
        label: 'Leistungen',
        href: '/leistungen',
        children: [
          {
            label: 'Alle Leistungen',
            href: '/leistungen',
            description: 'Eine Übersicht unseres gesamten Leistungsportfolios.',
            icon: 'apps'
          },
          ...serviceChildren
        ]
      },
      {
        label: 'Über Uns',
        href: '/ueber-uns',
        children: [
          { label: 'Unternehmen', href: '/ueber-uns', description: 'Erfahren Sie mehr über unsere Mission und Geschichte.', icon: 'info' },
          { label: 'Das Team', href: '/ueber-uns/team', description: 'Lernen Sie unsere Experten kennen.', icon: 'groups' },
          { label: 'Karriere', href: '/ueber-uns/karriere', description: 'Werden Sie Teil unseres Teams.', icon: 'work' },
          { label: 'Partner', href: '/ueber-uns/partner', description: 'Unser starkes Netzwerk.', icon: 'handshake' }
        ]
      },
      {
        label: 'Referenzen',
        href: '/referenzen',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Kontakt',
        href: '/kontakt',
      }
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
      { label: 'Cookie-Richtlinie', href: '/cookie-richtlinie' }
    ],
    social: [
      { label: 'LinkedIn', href: companyInfo.socialMedia.linkedin || '#', isExternal: true },
      { label: 'Twitter', href: companyInfo.socialMedia.twitter || '#', isExternal: true },
    ]
  };
}

// Restoring previously exported mock functions that are used by independent sub-pages
export function getAllResources() {
  return [
    { id: '1', title: 'Planungshandbuch 2024', description: 'Umfassende Richtlinien zur Anlagenplanung nach ISO 9001.', format: 'PDF', size: '2.4 MB', icon: 'picture_as_pdf' },
    { id: '2', title: 'Technisches Datenblatt K-Aqua Pro', description: 'Detaillierte Spezifikationen der Anlagen-Serie.', format: 'PDF', size: '1.1 MB', icon: 'description' },
    { id: '3', title: 'Wartungsprotokoll Vorlage', description: 'Standardisierte Formulare für Service-Einsätze.', format: 'DOCX', size: '500 KB', icon: 'description' }
  ];
}

export function getAllJobs() {
  return [
    { id: '1', title: 'Senior Systemtechniker (m/w/d)', department: 'Installation', location: 'Stuttgart', type: 'Vollzeit', href: '/ueber-uns/karriere/senior-systemtechniker', description: 'Verantwortlich für die Installation und Inbetriebnahme von industriellen Wasseraufbereitungsanlagen.' },
    { id: '2', title: 'Projektleiter Wassertechnik (m/w/d)', department: 'Projektmanagement', location: 'München', type: 'Vollzeit', href: '/ueber-uns/karriere/projektleiter', description: 'Leitung von Großprojekten im Bereich der kommunalen Wasserinfrastruktur.' },
    { id: '3', title: 'Service-Techniker Außendienst (m/w/d)', department: 'Wartung', location: 'Bundesweit', type: 'Vollzeit', href: '/ueber-uns/karriere/service-techniker', description: 'Durchführung von Wartungs- und Reparaturarbeiten bei unseren Kunden vor Ort.' }
  ];
}

export function getAllPartners() {
  return [
    { id: '1', name: 'AquaTech Solutions', category: 'Technologiepartner', description: 'Führender Hersteller von Sensortechnik für die Wasserqualitätsanalyse.', icon: 'water_drop' },
    { id: '2', name: 'EcoPumps GmbH', category: 'Zulieferer', description: 'Unser bevorzugter Partner für hocheffiziente und langlebige Pumpensysteme.', icon: 'autorenew' },
    { id: '3', name: 'ZertCert ISO', category: 'Zertifizierung', description: 'Unabhängige Prüfstelle für unsere ISO-zertifizierten Anlagen.', icon: 'verified' }
  ];
}
