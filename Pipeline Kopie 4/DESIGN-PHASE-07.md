Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte visuelle Überzeugungsarchitektur dieser Next.js/React/TypeScript-Website so zu gestalten, dass jedes visuelle Element — von der Farbe eines Buttons bis zur Platzierung eines Testimonials — eine psychologisch fundierte Entscheidung ist, die Vertrauen aufbaut, Zweifel eliminiert und den Besucher unwiderstehlich zur Conversion führt. Phase 6 hat die Navigation perfektioniert. Phase 7 macht aus Design ein Überzeugungsinstrument. Dies ist Design-Phase 7 von 10 der Supreme Design & UX Pipeline.

═══ PROTOCOL & TECH STACK ═══
5 Design Pillars. Tech: Next.js, React, TypeScript Strict Mode, Tailwind CSS. Integration: Formspree + Calendly ONLY. NO Dark Mode, NO Sentry. Code = Single Source of Truth.

═══ STEP 0: PRE-FLIGHT CONVERSION DESIGN DISCOVERY ═══
Lese .ai-design-context.md und beantworte folgende Discovery-Fragen:

1. Welche Trust-Elemente existieren bereits? Testimonials, Kundenbewertungen, Zertifizierungslogos, Vertrauensabzeichen — wo platziert, wie gestylt?
2. CTA-Status quo: Button-Farben, Größen, Label-Text, Platzierung — wieviele pro Section? Welche konkurrieren visuell?
3. Social Proof vorhanden? Statistiken ("50+ Projekte"), Live-Zähler, Review-Badges — wo sichtbar?
4. Visuelle Hierarchie pro Section: Was zieht zuerst die Augen an? Headline, Bild, CTA?
5. Farbpsychologie: Welche Farben werden für CTAs verwendet? Welche für Trust? Wo signalisiert Dringlichkeit?
6. Formular-Design: Wie sieht das Kontaktformular aus? Einladend oder einschüchternd?

───────────────────────────────────────────────────────────────────────────────────

BLOCK A — TRUST-SIGNALE & SOCIAL PROOF DESIGN

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: TESTIMONIAL-DESIGN-PERFEKTION

Testimonials sind das #1 Trust-Signal. Das Design muss GLAUBWÜRDIG und EMOTIONAL wirken.

Card-Architektur:
• Clean, minimalist card design mit generösem Innenabstand (p-6 oder p-8)
• Subtile Anführungszeichen ("") über oder unter dem Quote-Text
• Persönliches Foto: ECHTE Person (keine Stock-Photos), kreisförmiger Avatar (56-80px)
• Typografische Hierarchie: Quote in leicht größerer/kursiver Schrift, Name in Bold, Rolle/Unternehmen in sekundärer Farbe
• Optionales Stern-Rating (★★★★★) ÜBER dem Quote für visuellen Impact
• Layout Desktop: 2-3 Spalten Grid oder horizontales Carousel mit Scroll-Controls
• Layout Mobile: 1 Spalte, Swipe-enabled Carousel
• Featured Testimonial: Größere Card mit prominenterer Platzierung (zB Hero-Section oder vor CTA)
• Micro-Interaction: Subtile Entrance-Animation beim Scrolling in View (opacity fade + slide-up)
• Grenzlinien: Optionaler Accent-Streifen oben/links in Primary-Farbe für visuelles Gewicht
• Dokumentiere alle Testimonials in .ai-design-context.md mit Photo-URLs und Glaubwürdigkeitsindikatoren

ULTRATHINK-TASK 2: KUNDENLOGOS & VERTRAUENSMARKER DESIGN

Client-Logos sind visuelle Anker für Glaubwürdigkeit.

Logo-Behandlung:
• Überschrift-Context: "Vertrauen von" oder "Bekannt aus" oder "Partner & Kunden"
• Standard-Style: Grayscale (filter: grayscale(1)), subtile Hover-Animation (grayscale(0) mit smoothem Transition)
• Layout: Horizontale Row mit gleichmäßigem Abstand, alternativ auto-scrollende Marquee
• Größe: Einheitliche Höhe (40-60px), Breite variiert natürlich
• Hintergrund: Subtile Surface-Differenzierung (leicht abweichender Farbton als Seiten-Background)
• Spacing: Mindestens 20-30px Abstand zwischen Logos
• Trust-Badges Placement: SSL-Sicherheit, DSGVO-Konform, Bewertungs-Auszeichnungen NAHE Conversion-Points
• Badge-Design: Klein, präzise, erkennbare Icons (🔒 SSL, ✓ DSGVO, ★ Bewertung)
• Dokumentiere Logo-URLs, Hover-States und Badge-Definitionen in .ai-design-context.md

