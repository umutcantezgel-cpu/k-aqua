Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte Nutzererlebnis dieser Next.js/React/TypeScript-Website so umzustrukturieren, dass der Besucher bei jeder Interaktion emotional belohnt wird, unerschütterliches Vertrauen fasst und der Weg zur Conversion völlig reibungslos, instinktiv und so natürlich verläuft wie das Einatmen — basierend auf den Gesetzen der Neurowissenschaft, der Verhaltenspsychologie und der ethischen Überzeugungsarchitektur. Da wir auf einem modernen Next.js Stack arbeiten, werden alle Conversion-Elemente als typsichere React-Komponenten, Server-Actions-basierte Formulare und datengetriebene Trust-Systeme implementiert. Dies ist Phase 5 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN CHIRURG, KEIN BULLDOZER.

Deine 5 Säulen:
1. READ-BEFORE-WRITE: Lies JEDE Datei VOLLSTÄNDIG bevor du sie änderst
2. SURGICAL INJECTION: Erweitere bestehenden Code, überschreibe ihn NIEMALS blind
3. ATOMIC VALIDATION: Nach JEDEM Task → npm run build && npm run lint && npx tsc --noEmit
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem Task
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md am Ende der Phase

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Next.js (App Router oder Pages Router), React, TypeScript (Strict Mode)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Dies ist dein Gedächtnis aus Phase 1–4. Internalisiere:
- Projektstruktur und Router-Typ (App Router vs. Pages Router)
- Komponentenbaum und existierende Komponenten
- Design-Token-System (Spacing, Farben, Typografie aus Phase 2–3)
- Animations-System und Easing-Tokens aus Phase 4
- Alle bisherigen Architektur-Entscheidungen

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe ob Phase 1–4 als abgeschlossen markiert sind. Ergänze:
```
## Phase 5: Conversion-Architektur & Vertrauenspsychologie
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Kaufgleichung optimiert (Nutzen↑, Kosten↓, Risiko↓, Aufwand↓)
- [ ] Task 2: Drei-Gehirne-Ansprache implementiert
- [ ] Task 3: Cialdini-Prinzipien als Komponenten-Netz
- [ ] Task 4: Scroll-basierte Engagement-Stufen
- [ ] Task 5: Storytelling-Architektur (5-Akte-Struktur)
- [ ] Task 6: Trust-Score-Modell & Vertrauens-Infrastruktur
- [ ] Task 7: Kontaktformular als Conversion-Maschine
- [ ] Task 8: Sektions-Blaupausen (Startseite, Service, Über-uns)
- [ ] Task 9: Conversion-Tracking-Infrastruktur
- [ ] Task 10: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Discovery für Conversion-Architektur:
Analysiere die GESAMTE bestehende Codebase mit Fokus auf Conversion-relevante Elemente:

1. CTA-Inventar: Finde JEDEN Call-to-Action auf jeder Route. Dokumentiere: Text, Position, Typ (Button/Link), Ziel (URL/Formular/Calendly), Styling.
2. Formular-Inventar: Finde JEDES Formular. Dokumentiere: Felder, Validierung, Submission-Handler (Formspree? Server Action? API Route?), Erfolgs-/Fehler-Zustände.
3. Trust-Element-Inventar: Finde JEDES bestehende Vertrauenssignal (Testimonials, Bewertungen, Zertifikate, Kundenlogos). Dokumentiere Position und Implementierung.
4. Content-Struktur pro Route: Welche Sektionen existieren? In welcher Reihenfolge? Wo gibt es inhaltliche Lücken?
5. Bestehende Hooks & Utils: Existieren bereits Hooks wie useScrollDepth, useFormProgress, useVisitorType? Dokumentiere sie.
6. Formspree-Integration: Wie ist Formspree aktuell eingebunden? Welche Form-ID wird verwendet? Welche Felder?
7. Calendly-Integration: Wie ist Calendly eingebunden? Inline-Widget, Popup, oder Link?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter einer neuen Sektion:
### 🎯 Conversion-Architektur & Trust-Infrastruktur

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — KAUFGLEICHUNG ALS UNIVERSELLES OPTIMIERUNGS-FRAMEWORK
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: DIE VIER VARIABLEN DER KAUFENTSCHEIDUNG SYSTEMATISCH OPTIMIEREN

Jedes einzelne Element auf jeder Route muss eine von vier Variablen beeinflussen: Wahrgenommener Nutzen > Wahrgenommene Kosten + Wahrgenommenes Risiko + Wahrgenommener Aufwand.

Schritt 1.1 — Nutzen ERHÖHEN auf jeder Route:
Analysiere jede page.tsx: Kommuniziert die Seite ERGEBNISSE oder MERKMALE? Erstelle eine Mapping-Tabelle in .ai-architectural-context.md: Aktueller Text → Transformations-Statement.

Implementiere eine <ValueProposition />-Komponente (PRÜFE ZUERST ob ähnliche Komponente existiert):
- Props: beforeState (string), afterState (string), metric (optional string), timeframe (optional string)
- Rendert: "Von [beforeState] zu [afterState]. [metric] in [timeframe]."
- Visuell: Zwei Spalten oder Pfeil-Übergang, nutzt Design-Tokens aus Phase 2
- TypeScript: Strenge Prop-Typisierung, alle Strings required außer metric/timeframe
- Server Component (kein Client-JS nötig)

Schritt 1.2 — Kosten SENKEN durch Kontext:
Prüfe ob eine PricingCard-Komponente existiert. Falls ja: erweitere sie. Falls nein: erstelle sie.
<PricingCard />:
- Vergleichsanker: "Vergleichbar mit [Alternative], die [höherer Preis] kostet"
- Kosten-Aufteilung: "Das entspricht [täglicher/wöchentlicher Betrag]"
- ROI-Rechner (optional): "Diese Investition amortisiert sich in [Zeitraum]"
- Preise IMMER umrahmt von Nutzen-Argumenten
- TypeScript Interface mit optionalen und required Props

Schritt 1.3 — Risiko REDUZIEREN an Entscheidungspunkten:
Erstelle eine <TrustSignals />-Komponente, die strategisch NEBEN jedem CTA platziert wird:
- Garantie-Badge: "30 Tage Geld-zurück-Garantie" oder "Kostenlose Erstberatung"
- Bewertungs-Snippet: Durchschnittsbewertung + Anzahl direkt neben dem Button
- Sicherheits-Indikator: Schloss-Icon + "Verschlüsselte Übertragung" oder "DSGVO-konform"
- Testimonial-Micro: Ein einzelnes kurzes Zitat
- Die <TrustSignals /> werden NICHT am Seitenende versteckt, sondern direkt neben oder unter JEDEM primären CTA-Button. Proximity zum Entscheidungspunkt ist kritisch.
- Server Component für SEO-Vorteile

Schritt 1.4 — Aufwand MINIMIEREN durch UI-Architektur:
Jeder CTA in maximal 2 Klicks/Taps erreichbar:
- Klebende Mobile-CTA-Leiste (<StickyMobileCta />): Prüfe ob aus Phase 2 vorhanden, sonst erstelle
- CTA-Wiederholung am Ende jeder Sektion
- Kontaktformular: Maximal 5 Felder (Formspree-basiert)
- Direkte Anruf-Funktion auf Mobile: <a href="tel:+49..."> mit aria-label
- Auto-Fill-kompatible Formulare (autocomplete-Attribute aus Phase 1)

Erstelle einen useConversionDistance()-Hook (Client Component):
- Misst die minimale Klickzahl vom aktuellen Viewport zum nächsten CTA
- Ziel: Niemals mehr als 1 Scroll + 1 Klick
- Nutzt IntersectionObserver für Performance

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? .upgrade-state.md aktualisieren. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: DREI-GEHIRNE-ANSPRACHE PRO SEKTION

Schritt 2.1 — Reptiliengehirn ZUERST (Sicherheit):
Bevor der Besucher irgendetwas verarbeiten kann, muss sein ältestes Gehirn "Bin ich hier sicher?" positiv beantworten:
- Professionelles, fehlerfreies Design: Kein pixeliges Bild, kein abgeschnittener Text, kein Layout-Shift (CLS <0.05 aus Phase 1–4)
- Kontaktinformationen SOFORT sichtbar: Im Header (Telefonnummer, physische Adresse)
- Sicherheitsindikatoren im oberen Drittel: Zertifikate, Mitgliedschaften
- Schnelle Ladegeschwindigkeit: LCP <2.0s (wird in Phase 6 weiter optimiert)
- Logo und Markenidentität klar und professionell

Schritt 2.2 — Limbisches System DANN (Emotion):
- Hero-Headline: Emotionaler Nutzen, nicht WAS die Marke tut, sondern wie sich das Ergebnis ANFÜHLT
- Hochwertige Bilder: Erstelle einen Development-Only-Warning-Wrapper der bei Stock-Fotos warnt
- Testimonials von echten Menschen mit Fotos, vollen Namen und Standort
- Nutze die Animations-Tokens aus Phase 4 für emotionale Micro-Interactions

Schritt 2.3 — Neokortex ZULETZT (Logik):
- Statistiken und animierte Counter (nutze AnimateIn aus Phase 4)
- Prozess-Visualisierung in 3–5 Schritten: <ProcessSteps />-Komponente
- Vergleichstabellen: <ComparisonTable />-Komponente
- FAQ-Sektion (beantwortet letzte Einwände)

REGEL: Die Reihenfolge auf JEDER Seite ist sakrosankt: Sicherheit → Emotion → Logik.

Implementiere dieses Pattern als <PageTemplate />-Komponente oder validiere die bestehende Sektionsreihenfolge.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: CIALDINI-PRINZIPIEN ALS SYSTEMATISCHES KOMPONENTEN-NETZ

Schritt 3.1 — Reziprozität (Geben vor Nehmen):
Implementiere <FreeValueOffer />-Komponenten:
- Interaktiver Rechner: <Calculator /> (ROI, Kosten-Schätzer)
- Kostenlose Erstberatung: Prominent, niedrigschwellig buchbar via Calendly
- Wissensartikel: Echten Mehrwert liefern
- Jedes Element erscheint BEVOR der Besucher aufgefordert wird, etwas zu geben

Schritt 3.2 — Sozialer Beweis (4-Tier-System):
<SocialProofTier1 />: Video-Testimonials (höchste Glaubwürdigkeit) — Lazy-loaded mit Thumbnail
<SocialProofTier2 />: Ausführliche schriftliche Testimonials — Volles Zitat, Name, Foto, Firma, Sterne
<SocialProofTier3 />: Bewertungsplattform-Integration — <RatingBadge /> ★ 4.9 (127 Bewertungen)
<SocialProofTier4 />: Quantitative Indikatoren — Counter-Animation aus Phase 4

Platzierung:
- Tier 3 (Rating-Badge): Im Hero, direkt unter der Headline
- Tier 2 (Testimonials): Eigene Sektion, unteres Drittel
- Tier 1 (Video): Auf Über-uns oder Referenzen-Seite
- Tier 4 (Stats): Zwischen Problem- und Lösungs-Sektion

Schritt 3.3 — Autorität:
<CredentialBar />: Horizontale Leiste mit Logos (Zertifizierungen, Partnerschaften, Kunden). Logos einheitlich, grau eingefärbt. Platzierung: Direkt unter Hero.

Schritt 3.4 — Sympathie:
<TeamSection />: Echte Fotos, Name, Rolle, persönliche Note. <FounderStory />: Emotionales Narrativ.

Schritt 3.5 — Konsistenz und Commitment (Mikro-Verbindlichkeitskette):
Steigende Verbindlichkeitsstufen: Content konsumieren → Unverbindliche Beratung → Konkretes Angebot → Auftrag.
<CommitmentLadder />-Kontext: Trackt Stufe, passt CTA-Text an ("Mehr erfahren" → "Kostenlose Beratung" → "Angebot anfordern").

Schritt 3.6 — Knappheit (NUR ETHISCH):
<AvailabilityIndicator />: "Nächster freier Termin: [ECHTES Datum]", "Aktuelle Auslastung: [ECHTER %]"
- Server Component mit echten Daten
- KEINE erfundenen Countdown-Timer
- Falls keine echte Knappheit: NICHT anzeigen

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — MIKRO-CONVERSION-KETTE UND ENGAGEMENT-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: SCROLL-BASIERTE ENGAGEMENT-STUFEN

Schritt 4.1 — Stufe 1: Engagement (50% Scroll):
useScrollDepth()-Hook:
- Bei >50% Scroll: <StickyCtaBar /> erscheint am unteren Rand (sanft einblendend via Phase 4 Easing-Tokens)
- Enthält: Primärer CTA-Button + optionale Telefonnummer
- Respektiert Close-Aktion per Session-State
- NICHT aufdringlich: Klein, dezent, schließbar

Schritt 4.2 — Stufe 2: Erkundung (Klick auf Service):
- Verwandte Inhalte gleiten ein
- Sofortige, animierte Enthüllung statt neuer Ladezeit
- In Next.js: Parallel Routes oder Intercepting Routes für modale Detail-Ansichten

Schritt 4.3 — Stufe 3: Absicht (Kontaktformular geöffnet):
- Ablenkende Elemente treten zurück
- <TrustBadge text="Kostenlos & unverbindlich" /> neben dem Formular
- Sticky CTA verschwindet
- Maximal einfach: 3–5 Felder, große Touch-Targets

Schritt 4.4 — Stufe 4: Verbindlichkeit (3+ Felder ausgefüllt):
useFormProgress()-Hook:
- Bei ≥3 Feldern: <ProgressIndicator /> — "Fast geschafft! Nur noch [X] Felder."
- Dezenter Text, kein aggressiver Banner

Schritt 4.5 — Stufe 5: Conversion und Feier:
<SuccessCelebration />:
- Häkchen-Animation + warme Bestätigung (nutze Phase 4 Animations-Tokens)
- Persönlich: "Vielen Dank, [Name]!"
- Konkreter nächster Schritt: "Prüfen Sie Ihr Postfach"
- Weiterführende Inhalte anbieten

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: STORYTELLING-ARCHITEKTUR PRO SEITE

Schritt 5.1 — 5-Akte-Struktur als Page-Template:
<StoryPageTemplate />:

Akt 1 — Der Aufhänger (Hero): Emotionaler Nutzen. Formel: "[Adjektiv] [Ergebnis] für [Zielgruppe]". Sub-Headline: "Wie?" CTA: Unmittelbare Einladung. In 3 Sekunden beantwortet: "Was? Für mich? Was soll ich tun?"

Akt 2 — Das Problem (Empathie): <ProblemSection />. Schmerzpunkte. "Kennen Sie das?" Keine Features, keine Lösung — nur Empathie.

Akt 3 — Die Lösung: <SolutionSection />. Direkte Antwort auf Akt 2. Transformationsversprechen, keine Feature-Liste.

Akt 4 — Der Beweis: <ProofSection />. Testimonials, Case Studies, Statistiken. Mini-Geschichten.

Akt 5 — Die Einladung: <InvitationSection />. KEINE Forderung. "Lassen Sie uns gemeinsam herausfinden, wie [Transformation]. Kostenlos. Unverbindlich. Persönlich."

Schritt 5.2 — Development-Only-Check der warnt wenn 5-Akte-Struktur verletzt wird.

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — TRUST-SCORE-MODELL UND VERTRAUENS-INFRASTRUKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: QUANTITATIVES TRUST-SCORE-MODELL

Schritt 6.1 — 6 Dimensionen des Vertrauens als TypeScript Interface:
TrustScore mit gewichteten Dimensionen:
- socialProof (25%): Bewertungsdurchschnitt, Anzahl, Qualität (Video>Text>Sterne), Kundenlogos
- authority (20%): Zertifizierungen, Jahre Erfahrung, Qualifikationen
- transparency (20%): Preisklarheit, Prozess-Sichtbarkeit, echte Gesichter
- consistency (15%): Design-System einheitlich, Tonalität, Performance
- userExperience (10%): Ladezeit, Mobile, Navigation, Formulare
- security (10%): HTTPS, Datenschutz, Impressum, Cookie-Transparenz

Schritt 6.2 — Trust-Audit: Bewerte 0–10 pro Dimension. Ziel: ≥9.0. Unter 8.0 → sofortige Maßnahmen.

Schritt 6.3 — Trust-Elemente strategisch platzieren:
- Header: Telefonnummer (klickbar), optional Rating-Badge
- Hero: <HeroTrustBar /> (Server Component) mit Rating + Kundenanzahl + Zertifikat
- Neben JEDEM CTA: <TrustSignals />
- Testimonial-Sektion: Tier-1/Tier-2 Testimonials
- Footer: Vollständige Kontaktdaten, Zertifikate, Rechtstexte

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: KONTAKTFORMULAR ALS CONVERSION-MASCHINE (FORMSPREE-BASIERT)

WICHTIG: Das Kontaktformular nutzt AUSSCHLIESSLICH Formspree als Backend. Keine Server Actions für E-Mail-Versand, kein Resend, kein SendGrid, kein Nodemailer.

Schritt 7.1 — Formspree-Formular-Architektur:
Prüfe die BESTEHENDE Formspree-Integration. Erweitere sie chirurgisch.

Client Component (components/ContactForm.tsx):
- Formspree Form-ID aus Umgebungsvariable oder Konfiguration
- Maximal 5 sichtbare Felder:
  1. Name (autocomplete="name")
  2. E-Mail (autocomplete="email", type="email")
  3. Telefon (autocomplete="tel", type="tel", optional)
  4. Betreff oder Service-Auswahl (Dropdown)
  5. Nachricht (textarea)
- Zod-Schema für Client-seitige Echtzeit-Validierung
- Honeypot-Feld für Spam-Schutz (Formspree unterstützt _gotcha)
- Submit-Button mit Loading-State
- Trust-Mikro-Copy: "Kostenlos & unverbindlich • Antwort in 24h • DSGVO-konform"

Schritt 7.2 — Progressive Enhancement:
Formular funktioniert als normales HTML-POST an Formspree auch OHNE JavaScript. Mit JS: Echtzeit-Validierung, AJAX-Submit, animiertes Feedback.

Schritt 7.3 — Erfolgs-Zustand:
<SuccessMessage />: Persönliche Anrede, konkreter nächster Schritt, optionaler Anruf-CTA.

Schritt 7.4 — Fehler-Zustand:
Freundliche Meldung, Eingaben gehen NICHT verloren, alternative Kontaktwege, Retry-Button.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: SEMANTISCHE SEITEN-ARCHITEKTUR ALS SEKTIONS-BLAUPAUSE

Schritt 8.1 — Startseiten-Blaupause:
Validiere und optimiere die bestehende Sektionsreihenfolge (NICHT ersetzen, ERWEITERN):
1. <HeroSection /> — Emotionale Kernbotschaft + CTA + Trust-Badge
2. <SocialProofBar /> — Kompakt: Bewertung + Kundenanzahl + Zertifikat + Logos
3. <ProblemSection /> — Schmerzpunkte. Empathie.
4. <SolutionSection /> — Services als Antwort. Max 3–4 Kernleistungen.
5. <ProcessSection /> — Ablauf in 3–5 Schritten mit Scroll-Animation
6. <StatsSection /> — Animierte Counter
7. <TestimonialSection /> — 2–3 stärkste Kundenstimmen
8. <FaqSection /> — 5–7 häufigste Fragen
9. <CtaSection /> — Finaler CTA + Trust-Mikro-Copy
10. <Footer />

Schritt 8.2 — Service-Seiten-Blaupause (analog).
Schritt 8.3 — Über-uns-Seiten-Blaupause (analog).

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — CONVERSION-TRACKING
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: LOKALE ANALYTICS-INFRASTRUKTUR

WICHTIG: KEINE externen Analytics-Services einbinden. Erstelle ein lokales, datenschutzkonformes Tracking-System.

Schritt 9.1 — Lokales Event-System:
Erstelle src/lib/analytics.ts mit TypeScript-Interface:
- trackEvent(eventName: string, properties?: Record<string, unknown>): void
- Events werden in der Konsole geloggt (Development) und optional an ein data-Attribut geschrieben
- KEIN Google Analytics, KEIN Meta Pixel, KEINE externen Tracking-Dienste
- Vorbereitet für spätere Integration (die Events sind typisiert und zentral)

Schritt 9.2 — Conversion-Events definieren:
- form_start: Nutzer fokussiert erstes Formularfeld
- form_progress: Nutzer hat 50% der Felder ausgefüllt
- form_submit: Formular abgesendet
- form_success: Formspree bestätigt Empfang
- cta_click: CTA-Button geklickt (mit Position und Text)
- calendly_open: Calendly-Widget geöffnet
- scroll_depth: 25%, 50%, 75%, 100%

Schritt 9.3 — useConversionTracking()-Hook:
Client Component Hook der Events automatisch feuert basierend auf Nutzerverhalten.

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 5 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 10.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎯 Conversion-Architektur & Trust-Infrastruktur:
- Alle neuen Komponenten mit Pfad, Props-Interface und Verwendungszweck
- Alle neuen Hooks mit Signatur und Verhalten
- Die Sektions-Blaupausen pro Seitentyp
- Trust-Score-Bewertung der Website
- Conversion-Distanz-Messungen pro Route
- Formspree-Konfiguration und Form-ID
- Calendly-Einbindungs-Methode

Schritt 10.2 — .upgrade-state.md finalisieren:
Markiere alle Tasks als [x] abgeschlossen. Notiere offene Punkte oder Verbesserungspotential.

Schritt 10.3 — Handoff an Phase 6:
Notiere in .upgrade-state.md:
```
## Handoff → Phase 6 (Extreme Performance)
- Neue Komponenten die Performance-Optimierung benötigen: [Liste]
- Neue Client Components die INP beeinflussen könnten: [Liste]
- Neue Bilder/Medien die optimiert werden müssen: [Liste]
- Aktuelle geschätzte Bundle-Größe nach Phase 5: [Wert]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 5
═══════════════════════════════════════════════════════════════════════════════

Führe diese Checks durch:
□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ Jede page.tsx kommuniziert Ergebnisse statt Merkmale
□ <ValueProposition /> und <TrustSignals /> werden durchgängig verwendet
□ 4-Tier Social-Proof-System implementiert
□ Kontaktformular: Max 5 Felder, Formspree-basiert, Trust-Mikro-Copy
□ 5-Akte-Seitenstruktur auf Hauptseiten validiert
□ Trust-Elemente neben JEDEM CTA
□ Scroll-basierte Engagement-Kette funktional
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 6
