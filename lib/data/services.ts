import type { Service } from '@/lib/types';

// ═══════════════════════════════════════════════════════════════
// K-Aqua Services — Single Source of Truth
// ═══════════════════════════════════════════════════════════════

const services: Service[] = [
  {
    id: 'svc-001',
    slug: 'planung-beratung',
    title: 'Planung & Beratung',
    shortDescription: 'Individuelle Projektplanung durch erfahrene Ingenieure. Von der Machbarkeitsstudie bis zur Ausführungsplanung.',
    fullDescription: 'Unsere erfahrenen Ingenieure begleiten Sie von der ersten Machbarkeitsstudie bis zur detaillierten Ausführungsplanung. Wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Konzepte, die technische Exzellenz mit wirtschaftlicher Effizienz verbinden. Durch den Einsatz modernster CAD-Software und BIM-Integration stellen wir sicher, dass jedes Projekt von Anfang an perfekt geplant ist.',
    icon: 'architecture',
    features: [
      'Individuelle Machbarkeitsstudien und Bedarfsanalysen',
      'Detaillierte CAD-Planung mit 3D-Visualisierung',
      'Hydraulische Berechnung und Dimensionierung',
      'Materialkostenoptimierung und Wirtschaftlichkeitsanalyse',
      'BIM-Integration für nahtlose Zusammenarbeit',
      'Normkonforme Ausführungsplanung nach DIN/EN',
    ],
    benefits: [
      'Bis zu 25% Kosteneinsparung durch optimierte Materialplanung',
      'Vermeidung von Planungsfehlern durch 3D-Simulation',
      'Nahtlose BIM-Integration reduziert Koordinationsaufwand um 40%',
      'Normkonforme Dokumentation für reibungslose Genehmigungsverfahren',
    ],
    process: [
      { title: 'Bedarfsanalyse', description: 'Detaillierte Erfassung Ihrer Projektanforderungen, Besichtigung vor Ort und Analyse bestehender Infrastruktur.', icon: 'search' },
      { title: 'Konzeptentwicklung', description: 'Erstellung eines maßgeschneiderten Systemkonzepts mit Alternativenbewertung und Kosten-Nutzen-Analyse.', icon: 'lightbulb' },
      { title: 'Detailplanung', description: 'Ausführungsplanung mit CAD/BIM, hydraulischen Berechnungen und vollständiger Materialliste.', icon: 'architecture' },
      { title: 'Projektfreigabe', description: 'Finale Abstimmung, Dokumentation und Übergabe des Planungspakets an das Installationsteam.', icon: 'check_circle' },
    ],
    relatedServices: ['installation', 'qualitaetssicherung'],
    featured: true,
    order: 1,
    metadata: { title: 'Planung & Beratung | K-Aqua Leistungen', description: 'Professionelle Projektplanung für Wasserinfrastruktur. CAD-Planung, BIM-Integration und hydraulische Berechnung durch erfahrene K-Aqua Ingenieure.', keywords: ['Planung', 'Beratung', 'CAD', 'BIM', 'Wasserinfrastruktur', 'Hydraulik'] },
  },
  {
    id: 'svc-002',
    slug: 'installation',
    title: 'Installation & Montage',
    shortDescription: 'Professionelle Installation unserer PP-R Systeme durch zertifizierte Fachpartner weltweit.',
    fullDescription: 'Unser weltweites Netzwerk aus über 500 zertifizierten Fachpartnern garantiert eine fachgerechte Installation Ihrer K-Aqua Systeme. Von der Einzelinstallation im Einfamilienhaus bis zum internationalen Großprojekt mit hunderten Kilometern Rohrleitung – profitieren Sie von unserer jahrzehntelangen Expertise und den höchsten Qualitätsstandards der Branche.',
    icon: 'construction',
    features: [
      'Zertifizierte Fachpartner in über 40 Ländern',
      'Lückenlose Schweißprotokollierung und Dokumentation',
      'Normgerechte Druckprüfung nach DIN EN 806',
      'Werkseitige Vorfertigung für schnellere Montage',
      'Qualitätskontrolle vor Ort durch K-Aqua Experten',
      'Thermografische Abnahmeprüfung bei Flächenheizungen',
    ],
    benefits: [
      'Bis zu 50% schnellere Installation gegenüber Kupfersystemen',
      'Lückenlose Dokumentation für Gewährleistungsansprüche',
      'Weltweites Partnernetzwerk für internationale Projekte',
      'Herstellergarantie von 25 Jahren auf alle Verbindungen',
    ],
    process: [
      { title: 'Montageplanung', description: 'Erstellung eines detaillierten Montageplans basierend auf der Ausführungsplanung mit Zeitplan und Ressourcenplanung.', icon: 'event_note' },
      { title: 'Materiallieferung', description: 'Just-in-Time-Lieferung aller Komponenten direkt auf die Baustelle, inklusive Spezialwerkzeuge.', icon: 'local_shipping' },
      { title: 'Fachgerechte Montage', description: 'Installation durch zertifizierte K-Aqua Fachpartner mit lückenloser Schweißprotokollierung.', icon: 'construction' },
      { title: 'Druckprüfung & Abnahme', description: 'Normgerechte Druckprüfung, thermografische Kontrolle und dokumentierte Endabnahme.', icon: 'verified_user' },
    ],
    relatedServices: ['planung-beratung', 'wartung-service'],
    featured: true,
    order: 2,
    metadata: { title: 'Installation & Montage | K-Aqua Leistungen', description: 'Professionelle Installation von PP-R Rohrsystemen durch zertifizierte Fachpartner. Schweißprotokollierung, Druckprüfung und 25 Jahre Garantie.', keywords: ['Installation', 'Montage', 'PP-R', 'Schweißen', 'Druckprüfung', 'Fachpartner'] },
  },
  {
    id: 'svc-003',
    slug: 'wartung-service',
    title: 'Wartung & Service',
    shortDescription: 'Regelmäßige Inspektion und Wartung für maximale Lebensdauer und Betriebssicherheit.',
    fullDescription: 'Regelmäßige Wartung sichert die Langlebigkeit Ihrer Wasserinfrastruktur. Unsere Servicetechniker bieten präventive Inspektionen, hochmoderne Leckortung und schnelle Fehlerbehebung. Mit unseren flexiblen Wartungsverträgen sorgen wir dafür, dass Ihre Systeme jederzeit zuverlässig funktionieren – rund um die Uhr, 365 Tage im Jahr.',
    icon: 'build',
    features: [
      'Präventive Inspektionen nach standardisierten Prüfprotokollen',
      'Hochmoderne akustische und thermografische Leckortung',
      'Rohrinnensanierung ohne Aufbrucharbeiten',
      'Notfallservice 24/7 mit garantierter Reaktionszeit',
      'Flexible Wartungsverträge mit Service-Level-Agreement',
      'Digitales Monitoring und Frühwarnsysteme',
    ],
    benefits: [
      'Bis zu 60% weniger ungeplante Ausfallzeiten',
      'Verlängerung der Systemlebensdauer um 15-20 Jahre',
      '24/7 Notfallservice mit max. 4h Reaktionszeit',
      'Digitales Monitoring erkennt Probleme bevor sie auftreten',
    ],
    process: [
      { title: 'Bestandsaufnahme', description: 'Systematische Erfassung des Ist-Zustands aller Rohrleitungen und Armaturen mit Zustandsbewertung.', icon: 'assignment' },
      { title: 'Wartungsplan', description: 'Erstellung eines individuellen Wartungsplans basierend auf Anlagenalter, Nutzungsintensität und Kritikalität.', icon: 'event_note' },
      { title: 'Regelmäßige Inspektion', description: 'Durchführung der geplanten Wartungsarbeiten mit standardisierter Dokumentation und Fotodokumentation.', icon: 'build' },
      { title: 'Reporting', description: 'Digitaler Wartungsbericht mit Zustandsbewertung, Empfehlungen und Langzeit-Trendanalyse.', icon: 'analytics' },
    ],
    relatedServices: ['installation', 'qualitaetssicherung'],
    featured: false,
    order: 3,
    metadata: { title: 'Wartung & Service | K-Aqua Leistungen', description: 'Professionelle Wartung und 24/7 Notfallservice für Wasserinfrastruktur. Präventive Inspektion, Leckortung und digitales Monitoring.', keywords: ['Wartung', 'Service', 'Inspektion', 'Leckortung', 'Notfallservice', 'Monitoring'] },
  },
  {
    id: 'svc-004',
    slug: 'schulung',
    title: 'Schulung & Zertifizierung',
    shortDescription: 'Praxisnahe Schulungsprogramme für Installateure und Planer an unserer K-Aqua Academy.',
    fullDescription: 'Die K-Aqua Academy bietet praxisnahe Schulungsprogramme für Installateure, Planer und Architekten. In unseren modernen Schulungszentren in Stuttgart und Shanghai vermitteln erfahrene Trainer die neuesten Verarbeitungstechniken und Produktinnovationen. Werden Sie zertifizierter K-Aqua Fachpartner und profitieren Sie von exklusiven Vorteilen.',
    icon: 'school',
    features: [
      'Praxisworkshops in modernen Schulungszentren',
      'Online-Seminare und E-Learning Module',
      'Zertifizierungsprogramme für Fachpartner',
      'Individuelle Produktschulungen für Projektteams',
      'Vor-Ort-Training auf der Baustelle',
      'Jährliche Auffrischungskurse und Technik-Updates',
    ],
    benefits: [
      'Offizielle K-Aqua Zertifizierung steigert Ihre Marktposition',
      'Praxisnahe Ausbildung reduziert Installationsfehler um 80%',
      'Exklusive Partnervorteile: Priority-Support und Sonderkonditionen',
      'Flexible Schulungsformate: Präsenz, Online oder Vor-Ort',
    ],
    process: [
      { title: 'Bedarfsermittlung', description: 'Analyse des Schulungsbedarfs und Auswahl des passenden Programms aus unserem modularen Angebot.', icon: 'psychology' },
      { title: 'Theorieblock', description: 'Vermittlung der technischen Grundlagen, Normen und Produkteigenschaften im Seminarformat.', icon: 'menu_book' },
      { title: 'Praxisworkshop', description: 'Hands-on-Training an realen Installationsszenarien unter Anleitung erfahrener Trainer.', icon: 'engineering' },
      { title: 'Zertifizierung', description: 'Abschlussprüfung und Ausstellung des offiziellen K-Aqua Zertifikats mit Gültigkeitsdauer.', icon: 'workspace_premium' },
    ],
    relatedServices: ['installation', 'planung-beratung'],
    featured: false,
    order: 4,
    metadata: { title: 'Schulung & Zertifizierung | K-Aqua Academy', description: 'K-Aqua Academy: Praxisnahe Schulungen für PP-R Installation, Schweißtechnik und Systemplanung. Werden Sie zertifizierter Fachpartner.', keywords: ['Schulung', 'Zertifizierung', 'Academy', 'Fortbildung', 'Fachpartner', 'PP-R Training'] },
  },
  {
    id: 'svc-005',
    slug: 'logistik',
    title: 'Logistik & Lieferung',
    shortDescription: 'Globale Lieferketten mit Just-in-Time-Versorgung für Großprojekte und Einzelbestellungen.',
    fullDescription: 'Unsere globale Logistikinfrastruktur garantiert Just-in-Time-Lieferungen für Projekte jeder Größe. Mit Lagerstandorten auf drei Kontinenten, einem dedizierten Projektlogistik-Team und modernster Track-&-Trace-Technologie stellen wir sicher, dass Ihre Materialien genau dann eintreffen, wenn Sie sie brauchen – weltweit.',
    icon: 'local_shipping',
    features: [
      'Just-in-Time-Lieferung direkt auf die Baustelle',
      'Lagerstandorte in Deutschland, China und den VAE',
      'Dediziertes Projektlogistik-Team für Großprojekte',
      'Express-Service für dringende Nachbestellungen',
      'Echtzeit Track-&-Trace für alle Sendungen',
      'Baustellengerechte Verpackung und Kommissionierung',
    ],
    benefits: [
      'Lieferung in 48h innerhalb Europas, 5 Tage weltweit',
      'Lagervormerkung sichert Materialverfügbarkeit für Großprojekte',
      'Digitale Sendungsverfolgung in Echtzeit',
      'Reduzierung von Baustellenstillständen durch präzise Lieferplanung',
    ],
    process: [
      { title: 'Bedarfsplanung', description: 'Gemeinsame Erstellung eines Material- und Lieferplans basierend auf dem Baufortschritt.', icon: 'event_note' },
      { title: 'Lagervormerkung', description: 'Reservierung der benötigten Materialien in unserem nächstgelegenen Lagerstandort.', icon: 'warehouse' },
      { title: 'Terminierte Lieferung', description: 'Just-in-Time-Anlieferung auf die Baustelle zum vereinbarten Zeitpunkt mit Track-&-Trace.', icon: 'local_shipping' },
      { title: 'Anlieferungsbestätigung', description: 'Digitale Wareneingangsbestätigung mit Fotodokumentation und Vollständigkeitsprüfung.', icon: 'fact_check' },
    ],
    relatedServices: ['installation', 'planung-beratung'],
    featured: false,
    order: 5,
    metadata: { title: 'Logistik & Lieferung | K-Aqua Leistungen', description: 'Globale Just-in-Time-Lieferung von PP-R Rohrsystemen. Lagerstandorte weltweit, Express-Service und Echtzeit-Sendungsverfolgung.', keywords: ['Logistik', 'Lieferung', 'Just-in-Time', 'Baustelle', 'Express', 'Track-and-Trace'] },
  },
  {
    id: 'svc-006',
    slug: 'qualitaetssicherung',
    title: 'Qualitätssicherung',
    shortDescription: 'Lückenlose Qualitätskontrolle vom Rohstoff bis zum fertigen System nach ISO 9001.',
    fullDescription: 'Lückenlose Qualitätskontrolle vom Rohstoff bis zum fertigen System. Unsere Prüfverfahren übertreffen die Anforderungen internationaler Normen deutlich. Mit vollständiger Chargenrückverfolgung, automatisierten Prüfständen und regelmäßigen Langzeittests stellen wir sicher, dass jedes K-Aqua Produkt den höchsten Qualitätsstandards entspricht.',
    icon: 'verified_user',
    features: [
      'ISO 9001:2015 zertifiziertes Qualitätsmanagement',
      'Lückenlose Chargenrückverfolgung vom Rohstoff bis zum Endprodukt',
      'Automatisierte Inline-Prüfstände in der Produktion',
      'Regelmäßige Langzeittests über 10.000 Stunden',
      'Unabhängige Drittprüfungen durch TÜV und DVGW',
      'Materialanalysen mittels DSC und MFI-Messung',
    ],
    benefits: [
      'Null-Toleranz-Fehlerquote in der Produktion seit 2019',
      'Volle Chargenrückverfolgbarkeit innerhalb von 24 Stunden',
      'Alle Produkte übertreffen Normvorgaben um mindestens 20%',
      'Unabhängige Zertifizierungen durch TÜV, DVGW und KTW',
    ],
    process: [
      { title: 'Rohstoffprüfung', description: 'Wareneingangskontrolle jeder Rohstoffcharge mit DSC-Analyse und Schmelzindexprüfung.', icon: 'science' },
      { title: 'Inline-Kontrolle', description: 'Automatische Wanddickenmessung, Ovalitätsprüfung und Oberflächeninspektion während der Extrusion.', icon: 'precision_manufacturing' },
      { title: 'Stichprobenprüfung', description: 'Druckprüfung, Berstdrucktest und Kerbschlagtest nach DIN EN ISO an zufällig entnommenen Proben.', icon: 'biotech' },
      { title: 'Dokumentation', description: 'Erstellung des Prüfzeugnisses 3.1 nach EN 10204 mit allen Messdaten und Chargeninformationen.', icon: 'description' },
    ],
    relatedServices: ['planung-beratung', 'installation'],
    featured: true,
    order: 6,
    metadata: { title: 'Qualitätssicherung | K-Aqua Leistungen', description: 'ISO 9001 zertifizierte Qualitätskontrolle für PP-R Rohrsysteme. Chargenrückverfolgung, Langzeittests und unabhängige Drittprüfungen.', keywords: ['Qualitätssicherung', 'ISO 9001', 'Prüfung', 'DVGW', 'Chargenrückverfolgung', 'TÜV'] },
  },
  {
    id: 'svc-007',
    slug: 'entwaesserung',
    title: 'Entwässerungssysteme',
    shortDescription: 'Hochleistungs-Entwässerungssysteme für Gebäude, Industrie und Infrastrukturprojekte.',
    fullDescription: 'Unsere Entwässerungssysteme aus PP (Polypropylen) bieten höchste Beständigkeit gegen aggressive Medien und Temperaturschwankungen. Ob Dachentwässerung, Grundleitung oder Industrieabwasser – K-Aqua Entwässerungssysteme zeichnen sich durch Langlebigkeit, Schallschutz und einfache Montage aus.',
    icon: 'water_damage',
    features: [
      'Schalldämmendes Entwässerungssystem (≤ 20 dB)',
      'Beständig gegen aggressive Abwässer bis pH 2-12',
      'Temperaturbeständig von 0°C bis 95°C Dauerlast',
      'Brandschutzklasse B1 nach DIN 4102',
      'Push-Fit-Verbindungstechnik für werkzeuglose Montage',
      'Komplettes Formteilprogramm für alle Einbausituationen',
    ],
    benefits: [
      'Um 50% reduzierte Schallübertragung gegenüber konventionellen Systemen',
      'Werkzeuglose Push-Fit-Montage spart bis zu 40% Installationszeit',
      'Recycelbares Material für nachhaltige Gebäudezertifizierung',
      'Universelles Formteilprogramm deckt 100% aller Standard-Einbausituationen',
    ],
    process: [
      { title: 'Systemauswahl', description: 'Auswahl des optimalen Entwässerungssystems basierend auf Gebäudetyp, Belastung und Schallschutzanforderungen.', icon: 'tune' },
      { title: 'Berechnung', description: 'Hydraulische Dimensionierung nach DIN EN 12056 und Schallschutznachweis nach VDI 4100.', icon: 'calculate' },
      { title: 'Montage', description: 'Fachgerechte Installation mit Push-Fit-Technik und normkonformer Rohrführung.', icon: 'construction' },
      { title: 'Prüfung', description: 'Dichtheitsprüfung aller Verbindungen und Übergabe mit vollständiger Dokumentation.', icon: 'check_circle' },
    ],
    relatedServices: ['planung-beratung', 'installation'],
    featured: false,
    order: 7,
    metadata: { title: 'Entwässerungssysteme | K-Aqua Leistungen', description: 'Schalldämmende PP-Entwässerungssysteme für Gebäude und Industrie. Push-Fit-Montage, Brandschutz B1 und Chemikalienbeständigkeit.', keywords: ['Entwässerung', 'Abwasser', 'Schallschutz', 'Push-Fit', 'Polypropylen', 'Dachentwässerung'] },
  },
  {
    id: 'svc-008',
    slug: 'flaechenheizung',
    title: 'Flächenheizung & -kühlung',
    shortDescription: 'Energieeffiziente Flächenheiz- und Kühlsysteme für maximalen Komfort im Neubau und Bestand.',
    fullDescription: 'Flächenheizsysteme nutzen niedertemperierte Wärmequellen optimal aus und passen perfekt zu Wärmepumpen, Solarthermie und Brennwerttechnik. Unsere PE-RT und PP-R Rohrsysteme für Fußboden-, Wand- und Deckenheizung bieten gleichmäßige Wärmeverteilung bei minimalem Energieverbrauch. Im Sommer kann dasselbe System zur stillen Kühlung genutzt werden.',
    icon: 'thermostat',
    features: [
      'Fußboden-, Wand- und Deckenheizung aus einem System',
      'Optimale Kombination mit Wärmepumpen (35°C Vorlauf)',
      'Stille Kühlung im Sommer über dasselbe System',
      'PE-RT Rohre mit Sauerstoffdiffusionssperre nach DIN 4726',
      'Trockenbau- und Nassverlegesysteme verfügbar',
      'Raumweise Einzelraumregelung mit Smart-Home-Integration',
    ],
    benefits: [
      'Bis zu 30% Heizenergieeinsparung gegenüber Radiatorheizung',
      'Gleichmäßige Wärmeverteilung ohne kalte Zonen',
      'Keine sichtbaren Heizkörper für maximale Gestaltungsfreiheit',
      'Smart-Home-Integration für intelligente Raumklimasteuerung',
    ],
    process: [
      { title: 'Heizlastberechnung', description: 'Raumweise Heizlastberechnung nach DIN EN 12831 und Auslegung der Heizkreise.', icon: 'calculate' },
      { title: 'Systemplanung', description: 'Wahl zwischen Trocken- und Nassverlegung, Rohrführungsplan und Verteilerplanung.', icon: 'architecture' },
      { title: 'Verlegung', description: 'Fachgerechte Rohrverlegung mit präziser Verlegeabstand-Kontrolle und Druckprüfung.', icon: 'grid_on' },
      { title: 'Inbetriebnahme', description: 'Hydraulischer Abgleich, Einregulierung und Einweisung in die Bedienung der Regelungstechnik.', icon: 'play_circle' },
    ],
    relatedServices: ['planung-beratung', 'installation'],
    featured: true,
    order: 8,
    metadata: { title: 'Flächenheizung & Kühlung | K-Aqua Leistungen', description: 'Energieeffiziente Flächenheizung für Neubau und Sanierung. Fußboden-, Wand- und Deckenheizung mit Smart-Home-Integration.', keywords: ['Flächenheizung', 'Fußbodenheizung', 'Wandheizung', 'Kühlung', 'Wärmepumpe', 'Energieeffizienz'] },
  },
];

// ═══ Typed Getter Functions ═══

export function getAllServices(): Service[] {
  return services.sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured).sort((a, b) => a.order - b.order);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export { services };