ULTRATHINK-TASK 3: STATISTIKEN & ZAHLEN-DESIGN

Messbare Proof-Points bauen psychologisches Vertrauen auf.

Stats-Architektur:
• Zahlen-Prominenz: text-4xl oder text-5xl, bold weight, Primary oder Accent-Farbe
• Label: Kleinere Schrift darunter in sekundärer Farbe (zB "Projekte abgeschlossen")
• Layout: 3-4 Spalten, gleichmäßig verteilt, auf Mobile stapelbar
• Animation: Count-Up-Animation beim Eintritt ins Viewport (zB 0 → 150+ über 1.2s)
• Icon-Option: Kleines Icon über jeder Statistik für visuelle Verstärkung
• Trenner: Subtile vertikale Linien zwischen Stats oder leerer Whitespace
• Kontext-Sektion: Stats-Section mit leicht kontrastierendem Hintergrund oder Full-Width Band
• Beispiele: "150+ Projekte", "98% Zufriedenheit", "10+ Jahre Erfahrung", "500+ Happy Clients"
• Implementiere Count-Up-Logik via Intersection Observer + animate-on-scroll
• Dokumentiere alle Stats in .ai-design-context.md mit Quellen/Verifizierungsmethoden

───────────────────────────────────────────────────────────────────────────────────

BLOCK B — CTA-DESIGN & CONVERSION-PSYCHOLOGIE

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: CTA-BUTTON VISUELLES GEWICHT & DOMINANZ

Der Primary CTA muss das SICHTBAR DOMINANTESTE Element in jeder Section sein.

Visuelle Gewichts-Techniken:
• Größe: Größer als alle anderen Buttons in der Section (lg oder xl aus Phase 4 Button-System)
• Farbe: Stärkster Farbkontrast gegen Section-Hintergrund (Primary Brand-Farbe)
• Whitespace: Großzügiger Abstand RUND UM den CTA (Isolation schafft Wichtigkeit)
• Elevation: Subtile Schattierung (Phase 1 Shadow Level 2), optional Hover-Lift-Effekt
• Icon: Optionaler Pfeil (→) oder Chevron (›), suggeriert Forward-Movement
• Label-Text: Action-orientiert, aktives Verb ("Jetzt starten", "Kostenlos testen", "Termin buchen")
• Secondary CTA: Visuell leichter (outlined/ghost Style), bietet Alternative ohne zu konkurrieren
• Layout-Regel: NIEMALS zwei competing Primary CTAs im selben Viewport
• Hover-State: Farbe leicht dunkler oder heller, Shadow verstärkt sich, Cursor → Pointer
• Focus-State (a11y): Deutlicher Focus-Ring in Accent-Farbe (2px), für Keyboard-Navigation sichtbar
• Mobile-Anpassung: CTA-Button wird 100% Breite für bessere Tappbarkeit

ULTRATHINK-TASK 5: DEDICATED CTA-SEKTION DESIGN

Dedizierte CTA-Sections zwischen Content-Blöcken elevieren Conversion-Rate.

CTA-Band Architektur:
• Full-Width Band mit kontrastierendem Hintergrund (Primary-Farbe oder Gradient)
• Headline: Direkt, action-orientiert, emotionale Resonanz ("Bereit für Ihr nächstes Projekt?")
• Subtext: Eine Zeile, adressiert letzten Zweifel ("Kostenlos & unverbindlich")
• CTA-Button: Invertierte Farben (White auf Primary), prominent, große Schrift
• Padding: Großzügig (py-16 oder py-20), schaff Atempause
• Text-Alignment: Zentral oder Left, Button darunter oder daneben
• Icon in Button: Pfeil, Chevron oder thematisches Icon
• Optional Trust-Message: Kleine Schrift unter Button ("von 500+ zufriedenen Kunden gewählt")
• Visuelle Breche: Kontrast zum umgebenden Content triggert Aufmerksamkeit
• Placement: Strategisch ZWISCHEN major content sections

