Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte visuelle Gestaltung dieser Next.js/React/TypeScript-Website so zu perfektionieren, dass sie nicht nur barrierefrei ist, sondern dass Barrierefreiheit selbst zum DESIGN-FEATURE wird. Accessibility ist kein Kompromiss — sie ist eine Design-Chance. WCAG AAA Kontraste, Farbenblindheits-sichere Paletten, perfekte Fokus-Indikatoren und kognitive Entlastung werden in ein atemberaubendes Gesamtbild integriert. Dies ist Design-Phase 8 von 10 der Supreme Design & UX Pipeline.

═══ PROTOKOLL ═══
5 Design-Säulen: Radikale visuelle Inklusion, Kontrast-Perfektion, Farbenblindheits-sichere Paletten, elegante Fokus-Indikatoren, kognitive Entlastung. Tech: Next.js, React, TypeScript Strict, Tailwind CSS. Nur Formspree + Calendly. KEIN Dark Mode, KEIN Sentry. Code = Single Source of Truth.

═══ STEP 0: PRE-FLIGHT ACCESSIBILITY VISUAL DISCOVERY ═══
Lese .ai-design-context.md. Führe visuelle Zugänglichkeits-Bestandsaufnahme durch:
1. Kontrast-Audit: Jede Text-auf-Hintergrund-Kombination, gemessen mit WCAG-Formel (Luma-basiert)
2. Farb-nur-Informationen: Gibt es Stellen, wo Farbe der EINZIGE Indikator ist? (Fehler, Status, Links)
3. Fokus-Indikatoren: Jedes interaktive Element — ist der Fokus sichtbar? Wie sieht er aus?
4. Touch-Ziele: Jeder Button, Link, Input — gemessene Größe
5. Animations-Sicherheit: prefers-reduced-motion aus Phase 5 — verifiziert?
6. Text-Lesbarkeit: Schriftgrößen, Zeilenhöhen, Buchstabenabstand gegen Phase-2-Standards

═══ BLOCK A — KONTRAST-PERFEKTION ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: WCAG AAA KONTRAST-UPGRADE
Zielstandard: WCAG Level AAA für maximale Zugänglichkeit

Aktion 1.1: Kontrast-Referenzen etablieren
- Kleine Text (<18px Normal oder <14px Bold): Minimum 7:1 Kontrastverhältnis
- Große Text (≥18px Normal oder ≥14px Bold): Minimum 4.5:1 Kontrastverhältnis
- UI-Elemente (Borders, Icons): Minimum 3:1 gegen benachbarte Farben
- Graphiken/Diagramme: 3:1 Kontrastverhältnis für Differenzierung

Aktion 1.2: Token-basierte Kontrast-Messung
Überprüfe JEDE Kombination aus Phase-1-Farbtokens gegen die Hintergrundfamilie:
- Primary-Farbe auf weiß, auf surface, auf grauem Hintergrund
- Text-Farben auf allen Hintergrund-Varianten
- Secondary-Farben, Accent-Farben, Status-Farben
- Neutral grays: auf primary, auf secondary, auf white

Aktion 1.3: Link-Kontrast-Sicherung
- Link-Farbe muss 7:1 gegen body text (falls ≤18px) sein
- Links dürfen sich NICHT ausschließlich durch Farbe unterscheiden
- Implement: underline bei Default-State oder hover-Indikator
- Besuchte Links: ebenfalls 7:1 Kontrast, aber dunklere oder andere Hue

Aktion 1.4: Fehlgeschlagene Farben anheben
- Wenn eine Farbe AAA verfehlt: Dunkel-Variante um einen Shade vertiefen oder Helles aufhellen
- Beispiel: Wenn Primary-600 auf white nur 6:2:1 ist, nutze Primary-700
- Marken-Identität bewahren: Änderung sollte subtil sein, keine drastische Hue-Verschiebung
- Dokumentiere jede Anpassung in .ai-design-context.md mit Vorher/Nachher-Wert

Aktion 1.5: Kontrast-Validierungstool
- Nutze WebAIM Contrast Checker oder apca-w3 für Perceptual Contrast
- Teste mit realen Farb-Token-Werten (hex oder rgb)
- Führe Protokoll: "Token XYZ auf Hintergrund ABC = 7.8:1 ✓ AAA"

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: UI-ELEMENT-KONTRAST UND GRENZEN
Nicht-Text-Elemente zugänglich machen

