# K-Aqua: Typografie-System (Phase 3)

**Dokument-ID:** 03_typography
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 21 bis 30 der Ultrathink-Spezifikation und definiert die mathematisch-präzise Typografie-Landschaft für die K-Aqua Website.

---

## 21. Schriftfamilien-Auswahl & Charakter-Definition
Die Wahl der Schrift ist eine strategische Entscheidung für Vertrauen und Lesbarkeit.
*   **Primäre Schriftart:** `Space Grotesk` (Als Brand-Font für Hero-Überschriften und Fließtext)
*   **Fallback / Alternative (falls Space Grotesk nicht lädt):** `Inter` oder `Manrope`
*   **Charakter:** Technisch, geometrisch präzise, hyberlesbar, aber durch sanfte Rundungen menschlich zugänglich. Perfekt für den Duktus der "Industrie 4.0 Ingenieurskunst".
*   **Erlaubte Font-Weights (Streng limitiert):**
    *   `Regular (400)`: Ausschließlich für Fließtexte und Meta-Infos.
    *   `Semibold (600)`: Navigation, Buttons, Card-Links.
    *   `Bold (700)`: Exklusiv für Überschriften (H1-H4) und starke Datenpunkte.

## 22. Modulare Typografie-Skala (Faktor 1.250 Major Third)
Das System skaliert harmonisch. Größenangaben in Pixeln beziehen sich auf den maximalen Desktop-Wert.
*   **H1 (Hero):** 48px, Line-Height 1.1, Tracking `-0.015em` bis `-0.02em`, Bold.
*   **H2 (Section Header):** 38px, Line-Height 1.2, Tracking `-0.01em`, Bold.
*   **H3 (Sub-Header):** 30px, Line-Height 1.3, Bold.
*   **H4 (Card-Titel):** 24px, Line-Height 1.4, Semibold oder Bold.
*   **P-Large (Hero-Sub):** 20px, Line-Height 1.6, Regular.
*   **P-Base (Fließtext):** 16px, Line-Height 1.6, Regular.
*   **P-Small (Meta, Footer):** 14px, Line-Height 1.5, Regular.
*   **Caption (Datumsangaben):** 12px, Line-Height 1.4, Tracking `+0.02em`, Regular (Mittelgrau).

## 23. Responsive Typografie & Fluide Skalierung
Wir nutzen die CSS `clamp()` Funktion für nahtlose Anpassung ohne abrupte Breakpoint-Sprünge.
*   **H1:** `clamp(2rem, 5vw, 3rem)` (Skaliert fließend von 32px auf Mobile bis 48px auf Desktop)
*   **H2:** `clamp(1.75rem, 4.5vw, 2.375rem)` (28px bis 38px)
*   **H3:** `clamp(1.5rem, 3.5vw, 1.875rem)` (24px bis 30px)
*   **P-Base:** Bleibt fix bei `16px` auf allen Viewports, um Accessibility-Standards (Lesbarkeit) zu sichern.

## 24. Textausrichtung, Spaltenbreiten & Lesefluss
*   **Ausrichtung:** Fließtext ist *immer* linksbündig (niemals Blocksatz auf dem Screen). Nur Hero-Titel und kurze Zentren-Texte (Einleitungen) dürfen zentriert werden.
*   **Maximale Breite (Line-Length):** Fließtext-Container erhalten intern ein `max-w-[800px]` (oder Tailwinds `max-w-prose`), um ca. 65 Zeichen pro Zeile zu gewährleisten und visuelle Ermüdung zu vermeiden.
*   **Absatzabstand:** Ein klares Leerzeichen zwischen Absätzen (Margin-Bottom `1.5em`) statt simplen Text-Umbruchs.

## 25. Vertikaler Typografie-Rhythmus (Abstands-Hierarchie)
Das asymmetrische "4:1 Ratio" sorgt für magnetische Bindung der Überschrift an den nachfolgenden Inhalt.
*   **Margin-Top (vor H2/H3):** `2em` (zum vorherigen Block). Nur hinfällig, wenn es das erste Kind-Element in einer Sektion ist.
*   **Margin-Bottom (nach H2/H3):** `0.5em` (zum dazugehörigen Text). Dies signalisiert optische Zugehörigkeit.

