# K-Aqua: Komponenten-Bibliothek & UI-Elemente (Phase 5)

**Dokument-ID:** 05_components
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 41 bis 50 der Ultrathink-Spezifikation und definiert das Design der Basis-Komponenten für die K-Aqua Website.

---

## 41. Card-Design-System (Das universelle Container-Element)
Cards strukturieren Services, Projekte und Team-Mitglieder einheitlich.
*   **Standard-Card:** 
    *   *Background:* `bg-[#1a2632]` (Dark Theme).
    *   *Border:* `border-[#283039]` (1px solid).
    *   *Radius:* `rounded-2xl` (16px).
    *   *Padding:* Desktop `p-10`, Mobile `p-6`.
*   **Feature-Card (Prominent):** Größer (Radius `rounded-3xl` / 24px), mehr Padding (`p-12`), oft mit eingebetteter Statistik-Box oder Image-Top.
*   **Kompakt-Card (Listen-Ansicht):** Horizontales Layout (`flex-row`), Radius `rounded-xl` (12px), Padding `p-6`.

## 42. Card-Hover-Effekte (Architektur der Elevation)
Interaktion mit Cards simuliert physikalische Realität.
*   **Standard-Hover:** Dauer `duration-300`, Easing `ease-out`. 
    *   Elevation: `-translate-y-2` (8px nach oben).
    *   Schatten: Verstärkt sich und nimmt einen "Tint" der Primärfarbe an (`shadow-[0_8px_30px_rgba(19,127,236,0.15)]`).
    *   Rahmen: Wechselt von `#283039` zur Primärfarbe (`border-primary`).
*   **Feature Hover:** Deutlichere Elevation `-translate-y-3` (12px). Das Icon (sofern vorhanden) skaliert minimal (`scale-105`).
*   **Animations-Regel:** Alle Veränderungen (Y-Achse, Border, Shadow) müssen absolut zeitsynchron ablaufen.

## 43. Button-System
Handlungsaufforderungen mit klarer visueller Hierarchie.
*   **Primary Button:** Background `bg-accent` (`#f97316`), Text Weiß `font-semibold`. Padding `px-8 py-4` (Min-Height 48px für Touch). Border-Radius `rounded-lg` (8px). 
    *   *Hover:* `bg-accent-hover` (`#ea580c`), `-translate-y-1`, `shadow-lg`.
*   **Secondary Button:** Background `bg-primary` (`#137fec`), Text Weiß. Gleiche Maße.
*   **Ghost Button:** Transparent `bg-transparent`, Border `border-2 border-primary` (auf Hell) oder `border-white/20` (auf Dunkel).
*   **Link Button:** Kein Border/Bg. Text `text-primary`. Cta-Pfeil (Icon rechts). *Hover:* Pfeil verschiebt sich (`translate-x-1`), Text wird unterstrichen.

## 44. Formular-Design (Eingabefelder, Labels, Zustände)
Zielt auf maximale Conversion durch "Frictionless UI" ab.
*   **Eingabefelder:** Radius `rounded-lg`, Padding `px-4 py-3`, Text `text-base` (Vermeidet iOS Auto-Zoom). 
    *   *Default:* Border `#283039` (Dark) / `#e2e8f0` (Light).
    *   *Focus:* Border `ring-2 ring-primary` plus Glow-Schatten.
*   **Labels:** Über dem Feld, `font-semibold`, Größe `text-sm`.
*   **Zustände:** Typisches rotes/grünes Feedback bei Fehler/Erfolg. Fehlermeldungen direkt unter dem Inputfeld in `text-sm text-red-500`.
*   **Float-Effekt (Optional):** Placeholder springen nach oben in den Label-State (Float-Labels werden nur eingesetzt, wenn Platz limitiert ist).

## 45. Icon-System & Visuelle Symbolsprache
*   **Bibliothek:** `Material Symbols Outlined` (Google).
*   **Styling:** Stroke-Width `1.5px` bis `2px`. Ecken in den SVG-Pfade sollten abgerundet sein (`stroke-linejoin="round"`), passend zum Card-Radius.
*   **Größenklassen:** 
    *   Small (`w-5 h-5`): Listen, Breadcrumbs.
    *   Medium (`w-8 h-8`): Buttons, Menüs, Card-Links.
    *   Large (`w-12 h-12` bis `w-16 h-16`): Sektions-Header, Feature-Cards.

## 46. Testimonial- & Social-Proof-Design
*   **Typografie:** Zitate in `italic text-lg` (Signalisiert "Echte Worte"). Signatur in `not-italic text-sm text-slate-400`.
*   **Dekoration:** Ein großes abstraktes Anführungszeichen-Icon `"` in Primärfarbe bei 10% Opacity liegt absolute positioniert im Hintergrund oben links.
*   **Rating-Stars:** Fünf Sterne in Akzentfarbe (`#f97316`), Inline gerendert über dem Zitat.

## 47. Prozess-Timeline (Schritt-für-Schritt)
*   **Basis:** Dunkler Gradient Background.
*   **Nodes (Schritte):** Kreisrunde Container (`w-12 h-12 rounded-full`) mit Background in Akzentfarbe und weißer Nummer.
*   **Verbindungslinien:** Linie `bg-white/20`. 
*   **Layout:** Auf Desktop horizontal (Verbindung von Node zu Node). Pünktlich am Breakpoint `md` klappt das Layout auf vertikal um (Line verläuft am linken Rand nach unten).

## 48. Akkordeon- & Toggle-Design (FAQ)
*   **Ruhezustand:** Frage `font-semibold text-lg`, Rechts: Plus-Icon in Primärfarbe. Divider `border-b border-[#283039]`.
*   **Hover:** Background färbt sich leicht (z.B. `bg-white/5`).
*   **Aktiv (Geöffnet):** Plus-Icon rotiert in minus (`rotate-180` oder transformiert). Antwort-Panel schiebt sich per CSS-Grid/Transition (`grid-rows-[1fr]`) weich auf (`duration-400`).

## 49. Statistik-Blöcke & Zahlen-Visualisierung
*   **Zahl (Impact):** `text-5xl md:text-6xl font-bold text-white`.
*   **Titel:** `text-sm md:text-base text-slate-300 mt-2`.
*   **Count-Up:** Zahlen werden erst gerendert "0", wenn Intersection Observer triggert, dann Animation in 2 Sekunden zum echten Wert (Nutze `framer-motion` oder Vanilla JS Hooks).

## 50. Breadcrumb, Tag & Badge-System
*   **Tags/Badges:** Radius `rounded-full` (Pill-shape). Padding `px-3 py-1`. Text `text-xs font-semibold uppercase tracking-wider`.
*   **Primär-Badge:** `bg-primary/10 text-primary-light` (Subtiles blaues Badge für Branchen/Kategorien).
*   **Alert-Badge:** `bg-accent/10 text-accent` ("Neu", "Coming Soon").
*   **Breadcrumb:** Slashes `/` oder Chevrons `>` als Trenner in `text-slate-500`. Aktuelle Seite ist `text-primary`.