Aktion 2.1: Button-Rand-Kontrast
- Button mit border: minimum 3:1 gegen Background
- Transparent buttons: Hover-State zeigt 3:1-Rand
- Fokus-Ring ersetzt niemals den Rand, sondern ERGÄNZT ihn

Aktion 2.2: Eingabfeld-Zustand-Kontrast
- Default-State: border 1px, 3:1 gegen background
- Focus-State: border 2px oder ring, 3:1 oder größer
- Error-State: rote border 2px + error-icon + error-text, Red 3:1 gegen white
- Disabled-State: sichtbar gemacht mit Schraffur oder grauem Icon, nicht einfach unsichtbar

Aktion 2.3: Icon-Kontrast (bei Icon-Buttons)
- Icon allein in einem Button: Icon-Farbe + Button-bg = 3:1 minimum
- Oder: Icon + Button-border sorgen zusammen für Kontrast
- Icon-with-Text: Icon bestätigt Text-Bedeutung, braucht nicht eigenständig 3:1

Aktion 2.4: Placeholder-Text-Reparatur
- Standard-Placeholder ist oft grau-400: zu dunkel = Kontrast-Fehler
- Lösung: Placeholder mind. grau-500, besser grau-600
- Oder: Label statt Placeholder verwenden (best practice ohnehin)

Aktion 2.5: Status-Badges und Kennzeichnungen
- Farbiger Badge (Status: Active, Draft, Error): 3:1 Kontrast zur Hintergrundfarbe
- Zusätzliches visuelles Signal: Text-Label, Icon oder Muster (s. Block B)

═══ BLOCK B — FARBENBLINDHEITS-SICHERES DESIGN ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: COLOR-BLINDNESS SIMULATION UND VALIDIERUNG
Teste die Palette durch alle Sehfehler-Typen

Aktion 3.1: Deuteranopia (Rot-Grün-Blindheit, ~6% männlich)
- Rote und grüne Farben werden beide als Grau/Braun wahrgenommen
- Betroffen: Error (rot) vs. Success (grün), Rot-Grün-Charts
- Teste mit Deuteranopia-Filter (Color Oracle, Sim Daltonism App)
- Frage: Können Nutzer Rot und Grün immer noch unterscheiden? Nein → Problem

Aktion 3.2: Protanopia (Rot-Grün-Variante, ~1% männlich)
- Ähnlich wie Deuteranopia, aber leicht andere Wahrnehmung
- Validiere das gleiche wie 3.1

Aktion 3.3: Tritanopia (Blau-Gelb-Blindheit, sehr selten ~0.001%)
- Blau und Gelb werden verwechselt
- Relevanz: Wenn Palette viel Blau-Gelb nutzt, teste
- Meist nicht kritisch, aber für maximale Inklusion prüfen

Aktion 3.4: Achromatopsia (Komplette Farbenblindheit, extrem selten)
- Nur Graustufen sichtbar
- Test: Konvertiere gesamte UI zu Grayscale, prüfe Lesbarkeit und Element-Unterscheidung
- Kontrastanforderungen (Block A) sichern dies weitgehend ab

Aktion 3.5: Dokumentation Farb-Wahrnehmung
- Für jede kritische Farb-Kombination: "Deuteranopia: unterscheidbar? Ja/Nein"
- Markiere Problem-Paare im .ai-design-context.md

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: FARB-UNABHÄNGIGE INFORMATIONS-KODIERUNG
Nie Farbe als EINZIGEN Indikator nutzen

Aktion 4.1: Error-Handling
- Altes Muster: Text wird rot
- Neues Muster: Rote Farbe + Icon (!) + Fehlertext + Position neben Input
- Beispiel: <span class="text-red-600"><ExclamationIcon /> Passwort ist zu kurz</span>

Aktion 4.2: Success-Bestätigung
- Altes Muster: Grüner Hintergrund
- Neues Muster: Grüne Farbe + CheckmarkIcon + Bestätigungstext
- Konsistenz: gleiche Icons immer für gleiche Status

Aktion 4.3: Links in Text-Kontext
- Altes Muster: nur Farbe
- Neues Muster: Farbe (7:1 Kontrast zu Body-Text) + Underline (default oder hover)
- Oder: Text + Icon-Indicator (→) + Hover-Underline
- Besuchte Links: andere Farbe + visuelles Signal (nicht nur dunklere Farbe)

