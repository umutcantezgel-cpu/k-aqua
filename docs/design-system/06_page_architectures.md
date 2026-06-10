# K-Aqua: Seitenarchitektur & Layout-Templates (Phase 6)

**Dokument-ID:** 06_page_architectures
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 51 bis 54 (inkl. Basis-Strukturen für weitere Templates) der Ultrathink-Spezifikation. Es definiert den exakten, dramaturgischen Aufbau der Seiten.

---

## 51. Homepage-Architektur (Das Aushängeschild)
Die Startseite muss in den ersten 3 Sekunden Vertrauen erzeugen und in 30 Sekunden zur Aktion führen.

**Sektionsfolge:**
1.  **Main Navigation:** Sticky (`z-50`), Glasmorphismus.
2.  **Hero Section:** 80vh Desktop / 90vh Mobile. Full-Bleed Background Image/Video mit 135° Dark-Gradient-Overlay.
    *   *Content:* Badge ("Legitimation"), H1 ("Weltklasse Sanitärlösungen"), Subheadline (Value Prop), Primary CTA ("Angebot anfordern"), Secondary CTA (Ghost-Button "Imagesfilm").
3.  **Trust-Bar (Kompakt-Sektion):** Direkte Glaubwürdigkeitssignale. Horizontaler Streifen mit Zertifikats-Logos (DIN, DVGW) und "Seit 1990".
4.  **Kernkompetenzen / Produkte:** `bg-background-dark`. 3-Spalten-Grid (Desktop) / Horizontal-Scroll (Mobile). 3 Hauptprodukte (PP-R Systeme, Entwässerung, Flächenheizung) als Feature-Cards.
5.  **Differenzierung / Warum-Wir:** `bg-background-light` (Off-White für Atemrhythmus). 3 Säulen (Nachhaltig, Langlebig, Weltweit).
6.  **Referenzen (Proof of Work):** `bg-background-dark`. 3 große Projekt-Cards im Grid. Link "Alle Projekte ansehen".
7.  **Zahlen & Fakten (Impact):** Full-Width Primärfarbe-Gradient. 4 Count-Up-Statistiken (z.B. km verlegtes Rohr).
8.  **Testimonials:** 2 große Testimonial-Cards.
9.  **Final CTA:** Akzentfarbe-Background (`bg-accent`). Starke Aufforderung + Button (Weiß/Invertiert) + direkter Ansprechpartner (Foto+Hotline).
10. **Global Footer:** 4 Spalten auf Dark-Gradient.

## 52. Service-/Leistungs-Übersichtsseite
Fokussierter Hub zur Navigation in die spezifischen Disziplinen.

**Sektionsfolge:**
1.  **Fokussierter Hero:** 50vh Desktop / 40vh Mobile. Primärfarbe/Dark-Gradient (kein dominantes Bild). H1 linksbündig + Einleitungstext (max 800px).
2.  **Breadcrumbs:** Direkt unter dem Hero, linksbündig.
3.  **Leistungs-Grid (Main):** Großzügiges Grid (oft 2x2). Feature-Cards für die Hauptbereiche (z.B. Trinkwasser-Installationen, Groß-Infrastruktur).
    *   *Jede Card beinhaltet:* Großes Icon, Titel, Kurzbeschreibung, aufklappbare Feature-Liste (Checkmarks), CTA-Link zur Detailseite.
4.  **Zusatz-Services:** Kompakteres 3-Spalten-Grid für ergänzende Leistungen (z.B. Support, Schulungen).
5.  **Process-Preview (Optional):** Eine kurze, horizontale Timeline ("Wie wir arbeiten: Planung > Lieferung > Support").
6.  **Final CTA & Footer.**

## 53. Service-Detailseiten-Template
Ausführliche technische Tiefe kombiniert mit psychologischer Conversion-Führung.

**Sektionsfolge:**
1.  **Fokussierter Hero:** Wie oben. Titel des spezifischen Services.
2.  **Einführung & Vorteile-Box:** Klarer Textblock. Rechts (oder drunter auf Mobile) eine abgehobene Box (z.B. Hellblau `bg-primary/10` mit Primärfarbe-Border-Left) mit "Ihre Vorteile auf einen Blick" (Checkmark-Liste).
3.  **Leistungs-Detail-Grid:** Spezifische Unter-Features in 2x2 Cards.
4.  **Zielgruppen-Ansprache:** Drei Säulen, die erklären, warum dieser Service perfekt für Installateure, Entscheider und Planer ist. (Holt alle drei ZG aus Task 2 ab).
5.  **Prozess / Ablauf:** Dark-Gradient-Sektion mit 3-5 Timeline-Nodes (Schritt 1: Diagnose, Schritt 2: Planung...).
6.  **FAQ-Akkordeon:** 6-8 relevante Fragen zu diesem Service. (Maximal 800px breit, zentriert).
7.  **Verwandte Leistungen / Cross-Selling:** 3 horizontale Cards am Seiten-Ende.
8.  **Final CTA:** (Persönlich fokussiert: "Sprechen Sie mit unserem Experten für [Service]").

## 54. Projekt/Referenz-Übersichtsseite
Ein Portfolio, das Kompetenz durch sichtbare Ergebnisse dokumentiert.

**Sektionsfolge:**
1.  **Hero:** Minimal. Starker Untertitel ("500+ globale Infrastruktur-Projekte").
2.  **Sticky Filter-Leiste (`z-30`):** Direkt unter der Hauptnavigation haftend beim Scrollen. Filter-Pills für Kategorien (z.B. "Hotel & Gastro", "Industrie", "Infrastruktur").
3.  **Projekt-Grid:** Dynamisches Masonry- oder konsistentes 2- bis 3-Spalten-Grid.
    *   *Projekt-Card:* Bild im `aspect-video`, darüber ein Overlay-Badge mit der Branche. Darunter Titel, Ort und eine kurze Info. Die Card hebt sich beim Hover stark ab (`translate-y-2`).
4.  **Endless Scroll / Pagination:** "Mehr Projekte laden" Button.
5.  **Statistik-Banderole:** Ein schmaler Full-Width Container quer durchs Grid, der harte Zahlen liefert (z.B. "Eingesetzt in 80 Ländern").
6.  **Final CTA & Footer.**

## 55. (Ausblick) Das 3D-Konfigurator Template
Spezialisiertes Interface für die primäre Zielgruppe (Ingenieure/Planer).
*   **Layout:** Web-App Charakter (Kein klassischer Content-Scroll).
*   **Top-Bar:** Logo, Titel des Konfigurators, User-Login/Speichern-Status.
*   **Left-Sidebar:** Tools (Messen, Drehen, Exportieren). Icon-Fokus (`w-20` Breite).
*   **Main Stage (Center):** Der 3D-Viewport. Heller oder grid-linierter Hintergrund für technischen Charakter.
*   **Right-Sidebar:** Parameter-Eingabe (Rohrtypen, Durchmesser, DIN-Normen). Dropdowns und Sliders.
*   **Bottom-Bar:** Preis-Indikation / Material-Listen-Zusammenfassung und primärer "Fertigstellen/Anfragen"-CTA.
