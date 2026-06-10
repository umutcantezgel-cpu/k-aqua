Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese Next.js/React/TypeScript-Website so umfassend barrierefrei zu gestalten, dass JEDER Mensch — unabhängig von visuellen, motorischen, auditiven oder kognitiven Fähigkeiten — die Website vollständig nutzen, verstehen und mit ihr interagieren kann. Phase 1 hat die technischen WCAG-Grundlagen gelegt (semantisches HTML, ARIA, Kontraste). Phase 7 hat adaptive Präferenzen implementiert. Phase 8 geht darüber hinaus: Sie macht Barrierefreiheit zu einem ERLEBNIS, nicht zu einer Pflichtübung. Jede Accessibility-Maßnahme wird als erstklassige React-Komponente mit TypeScript-Enforcement implementiert. Dies ist Phase 8 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–7:
- Semantische HTML-Struktur und ARIA-Attribute (Phase 1)
- Design-Token-System und Farbkontraste (Phase 2)
- Typografie-System und Schriftgrößen (Phase 3)
- Animations-System und reduced-motion (Phase 4)
- Trust-Komponenten und Formular-Architektur (Phase 5)
- Performance-Optimierungen (Phase 6)
- DeviceProvider, Kontrast-Adaption, Touch-Optimierung (Phase 7)

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 7. Ergänze:
```
## Phase 8: Totale Inklusion & Barrierefreiheit
- [ ] 0.3 Pre-Flight Accessibility-Audit abgeschlossen
- [ ] Task 1: Kontrast-System über WCAG AA hinaus
- [ ] Task 2: Bildbarrierefreiheit perfektioniert
- [ ] Task 3: Tastatur-Bedienbarkeit perfektioniert
- [ ] Task 4: Screen-Reader-Erlebnis optimiert
- [ ] Task 5: Motorische Barrierefreiheit
- [ ] Task 6: Timing und zeitbasierte Inhalte
- [ ] Task 7: Kognitive Barrierefreiheit
- [ ] Task 8: Auditive Barrierefreiheit
- [ ] Task 9: Automatisierte Accessibility-Tests
- [ ] Task 10: Manuelle Accessibility-Tests
- [ ] Task 11: Accessibility-Statement
- [ ] Task 12: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Accessibility-Audit:
BEVOR du änderst, führe ein vollständiges Audit durch:

1. axe-core Scan: Installiere @axe-core/cli und scanne JEDE Route. Dokumentiere JEDE Violation.
2. Lighthouse Accessibility: Score pro Route dokumentieren.
3. Kontrast-Check: Prüfe JEDE Farbkombination im Token-System.
4. Tastatur-Test: Navigiere JEDE Route NUR mit Tastatur. Dokumentiere Probleme.
5. Heading-Audit: h1-h6 Hierarchie pro Route (aus Phase 1, hier validieren).
6. ARIA-Audit: Alle aria-Attribute auf Korrektheit prüfen.
7. Alt-Text-Audit: Jedes Bild prüfen (vorhanden? aussagekräftig? dekorativ korrekt markiert?).
8. Formular-Audit: Labels, Required-Hinweise, Fehlermeldungen, autocomplete-Attribute.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### ♿ Accessibility-Audit & Barrierefreiheit

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — VISUELLE BARRIEREFREIHEIT AUF HÖCHSTEM NIVEAU
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: KONTRAST-SYSTEM ÜBER WCAG AA HINAUS

Schritt 1.1 — WCAG AAA für Kerntext:
Phase 1 hat AA sichergestellt (4.5:1). Phase 8 hebt auf AAA:
- Body-Text, Lead-Text, Card-Beschreibungen: 7:1
- Überschriften, Labels, CTA-Texte: 4.5:1 (AAA für großen Text)
- Sekundärer Text: 4.5:1
- Placeholder-Text in Formularen: 4.5:1 (häufig zu schwach!)

Erstelle eine Kontrast-Matrix als TypeScript-Konstante, die bei jedem Build validiert werden kann.

Schritt 1.2 — Dynamische Kontrast-Verstärkung:
useEnhancedContrast()-Hook via DeviceProvider (Phase 7):
- prefers-contrast: more → High-Contrast-Token-Varianten
- Smooth Transition (400ms auf CSS Custom Properties)

Schritt 1.3 — Farbenblindheit-Kompensation:
- Protanopie, Deuteranopie, Tritanopie berücksichtigen
- Erfolg (Grün) und Fehler (Rot) NIEMALS nur durch Farbe — immer Icon + Text + Farbe (3 Kanäle)
- Diagramme/Visualisierungen: Muster ZUSÄTZLICH zu Farben
- Test mit Chrome DevTools → Rendering → Emulate Vision Deficiencies

Schritt 1.4 — Fokus-Indikator-System verfeinern:
- Doppelter Fokusring: 2px weiß + 2px Brand-Farbe/Schwarz (auf JEDEM Hintergrund sichtbar)
- Fokusring-Offset: 2px
- Typ-spezifisch: Buttons (um ganzen Button), Links (um Text), Cards (um Card), Inputs (außen), Checkboxen (um Control+Label)

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: BILDBARRIEREFREIHEIT PERFEKTIONIEREN

Schritt 2.1 — Alt-Text-Qualitäts-Audit:
JEDER Alt-Text nach Kriterien:
- Beschreibt INHALT und KONTEXT (nicht Format)
- Spezifisch: "Fünf Teammitglieder am Whiteboard" statt "Teambild"
- Länge: 50–150 Zeichen
- Dekorativ: alt="" (nicht fehlend, nicht "Dekoration")
- Funktional (Icon-Buttons): Beschreibt FUNKTION ("Zur Startseite", "Menü öffnen")
- Infografiken: Kurzer alt + aria-describedby auf ausführlichen Text

Schritt 2.2 — TypeScript-Enforcement:
Erstelle strenge Typisierung (PRÜFE ob Image-Wrapper aus Phase 6 existiert, ERWEITERE ihn):
```typescript
type ImageVariant = 'content' | 'decorative' | 'functional'
// content: alt required (min 10 chars)
// decorative: alt="" + role="presentation"
// functional: alt beschreibt Funktion
```

Schritt 2.3 — Komplexe Bilder:
Infografiken, Charts: Kurzer alt + expandierbarer Text (<details><summary>Bildbeschreibung</summary>...</details>) oder aria-describedby.

Schritt 2.4 — SVG-Barrierefreiheit:
- Inhaltstragende: role="img" + aria-label oder <title>
- Dekorative: aria-hidden="true" + focusable="false"
- Interaktive: In <button>/<a> gewrapped, SVG aria-hidden, Wrapper hat aria-label

Schritt 2.5 — Video-Barrierefreiheit:
- Untertitel: <track kind="captions">
- Transkript: Expandierbarer Bereich
- Kein Autoplay (außer stumm + dekorativ)
- Player: Tastaturzugänglich

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: TASTATUR-BEDIENBARKEIT PERFEKTIONIEREN

Schritt 3.1 — Vollständiger Tastatur-Walkthrough:
Teste JEDE Route. Dokumentiere JEDES nicht-bedienbare Element:
- Tab/Shift+Tab: Logische Reihenfolge
- Enter/Leertaste: Aktiviert Buttons, Links, Checkboxen
- Escape: Schließt Modals, Dropdowns, Mobile-Menu
- Pfeiltasten: Innerhalb Tabs, Dropdowns, Radios, Karussells
- Home/End: Erstes/letztes in Gruppe

Schritt 3.2 — Optionale Keyboard-Shortcuts (Power-User):
useKeyboardShortcuts()-Hook:
- /: Fokus Suchfeld
- g+h: Startseite, g+c: Kontakt
- ?: Hilfe-Overlay
- DEAKTIVIERT wenn Input fokussiert

Schritt 3.3 — Roving-Tabindex:
Für Tabs, Toolbars, Radio-Gruppen:
- Ein Element tabindex="0", Rest tabindex="-1"
- Pfeiltasten bewegen Fokus innerhalb der Gruppe
- Tab springt zur nächsten Gruppe
- useRovingTabIndex()-Hook oder Headless-UI/Radix

Schritt 3.4 — Fokus-Management bei dynamischen Inhalten:
Definiere Fokus-Regeln:
- Modal öffnet → erstes interaktives Element
- Modal schließt → Trigger-Element
- Akkordeon öffnet → Fokus bleibt auf Trigger
- Toast → Fokus bleibt, aria-live angekündigt
- Route wechselt → main oder h1
- Formular-Fehler → erstes fehlerhaftes Feld
- Element entfernt → nächstes logisches Element
- Dropdown öffnet → erste Option, schließt → Trigger

Erstelle useFocusManagement()-Hook für zentrale Implementierung.

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: SCREEN-READER-ERLEBNIS OPTIMIEREN

Schritt 4.1 — Screen-Reader-Test:
Teste mit VoiceOver (Mac) oder NVDA (Windows) auf JEDER Route:
- Logische Vorlesereihenfolge
- Überschriften als Überschriften erkennbar
- Links und Buttons korrekt benannt
- Bilder beschrieben oder dekorativ
- Widgets funktionieren (Tabs, Akkordeons, Modals)
- Zustandsänderungen angekündigt
- Skip-Navigation funktional

Schritt 4.2 — Landmark-Navigation validieren:
- banner (header), navigation (nav), main, complementary (aside), contentinfo (footer)
- Jede nav hat unterscheidendes aria-label
- Genau ein main pro Seite

Schritt 4.3 — Heading-Navigation:
- h1 genau einmal pro Route
- Keine Sprünge
- sr-only Headings wo nötig

Schritt 4.4 — Formulare im Screenreader:
- Labels korrekt vorgelesen
- Pflichtfelder als "erforderlich" angekündigt
- Hilfetexte bei Fokus (aria-describedby)
- Fehlermeldungen bei Fokus
- Erfolgs-/Fehler-Zustand: role="alert"

Schritt 4.5 — Versteckte Inhalte:
- aria-hidden="true" NUR ohne fokussierbare Kinder
- .sr-only (VisuallyHidden) korrekt eingesetzt
- Dekorative Elemente: aria-hidden="true"
- Inaktive Nav-Varianten: aria-hidden oder display:none

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — MOTORISCHE BARRIEREFREIHEIT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: MOTORISCHE EINSCHRÄNKUNGEN BERÜCKSICHTIGEN

Schritt 5.1 — Großzügige Touch-Targets:
- Primäre CTAs: 48×48px minimum, besser 56×48px
- Nav-Links Mobile: 48px Höhe + 8px Abstand
- Checkboxen/Radios: Gesamtes Label klickbar
- Schließen-Buttons: 44×44px minimum
- Footer-Links Mobile: 44px Höhe

Schritt 5.2 — Fehlertoleranz:
- Jede Swipe-Aktion hat Button-Alternative
- Undo für destruktive Aktionen
- Keine zeitkritischen Klicks
- Pointer-Cancellation: Aktion bei mouseup/touchend, nicht mousedown/touchstart

Schritt 5.3 — Drag-and-Drop-Alternativen:
Falls vorhanden: IMMER tastaturbasierte Alternative (Buttons "Nach oben/unten"). Visuell sichtbar.

Schritt 5.4 — Keine Hover-Only-Informationen:
- Tooltips: Per Fokus UND Hover
- Dropdowns: Per Klick ODER Hover
- Info-Icons: Per Klick (Popover)
- Regel: ALLES hat Klick/Fokus-Alternative

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: TIMING UND ZEITBASIERTE INHALTE

Schritt 6.1 — Karussell-Timing:
- Auto-Rotation: Max 8 Sekunden, Pause-Button sichtbar
- Pause bei Hover, Fokus, prefers-reduced-motion
- Manuelle Navigation immer verfügbar

Schritt 6.2 — Zeitlimits:
- Auto-schließende Toasts: ≥5s + manuell schließbar + Screenreader-angekündigt
- Formulare: KEIN Zeitlimit
- Counter-Animationen: Endwert sofort bei reduced-motion

Schritt 6.3 — Kein Blinken:
- WCAG 2.3.1: Max 3 Flashes/Sekunde
- Keine Stroboskop-Effekte
- Hochfrequente Scroll-Animationen nur bei reduced-motion: no-preference

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — KOGNITIVE BARRIEREFREIHEIT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: KOGNITIVE LAST MINIMIEREN

Schritt 7.1 — Konsistente Patterns:
- Navigation: Jede Seite gleiche Stelle, gleiche Struktur
- CTAs: Gleicher Stil für gleiche Aktion
- Icons: Gleiches Icon für gleiche Funktion
- Labels: Immer über dem Feld
- Fehlermeldungen: Immer rot + Icon + unter dem Feld

Pattern-Konsistenz-Checkliste erstellen und auf jeder Route validieren.

Schritt 7.2 — Klare Sprache:
- Keine Fachbegriffe ohne Erklärung
- Startseite: Max 20 Wörter/Satz, max 4 Sätze/Absatz
- Aktive Sprache
- Keine doppelten Verneinungen

Schritt 7.3 — Orientierungshilfen:
- Breadcrumbs (Phase 1 validieren)
- Aktiver Nav-Link hervorgehoben (Phase 2 validieren)
- Browser-Tab beschreibt aktuelle Seite
- "Zurück nach oben"-Button bei langen Seiten
- Fortschrittsbalken bei Multi-Step-Formularen

Schritt 7.4 — Fehlerprävention:
- Echtzeit-Validierung
- Bestätigungs-Dialoge vor destruktiven Aktionen
- Undo wo möglich
- Klare Fehlermeldungen (nicht "Fehler 500")

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: AUDITIVE BARRIEREFREIHEIT

Schritt 8.1 — Audio-Inhalte:
- Videos: Untertitel mit Sprache + Geräusche ("[Applaus]")
- Podcasts/Audio: Texttranskript
- Audio-Feedback: Immer begleitet von visueller Bestätigung
- Kein Content NUR über Audio

Schritt 8.2 — Visuelle Alternativen:
<Feedback />-Komponente: IMMER visuell + optional auditiv.
- Formular erfolgreich: Grünes Häkchen + Text
- Benachrichtigung: Toast + Text
- Chat-Widget: Visueller Badge

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — AUTOMATISIERTE UND MANUELLE TESTING-PIPELINE
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: AUTOMATISIERTE ACCESSIBILITY-TESTS

Schritt 9.1 — Unit-Tests mit jest-axe:
Für JEDE Komponente: render → axe → expect(await axe(container)).toHaveNoViolations()
CI-Integration: Build fail bei Violations.

Schritt 9.2 — E2E-Tests mit Playwright + axe:
Pro Route: navigate → AxeBuilder.analyze() → 0 Violations.
Zusätzlich: Tab-Navigation, Modal-Fokus, Formular-Fehler.

Schritt 9.3 — Lighthouse in CI:
accessibility Score ≥95 als Quality-Gate. Build fail bei <95.

Schritt 9.4 — ESLint jsx-a11y strict:
Validiere Konfiguration. ZERO Errors bei jedem Commit:
- alt-text, anchor-has-content, aria-props, aria-role
- click-events-have-key-events, heading-has-content
- label-has-associated-control, no-static-element-interactions

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: MANUELLE ACCESSIBILITY-TESTS

Schritt 10.1 — Tastatur-Test (15 Min/Route):
□ Tab logische Reihenfolge
□ Fokus-Indikator überall sichtbar
□ Kein Fokus-Trap (außer Modals)
□ Enter/Leertaste aktiviert
□ Escape schließt Overlays
□ Skip-Nav funktioniert

Schritt 10.2 — Screenreader-Test (20 Min/Route):
□ Heading-Hierarchie logisch
□ Bilder korrekt beschrieben
□ Links/Buttons verständlich benannt
□ Formulare: Labels, Pflicht, Fehler
□ Zustandsänderungen angekündigt
□ Landmarks funktionieren

Schritt 10.3 — Zoom-Test:
□ 200%: Kein Inhalt verschwindet/überlappt
□ 400%: Hauptinhalt lesbar/bedienbar
□ Schriftgröße 24px: Layout passt sich an
□ Pinch-to-Zoom: Funktioniert

Schritt 10.4 — Kognitive Szenarien:
□ 5s-Verständnis-Test: Was bietet die Website?
□ 60s-Formular-Test: Kontaktformular ausfüllbar?
□ Fehlermeldungen verständlich?
□ Navigation-Pattern nach 2 Seiten verstanden?

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: ACCESSIBILITY-STATEMENT

Schritt 11.1 — Seite /barrierefreiheit erstellen:
- WCAG-Konformitätsgrad (Ziel: 2.1 Level AA, teilweise AAA)
- Unterstützte Technologien
- Bekannte Einschränkungen (ehrlich!)
- Kontakt für Feedback
- Datum letzte Überprüfung

Schritt 11.2 — Feedback-Mechanismus:
E-Mail auf der Accessibility-Seite. Optional: Widget auf jeder Seite.

NACH TASK 11: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 8 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 12: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 12.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### ♿ Accessibility-Audit & Barrierefreiheit:
- axe-core Ergebnisse VORHER und NACHHER
- Lighthouse Accessibility Scores VORHER und NACHHER
- Kontrast-Matrix mit allen Farbkombinationen
- Fokus-Management-Regeln
- Tastatur-Test-Ergebnisse
- Screen-Reader-Test-Ergebnisse
- Neue Hooks (useEnhancedContrast, useRovingTabIndex, useFocusManagement, useKeyboardShortcuts)
- Accessibility-Statement-URL

Schritt 12.2 — .upgrade-state.md finalisieren.

Schritt 12.3 — Handoff an Phase 9:
```
## Handoff → Phase 9 (Unzerstörbare Resilienz)
- Accessibility-Score: [Wert]
- Fokus-Management-System: [Implementiert/Pfade]
- Error-Boundary-Anforderungen für Accessibility: [Liste]
- Formular-Fehler-Handling-Patterns: [Dokumentiert]
- Loading-State-Accessibility-Anforderungen: [Liste]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 8
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ axe-core: ZERO Violations auf allen Routen
□ Lighthouse Accessibility: ≥95 auf allen Routen
□ WCAG AAA Kontraste für Kerntext (7:1)
□ Keine Information nur durch Farbe
□ Doppelter Fokusring auf jedem Hintergrund sichtbar
□ Alt-Texte: Qualitätsgeprüft, TypeScript-enforced
□ Tastatur: Jede Route vollständig bedienbar
□ Screen-Reader: Logische Vorlesereihenfolge
□ Touch-Targets: ≥48×48px
□ Keine Hover-Only-Informationen
□ Karussell: Pause-Button, keine Auto-Rotation bei reduced-motion
□ Kognitive Patterns konsistent
□ Accessibility-Statement unter /barrierefreiheit
□ eslint-plugin-jsx-a11y strict: ZERO Errors
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 9