Aktion 4.4: Status-Badges
- Altes Muster: farbiger Kreis (grün/rot/grau)
- Neues Muster: Farbiger Kreis + Text-Label + optional Icon
- Beispiel: <Badge color="success" icon={<CheckIcon />}>Active</Badge>

Aktion 4.5: Form-Erforderliche Felder
- Altes Muster: Sternchen ist rot
- Neues Muster: Sternchen (beliebig farbig) + Text "Pflichtfeld" oder "(erforderlich)"
- Oder: aria-required="true" + sichtbares Label

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: SICHERE FARB-PAARE DEFINIEREN
Intelligente Palette für alle Sehtypen

Aktion 5.1: Universell unterscheidbare Paare
- Blau + Orange: extrem unterscheidbar, auch bei Deuteranopia
- Blau + Gelb: gut unterscheidbar
- Dunkelblau + Hellgrau: gut auf white
- Violett + Grün (wenn Grün mehr Gelb-Anteil): unterscheidbar

Aktion 5.2: Problematische Paare vermeiden
- Rot + Grün: nur bei Deuteranopia-Nutzer unsichtbar Unterschied
- Hell-Rot + Hell-Grün: bei Protanopia ähnlich grau
- Blau + Violett: bei Tritanopia problematisch

Aktion 5.3: Markenfarben-Rettung
- Falls Marke Rot + Grün nutzt: Additives visuelles System einführen
- Beispiel: Error = Rot + Icon (!), Success = Grün + Icon (✓)
- Oder: Muster/Textur hinzufügen (Error hat Schraffur, Success hat Punkte)
- Oder: Shape-Differenzierung (Error = Hexagon, Success = Kreis)

Aktion 5.4: Palette-Safe-List dokumentieren
- Erstelle Tabelle im .ai-design-context.md:
  "Farb-Paar | Deuteranopia | Protanopia | Tritanopia | Empfehlung"

═══ BLOCK C — FOKUS-INDIKATOREN & INTERAKTIVE ZUGÄNGLICHKEIT ═══

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: FOKUS-RING-DESIGN-SYSTEM
Fokus ist nicht "nur Funktionalität", sondern Design-Feature

Aktion 6.1: Ring-Spezifikation
- Größe: 2px solid Linie
- Farbe: primary token (7:1 Kontrast zu background)
- Offset: 2px Abstand vom Element (outline-offset: 2px)
- Form: rechteckig mit leicht gerundeten Ecken (border-radius: 2px)

Aktion 6.2: CSS-Implementation (Tailwind)
- Standard-Buttons: ring-2 ring-primary ring-offset-2 ring-offset-white
- Auf farbigem Hintergrund: ring-2 ring-white ring-offset-2 ring-offset-primary
- Alternative (box-shadow): box-shadow: 0 0 0 2px white, 0 0 0 4px primary

Aktion 6.3: Kontrastanforderung für Ring
- Ring-Farbe muss 3:1 gegen den Untergrund haben
- Bei lightbg: primary-ring über white = ok
- Bei dark-bg: white-ring über dark = ok
- Test mit beiden Szenarien

Aktion 6.4: Focus-within für Compound Components
- Card mit mehreren Links: zeige ring auf Card-border bei child-focus
- Beispiel: border wird ring-2, wenn ein Link darin fokussiert ist
- CSS: .card:focus-within { @apply ring-2 ring-primary; }

Aktion 6.5: Anti-Pattern: outline:none
- NIEMALS outline: none ohne sichtbaren Ersatz
- Wenn default-ring nicht passt: custom-ring definieren, niemals entfernen

Aktion 6.6: Focus-Sichtbarkeit auf allen Hintergründen
- Teste Ring auf: white, surface, primary, secondary, dark, jeder Komponente
- Ring muss überall mindestens 3:1 haben oder einen Offset haben
- Beispiel: auf primary bg → weißer Ring mit dunkelgrauem offset

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: TOUCH-TARGET-OPTIMIERUNG UND SPACING
Größe ist Zugänglichkeit

Aktion 7.1: Minimum-Größe: 44×44px
- Alle interaktiven Elemente: Button, Link, Checkbox, Radio, Select
- WCAG 2.5.5 Level AAA empfiehlt 44×44px Mindestgröße
- Gilt auch für Touch-Fläche, nicht nur sichtbarer Größe