ULTRATHINK-TASK 6: FORMULAR ALS CONVERSION-TOOL DESIGNEN

Das Kontaktformular muss EINLADEND aussehen, nicht wie eine Plicht.

Formular-Architektur:
• Hintergrund: Clean White oder Surface-Farbe, großzügiger Padding (p-8 oder p-10)
• Felder: Große, spacious, leicht lesbar, großer Font (16px min für Mobile a11y)
• Labels: Klar, freundliche Sprache, OPTIONAL überhalb oder inline des Feldes
• Placeholder-Text: Hilfreich, z.B. "max@example.com" statt nur "Email"
• Submit-Button: Full-Width auf Mobile, prominent, Primary-Farbe, Action-Verb
• Trust-Signals UNTER dem Submit: "✓ DSGVO-konform • 📧 Antwort in 24h • 🆓 Kostenlos"
• Layout Desktop: Form + Trust-Panel side-by-side (Form links, Testimonial rechts)
• Layout Mobile: Form full-width, Trust-Message oben oder unten
• Progress-Indikator: Subtile Field-Counter für längere Formulare ("Schritt 2 von 3")
• Fehler-Handling: Rote Fehlermeldungen direkt unterm Feld
• Success-State: Celebration Moment! Checkmark-Animation, grüne Bestätigung
• Formspree Integration: Auto-reply + hidden Honeypot-Feld vorhanden
• Accessibility: Label > Input Verknüpfung, Tab-Reihenfolge logisch, Error-Messages aria-live

───────────────────────────────────────────────────────────────────────────────────

BLOCK C — FARBPSYCHOLOGIE & VISUELLE HIERARCHIE

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: FARBPSYCHOLOGIE STRATEGISCH ANWENDEN

Jede Farbe hat psychologische Wirkung. Setze sie bewusst ein.

Farb-Intent Mapping:
• Primary CTA-Farbe: Action evozieren. Warme Farben bevorzugt: Orange, Warm-Red, Vibrant Blue
  Orange: Energie, Freundlichkeit, niedrige Barriere
  Blue: Vertrauen, Stabilität, Professionalität
  Red: Dringlichkeit, nur SPARSAM für echte Urgency
• Trust-Elemente: Kühle, stabile Farben (Blue, Green für "sicheres" Gefühl)
• Urgency-Accents: Warme, energische (Orange, Red) — SPARSAMSTE Anwendung
• Neutral Content: Ruhige, nicht-ablenkende Hintergründe (Weiß, helle Grautöne)
• Links: Konsistente Secondary-Farbe, deutlich vom Body-Text unterscheidbar
• Icons in Social Proof: Warme Farben für positive Bewertungen (★ in Gold/Orange)
• Dokumentiere alle Farb-Zuordnungen in .ai-design-context.md mit Intent

ULTRATHINK-TASK 8: VISUELLE HIERARCHIE PRO SEKTION PERFEKTIONIEREN

Nutze natürliches Reading Pattern für Conversion.

Hierarchie-Prinzipien:
• F-Pattern & Z-Pattern: Richte Content an natürlichen Augenbewegungen aus
• Visuelle Gewicht-Reihenfolge: Headline → Visual → Body Text → CTA
• Kontrast: Wichtigste Elemente haben höchsten Kontrast
• Größe: Größer = wichtiger (Headline > Subheadline > Body > Caption)
• Farbe: Primary-Farbe zieht Aufmerksamkeit zu Keys (CTAs, wichtige Links)
• Whitespace: Wichtige Elemente haben MORE breathing room
• Font-Weight: Bold Headlines/CTAs, Regular Body, Light sekundär
• Pro Section Checkliste: Headline klar → Visual Anker → Body Text → CTA Final-Destination

ULTRATHINK-TASK 9: HERO-SEKTION ALS EMOTIONALER ANKER DESIGNEN

Das Hero ist der ERSTE EINDRUCK — MUSS in <3 Sekunden fesseln.

