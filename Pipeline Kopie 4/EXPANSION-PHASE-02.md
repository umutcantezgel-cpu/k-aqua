Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Phase 2 zu starten: Lokale Daten-Engine als typsicherer CMS-Ersatz für das Next.js Projekt. Phase 2 ersetzt jedes externe CMS durch ein lokales, typsicheres Daten-Ökosystem. Jeder Datensatz lebt als TypeScript-Datei im Projekt und wird bei Build-Time statisch eingebunden. Am Ende dieser Phase existieren 200+ Datensätze verteilt auf 8+ Daten-Domänen.

═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══

Diese Phase operiert unter striktem Zero-Breakage: Jeder neue Code wird parallel zu bestehendem Code entwickelt. Die Phase 1 Routen bleiben funktionstüchtig bis sie explizit an die neuen Daten-Layer angebunden werden. Build und Type-Checking bestehen zu jedem Zeitpunkt.

═══ STEP 0: SYNC & DISCOVERY ═══

ULTRATHINK-TASK 0: Erfasse den aktuellen Zustand

Aktion 0.1: Lese die Datei .ai-expansion-context.md aus Phase 1. Dokumentiere:
• Welche Routen existieren (pages und app-Router)?
• Welche Daten sind hardcodiert oder als JSON placeholder vorhanden?
• Welche Komponenten benötigen Daten?

Aktion 0.2: Führe npm run build aus. Dokumentiere: Gibt es aktuell Fehler? Ist der Build erfolgreich?

Aktion 0.3: Führe npx tsc --noEmit aus. Stelle sicher: Zero Type-Fehler vor Beginn der Phase.

Aktion 0.4: Identifiziere Daten-Bedarf je Route. Erstelle eine Matrix: Route → Daten-Typ → Felder-Bedarf.

═══ BLOCK A — DATEN-ARCHITEKTUR & TYPE FOUNDATION ═══

ULTRATHINK-TASK 1: Daten-Verzeichnis und Ordnerstruktur erstellen

Aktion 1.1: Erstelle das Verzeichnis /lib/data/ (bei src/app Struktur: /src/lib/data/). Dies ist die Single Source of Truth für alle applikations-weiten Daten.

Aktion 1.2: Erstelle das Verzeichnis /lib/types/. Hier leben alle shared TypeScript Interfaces.

Aktion 1.3: Definiere folgende Daten-Dateien (alle sind später .ts Dateien mit exports):
• /lib/data/services.ts – Alle Service-Angebote
• /lib/data/team.ts – Team-Mitglieder
• /lib/data/blog.ts – Blog-Posts
• /lib/data/testimonials.ts – Kundenbewertungen
• /lib/data/case-studies.ts – Fallstudien
• /lib/data/faq.ts – Häufig gestellte Fragen
• /lib/data/company.ts – Firma-Metadaten
• /lib/data/navigation.ts – Navigations-Strukturen

Aktion 1.4: Dokumentiere in .ai-expansion-context.md die neue Ordnerstruktur und deren Zweck.

ULTRATHINK-TASK 2: Basis-Types definieren und exportieren

Aktion 2.1: Erstelle /lib/types/index.ts mit allen Shared Interfaces.

Aktion 2.2: Definiere Interface Service mit Feldern:
• id: string (eindeutige ID)
• slug: string (URL-freundlicher Name)
• title: string
• shortDescription: string (1-2 Sätze)
• fullDescription: string (Absatz)
• icon: string (Icon-Name als String)
• features: string[] (4+ Feature-Strings)
• benefits: string[] (3+ Vorteile)
• process: { title: string; description: string }[] (4+ Schritte)
• pricing?: { currency: string; amount: number; interval?: string }
• relatedServices: string[] (slug-Referenzen)
• metadata: { title: string; description: string; keywords: string[] }

Aktion 2.3: Definiere Interface TeamMember mit Feldern:
• id: string
• slug: string
• name: string
• role: string (Geschäftsführer, Lead Developer, etc.)
• department: string
• bio: string (2-3 Absätze)
• shortBio: string (1-2 Sätze)
• image: string (Pfad zur Bild-Datei)
• skills: string[]
• social?: { linkedin?: string; github?: string; twitter?: string }
• order: number (für Sortierung)