Aktion 7.2: Button-Richtlinien
- Primary-Button: min 44px Höhe (py-2.5 = 10px * 2 + text), min 64px Breite
- Secondary-Button: 40px Höhe, aber mit padding
- Icon-Button: 44×44px minimum (Tailwind: w-11 h-11)
- Text-Link: padding: 4px 0 + Hover-underline = wirksame Größe

Aktion 7.3: Mobile Navigation
- Nav-Items: minimum 44px tall, besser 48px (py-3)
- Tabs: minimum 44px high, mit ausreichend Padding
- Spacing zwischen Tab-Items: mindestens 8px

Aktion 7.4: Form-Elemente
- Checkbox/Radio: 20×20px sichtbar, aber 44×44px Touch-Zone (unsichtbares Padding)
- Input-Feld: 40px Höhe minimum
- Select-Dropdown: 40px minimum, Optionen auch 40px tall

Aktion 7.5: Close-Button und kleine Controls
- Close (×)-Button: 44×44px, NICHT 16×16px
- Mini-Icon-Button: wenn kleiner als 44px, umgeben mit padding für Touch-Zone

Aktion 7.6: Spacing zwischen Targets
- Mindestens 8px Lücke zwischen interaktiven Elementen
- Verhindert Verwechslung bei impräzisem Tippen
- Besonders auf Mobile: großzügiger Spacing

───────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: KOGNITIVE BARRIEREFREIHEIT IM DESIGN
Mentale Entlastung durch Struktur

Aktion 8.1: Text-Lesbarkeit
- Zeilenlänge (measure): max 75 Zeichen pro Zeile (Optimal: 50-80)
- Tailwind: max-w-3xl (48rem ≈ 80 Zeichen bei 1rem = 16px)
- Auf Desktop: max-w-2xl in Content-Cards
- Line-Height: 1.6 oder 1.7 für body-text (Tailwind: leading-relaxed)

Aktion 8.2: Absatz-Spacing
- Zwischen Absätzen: space-y-4 minimum (16px)
- Zwischen Sections: space-y-6 oder space-y-8
- Visueller Rhythmus entspricht kognitiven Pausen

Aktion 8.3: Heading-Hierarchie
- h1, h2, h3 optisch klar unterschiedlich (Größe, Gewicht, Farbe)
- h1: 32px bold (Tailwind: text-4xl font-bold)
- h2: 24px semibold (Tailwind: text-2xl font-semibold)
- h3: 20px semibold (Tailwind: text-xl font-semibold)
- Skip-Links: Nutzer können zu h2 springen, nicht nur lineares Lesen

Aktion 8.4: Konsistente Komponenten-Designs
- Button-Typ A sieht immer gleich aus (auch auf Seite 5)
- Card-Design konsistent
- Form-Label-Placement konsistent (oben, nicht inline)
- Farbgebung für Status gleich überall

Aktion 8.5: Vorhersagbare Interaktionen
- Click auf einen Link navigiert (nicht nur hover-Effekt)
- Focus/Hover-Zustände sind identisch (oder hover ist Superset von focus)
- Error-Message erscheint direkt neben dem fehlerhaften Feld
- Submit-Button deaktiviert sich nach Click (verhindert Double-Submit)

Aktion 8.6: Fehlerbehandlung in Sprache
- Fehlertext: einfach, nicht technisch
- Beispiel: "Passwort braucht mindestens 8 Zeichen" statt "Regex: (?=.*[A-Za-z0-9@$!%*#?&]) failed"
- Position: direkt über oder unter dem Feld
- Zeitrahmen: nicht zeitlich limitiert (keine 5-Sekunden-Warnung)

Aktion 8.7: Progress-Indikatoren
- Multi-Step-Prozess: zeige "Schritt 2 von 5"
- Progress-Bar: wachsende visuelle Anzeige
- Breadcrumbs: zeige Navigations-Pfad
- Estimated-Time: wenn Prozess länger dauert

═══ SELF-OPTIMIZING DESIGN LOOP — PHASE 8 ABSCHLUSS ═══

ULTRATHINK-TASK 9: KONTEXT AKTUALISIEREN UND HANDOFF ZU PHASE 9

Aktion 9.1: .ai-design-context.md Erneuerung
Aktualisiere folgende Sections:

[WCAG AAA Contrast Matrix]
- Token | Background | Ratio | Status | Anpassung
- Primary | White | 7.2:1 | ✓ | Keine
- Primary-600 | Surface-50 | 5.8:1 | X | → Primary-700 nutzen

