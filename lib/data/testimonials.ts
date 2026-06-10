import type { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
  { id: 'test-001', clientName: 'Dipl.-Ing. Stefan Brandt', clientRole: 'Projektleiter TGA', company: 'Hochtief AG', quote: 'Die partnerschaftliche Zusammenarbeit mit K-Aqua beim Jumeirah Palm Projekt war herausragend. Trotz extremer Bedingungen wurden alle Meilensteine termingerecht erreicht. Die Qualität der PP-R Systeme ist schlichtweg konkurrenzlos – wir hatten in drei Jahren Betrieb keinen einzigen Leckagefall.', shortQuote: 'Qualität und Termintreue von K-Aqua sind konkurrenzlos.', rating: 5, serviceSlug: 'installation', featured: true, date: '2024-11-15T00:00:00Z' },
  { id: 'test-002', clientName: 'Maria Schneider', clientRole: 'Geschäftsführerin', company: 'Schneider Haustechnik GmbH', quote: 'Seit wir auf K-Aqua PP-R umgestiegen sind, hat sich unsere Installationszeit halbiert. Die Schweißverbindungen sind einfach sicherer und schneller als Löten. Die Schulung an der K-Aqua Academy hat unser Team optimal vorbereitet.', shortQuote: 'Installationszeit halbiert seit dem Umstieg auf K-Aqua PP-R.', rating: 5, serviceSlug: 'schulung', featured: true, date: '2024-10-20T00:00:00Z' },
  { id: 'test-003', clientName: 'Prof. Dr. Werner Koch', clientRole: 'Technischer Direktor', company: 'Klinikum Stuttgart', quote: 'Die antimikrobiellen PP-R Systeme von K-Aqua haben unsere Trinkwasserhygiene auf ein neues Niveau gehoben. Besonders beeindruckend war die Installation bei laufendem Klinikbetrieb – null Unterbrechungen, null Beschwerden.', shortQuote: 'Trinkwasserhygiene auf neuem Niveau dank K-Aqua antimikrobieller Systeme.', rating: 5, serviceSlug: 'installation', featured: true, date: '2024-09-10T00:00:00Z' },
  { id: 'test-004', clientName: 'Thomas Richter', clientRole: 'Bauherr', company: 'Wohnbau München GmbH', quote: 'Das Flächenheizsystem von K-Aqua hat unsere Erwartungen übertroffen. 28% Energieeinsparung und eine termingerechte Fertigstellung aller 500 Wohneinheiten. Die Betreuung von der Planung bis zur Inbetriebnahme war erstklassig.', shortQuote: '28% Energieeinsparung mit K-Aqua Flächenheizung. Erstklassige Betreuung.', rating: 5, serviceSlug: 'flaechenheizung', featured: true, date: '2024-08-05T00:00:00Z' },
  { id: 'test-005', clientName: 'Ing. Fatima Al-Rashidi', clientRole: 'Chief Engineer', company: 'Emirates Infrastructure Corp.', quote: 'K-Aqua delivered exceptional quality under the most challenging conditions we have ever faced. Their UV-stable PP-R system was the only product that met our specifications for outdoor installation in 50°C+ ambient temperatures. The on-site extrusion solution was brilliant.', shortQuote: 'K-Aqua delivered exceptional quality under the most challenging conditions.', rating: 5, serviceSlug: 'logistik', featured: true, date: '2024-07-12T00:00:00Z' },
  { id: 'test-006', clientName: 'Klaus Zimmermann', clientRole: 'Nachhaltigkeitsbeauftragter', company: 'BauGrün Consult', quote: 'Für unsere DGNB-zertifizierten Bauprojekte ist K-Aqua der ideale Partner. Die vollständig recycelbaren Materialien, die transparenten EPDs und die CO2-neutrale Produktion punkten in jeder Nachhaltigkeitsbewertung.', shortQuote: 'K-Aqua punktet in jeder Nachhaltigkeitsbewertung.', rating: 4, serviceSlug: 'qualitaetssicherung', featured: false, date: '2024-06-20T00:00:00Z' },
  { id: 'test-007', clientName: 'Andrea Meier', clientRole: 'Inhaberin', company: 'Meier SHK Fachbetrieb', quote: 'Die K-Aqua Academy hat mein Team auf den neuesten Stand gebracht. Der Praxisanteil ist herausragend – man merkt, dass hier Praktiker schulen. Besonders die Gold-Zertifizierung hat uns neue Kunden gebracht.', shortQuote: 'Die K-Aqua Academy hat uns neue Kunden gebracht. Herausragender Praxisanteil.', rating: 5, serviceSlug: 'schulung', featured: false, date: '2024-05-15T00:00:00Z' },
  { id: 'test-008', clientName: 'Jürgen Wagner', clientRole: 'Facility Manager', company: 'Data Center Frankfurt AG', quote: 'Die Kühlwasserversorgung für unser Rechenzentrum erforderte höchste Verfügbarkeit. K-Aqua hat ein redundantes System geliefert, das seit der Inbetriebnahme 99,999% Verfügbarkeit erreicht. Der 24/7 Service gibt uns zusätzliche Sicherheit.', shortQuote: '99,999% Verfügbarkeit der K-Aqua Kühlwasserversorgung für unser Rechenzentrum.', rating: 5, serviceSlug: 'wartung-service', featured: false, date: '2024-04-10T00:00:00Z' },
  { id: 'test-009', clientName: 'Li Wei', clientRole: 'Operations Director', company: 'Shanghai Industrial Park Co.', quote: 'Die chemikalienbeständigen Rohrleitungen von K-Aqua waren die einzige Lösung, die unseren anspruchsvollen Spezifikationen entsprach. Der lokale Support aus dem Shanghai-Büro war schnell und kompetent. Seit der Installation null Wartungsfälle.', shortQuote: 'Null Wartungsfälle seit Installation. Lokaler Support war schnell und kompetent.', rating: 4, serviceSlug: 'installation', featured: false, date: '2024-03-22T00:00:00Z' },
  { id: 'test-010', clientName: 'Petra Hoffmann', clientRole: 'Architektin', company: 'HKP Architekten BDA', quote: 'Die BIM-Objekte von K-Aqua sind die besten in der Branche. Vollständige Daten, regelmäßige Updates und direkter Support bei Planungsfragen. Die Kollisionsprüfung hat uns auf einer Großbaustelle drei Wochen Nacharbeit erspart.', shortQuote: 'Die besten BIM-Objekte der Branche. Drei Wochen Nacharbeit erspart.', rating: 4, serviceSlug: 'planung-beratung', featured: false, date: '2024-02-18T00:00:00Z' },
  { id: 'test-011', clientName: 'Michael Berger', clientRole: 'Projektingenieur', company: 'Berger & Partner Ingenieurbüro', quote: 'K-Aqua hat die hydraulische Berechnung für unser Hochhaus-Projekt komplett übernommen. Die Ergebnisse waren präzise und normkonform. Besonders hilfreich war die Materialoptimierung, die 18% der Kosten eingespart hat.', shortQuote: '18% Kosteneinsparung durch K-Aqua Materialoptimierung.', rating: 4, serviceSlug: 'planung-beratung', featured: false, date: '2024-01-08T00:00:00Z' },
  { id: 'test-012', clientName: 'Hassan Al-Mansour', clientRole: 'Resort Manager', company: 'Eco Resort Malediven', quote: 'Under extreme saltwater conditions, K-Aqua systems performed flawlessly. The lightweight PP-R pipes were easy to transport by boat, and the installation cost was 40% less than our initial estimate with conventional materials. A game-changer for island construction.', shortQuote: '40% weniger Installationskosten. Ein Game-Changer für Inselbau.', rating: 5, serviceSlug: 'logistik', featured: false, date: '2023-11-20T00:00:00Z' },
];

// ═══ Typed Getter Functions ═══

export function getAllTestimonials(): Testimonial[] {
  return [...testimonials].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}

export function getTestimonialsByRating(minRating: number): Testimonial[] {
  return testimonials.filter((t) => t.rating >= minRating);
}

export { testimonials };
