import type { CaseStudy } from '@/lib/types';

const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001', slug: 'dubai-jumeirah-palm', title: 'Dubai Jumeirah Palm', client: 'Nakheel Properties', location: 'Dubai, VAE', industry: 'Infrastruktur', category: 'Infrastruktur', icon: 'domain',
    challenge: 'Extremer Hitzestress auf Rohrleitungen bei über 50°C Umgebungstemperatur, sandiger Untergrund, Salzwassernähe und die logistische Herausforderung einer Inselbaustelle mit limitierten Lager- und Transportmöglichkeiten.',
    solution: 'Einsatz von speziell entwickelten SDR11 PP-R Rohren mit erhöhter UV- und Salzwasserresistenz. Temporäre Extrusions-Containeranlage vor Ort zur Reduzierung der Transportwege. Lokale Qualitätskontrolle mit mobilem Prüflabor.',
    result: 'Erfolgreiche Inbetriebnahme der Wasserversorgung für 25.000 Bewohner mit 35% weniger Wasserverlust als vergleichbare konventionelle Systeme. Fertigstellung drei Monate vor dem geplanten Termin.',
    kpis: [{ label: 'Rohrleitungen', value: '145 km' }, { label: 'Druckklasse', value: 'SDR 11' }, { label: 'Bewohner versorgt', value: '25.000' }, { label: 'Wasserverlust Reduktion', value: '-35%' }],
    technologies: ['PP-R SDR11', 'UV-stabiler Compound', 'Mobile Extrusion', 'SCADA-Monitoring'], testimonialId: 'test-001', duration: '18 Monate', year: 2023, featured: true,
    metadata: { title: 'Dubai Jumeirah Palm – Referenz | K-Aqua', description: '145 km PP-R Rohre für die Wasserversorgung der Jumeirah Palm. 25.000 Bewohner, 35% weniger Wasserverlust.', keywords: ['Dubai', 'Jumeirah Palm', 'Infrastruktur', 'PP-R', 'Trinkwasser'] },
  },
  {
    id: 'cs-002', slug: 'klinikum-stuttgart', title: 'Klinikum Stuttgart', client: 'Klinikum Stuttgart gKAöR', location: 'Stuttgart, Deutschland', industry: 'Gesundheitswesen', category: 'Gesundheitswesen', icon: 'local_hospital',
    challenge: 'Höchste Hygieneanforderungen nach VDI 6023 und DVGW W551, laufender Krankenhausbetrieb mit 2.088 Betten, enge Installationszeiträume ausschließlich nachts und an Wochenenden.',
    solution: 'PP-R Systeme mit antimikrobieller Innenschicht zur Vermeidung von Biofilmbildung. Modulare Vorfertigung in der K-Aqua Werkstatt für schnelle Installation. Präzise Zeitplanung mit 4-Stunden-Installationsblöcken.',
    result: 'Termingerechte Fertigstellung ohne eine einzige Betriebsunterbrechung. Überlegene Wasserqualität im Langzeit-Monitoring bestätigt. Null Legionellenbefunde seit Inbetriebnahme.',
    kpis: [{ label: 'Betten versorgt', value: '2.088' }, { label: 'Installationszeit', value: '14 Wochen' }, { label: 'Betriebsunterbrechungen', value: '0' }, { label: 'Hygiene-Score', value: '100%' }],
    technologies: ['PP-R Antimikrobiell', 'Modulare Vorfertigung', 'Thermografie', 'Hygiene-Monitoring'], testimonialId: 'test-003', duration: '14 Wochen', year: 2022, featured: true,
    metadata: { title: 'Klinikum Stuttgart – Referenz | K-Aqua', description: 'Trinkwasserinstallation für 2.088 Betten bei laufendem Klinikbetrieb. Antimikrobielle PP-R Systeme von K-Aqua.', keywords: ['Klinikum', 'Stuttgart', 'Krankenhaus', 'Trinkwasserhygiene', 'Antimikrobiell'] },
  },
  {
    id: 'cs-003', slug: 'industrie-park-shanghai', title: 'Industriepark Shanghai', client: 'Shanghai Industrial Development Corp.', location: 'Shanghai, China', industry: 'Industrie', category: 'Industrie', icon: 'factory',
    challenge: 'Aggressive Chemikalien in den Produktionsprozessen, hohe Temperaturschwankungen von -5°C bis +90°C, komplexe Rohrleitungsführung über 12 Produktionshallen mit insgesamt 48 km Leitung.',
    solution: 'Spezial-PP-R mit erhöhter Chemikalienbeständigkeit für aggressive Medien. Computergestützte Rohrleitungsplanung mit BIM-Integration für kollisionsfreie Trassenführung. Lokale Produktion im K-Aqua Werk Shanghai.',
    result: 'Wartungsfreier Betrieb seit Inbetriebnahme ohne einen einzigen Störfall. Signifikante Reduzierung der Kühlwasserverluste und 22% Kosteneinsparung gegenüber der ursprünglichen Edelstahl-Planung.',
    kpis: [{ label: 'Produktionshallen', value: '12' }, { label: 'Rohrleitung gesamt', value: '48 km' }, { label: 'Wartungsfälle/Jahr', value: '0' }, { label: 'Kosteneinsparung', value: '22%' }],
    technologies: ['PP-R Chemical Resistant', 'BIM-Planung', 'Echtzeit-Monitoring', 'Lokale Extrusion'], testimonialId: 'test-009', duration: '8 Monate', year: 2021, featured: true,
    metadata: { title: 'Industriepark Shanghai – Referenz | K-Aqua', description: 'Chemikalienbeständige Rohrleitungen für 12 Produktionshallen. 48 km Rohr, null Wartungsfälle, 22% Kosteneinsparung.', keywords: ['Shanghai', 'Industrie', 'Chemikalienbeständig', 'BIM', 'Kühlwasser'] },
  },
  {
    id: 'cs-004', slug: 'wohnquartier-muenchen', title: 'Wohnquartier München', client: 'Wohnbau München GmbH', location: 'München, Deutschland', industry: 'Wohnungsbau', category: 'Wohnungsbau', icon: 'home',
    challenge: 'Enge Baufristen für 500 Wohneinheiten, Integration von Flächenheizung und Trinkwasser in einem einheitlichen Systemansatz, hohe Energieeffizienzvorgaben nach KfW 40+ Standard.',
    solution: 'K-Aqua Komplettsystem mit vorkonfektionierten Fußbodenheizungsmodulen und integriertem Trinkwassersystem. Digitales Monitoring ab Inbetriebnahme für optimierten Energieverbrauch. Smart-Home-Integration für Einzelraumregelung.',
    result: '500 Wohneinheiten termingerecht fertiggestellt. 28% Energieeinsparung gegenüber konventionellen Heizsystemen nachgewiesen. KfW 40+ Zertifizierung für alle Gebäude erreicht.',
    kpis: [{ label: 'Wohneinheiten', value: '500' }, { label: 'Heizfläche', value: '42.000 m²' }, { label: 'Energieeinsparung', value: '28%' }, { label: 'Bauzeit', value: '18 Monate' }],
    technologies: ['PE-RT Flächenheizung', 'PP-R Trinkwasser', 'Smart-Home-Regelung', 'Digitales Monitoring'], testimonialId: 'test-004', duration: '18 Monate', year: 2024, featured: true,
    metadata: { title: 'Wohnquartier München – Referenz | K-Aqua', description: '500 Wohneinheiten mit Flächenheizung und Trinkwassersystem. 28% Energieeinsparung, KfW 40+ Standard.', keywords: ['München', 'Wohnungsbau', 'Flächenheizung', 'KfW 40+', 'Smart Home'] },
  },
  {
    id: 'cs-005', slug: 'hotel-resort-malediven', title: 'Eco Resort Malediven', client: 'Maldives Eco Resorts Ltd.', location: 'Malé, Malediven', industry: 'Gewerbe', category: 'Gewerbe', icon: 'beach_access',
    challenge: 'Extreme Salzwasserbedingungen auf einer tropischen Insel, empfindliches Korallenriff-Ökosystem, limitierte Transport- und Lagermöglichkeiten (nur Fähre und Helikopter), Anforderung an nachhaltiges Wassermanagement.',
    solution: 'Leichtgewichtige PP-R Systeme für einfachen Transport per Boot. Spezielle salzwasserresistente Verbindungstechnik. Integration mit Meerwasserentsalzungsanlage. Grauwasser-Recycling-System zur Reduzierung des Frischwasserbedarfs.',
    result: 'Nachhaltiges Wassermanagement mit minimaler Umweltbelastung. 40% geringere Installationskosten gegenüber konventionellen Materialien. 45% CO₂-Reduktion im Vergleich zur ursprünglichen Planung mit Kupfer.',
    kpis: [{ label: 'Villen versorgt', value: '86' }, { label: 'Entsalzungskapazität', value: '500 m³/Tag' }, { label: 'Kosteneinsparung', value: '40%' }, { label: 'CO₂-Reduktion', value: '-45%' }],
    technologies: ['PP-R Saltwater Grade', 'Entsalzung RO', 'Grauwasser-Recycling', 'Solar-Pumpen'], duration: '12 Monate', year: 2020, featured: false,
    metadata: { title: 'Eco Resort Malediven – Referenz | K-Aqua', description: 'Nachhaltiges Wassermanagement für 86 Inselvillen. 40% Kosteneinsparung, Meerwasserentsalzung und Grauwasser-Recycling.', keywords: ['Malediven', 'Resort', 'Entsalzung', 'Nachhaltigkeit', 'Salzwasser'] },
  },
  {
    id: 'cs-006', slug: 'rechenzentrum-frankfurt', title: 'Data Center Frankfurt', client: 'Frankfurt Digital Infrastructure AG', location: 'Frankfurt, Deutschland', industry: 'Industrie', category: 'Industrie', icon: 'dns',
    challenge: 'Höchste Verfügbarkeitsanforderungen (99,999%) für die Kühlwasserversorgung von 1.200 Server-Racks. Redundante Systeme erforderlich. Vibrationsdämpfung zum Schutz empfindlicher Hardware.',
    solution: 'Doppelte Rohrleitungsführung mit automatischer Umschaltung für unterbrechungsfreien Betrieb. Vibrationsdämpfende Aufhängungen und Kompensatoren. Echtzeit-Monitoring aller Durchfluss- und Temperaturparameter.',
    result: '100% Verfügbarkeit seit Inbetriebnahme. Signifikante Energieeinsparung durch optimierte Kühlwasserführung. PUE-Wert des Rechenzentrums von 1.45 auf 1.30 verbessert.',
    kpis: [{ label: 'Server-Racks', value: '1.200' }, { label: 'Kühlleistung', value: '8 MW' }, { label: 'Verfügbarkeit', value: '99,999%' }, { label: 'PUE-Verbesserung', value: '-0.15' }],
    technologies: ['PP-R Industriegrade', 'Redundante Verrohrung', 'SCADA-Monitoring', 'Vibrationsdämpfung'], testimonialId: 'test-008', duration: '6 Monate', year: 2023, featured: false,
    metadata: { title: 'Data Center Frankfurt – Referenz | K-Aqua', description: '8 MW Kühlwasserversorgung für 1.200 Server-Racks. 99,999% Verfügbarkeit und PUE-Optimierung.', keywords: ['Rechenzentrum', 'Frankfurt', 'Kühlwasser', 'Verfügbarkeit', 'PUE'] },
  },
];

// ═══ Typed Getter Functions ═══

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => b.year - a.year);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured).sort((a, b) => b.year - a.year);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industry === industry);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export { caseStudies };