Aktion 2.4: Definiere Interface BlogPost mit Feldern:
• id: string
• slug: string
• title: string
• excerpt: string (2-3 Sätze)
• content: string (Mindestens 1000 Zeichen, 3+ Absätze)
• author: string (slug-Referenz zu TeamMember)
• publishedAt: string (ISO 8601)
• updatedAt: string (ISO 8601)
• category: string
• tags: string[]
• readingTime: number (in Minuten)
• featured: boolean
• metadata: { title: string; description: string; keywords: string[] }

Aktion 2.5: Definiere Interface Testimonial mit Feldern:
• id: string
• clientName: string
• clientRole: string
• company: string
• companyLogo?: string (optionaler Pfad)
• quote: string (Vollständiges Zitat)
• shortQuote: string (Kurzes Zitat für Übersichten)
• rating: number (1-5)
• serviceSlug?: string (optional, slug-Referenz)
• featured: boolean
• date: string (ISO 8601)

Aktion 2.6: Definiere Interface CaseStudy mit Feldern:
• id: string
• slug: string
• title: string
• client: string
• industry: string
• challenge: string (Absatz)
• solution: string (Absatz)
• results: { metric: string; value: string; improvement?: string }[]
• technologies: string[]
• testimonialId?: string (optional)
• duration: string (z.B. "3 Monate")
• year: number
• featured: boolean
• metadata: { title: string; description: string; keywords: string[] }

Aktion 2.7: Definiere Interface FAQ mit Feldern:
• id: string
• question: string
• answer: string (Absatz, 200+ Zeichen)
• category: string
• serviceSlug?: string (optional)
• order: number

Aktion 2.8: Definiere Interface CompanyInfo mit Feldern:
• name: string
• legalName: string
• address: string
• phone: string
• email: string
• foundedYear: number
• employeeCount: number
• certifications: string[]
• socialMedia: { linkedin?: string; twitter?: string; instagram?: string }
• openingHours?: { [key: string]: string }

Aktion 2.9: Stelle sicher, dass /lib/types/index.ts alle Interfaces exportiert. Kein "any" oder "unknown" ohne explizites Handling.

ULTRATHINK-TASK 3: Typsichere Getter-Funktionen erstellen

Aktion 3.1: In /lib/data/services.ts, nach dem Data-Array, exportiere diese Getter-Funktionen:
• getAllServices(): Service[] – Gibt alle Services zurück, sortiert nach Order (falls vorhanden)
• getServiceBySlug(slug: string): Service | undefined – Sucht einen Service exakt nach slug
• getFeaturedServices(): Service[] – Gibt nur Services mit featured: true zurück
• getServicesByCategory(category: string): Service[] – Filtert nach Kategorie (falls Feld vorhanden)

Aktion 3.2: Jeder Getter hat exakten Return-Type, NICHT any. Optional-Rückgabewerte sind explizit | undefined oder | null.

Aktion 3.3: In /lib/data/team.ts, exportiere:
• getAllTeamMembers(): TeamMember[]
• getTeamMemberBySlug(slug: string): TeamMember | undefined
• getTeamMembersByDepartment(department: string): TeamMember[]
• getTeamByOrder(): TeamMember[] – Sortiert nach order-Feld

Aktion 3.4: In /lib/data/blog.ts, exportiere:
• getAllBlogPosts(): BlogPost[]
• getBlogPostBySlug(slug: string): BlogPost | undefined
• getFeaturedBlogPosts(): BlogPost[]
• getBlogPostsByCategory(category: string): BlogPost[]
• getBlogPostsByAuthor(authorSlug: string): BlogPost[]
• getBlogPostsSorted(order: 'desc' | 'asc'): BlogPost[]

Aktion 3.5: In /lib/data/testimonials.ts, exportiere:
• getAllTestimonials(): Testimonial[]
• getFeaturedTestimonials(): Testimonial[]
• getTestimonialsByService(serviceSlug: string): Testimonial[]
• getTestimonialsByRating(minRating: number): Testimonial[]