## 26. Typografie auf dunklem Grund (Sonderfälle)
Auf dem `color-bg-primary` Background (`#101922`):
*   **H1/H2:** 100% Opacity Weiß für maximalen Impact.
*   **Hero Subtitle:** 90% Opacity Weiß (`text-white/90`) zur dezenten Hierarchie-Abstufung.
*   **Fließtext Dark:** 80% Opacity Weiß (`text-white/80` aka `text-slate-200`) um Überstrahlung zu reduzieren.
*   **Meta / Legal Links:** 60% Opacity Weiß (`text-white/60`) für minimalen Fokus.
*   **Schatten:** Leichter Text-Shadow (z.B. `0 2px 8px rgba(0,0,0,0.3)`) sichert H1-Lesbarkeit über dem Hero-Hintergrundbild ab.

## 27. Numerische Typografie & Daten-Darstellung
Zahlen strahlen Beweiskraft ("Social Proof") aus und erfordern spezielles Styling.
*   **Statistik-Blöcke:** Nutzen tabellarische Ziffern (`tabular-nums` in Tailwind), um Zahlenspalten gleichmäßig auszurichten.
*   **Größe:** Massive 48px bis 64px, in Bold. Primärfarbe auf hellem Grund, Weiß auf dunklem Grund.
*   **Einheiten:** ("km", "SDR", "%") Werden in der Größe leicht reduziert (z.B. `text-lg` neben `text-6xl`) und an der Basislinie oder Top-Line ausgerichtet.
*   **Animation:** Count-Up Animations-Hook (zählt in 1.5-2s von Null hoch), getriggert bei Sichtbarkeit im Viewport (nur beim initialen Scroll).

## 28. Link-Typografie & Interaktive Textelemente
*   **Standard Inline-Links:** Farbe `color-primary`, keine Unterstreichung im Ruhezustand. Hover: Animierte Akzentfarben-Unterstreichung (Width wächst von 0 zu 100% in 0.3s).
*   **Button Text:** Immer Semibold, Tracking `-0.01em` bis `+0.01em`. Initial Cap (kein All-Caps, reduziert Lesbarkeit).
*   **Card-Links ("Mehr erfahren"):** Primärfarbe mit Pfeil-Icon. Beim Hover bewegt sich der Pfeil um `4px` nach rechts (`translate-x-1`).
*   **Breadcrumbs:** Stufe "Caption" (12-14px), Mittelgrau. Trennzeichen `›`, letztes Element in `color-primary`.

## 29. Mikro-Typografie & Feinschliff
*   **Anführungszeichen:** Echtes Typografie-Quotes (`„` und `“`).
*   **Gedankenstrich:** Der En-Dash (`–`) mit umschließenden Leerzeichen. Keine einfachen Bindestriche (`-`) im Textfluss.
*   **Hängende Interpunktion:** In großen Testimonials steht das initiale Anführungszeichen optisch außer Rand (z.B. durch negatives Margin `-ml-4`), damit die Textbox links bündig bleibt.
*   **Silbentrennung:** Überschriften brechen natürlich ohne Silbentrennung um. Mobile Fließtexte dürfen `hyphens-auto` nutzen, um zu große Lücken zu vermeiden.

## 30. Typografie-Konsistenz-Audit (Checkliste für Entwickler)
- [ ] Werden fluid Typography-Klassen/Clamp-Werte genutzt, oder brechen harte Breakpoints die Typografie (verhindern!)?
- [ ] Besitzt jede H1-H4 konsequent `font-bold` und Fließtext `font-normal`? (Keine wilden Weight-Mixes, keine `font-light` Einsätze)
- [ ] Ist der Kontrast (>4.5:1) bei den 60% Opacity Texten im Footer noch gegeben?
