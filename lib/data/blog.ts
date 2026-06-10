import type { BlogPost } from '@/lib/types';

// ═══════════════════════════════════════════════════════════════
// K-Aqua Blog Posts — Single Source of Truth
// ═══════════════════════════════════════════════════════════════

const blogPosts: BlogPost[] = [
  {
    id: 'bp-001', slug: 'zukunft-trinkwasser-2025', title: 'Die Zukunft der Trinkwasserinstallation 2025',
    excerpt: 'Welche Trends und Technologien die Branche in den kommenden Jahren verändern werden. Von Smart-Water-Systemen bis zu nachhaltigen Materialien.',
    content: '## Digitale Transformation im Wasserbau\n\nDie Trinkwasserinstallation steht vor einem Paradigmenwechsel. Digitale Überwachungssysteme, intelligente Leckageerkennung und nachhaltige Materialien revolutionieren die Art und Weise, wie wir Wasserinfrastruktur planen und betreiben.\n\n## Smart-Water-Technologien\n\nSensorintegrierte Rohrsysteme messen in Echtzeit Durchfluss, Temperatur und Wasserqualität. Diese Daten ermöglichen prädiktive Wartung und optimierte Betriebsführung. K-Aqua arbeitet an der nächsten Generation sensorintegrierter PP-R Rohre, die ohne externe Stromversorgung funktionieren.\n\n## Nachhaltigkeit als Pflicht\n\nDie EU-Taxonomie und das Gebäudeenergiegesetz (GEG) stellen neue Anforderungen an Baustoffe. Vollständig recycelbare Materialien wie PP-R werden zum Standard. K-Aqua hat bereits 2024 die erste vollständig CO2-neutrale Produktionslinie in Betrieb genommen.\n\n## Ausblick\n\nDie Kombination aus Digitalisierung, Nachhaltigkeit und neuen Materialien wird die Trinkwasserinstallation grundlegend verändern. Unternehmen, die jetzt investieren, sichern sich einen entscheidenden Wettbewerbsvorteil.',
    author: 'andreas-bauer', publishedAt: '2025-03-15T08:00:00Z', updatedAt: '2025-03-15T08:00:00Z',
    category: 'Technologie', tags: ['Smart Water', 'Digitalisierung', 'Nachhaltigkeit', 'Trends 2025'], readingTime: 8, featured: true,
    metadata: { title: 'Die Zukunft der Trinkwasserinstallation 2025 | K-Aqua Blog', description: 'Smart-Water-Technologien, nachhaltige Materialien und digitale Überwachung: die wichtigsten Trends der Trinkwasserinstallation 2025.', keywords: ['Trinkwasser', 'Smart Water', '2025', 'Trends', 'Digitalisierung'] },
  },
  {
    id: 'bp-002', slug: 'ppr-vs-kupfer', title: 'PP-R vs. Kupfer: Ein umfassender Vergleich',
    excerpt: 'Warum immer mehr Planer und Installateure auf PP-R Rohrsysteme umsteigen. Ein technischer Vergleich der wichtigsten Parameter.',
    content: '## Materialvergleich im Detail\n\nDer Wechsel von Kupfer zu PP-R Rohrsystemen ist einer der bedeutendsten Trends in der modernen Sanitärtechnik. Beide Materialien haben ihre Berechtigung, doch PP-R bietet in vielen Anwendungsbereichen entscheidende Vorteile.\n\n## Korrosionsbeständigkeit\n\nPP-R ist von Natur aus korrosionsbeständig. Anders als Kupfer reagiert es nicht mit aggressivem Wasser, Chloriden oder CO2. Dies bedeutet: keine grünen Ablagerungen, keine Lochfraßkorrosion, keine Kupferionen im Trinkwasser. Besonders bei weichem Wasser mit niedrigem pH-Wert zeigt PP-R seine Überlegenheit.\n\n## Installationseffizienz\n\nPP-R Rohre werden durch Polyfusionsschweißen verbunden – ein Prozess, der in wenigen Sekunden eine homogene, dauerhaft dichte Verbindung schafft. Im Vergleich zum Löten von Kupfer ist die Installation bis zu 50% schneller und erfordert weder offene Flamme noch Flussmittel.\n\n## Lebenszykluskostenanalyse\n\nTrotz niedrigerer Materialkosten überzeugt PP-R vor allem durch geringere Installations- und Wartungskosten. Über einen Lebenszyklus von 50 Jahren spart PP-R durchschnittlich 30-40% gegenüber Kupfer.',
    author: 'sarah-mueller', publishedAt: '2025-03-02T10:00:00Z', updatedAt: '2025-03-02T10:00:00Z',
    category: 'Technik', tags: ['PP-R', 'Kupfer', 'Vergleich', 'Material', 'Installation'], readingTime: 12, featured: true,
    metadata: { title: 'PP-R vs. Kupfer: Technischer Vergleich | K-Aqua Blog', description: 'Detaillierter Vergleich von PP-R und Kupfer Rohrsystemen. Korrosion, Installation, Kosten und Lebensdauer im direkten Vergleich.', keywords: ['PP-R', 'Kupfer', 'Vergleich', 'Rohrsystem', 'Korrosion'] },
  },
  {
    id: 'bp-003', slug: 'nachhaltigkeit-rohrsysteme', title: 'Nachhaltigkeit in der Rohrtechnik',
    excerpt: 'Wie vollständig recycelbare Materialien den ökologischen Fußabdruck der Branche reduzieren. K-Aquas Weg zur CO2-neutralen Produktion.',
    content: '## Der grüne Wandel der Bauindustrie\n\nNachhaltigkeit ist kein optionales Feature mehr, sondern eine Grundanforderung moderner Bauvorhaben. Die EU-Taxonomie-Verordnung und nationale Gebäudeenergiegesetze fordern nachweislich umweltfreundliche Baustoffe.\n\n## PP-R: Von Natur aus nachhaltig\n\nPolypropylen Random Copolymer (PP-R) ist zu 100% recycelbar. Am Ende der Lebensdauer können die Rohre eingeschmolzen und zu neuen Produkten verarbeitet werden – ohne Qualitätsverlust. Im Gegensatz zu metallischen Rohrsystemen entfallen energieintensive Aufbereitungsprozesse.\n\n## K-Aquas Nachhaltigkeitsstrategie\n\nSeit 2024 betreibt K-Aqua die erste vollständig CO2-neutrale Produktionslinie. Durch den Einsatz von Solarenergie, Wärmerückgewinnung und optimierten Extrusionsprozessen haben wir den Energieverbrauch pro produziertem Meter Rohr um 45% gesenkt.\n\n## Kreislaufwirtschaft in der Praxis\n\nK-Aqua nimmt Produktionsabfälle und Altmaterial von Baustellen zurück und führt sie dem Recyclingkreislauf zu. Ziel ist es, bis 2030 einen Recyclinganteil von 30% in der Neuproduktion zu erreichen.',
    author: 'andreas-bauer', publishedAt: '2025-02-18T09:00:00Z', updatedAt: '2025-02-18T09:00:00Z',
    category: 'Nachhaltigkeit', tags: ['Nachhaltigkeit', 'Recycling', 'CO2-neutral', 'Kreislaufwirtschaft'], readingTime: 6, featured: true,
    metadata: { title: 'Nachhaltigkeit in der Rohrtechnik | K-Aqua Blog', description: 'Wie K-Aqua mit recycelbaren PP-R Rohren und CO2-neutraler Produktion neue Maßstäbe für nachhaltige Wasserinfrastruktur setzt.', keywords: ['Nachhaltigkeit', 'Recycling', 'PP-R', 'CO2-neutral', 'Kreislaufwirtschaft'] },
  },
  {
    id: 'bp-004', slug: 'dubai-projekt-bericht', title: 'Projektbericht: Dubai Jumeirah Palm',
    excerpt: 'Einblicke in eines unserer größten internationalen Infrastrukturprojekte. 145 km Rohr unter extremen Bedingungen.',
    content: '## Eine Insel versorgen\n\nDie Jumeirah Palm in Dubai ist eines der ambitioniertesten Bauprojekte der modernen Geschichte. K-Aqua war verantwortlich für die komplette Trinkwasserversorgung der künstlichen Inselgruppe – ein Projekt, das unsere Ingenieure vor einzigartige Herausforderungen stellte.\n\n## Extreme Bedingungen\n\nTemperaturen von über 50°C im Sommer, salzhaltige Umgebung und sandiger Untergrund erforderten speziell entwickelte SDR11 PP-R Rohre mit erhöhter UV- und Salzwasserresistenz. Die logistische Herausforderung, Tausende Tonnen Material auf eine Insel zu transportieren, lösten wir durch eine temporäre Extrusions-Containeranlage vor Ort.\n\n## Zahlen, die beeindrucken\n\n145 Kilometer Hochleistungsrohre versorgen heute 25.000 Bewohner mit sauberem Trinkwasser. Das System verzeichnet 35% weniger Wasserverlust als vergleichbare konventionelle Installationen. Die Installation wurde in nur 18 Monaten abgeschlossen – drei Monate vor dem geplanten Termin.\n\n## Lessons Learned\n\nDieses Projekt hat gezeigt, dass innovative Materialien und kreative Logistiklösungen auch unter extremsten Bedingungen Weltklasse-Ergebnisse liefern können.',
    author: 'markus-klein', publishedAt: '2025-02-05T11:00:00Z', updatedAt: '2025-02-05T11:00:00Z',
    category: 'Projekte', tags: ['Dubai', 'Großprojekt', 'Infrastruktur', 'Fallstudie'], readingTime: 10, featured: false,
    metadata: { title: 'Projektbericht: Dubai Jumeirah Palm | K-Aqua Blog', description: '145 km PP-R Rohre unter extremen Bedingungen: Einblicke in das K-Aqua Großprojekt Dubai Jumeirah Palm.', keywords: ['Dubai', 'Jumeirah Palm', 'Projekt', 'Infrastruktur', 'PP-R'] },
  },
  {
    id: 'bp-005', slug: 'flaechenheizung-effizienz', title: 'Flächenheizung: Maximale Effizienz im Neubau',
    excerpt: 'Warum Flächenheizsysteme die energieeffizienteste Lösung für moderne Gebäude darstellen und wie sie optimal mit Wärmepumpen kombiniert werden.',
    content: '## Das Prinzip der Flächenheizung\n\nFlächenheizsysteme nutzen große Flächen als Wärmeübertrager. Fußboden, Wand oder Decke werden zu einer gleichmäßig temperierten Heizfläche. Durch die große Fläche genügen niedrige Vorlauftemperaturen von 30-35°C – ideal für den Betrieb mit Wärmepumpen.\n\n## Energieeinsparung in der Praxis\n\nIm Vergleich zu konventionellen Radiator-Heizsystemen sparen Flächenheizungen durchschnittlich 25-30% Heizenergie. Der Grund: die niedrige Vorlauftemperatur und die gleichmäßige Wärmeverteilung ohne Konvektionswalzen reduzieren Wärmeverluste erheblich.\n\n## K-Aqua Flächenheizsysteme\n\nUnsere PE-RT Rohre mit Sauerstoffdiffusionssperre nach DIN 4726 sind speziell für den Einsatz in Flächenheizsystemen optimiert. Verfügbar als Nass- und Trockenbausystem bieten sie maximale Flexibilität für Neubau und Sanierung.\n\n## Smart-Home-Integration\n\nModerne Regelungstechnik ermöglicht eine raumweise Einzelraumregelung mit Smart-Home-Anbindung. Über Apps können Bewohner ihre Raumtemperatur komfortabel steuern und den Energieverbrauch in Echtzeit überwachen.',
    author: 'sarah-mueller', publishedAt: '2025-01-20T08:00:00Z', updatedAt: '2025-01-20T08:00:00Z',
    category: 'Technik', tags: ['Flächenheizung', 'Energieeffizienz', 'Wärmepumpe', 'Smart Home'], readingTime: 7, featured: false,
    metadata: { title: 'Flächenheizung: Energieeffizienz im Neubau | K-Aqua Blog', description: 'Warum Flächenheizung die effizienteste Heizlösung für Neubauten ist. Kombination mit Wärmepumpen und Smart-Home-Integration.', keywords: ['Flächenheizung', 'Energieeffizienz', 'Wärmepumpe', 'Neubau', 'PE-RT'] },
  },
  {
    id: 'bp-006', slug: 'schulungsprogramm-2025', title: 'K-Aqua Academy: Schulungsprogramm 2025',
    excerpt: 'Neue Kurse, Zertifizierungen und Praxisworkshops für Installateure und Planer an unserer Academy.',
    content: '## Neues Jahr, neues Programm\n\nDie K-Aqua Academy erweitert ihr Schulungsangebot für 2025 um neue Praxiskurse, Online-Seminare und Zertifizierungsprogramme. Mehr als 500 Installateure und Planer haben 2024 unsere Schulungen durchlaufen – für 2025 erwarten wir über 800 Teilnehmer.\n\n## Neue Kursformate\n\nErstmals bieten wir hybride Schulungsformate an: Der Theorieblock wird online als Selbstlernmodul absolviert, der Praxisteil findet in unseren Schulungszentren statt. Dies spart Reisezeit und ermöglicht flexibleres Lernen.\n\n## Zertifizierung 2.0\n\nDas neue K-Aqua Partnerprogramm umfasst drei Zertifizierungsstufen: Bronze, Silber und Gold. Jede Stufe bietet exklusive Vorteile: von Priority-Support über Sonderkonditionen bis hin zu gemeinsamen Marketing-Aktivitäten.\n\n## Anmeldung\n\nDas vollständige Kursprogramm mit allen Terminen und Standorten finden Sie in unserem Ressourcen-Bereich. Frühbucher erhalten 15% Rabatt auf alle Präsenzkurse.',
    author: 'julia-chen', publishedAt: '2025-01-10T09:00:00Z', updatedAt: '2025-01-10T09:00:00Z',
    category: 'Academy', tags: ['Schulung', 'Academy', 'Zertifizierung', 'Fachpartner'], readingTime: 5, featured: false,
    metadata: { title: 'K-Aqua Academy Schulungsprogramm 2025 | K-Aqua Blog', description: 'Neue Kurse und Zertifizierungen der K-Aqua Academy für 2025. Hybride Schulungsformate und dreistufiges Partnerprogramm.', keywords: ['Schulung', 'Academy', 'Zertifizierung', '2025', 'Fortbildung'] },
  },
  {
    id: 'bp-007', slug: 'trinkwasserhygiene-krankenhaus', title: 'Trinkwasserhygiene im Krankenhaus: Worauf es ankommt',
    excerpt: 'Die besonderen Anforderungen an Trinkwasserinstallationen im Gesundheitswesen. Ein Praxisleitfaden für Planer.',
    content: '## Höchste Hygieneanforderungen\n\nKrankenhäuser stellen die strengsten Anforderungen an Trinkwasserqualität. Legionellenprophylaxe, Pseudomonas-Prävention und die Vermeidung mikrobieller Kontamination erfordern spezielle Materialien und Konstruktionsprinzipien.\n\n## PP-R: Das Material der Wahl\n\nPP-R Rohrsysteme mit antimikrobieller Innenschicht bieten gegenüber metallischen Systemen entscheidende Vorteile: keine Korrosion, keine Schwermetallabgabe, glatte Innenfläche zur Vermeidung von Biofilmbildung. K-Aqua hat ein spezielles Krankenhaussystem entwickelt, das alle Anforderungen der VDI 6023 und DVGW W551 erfüllt.\n\n## Praxisbeispiel Klinikum Stuttgart\n\nFür das Klinikum Stuttgart hat K-Aqua 2.088 Betten mit hochreinem Trinkwasser versorgt – bei laufendem Krankenhausbetrieb und null Betriebsunterbrechungen. Die modulare Vorfertigung ermöglichte eine Installation in engen Zeitfenstern außerhalb der Kernbetriebszeiten.\n\n## Checkliste für Planer\n\nWir haben eine umfassende Checkliste für die Planung von Trinkwasserinstallationen im Gesundheitswesen zusammengestellt. Diese steht in unserem Ressourcen-Bereich zum Download bereit.',
    author: 'thomas-weber', publishedAt: '2024-12-15T10:00:00Z', updatedAt: '2025-01-05T10:00:00Z',
    category: 'Technik', tags: ['Trinkwasserhygiene', 'Krankenhaus', 'Legionellen', 'VDI 6023'], readingTime: 9, featured: false,
    metadata: { title: 'Trinkwasserhygiene im Krankenhaus | K-Aqua Blog', description: 'Praxisleitfaden für Trinkwasserinstallationen im Gesundheitswesen. Legionellenprophylaxe und antimikrobielle PP-R Systeme.', keywords: ['Trinkwasserhygiene', 'Krankenhaus', 'Legionellen', 'Gesundheitswesen', 'PP-R'] },
  },
  {
    id: 'bp-008', slug: 'industrie-4-0-produktion', title: 'Industrie 4.0: So produziert K-Aqua',
    excerpt: 'Ein Blick hinter die Kulissen unserer volldigitalisierten Produktionsanlage in Stuttgart. Null Fehler dank IoT und KI.',
    content: '## Die digitale Fabrik\n\nSeit 2015 hat K-Aqua kontinuierlich in die Digitalisierung der Produktion investiert. Heute ist unser Stammwerk in Stuttgart eine vollständig vernetzte Industrie-4.0-Anlage mit über 2.000 IoT-Sensoren, Echtzeit-Datenanalyse und KI-gestützter Prozessoptimierung.\n\n## Inline-Qualitätskontrolle\n\nJeder Meter Rohr wird während der Produktion automatisch geprüft. Ultraschallsensoren messen die Wanddicke, Lasermessgeräte kontrollieren den Außendurchmesser, und Kamerasysteme inspizieren die Oberfläche. Abweichungen werden in Echtzeit erkannt und der Prozess automatisch nachjustiert.\n\n## Prädiktive Wartung\n\nKI-Algorithmen analysieren die Maschinendaten und prognostizieren Wartungsbedarf, bevor Ausfälle auftreten. Seit Einführung dieses Systems haben wir ungeplante Stillstände um 92% reduziert.\n\n## Energieeffizienz\n\nDie digitale Steuerung optimiert auch den Energieverbrauch. Wärmerückgewinnungssysteme nutzen die Abwärme der Extrusionsanlagen für die Gebäudeheizung. Der spezifische Energieverbrauch pro Tonne Fertigprodukt sank seit 2015 um 45%.',
    author: 'sarah-mueller', publishedAt: '2024-11-20T08:00:00Z', updatedAt: '2024-11-20T08:00:00Z',
    category: 'Technologie', tags: ['Industrie 4.0', 'IoT', 'Produktion', 'Digitalisierung', 'KI'], readingTime: 8, featured: false,
    metadata: { title: 'Industrie 4.0 bei K-Aqua | K-Aqua Blog', description: 'Einblicke in die volldigitalisierte K-Aqua Produktionsanlage. IoT-Sensoren, KI-Qualitätskontrolle und prädiktive Wartung.', keywords: ['Industrie 4.0', 'Produktion', 'IoT', 'Digitalisierung', 'Qualitätskontrolle'] },
  },
  {
    id: 'bp-009', slug: 'bim-planung-rohrsysteme', title: 'BIM-Planung für Rohrsysteme: Ein Praxisleitfaden',
    excerpt: 'Wie Building Information Modeling die Planung von Wasserinfrastruktur revolutioniert und warum K-Aqua BIM-Objekte bereitstellt.',
    content: '## Was ist BIM?\n\nBuilding Information Modeling (BIM) ist eine digitale Planungsmethode, die alle Informationen eines Bauwerks in einem 3D-Modell zusammenführt. Für Technische Gebäudeausrüstung (TGA) bedeutet dies: Rohrleitungen, Armaturen und Formteile werden als intelligente Objekte mit allen technischen Parametern modelliert.\n\n## K-Aqua BIM-Bibliothek\n\nK-Aqua stellt eine umfassende BIM-Objektbibliothek für Autodesk Revit und ArchiCAD zur Verfügung. Jedes Objekt enthält geometrische Daten, hydraulische Kennwerte und Bestellinformationen. Die Bibliothek wird quartalsweise aktualisiert.\n\n## Vorteile in der Praxis\n\nDie BIM-Planung ermöglicht Kollisionsprüfungen vor dem Baubeginn, automatisierte Massenermittlung und präzise Kostenschätzungen. Bei einem Bürokomplexprojekt in Frankfurt reduzierte die BIM-Planung den Koordinationsaufwand zwischen den Gewerken um 40%.\n\n## Download\n\nDie komplette K-Aqua BIM-Bibliothek steht kostenlos in unserem Ressourcen-Bereich zum Download bereit.',
    author: 'andreas-bauer', publishedAt: '2024-10-10T09:00:00Z', updatedAt: '2024-10-10T09:00:00Z',
    category: 'Technologie', tags: ['BIM', 'Planung', 'Revit', 'ArchiCAD', 'TGA'], readingTime: 7, featured: false,
    metadata: { title: 'BIM-Planung für Rohrsysteme | K-Aqua Blog', description: 'Praxisleitfaden für BIM-basierte Planung von Rohrsystemen. Kostenlose K-Aqua BIM-Objekte für Revit und ArchiCAD.', keywords: ['BIM', 'Planung', 'Revit', 'ArchiCAD', 'Rohrsysteme', '3D-Modell'] },
  },
  {
    id: 'bp-010', slug: 'trinkwasserverordnung-2024', title: 'Neue Trinkwasserverordnung 2024: Das müssen Sie wissen',
    excerpt: 'Die aktualisierte TrinkwV bringt neue Anforderungen an Materialien und Überwachung. Ein Überblick der wichtigsten Änderungen.',
    content: '## Überblick der Änderungen\n\nDie novellierte Trinkwasserverordnung (TrinkwV), die am 24. Juni 2023 in Kraft getreten ist und seit 2024 vollständig umgesetzt wird, bringt signifikante Änderungen für Materialien, die in Kontakt mit Trinkwasser kommen.\n\n## Neue Materialanforderungen\n\nDie sogenannte 4MS-Initiative (4 Member States Initiative) harmonisiert die europäischen Anforderungen an Materialien im Trinkwasserkontakt. Für Kunststoffrohre gelten verschärfte Migrationslimits und erweiterte Prüfanforderungen. K-Aqua Produkte erfüllen bereits heute alle neuen Vorgaben.\n\n## Legionellenprävention\n\nDie neue Verordnung verschärft die Anforderungen an die Legionellenprophylaxe in Großanlagen. Regelmäßige Beprobungen und Dokumentationspflichten werden erweitert. Betreiber von Mehrfamilienhäusern und öffentlichen Gebäuden müssen ihre Wartungskonzepte überprüfen.\n\n## Handlungsempfehlung\n\nWir empfehlen allen Planern und Betreibern, ihre vorhandenen Installationen auf Konformität mit der neuen TrinkwV zu prüfen. Unser Whitepaper mit einer detaillierten Checkliste steht im Ressourcen-Bereich zum Download bereit.',
    author: 'lisa-hoffmann', publishedAt: '2024-09-01T10:00:00Z', updatedAt: '2024-09-01T10:00:00Z',
    category: 'Regulierung', tags: ['Trinkwasserverordnung', 'TrinkwV', 'Regulierung', 'Legionellen', '4MS'], readingTime: 6, featured: false,
    metadata: { title: 'Trinkwasserverordnung 2024 | K-Aqua Blog', description: 'Die wichtigsten Änderungen der neuen Trinkwasserverordnung 2024. Materialanforderungen, Legionellenprävention und Handlungsempfehlungen.', keywords: ['Trinkwasserverordnung', 'TrinkwV', '2024', 'Regulierung', 'Legionellen'] },
  },
];

// ═══ Typed Getter Functions ═══

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostsByAuthor(authorSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.author === authorSlug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export { blogPosts };