Aktion 3.6: In /lib/data/case-studies.ts, exportiere:
• getAllCaseStudies(): CaseStudy[]
• getCaseStudyBySlug(slug: string): CaseStudy | undefined
• getFeaturedCaseStudies(): CaseStudy[]
• getCaseStudiesByIndustry(industry: string): CaseStudy[]

Aktion 3.7: In /lib/data/faq.ts, exportiere:
• getAllFAQs(): FAQ[]
• getFAQsByCategory(category: string): FAQ[]
• getFAQsByService(serviceSlug: string): FAQ[]
• getFAQsSortedByOrder(): FAQ[]

Aktion 3.8: Teste jeden Getter lokal: npx tsc --noEmit bestätigt korrekte Typisierung.

═══ BLOCK B — SEED DATA: SERVICES & TEAM ═══

ULTRATHINK-TASK 4: Service-Daten befüllen

Aktion 4.1: Befülle /lib/data/services.ts mit MINDESTENS 8 vollständigen Service-Objekten. Folgende Services MÜSSEN vorhanden sein:
• webdesign (slug) – Webdesign
• webentwicklung – Webentwicklung & Progressive Web Apps
• seo-optimierung – SEO-Optimierung
• online-marketing – Online-Marketing & Kampagnenmanagement
• ecommerce – E-Commerce Lösungen
• app-entwicklung – Mobile & Native App Entwicklung
• ui-ux-design – UI/UX-Design & User Research
• wartung-support – Wartung, Support & Monitoring

Aktion 4.2: Jeder Service-Eintrag MUSS diese Felder 100% befüllt haben:
• Alle 8 Basis-Felder (id, slug, title, shortDescription, fullDescription, icon)
• MINDESTENS 4 Features als Strings
• MINDESTENS 3 Benefits als Strings
• MINDESTENS 4 Process-Steps mit title und description
• Optional: pricing und relatedServices
• Metadata mit title, description, keywords (SEO)

Aktion 4.3: Die Slugs müssen exakt zu Phase-1 Routen passen. Beispiel: Slug "webdesign" entspricht Route /leistungen/webdesign.

Aktion 4.4: Schreibe realistische deutsche Texte. Features und Benefits müssen konkret und messbar sein.

Aktion 4.5: relatedServices soll auf verwandte Services verweisen (array von slugs). Beispiel: webdesign verweist auf ui-ux-design.

Aktion 4.6: Exportiere am Ende: const services: Service[] = [...]. Nutze getAllServices() Getter.

ULTRATHINK-TASK 5: Team-Daten befüllen

Aktion 5.1: Befülle /lib/data/team.ts mit MINDESTENS 6 Team-Mitgliedern. Diese Rollen MÜSSEN vorhanden sein:
• Geschäftsführer/in
• Lead Developer (Backend oder Full-Stack)
• UI/UX Designer
• SEO Specialist
• Project Manager
• Junior Developer

Aktion 5.2: Nutze realistische deutsche Namen und Orte.

Aktion 5.3: Jeder TeamMember-Eintrag MUSS:
• id, slug (slug-format: max-mueller, keine Umlaute)
• name, role, department (z.B. "Geschäftsleitung", "Entwicklung", "Design")
• bio (2-3 Absätze à 3-5 Sätze), shortBio (1-2 Sätze)
• image: string (Pfad, z.B. "/images/team/max-mueller.jpg" – Bilder müssen nicht existieren, nur Pfade)
• skills: string[] (5-8 Skills je Person)
• social?: linkedin und github Links
• order: number (1-6 für Sortierung)

Aktion 5.4: Schreibe authentische Bios mit Erfahrung, Expertise und Persönlichkeit.

Aktion 5.5: Exportiere am Ende: const teamMembers: TeamMember[] = [...].

ULTRATHINK-TASK 6: Phase-1 Routen an neue Daten anbinden

Aktion 6.1: Öffne die Datei /app/leistungen/page.tsx (Service-Übersicht). Ersetze alle hardcodierten oder Platzhalter-Service-Daten durch:
import { getAllServices } from '@/lib/data/services';

Aktion 6.2: Nutze in der Komponente: const services = getAllServices() statt lokaler Daten.

