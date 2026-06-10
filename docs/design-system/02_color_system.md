# K-Aqua: Farbsystem & Chromatische Architektur (Phase 2)

**Dokument-ID:** 02_color_system
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 11 bis 20 der Ultrathink-Spezifikation und definiert das exakte, mathematisch überprüfbare Farbsystem (Tokens & Variablen) für die K-Aqua Website.

---

## 11. Primärfarbe – Psychologische Verankerung
Das Herzstück der Marke. Ein sattes, technisches, aber leuchtendes Blau, das Vertrauen und Innovation ausstrahlt.
*   **Token:** `color-primary`
*   **Hex:** `#137fec` (HSL: 210°, 85%, 50%)
*   **Hover-Zustand:** `#2563eb` (verdunkelt für haptisches Feedback und Klick-Sicherheit)
*   **Einsatzorte:** Hero-Überschriften auf hellem Grund, Footer-Hintergründe als Gradient, aktive Icons, Hover-Zustände bei Cards, Text-Links im Ruhezustand.
*   **Kontrast-Prüfung:** Der Kontrast auf `#ffffff` (Weiß) und `#101922` (Dark-Background) erfüllt die WCAG AA Anforderungen (> 4.5:1).

## 12. Sekundärfarbe – Harmonische Erweiterung
Eine Tiefe, die die Primärfarbe unterstützt, ohne zu konkurrieren. Sie mildert harte Kontraste und erzeugt atmosphärische Tiefe.
*   **Token:** `color-secondary`
*   **Hex:** `#0f172a` (Slate-Blau metallic)
*   **Hover-Zustand:** `#1e293b`
*   **Einsatzorte:** Sekundäre Icons, Backgrounds in tiefen Sektionen (als Gegenpol zum reinen Dark-Background), Breadcrumb-Navigation, dekorative Unterstreichungen.

## 13. Akzentfarbe – Der Handlungsmagnet
Ausschließlich für Handlungsaufforderungen und Dringlichkeit. Keine Dekoration!
*   **Token:** `color-accent`
*   **Hex:** `#f97316` (Technisches Orange, HSL: 25°, 95%, 53%)
*   **Hover-Zustand:** `#ea580c` (Ein tieferer Ton, der Entschlossenheit signalisiert)
*   **Einsatzorte:** Primäre CTA-Buttons ("Angebot anfordern"), Häkchen/Checkmarks in Feature-Listen, numerische Akzente in Timelines, Highlight-Zahlen in Statistik-Blöcken.

## 14. Neutral-Palette – Die Unsichtbare Architektur
Die Neutralfarben sind das Fundament. Sie dominieren 60% der visuellen Fläche.

**Dark Mode (Standard für K-Aqua):**
*   `color-bg-primary`: `#101922` (Tiefes Blau-Grau, Haupt-Hintergrund)
*   `color-bg-surface`: `#1a2632` (Karten-Hintergrund, erzeugt leichte Elevation)
*   `color-border`: `#283039` (Kartenrahmen, Divider)
*   `color-text-primary`: `#ffffff` (Überschriften, Haupttexte)
*   `color-text-secondary`: `#cbd5e1` (Meta-Infos, Zeitstempel, Labels)

**Light Mode (Fallback & Inversion):**
*   `color-bg-primary`: `#f6f7f8` (Off-White, leicht kühl)
*   `color-bg-surface`: `#ffffff` (Reines Weiß für Cards)
*   `color-border`: `#e2e8f0`
*   `color-text-primary`: `#0f172a` (Warmes Dunkelgrau, niemals reines Schwarz)
*   `color-text-secondary`: `#475569`