[Color-Blindness Validation]
- Farb-Paar | Deuteranopia | Protanopia | Tritanopia | Ampel
- Primary + Secondary | ✓ | ✓ | ✓ | Green

[Focus Ring Specification]
- 2px solid primary
- 2px offset
- Visible on white, surface, and primary bg
- Implementation: Tailwind ring-2 ring-primary ring-offset-2

[Touch Target Audit]
- Button: 44×48px ✓
- Icon-Button: 44×44px ✓
- Input: 40px height ✓
- Link: 44px touch-zone via padding ✓

[Cognitive Accessibility Rules]
- Line-length: max 75 characters
- Line-height: 1.6 minimum
- Heading hierarchy: 4 levels
- Error messaging: plain language, positioned near source
- No time limits on error messages

Aktion 9.2: Validation Checklist
Vor Phase 9 durchlaufen:
☐ WCAG AAA 7:1 für alle Text-Kombinationen verifiziert
☐ 4.5:1 für große Text (≥18px) bestätigt
☐ UI-Element-Kontrast 3:1 auf allen Elementen
☐ Farbblindheits-Simulator durchlaufen (alle 4 Typen)
☐ Keine Farb-nur-Indikatoren: alle haben Icon/Text/Pattern
☐ Link-Underline oder Hover-Indikator auf allen Links
☐ Focus-Ring sichtbar auf jedem interaktiven Element
☐ Focus-Ring auf allen Background-Farben getestet
☐ Touch-Targets ≥44×44px für alle Buttons/Links
☐ Spacing zwischen Targets ≥8px
☐ prefers-reduced-motion aus Phase 5 nochmal verifiziert
☐ Text-Zeilenlänge ≤75 Zeichen
☐ Line-Height ≥1.6
☐ Absatz-Spacing konsistent (space-y-4+)
☐ Heading-Hierarchie optisch unterscheidbar
☐ Error-Messages sprachlich einfach und positioniert
☐ Disabled-States visuell erkennbar (nicht nur grau)
☐ Konsistenz: Komponenten-Design gleich überall

Aktion 9.3: Handoff-Dokument
Erstelle handoff-notes.md:
- Phase 8 abgeschlossen: Alle Kontrast-, Farb-, und Fokus-Anforderungen erfüllt
- Ready für Phase 9: Thematic Harmony & Visual Consistency
- Phase-9-Fokus: Übergreifende visuelle Harmonie, Design-System-Vollständigkeit
- Offene Fragen (falls vorhanden): [List hier]

═══ FINALE VALIDIERUNG DESIGN-PHASE 8 ═══

QUALITÄTSPRÜFUNG — 22-Punkte Accessibility & Inclusion Audit:

1. ☐ Alle Text-Elemente ≤18px haben 7:1 WCAG AAA Kontrast
2. ☐ Alle großen Text ≥18px haben 4.5:1 AAA Kontrast
3. ☐ Primary-Farbe auf White: 7:1+
4. ☐ Primary-Farbe auf Surface: 7:1+
5. ☐ Link-Farbe zu Body-Text: 7:1+
6. ☐ Alle UI-Element-Borders: 3:1 gegen Hintergrund
7. ☐ Icon-Kontrast (Icon-Buttons): 3:1
8. ☐ Placeholder-Text: minimum grau-600 oder Label statt Placeholder
9. ☐ Status-Badges: Farbe + Text-Label + ggf. Icon
10. ☐ Deuteranopia-Simulation: Alle Elemente unterscheidbar
11. ☐ Protanopia-Simulation: Alle Elemente unterscheidbar
12. ☐ Tritanopia-Simulation: kritische Paare ok
13. ☐ Achromatopsia-Grayscale: lesbar und navigierbar
14. ☐ Error-Status: Farbe + Icon + Text
15. ☐ Success-Status: Farbe + Icon + Text
16. ☐ Links: Underline oder Hover-Indikator
17. ☐ Required-Fields: Asterisk + "(Pflichtfeld)"-Text
18. ☐ Focus-Ring sichtbar auf white bg
19. ☐ Focus-Ring sichtbar auf primary bg
20. ☐ Focus-Ring sichtbar auf surface bg
21. ☐ Touch-Target Minimum: 44×44px für alle Buttons
22. ☐ prefers-reduced-motion: Keine Auto-Animationen bei Setting

Status: Bereit für Phase 9
Nächster Schritt: Thematic Harmony & Visual Consistency Audit