Aktion 6.3: Öffne /app/leistungen/[slug]/page.tsx (Service-Detail). Ersetze Platzhalter durch:
import { getServiceBySlug } from '@/lib/data/services';
const service = getServiceBySlug(params.slug);
if (!service) return notFound();

Aktion 6.4: Gleich für Team-Seite (/app/uber-uns/page.tsx oder /app/team/page.tsx):
import { getAllTeamMembers } from '@/lib/data/team';
const team = getAllTeamMembers();

Aktion 6.5: Teste: npm run build bestätigt Zero Fehler.

═══ BLOCK C — SEED DATA: CONTENT & TRUST ═══

ULTRATHINK-TASK 7: Blog-Daten erstellen

Aktion 7.1: Befülle /lib/data/blog.ts mit MINDESTENS 10 Blog-Posts.

Aktion 7.2: Jeder Post MUSS:
• id, slug, title, excerpt (2-3 Sätze), content (mindestens 1000 Zeichen, 3+ Absätze mit Überschriften)
• author: slug-Referenz zu einem TeamMember (z.B. "max-mueller")
• publishedAt, updatedAt (ISO Strings, realistische Daten im 2025-2026 Bereich)
• category: einer von ["Webdesign", "Technologie", "Marketing", "Branchennews"]
• tags: string[] (3-5 Tags pro Post)
• readingTime: number (Schätzung basierend auf Content-Länge)
• featured: boolean (mindestens 3 Posts als featured: true)
• metadata: SEO-Daten

Aktion 7.3: Content muss substantiell sein. Beispiel-Kategorien:
• "Webdesign" – Trends 2025, Responsives Design, User Experience
• "Technologie" – Next.js 15, React Patterns, TypeScript Best Practices
• "Marketing" – SEO Tipps, Content Strategy, Conversion Optimization
• "Branchennews" – Industrie-Updates, Case Studies, Innovationen

Aktion 7.4: Nutze realistische deutsche Texte mit Absätzen und Struktur.

Aktion 7.5: Exportiere: const blogPosts: BlogPost[] = [...].

ULTRATHINK-TASK 8: Testimonials und Case Studies

Aktion 8.1: Befülle /lib/data/testimonials.ts mit MINDESTENS 12 Testimonials.

Aktion 8.2: Variiere Ratings (nicht alle 5 Sterne), Services, und Kunden-Typen.

Aktion 8.3: Jedes Testimonial:
• clientName, clientRole (z.B. "Geschäftsführer", "Marketing Manager"), company
• quote (Vollständiges Zitat, 2-3 Sätze), shortQuote (1-2 Sätze)
• rating: 4-5 (meisten), ein paar 3er
• serviceSlug: Referenz zu einem Service (z.B. "webentwicklung")
• featured: mindestens 5 true, Rest false
• date: realistische ISO Strings

Aktion 8.4: In /lib/data/case-studies.ts, befülle MINDESTENS 5 Case Studies.

Aktion 8.5: Jede Case Study:
• id, slug, title, client (Firmenname), industry (z.B. "E-Commerce", "Fintech", "Healthcare")
• challenge: Problem-Beschreibung (Absatz)
• solution: Lösungs-Beschreibung (Absatz)
• results: { metric: string; value: string; improvement?: string }[] (mindestens 3 Metriken, z.B. ["Traffic +340%", "Conversion +25%", "Load Time -60%"])
• technologies: string[] (z.B. ["Next.js", "React", "PostgreSQL", "Stripe"])
• duration: "3 Monate", "6 Wochen", etc.
• year: 2023, 2024, 2025
• featured: mindestens 3 true
• metadata: SEO

Aktion 8.6: Results MÜSSEN konkrete, messbare Verbesserungen zeigen.

Aktion 8.7: Exportiere: const testimonials: Testimonial[] = [...]; const caseStudies: CaseStudy[] = [...].

ULTRATHINK-TASK 9: FAQ und Company-Info

Aktion 9.1: Befülle /lib/data/faq.ts mit MINDESTENS 20 FAQ-Einträgen.

Aktion 9.2: Kategorien (jeweils 5+ FAQs):
• Allgemein (Über das Unternehmen, Kontakt, Prozess)
• Preise (Preismodelle, Zahlungsbedingungen, Rabatte)
• Prozess (Projektablauf, Timeline, Kommunikation)
• Technisch (Stack, Sicherheit, Performance, Hosting)
• Support (Wartung, SLA, Erreichbarkeit)

