# K-Aqua: Räumliches System & Grid-Architektur (Phase 4)

**Dokument-ID:** 04_grid_and_spacing
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 31 bis 40 der Ultrathink-Spezifikation und definiert das mathematisch exakte Raumsystem für die K-Aqua Website. Der Raum zwischen den Elementen ist die primäre Architektur des Designs.

---

## 31. Basis-Grid & Mathematische Ordnung
*   **The 8-Pixel-Rule:** Jeder Abstand, jedes Padding, jede Margin und jede Komponentengröße ist zwingend ein Vielfaches von 8. (Ausnahmen bilden nur mikro-typografische Korrekturen).
*   **Werte-Skala:** `8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120` Pixel.
*   In Tailwind: `p-2` (8px), `gap-8` (32px), `mb-12` (48px). Es werden keine krummen Pixelwerte (`13px`, `21px`) akzeptiert.

## 32. 12-Spalten-Grid & Horizontale Präzision
Wir nutzen ein asymmetrisches und symmetrisches 12-Column-Layout.
*   **Container Width:** Maximal `1200px` für Haupt-Content. `1400px` für Navigation/Full-Bleed. `800px` (`max-w-prose`) für reine Textblöcke.
*   **Grid Gap:** 
    *   Desktop (`lg`): 32px (`gap-8`)
    *   Tablet (`md`): 24px (`gap-6`)
    *   Mobile (`sm`): 16px (`gap-4` oder `gap-6` vertikal)
*   **Container Padding:**
    *   Desktop (`px-10` = 40px)
    *   Tablet (`px-8` = 32px)
    *   Mobile (`px-5` = 20px)

## 33. Sektions-Padding & Vertikaler Atemrhythmus
Sektionen atmen gleichmäßig.
*   **Hauptsektionen (Content, Services, Projekte):**
    *   Desktop: `py-20` (80px)
    *   Tablet: `py-16` (64px)
    *   Mobile: `py-12` (48px)
*   **Kompakt-Sektionen (Trust-Bar, CTA-Bar, Trenner):**
    *   Desktop: `py-12` oder `py-16` (48-64px) – genug Raum für Gewicht, aber gestaucht für visuelle Dichte.

## 34. Element-Abstände & Innere Sektion-Hierarchie
Innerhalb einer Sektion gilt eine viertufige Abstands-Hierarchie zur optischen Gruppierung:
1.  **Groß (40-48px / `mb-10` bis `mb-12`):** Zwischen Sektions-Überschrift (H2+Sub) und dem anschließenden Content-Grid.
2.  **Mittel (32px / `gap-8`):** Der Abstand zwischen gleichwertigen Grid-Karten oder horizontalen Content-Blöcken.
3.  **Klein (16-24px / `mb-4` bis `mb-6`):** Innere Card-Struktur (Icon zu Titel, Titel zu Text).
4.  **Mikro (8-12px / `mb-2` bis `mt-3`):** Engste Bindung (Label zu Inputfeld, List-Item zu List-Item).

## 35. Card-Alignment & Grid-Element-Ausrichtung
Die Pixel-perfekte horizontale und vertikale Fluchtung ist entscheidend für den "Engineering-Look".
*   Wenn Karten nebeneinander stehen, müssen Titel-Basislinien exakt fluchten, unabhängig von variierenden Icon-Größen.
*   Cards im Grid verwenden `flex-col` und `justify-between` / `mt-auto` auf CTAs, um asynchrone Content-Längen auszugleichen. **Die Bodenausrichtung (der letzte Button) muss immer eine horizontale Linie bilden.**

## 36. Breakpoint-System & Responsive Übergänge
*   `sm`: `640px` (Große Smartphones, Landscape)
*   `md`: `768px` (Tablets Portrait)
*   `lg`: `1024px` (Desktops, Laptops)
*   `xl`: `1280px` (Große Desktops)
*   `2xl`: `1536px` (Ultra-Wide)
*   Übergänge erfolgen über fluid CSS oder definierte Tailwind-Klassen (`flex-col md:flex-row`). Bei Grid-Wechseln fließend (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## 37. Whitespace-Strategie & Negativraum
*   Whitespace ist das mächtigste Design-Instrument für B2B-Exklusivität.
*   Buttons ("Angebot anfordern") benötigen massiven Whitespace drum herum, um aufzufallen, statt einfach größer gemacht zu werden.
*   Text-Inhalte in Cards dürfen niemals den Rand berühren. (Minimum `p-8` / `p-10` auf Desktop-Feature-Cards).

## 38. Bild-Proportionen & Medien-Raster
Keine willkürlichen Beschnitte. Wir erzwingen feste Aspect Ratios.
*   **Hero / Feature-Images:** `aspect-video` (16:9). Cinematic, modern.
*   **Projekt-/Produktkarten:** `aspect-[4/3]` (4:3). Kompakt, informationsdicht. Vertikales Scrolling.
*   **Portraits / Team / Logos:** `aspect-square` (1:1).
*   *Implementierung:* Alle Images erzwingen `object-cover`.

## 39. Overlay-System & Schicht-Architektur (Z-Index)
Ein streng definiertes Token-System zur Vermeidung von Overlay-Bugs.
*   `z-0` / `z-10`: Basis-Elemente, relative Content-Blöcke.
*   `z-20` / `z-30`: Sticky Elemente in der Seite (z.B. Filter-Sidebar).
*   `z-40` / `z-50`: Main Navigation (Sticky Header).
*   `z-100`: Dropdowns, Hover-Cards, Tooltips (müssen über den Header ragen können).
*   `z-200`: Full-Screen Modals, Mobile Menu Overlay, Lightboxen.
*   `z-300`: Toast Notifications, Global Alerts.
*   `z-500`: Cookie-Consent, rechtliche Overlays (absolutes Top-Level).

## 40. Räumliches Konsistenz-Audit (Entwickler-Checkliste)
Beim Bau der UI-Components prüfen:
- [ ] Werden exakt die Standard-Tailwind Spacing-Klassen genutzt? Sind magische Nummern wie `mt-[15px]` ausgemerzt?
- [ ] Fluchten die Buttons in einem 3-Spalten-Grid von Cards exakt am unteren Rand, selbst wenn Card 1 zwei Zeilen Text hat und Card 2 drei Zeilen?
- [ ] Bilden die H2-Sektions-Abstände beim Scrollen der gesamten Seite einen konsistenten Rhythmus?