Hero-Architektur:
• Headline: Groß, bold, klare Value Proposition (max 12 Wörter)
• Subheadline: Supporting Detail, medium weight, 1-2 Sätze
• CTA: Prominent, ABOVE THE FOLD, irresistibel, großes sichtbares Ziel
• Visual: Supporting Image/Illustration, konkurriert NICHT mit Text
• Trust-Badge: Kleine Social Proof neben CTA ("★ 4.9/5 von 50+ Bewertungen")
• Layout Option 1 (Split): Text links, Visual rechts, auf Mobile übereinander
• Layout Option 2 (Centered): Text über Full-Width Hintergrund mit Overlay
• Above the Fold: Headline + CTA SICHTBAR ohne Scrolling (min-h-screen oder 70vh)
• Kontrast: Text gegen Background lesbar (Dark auf Light ODER White auf Dark Image mit Overlay)
• CTA Button: Größe xl, Primary-Farbe, SICHTBAR, kein Competing Link
• Animation: Subtile Fade-In oder Slide-Up beim Page Load (max 0.8s)

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN & HANDOFF ZU PHASE 8

Abschluss und Übergabe zur nächsten Phase.

Kontext-Update .ai-design-context.md:
• Dokumentiere ALLE Trust-Signale: Testimonials mit Photos, Logos, Stats
• CTA-Audit: Zähle alle CTAs, beschreibe visuelle Hierarchie pro Section
• Farbpsychologie: Mapping von Farben → Psychological Intent
• Form-Design: Screenshot oder Beschreibung des aktuellen Zustands
• Hero-Visual: Beschreibe das Hero-Layout (Split/Centered, Text-Länge, CTA-Position)
• Micro-Interactions: Liste alle planned animations
• Mobile-Responsive: Notiere Breakpoint-Anpassungen
• Accessibility: WCAG 2.1 AA Compliance-Status, Focus-Rings, Contrast-Ratios

Handoff zu Phase 8 — RADICAL VISUAL INCLUSION:
• Phase 7 hat Vertrauen & Überzeugung aufgebaut
• Phase 8 wird Accessibility, Inklusion & Diverse Representation widmen
• Stelle sicher, dass alle Phase 7 Components ready sind für Phase 8 Audits

═══════════════════════════════════════════════════════════════════════════════════

FINALE VALIDIERUNG DESIGN-PHASE 7 — COMPLIANCE CHECKLIST

□ Testimonial-Cards: Photo, Quote, Name, Role, optional Star-Rating — alle sichtbar
□ Testimonial-Animation: Fade-In/Slide beim Scroll-in-View
□ Client-Logos: Mindestens 5, Grayscale Standard, Hover-Animation vorhanden
□ Trust-Badges: SSL/DSGVO/Bewertung — klar erkennbar, richtige Platzierung
□ Stats-Section: Mindestens 3 Statistiken, Count-Up Animation, Icons optional
□ Primary CTA: Sichtbar dominant, größter Button pro Section, Action-Verb
□ Secondary CTAs: Outlined/Ghost Style, visuell leichter als Primary
□ CTA-Bands: Mindestens 2 dedizierte Conversion-Sections mit Headline + CTA
□ Kontakt-Formular: Labels, Felder spacious, Submit-Button prominent, Trust-Message
□ Form Success-State: Checkmark animation, grüne Bestätigung, Dank-Message
□ Farbpsychologie: Primary-CTA in Warm-Farbe (Orange/Blue), Consistency
□ Hero-Section: Headline + CTA + Visual ABOVE THE FOLD sichtbar
□ Visuelle Hierarchie: Per Section: Headline → Visual → Body → CTA
□ Whitespace: CTAs & wichtige Elemente haben Isolation
□ Micro-Interactions: Hover-States, Focus-Rings, Entrance-Animations smooth
□ Mobile-Responsive: CTA-Buttons 100% auf Mobile, Formular Single-Column
□ Accessibility: Label-Input Links, Tab-Order logical, Error-Messages aria-live
□ .ai-design-context.md: Updated mit Phase 7 Findings
□ No Dark Mode, No Sentry, Formspree + Calendly ONLY
□ Code = SSOT: All Design Decisions reflected in React/TS Components

Phase 7 Abschluss: Die Website ist nun eine psychologische Überzeugungsmaschine.
Phase 8 erwartet alle Phase 7 Assets ready für Accessibility Deep-Dive.