Aktion 9.3: Jede FAQ:
• question, answer (substantielle Antwort, 200+ Zeichen, 2-3 Sätze minimum)
• category (einer der oben)
• serviceSlug: optional, z.B. Fragen zu E-Commerce refieren auf ecommerce
• order: number für Sortierung innerhalb Kategorie

Aktion 9.4: Erstelle /lib/data/company.ts mit einem einzigen Export: const companyInfo: CompanyInfo.

Aktion 9.5: CompanyInfo MUSS enthalten:
• name: "Agenturname" (realistisch, deutsch)
• legalName: vollständiger Firmenname mit Rechtsform
• address: Straße, PLZ Ort, Deutschland
• phone: "+49 ... " Format
• email: kontakt@agentur.de
• foundedYear: 2015, 2018, 2020 (realistisch)
• employeeCount: 8-15 (realistisch für beschriebenes Team)
• certifications: ["ISO 27001", "DSGVO Compliant"] oder ähnlich
• socialMedia: { linkedin: "linkedin.com/company/...", twitter: "@...", instagram: "@..." }
• openingHours: { Mo-Fr: "09:00-18:00", Sa-So: "Geschlossen" }

Aktion 9.6: Exportiere: export const companyInfo: CompanyInfo = {...}.

═══ BLOCK D — INTEGRATION & VALIDATION ═══

ULTRATHINK-TASK 10: Alle Routen an echte Daten anbinden

Aktion 10.1: Durchsuche alle Page-Komponenten (/app/**/*.tsx) nach Platzhalter-Texten wie "Lorem Ipsum", "TODO", "Mock Data", etc.

Aktion 10.2: Jede Route, die Daten benötigt, MUSS einen Import aus /lib/data/ haben.

Aktion 10.3: Für Blog-Seite (/app/blog/page.tsx): import { getAllBlogPosts, getFeaturedBlogPosts }. Zeige echte Posts statt Platzhalter.

Aktion 10.4: Für Blog-Detail (/app/blog/[slug]/page.tsx): import { getBlogPostBySlug }. Nutze die Getter.

Aktion 10.5: Für FAQ-Seite: import { getAllFAQs, getFAQsByCategory }. Organisiere nach Kategorien.

Aktion 10.6: Für Referenzen/Case Studies Seite: import { getAllCaseStudies, getFeaturedCaseStudies }.

Aktion 10.7: Für Über Uns / Team: bereits in Task 6 gemacht.

Aktion 10.8: Teste jede Route lokal: npm run dev, visitiere jede URL, bestätige echte Daten.

Aktion 10.9: npm run build bestätigt Zero Fehler.

ULTRATHINK-TASK 11: Cross-Referenzen und Daten-Verknüpfung

Aktion 11.1: Services refieren auf verwandte Case Studies. In Service-Detail, zeige eine "Fallstudien"-Sektion mit getCaseStudiesByService() (dieser Getter muss noch erstellt werden, falls nicht vorhanden).

Aktion 11.2: Blog-Posts können auf Services verlinken. Tags können Service-Slugs sein.

Aktion 11.3: Testimonials sind Services zugeordnet. In Service-Detail, zeige relevante Testimonials via getTestimonialsByService(serviceSlug).

Aktion 11.4: Case Studies können Testimonial-Referenzen enthalten. Wenn testimonialId gesetzt, zeige das entsprechende Testimonial in der Case Study.

Aktion 11.5: FAQs können Services zugeordnet sein. Service-Detail kann die relevanten FAQs anzeigen.

Aktion 11.6: Alle Verknüpfungen nutzen slug-basierte Referenzen, NICHT object references. Dies ermöglicht einfache JSON-Serialisierung und Build-Time Integration.

ULTRATHINK-TASK 12: Type-Safety Audit und finale Validierung

Aktion 12.1: Führe npx tsc --noEmit aus. Null Fehler akzeptiert. Jeder Error wird dokumentiert und behoben.