## 15. 60-30-10-Regel & Farbbalance-Audit
Die exakte Verteilung der Farben auf dem Viewport:
*   **60% Neutral:** Der `#101922` Hintergrund mit `#1a2632` Cards dominiert. Diese Basis ist ruhig und signalisiert Kompetenz.
*   **30% Primär/Sekundär:** Große Gradients, Hero-Overlays, Icons in `#137fec`. Diese Schicht trägt die Marken-Identität.
*   **10% Akzent:** Lediglich die CTAs und wichtige Interaktionselemente ("Neu"-Badges) in `#f97316`.

*Audit-Regel:* Kein Bereich darf die Akzentfarbe zur reinen Dekoration verwenden. Jeder Akzent-Fleck muss interagierbar sein oder als starker Quality-Indicator dienen.

## 16. Gradient-System & Tiefenillusion
Gradients werden nicht grafisch, sondern atmosphärisch eingesetzt (Licht und Schatten).
*   **Hero-Gradient:** Diagonal (135°), von `#101922` (Dark-Background) zu `#101922/20`. Dies ermöglicht Durchscheinen des Hintergrundbildes, sichert aber Lesbarkeit der Typografie ab.
*   **Footer-Gradient:** Vertikal (180°), von `color-primary` (`#137fec`) zu einer tief dunklen Variante (`#0a4b9c`).
*   **Section-Divider-Gradient:** Horizontal (90°), von `color-border` zu transparent, als subtile Trennlinie.

## 17. Transparenz-Schichten & Glasmorphismus
Gläserne Schichten erzeugen Eleganz und Tiefe.
*   **Main Navigation:** `bg-[#101922]/95` kombiniert mit `backdrop-blur-md` (ca. 12px Blur). Untere Kante: `border-b` in `color-primary` bei 10% Opacity.
*   **Mobile-Overlay:** `bg-[#101922]/98`. Fast opak, aber der subtile Schimmer erzeugt Tiefe.
*   **Modals / Lightbox:** Backdrop `bg-[#000000]/50` mit `backdrop-blur-sm`.
*   **Toast Notifications:** Weißer Hintergrund bei 98% Opacity (im Light-Theme) oder `bg-[#1a2632]/98` (im Dark-Theme) mit Blur.

## 18. Semantische Farbzuordnung (Erfolg, Warnung, Fehler)
Systemmeldungen, die sich harmonisch integrieren.
*   **Success (Erfolg):** `#10b981` (Emerald). *Background-Variante (Alert):* `#10b981/10` mit Text `#10b981`.
*   **Warning (Warnung):** `#f59e0b` (Amber). *Background-Variante (Alert):* `#f59e0b/10` mit Text `#f59e0b`.
*   **Error (Fehler):** `#ef4444` (Rot). *Background-Variante (Alert):* `#ef4444/10` mit Text `#ef4444`.
*   **Info (Hinweis):** Nutzt immer `color-primary` (`#137fec`) für System-Neutralität.

## 19. Dunkelmodus-Fähigkeit & Farbinversion
Das System ist "Dark-Theme First" konfiguriert (gem. Prompt). Der Light-Mode existiert als perfekte invertierte Spiegelung.
*   Text invertiert zu `#0f172a`.
*   Schatten im Light-Mode (`shadow-md` = `0 4px 6px -1px rgba(0,0,0,0.1)`) werden im Dark-Mode zu subtilen hellen Rändern (`border-color-border` auf Cards) oder einem zarten "Drop Glow" invertiert.

## 20. Farbkonsistenz-Audit (Checkliste für Entwickler)
Beim Implementieren der Tailwind-Config muss final verifiziert werden:
- [ ] Werden im gesamten JSX/TSX ausschließlich Tailwind Farb-Klassen (`bg-primary`, `text-accent`) genutzt und niemals hardgecodete Hex-Werte?
- [ ] Ist der Kontrast von Text auf Hover-Zuständen (z.B. Weiß auf `#ea580c`) >= 4.5:1?
- [ ] Wurden alle Gradient-Stops in der Tailwind Config hinterlegt (z.B. `bg-gradient-to-br from-background-dark to-transparent`)?
