import type { TeamMember } from '@/lib/types';

// ═══════════════════════════════════════════════════════════════
// K-Aqua Team Members — Single Source of Truth
// ═══════════════════════════════════════════════════════════════

const teamMembers: TeamMember[] = [
  {
    id: 'tm-001',
    slug: 'thomas-weber',
    name: 'Dr. Thomas Weber',
    role: 'Chief Executive Officer',
    department: 'Geschäftsleitung',
    bio: 'Dr. Thomas Weber leitet K-Aqua seit der Gründung im Jahr 1990. Mit seiner Vision einer nachhaltigeren Wasserinfrastruktur hat er das Unternehmen von einer kleinen Stuttgarter Werkstatt zum internationalen Marktführer für PP-R Rohrsysteme aufgebaut. Seine Doktorarbeit über thermoplastische Verbindungstechniken legte den Grundstein für das patentierte K-Aqua Verbindungssystem.\n\nUnter seiner Führung expandierte K-Aqua in über 40 Länder und eröffnete Produktionsstandorte in Shanghai und Dubai. Er ist Mitglied des VDI-Fachausschusses für Kunststoffrohrsysteme und regelmäßiger Referent auf internationalen Fachkonferenzen.',
    shortBio: 'Gründer und CEO von K-Aqua. Promovierter Ingenieur mit über 30 Jahren Erfahrung in der Rohr- und Wassertechnologie.',
    image: '/images/team/thomas-weber.jpg',
    initials: 'TW',
    skills: ['Unternehmensführung', 'Werkstoffkunde', 'Polymertechnik', 'Internationalisierung', 'Strategische Planung', 'Innovationsmanagement'],
    social: { linkedin: 'https://linkedin.com/in/thomas-weber-kaqua' },
    order: 1,
  },
  {
    id: 'tm-002',
    slug: 'sarah-mueller',
    name: 'Sarah Müller',
    role: 'Chief Technology Officer',
    department: 'Technik & Innovation',
    bio: 'Sarah Müller verantwortet die gesamte technische Entwicklung und Innovation bei K-Aqua. Als Diplom-Ingenieurin für Verfahrenstechnik bringt sie über 15 Jahre Erfahrung in der Polymerverarbeitung und Rohrsystemtechnik mit. Unter ihrer Leitung wurde die K-Aqua Produktionsanlage vollständig auf Industrie 4.0 umgestellt.\n\nSie treibt die Entwicklung neuer Materialien voran, darunter die UV-stabilen PP-R Compounds und die antimikrobielle Innenschicht für Trinkwassersysteme. Sie hält drei Patente im Bereich thermoplastischer Verbindungstechnik.',
    shortBio: 'CTO mit 15 Jahren Erfahrung in Polymerverarbeitung. Treibt Industrie 4.0 und Materialinnovation bei K-Aqua voran.',
    image: '/images/team/sarah-mueller.jpg',
    initials: 'SM',
    skills: ['Verfahrenstechnik', 'Polymerchemie', 'Industrie 4.0', 'Produktentwicklung', 'Patentmanagement', 'F&E-Leitung', 'CAE-Simulation'],
    social: { linkedin: 'https://linkedin.com/in/sarah-mueller-kaqua' },
    order: 2,
  },
  {
    id: 'tm-003',
    slug: 'markus-klein',
    name: 'Markus Klein',
    role: 'Chief Operating Officer',
    department: 'Betrieb & Logistik',
    bio: 'Markus Klein steuert die operativen Prozesse und die globale Lieferkette von K-Aqua. Mit einem MBA von der Mannheim Business School und über 12 Jahren Erfahrung im industriellen Operations Management hat er die K-Aqua Logistik zu einer der effizientesten der Branche gemacht.\n\nEr hat das Just-in-Time-Liefersystem eingeführt, das Materialverschwendung um 35% reduzierte, und leitet den Aufbau des neuen Logistikzentrums in den Vereinigten Arabischen Emiraten.',
    shortBio: 'COO mit MBA und 12 Jahren Erfahrung in Operations Management. Verantwortlich für die globale K-Aqua Lieferkette.',
    image: '/images/team/markus-klein.jpg',
    initials: 'MK',
    skills: ['Supply Chain Management', 'Lean Manufacturing', 'ERP-Systeme', 'Prozessoptimierung', 'Lagerhaltung', 'Internationaler Handel'],
    social: { linkedin: 'https://linkedin.com/in/markus-klein-kaqua' },
    order: 3,
  },
  {
    id: 'tm-004',
    slug: 'julia-chen',
    name: 'Julia Chen',
    role: 'Chief Sales Officer',
    department: 'Vertrieb & Marketing',
    bio: 'Julia Chen leitet den weltweiten Vertrieb und das Marketing von K-Aqua. Geboren in Shanghai und aufgewachsen in Stuttgart, verbindet sie kulturelle Kompetenz mit tiefem technischem Verständnis. Seit ihrem Einstieg bei K-Aqua hat sie den Umsatz in der APAC-Region um 180% gesteigert.\n\nSie betreut persönlich die strategischen Key Accounts in den Bereichen Großinfrastruktur und Gesundheitswesen und ist verantwortlich für den Aufbau des Vertriebsnetzes in Südostasien.',
    shortBio: 'CSO mit interkultureller Expertise. Hat den K-Aqua Umsatz in der APAC-Region um 180% gesteigert.',
    image: '/images/team/julia-chen.jpg',
    initials: 'JC',
    skills: ['Key Account Management', 'Internationaler Vertrieb', 'Marketing-Strategie', 'Business Development', 'CRM-Systeme', 'Mandarin', 'Englisch'],
    social: { linkedin: 'https://linkedin.com/in/julia-chen-kaqua' },
    order: 4,
  },
  {
    id: 'tm-005',
    slug: 'andreas-bauer',
    name: 'Dr. Andreas Bauer',
    role: 'Head of R&D',
    department: 'Forschung & Entwicklung',
    bio: 'Dr. Andreas Bauer leitet die Forschungsabteilung mit Fokus auf nachhaltige Materialien und Smart-Water-Technologien. Seine Promotion in Materialwissenschaft an der TU München bildet die Basis für seine Arbeit an neuartigen PP-R Compounds mit verbesserten mechanischen Eigenschaften.\n\nEr hat maßgeblich zur Entwicklung der vollständig recycelbaren Rohrsystemgeneration beigetragen und arbeitet aktuell an sensorintegrierten Rohrsystemen für Echtzeit-Wasserqualitätsmessung.',
    shortBio: 'Leiter F&E mit Promotion in Materialwissenschaft. Spezialist für nachhaltige Werkstoffe und Smart-Water-Technologie.',
    image: '/images/team/andreas-bauer.jpg',
    initials: 'AB',
    skills: ['Materialwissenschaft', 'Polymerforschung', 'Nachhaltigkeit', 'Sensorik', 'IoT-Integration', 'Labormanagement', 'Wissenschaftliches Publizieren'],
    social: { linkedin: 'https://linkedin.com/in/andreas-bauer-kaqua' },
    order: 5,
  },
  {
    id: 'tm-006',
    slug: 'lisa-hoffmann',
    name: 'Lisa Hoffmann',
    role: 'Head of Quality',
    department: 'Qualitätsmanagement',
    bio: 'Lisa Hoffmann ist als Leiterin des Qualitätsmanagements verantwortlich für die ISO 9001 Zertifizierung und alle Prüfprozesse bei K-Aqua. Mit einer Ausbildung als Qualitätsingenieurin und über 10 Jahren Erfahrung in der Kunststoffindustrie hat sie die Null-Fehler-Produktion bei K-Aqua etabliert.\n\nSie hat das digitale Prüfdaten-Management eingeführt, das eine vollständige Chargenrückverfolgung innerhalb von Minuten ermöglicht. Unter ihrer Leitung hat K-Aqua seit 2019 keinen einzigen Produktfehler verzeichnet.',
    shortBio: 'Qualitätsingenieurin mit 10 Jahren Erfahrung. Hat die Null-Fehler-Produktion bei K-Aqua etabliert.',
    image: '/images/team/lisa-hoffmann.jpg',
    initials: 'LH',
    skills: ['ISO 9001', 'Qualitätsmanagement', 'Prüftechnik', 'Statistik', 'Six Sigma', 'Auditierung', 'FMEA'],
    social: { linkedin: 'https://linkedin.com/in/lisa-hoffmann-kaqua' },
    order: 6,
  },
];

// ═══ Typed Getter Functions ═══

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers.sort((a, b) => a.order - b.order);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

export function getTeamMembersByDepartment(department: string): TeamMember[] {
  return teamMembers.filter((m) => m.department === department);
}

export function getTeamByOrder(): TeamMember[] {
  return [...teamMembers].sort((a, b) => a.order - b.order);
}

export { teamMembers };