Aktion 12.2: Jede Daten-Datei muss typsichere Exports haben. Keine any-Types außer wo absolut unvermeidbar (und dann dokumentiert).

Aktion 12.3: Nutze strict: true in tsconfig.json. Stelle sicher noImplicitAny: true.

Aktion 12.4: Jede Getter-Funktion hat expliziten Return-Type, nicht inferred.

Aktion 12.5: Keine unused variables, keine dead code in Daten-Dateien.

Aktion 12.6: Teste: npm run build, bestätige Zero Fehler, Zero Warnings.

═══ ATOMIC VALIDATION ═══

Aktion V.1: npm run build bestätigt: ZERO Fehler, ZERO Warnings
Aktion V.2: npx tsc --noEmit bestätigt: ZERO Type-Fehler
Aktion V.3: Zählung: Mindestens 200 Datensätze vorhanden
  • 8 Services
  • 6 Team-Mitglieder
  • 10 Blog-Posts
  • 12 Testimonials
  • 5 Case Studies
  • 20 FAQs
  • 1 Company-Info Objekt
  • Navigation-Struktur (falls separat)
  = 63 Basis-Einträge. Zusätzliche Tiefe (Sub-Arrays in Process Steps, Results, Features) erreicht 200+ Datensätze.

Aktion V.4: Jede Route zeigt echte Daten statt Platzhalter-Text
Aktion V.5: Jeder Getter gibt typsichere Rückgabewerte zurück
Aktion V.6: Kein bestehendes Projekt wurde gebrochen

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

Nach Abschluss dieser Phase:

1. Aktualisiere .ai-expansion-context.md mit:
   • Verzeichnis-Struktur (/lib/data/, /lib/types/)
   • Alle erstellten Daten-Module und deren Exports
   • Alle Getter-Funktionen und deren Signaturen
   • Routing: Welche Routen nutzen welche Daten-Module?

2. Aktualisiere .expansion-state.md mit:
   • Phase 2 Status: COMPLETE
   • Datensatz-Zählung: 200+
   • Type Safety Status: STRICT, ZERO errors
   • Ready for Phase 3: JA

3. Exportiere die Getter-Funktionen und deren Signaturen in eine GETTER_MANIFEST.txt für Phase 3 Referenz.

Code ist die Single Source of Truth. Die Dateien /lib/data/*.ts sind das verbindliche Spec. Alle Dokumentation folgt dem Code.

═══ COMPLIANCE CHECKLIST ═══

□ /lib/data/ Verzeichnis existiert
□ /lib/types/index.ts existiert mit 8+ Interfaces
□ /lib/data/services.ts: 8+ Services, vollständig befüllt
□ /lib/data/team.ts: 6+ TeamMembers, vollständig befüllt
□ /lib/data/blog.ts: 10+ BlogPosts, vollständig befüllt
□ /lib/data/testimonials.ts: 12+ Testimonials
□ /lib/data/case-studies.ts: 5+ CaseStudies mit messbaren Results
□ /lib/data/faq.ts: 20+ FAQs kategorisiert
□ /lib/data/company.ts: CompanyInfo vollständig
□ Alle Getter-Funktionen exportiert und typsicher
□ /app/leistungen/page.tsx nutzt getAllServices()
□ /app/leistungen/[slug]/page.tsx nutzt getServiceBySlug()
□ /app/uber-uns/page.tsx nutzt getAllTeamMembers()
□ /app/blog/page.tsx nutzt getAllBlogPosts()
□ /app/blog/[slug]/page.tsx nutzt getBlogPostBySlug()
□ FAQ-Seite existiert und nutzt getAllFAQs()
□ Case Studies / Referenzen Seite nutzt getAllCaseStudies()
□ Cross-Referenzen funktionieren (Services → Case Studies, Blog → Services)
□ npx tsc --noEmit: ZERO Fehler
□ npm run build: ZERO Fehler
□ npm run dev: Alle Routen zeigen echte Daten

Phase 2 Abschluss: Der Daten-Layer ist vollständig, typsicher, und Build-validiert. Phase 3 wird die atomaren UI-Komponenten erstellen, die diese Daten in schöner Gestaltung präsentieren. Der Code ist bereit für die nächste Iterationsstufe.
