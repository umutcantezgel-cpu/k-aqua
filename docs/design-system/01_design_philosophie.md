# K-Aqua: Design-Philosophie & Architektur (Phase 1)

**Dokument-ID:** 01_design_philosophie
**Status:** Approved
**Datum:** 2026-02-27

Dieses Dokument konsolidiert die Tasks 1 bis 10 der „Ultrathink Langzeittask"-Matrix in ein allumfassendes visuelles Leitbild für die K-Aqua Website.

---

## 1. Design-Philosophie: »Geführte Fluidität & Tektonische Präzision«
Die K-Aqua Design-Philosophie ist das Gravitationszentrum der Marke. In einer Branche, die von funktionaler Nüchternheit dominiert wird, positionieren wir uns durch eine Ästhetik, die **Deutsche Ingenieurskunst** mit der **Eleganz von Wasser** (Fluidität) verschmelzt. 

**Poster-Metapher:** Ein modernes Wasserforschungslabor im Zwielicht.
**Materialcharakter:** Dunkles Polymer (PP-R), satiniertes Glas, gleitendes Wasser und präziser Edelstahl.
**Emotionales Grundgefühl in den ersten drei Sekunden:** Souveränität, Innovationskraft, beruhigende Sicherheit.

### Die 5 Visuellen Prinzipien
1. **Das Fluiditäts-Postulat (Form)**
   *Definition:* Die Kernformen balancieren organische Rundungen (Rohre, Wasser) mit tektonischer Strenge (Bauwerke, Infrastruktur). 
   *Beispiele:* (1) Abgerundete Card-Ecken (Radius `1rem`) auf streng linearem Grid. (2) Pill-förmige Tags in technologisch eckigen Containern. (3) Glasmorphe Navigation, die sich wie ein feuchter Film über den Content legt.
2. **Die Leere als Baukörper (Raum)**
   *Definition:* Whitespace (bzw. Negativraum) signalisiert Exklusivität und Klarheit. Jedes Element atmet und sitzt tief verankert in seinem Container.
   *Beispiele:* (1) Großzügige 80px Abstände zwischen Sektionen. (2) Mindestens 40px Padding in Haupt-Cards. (3) Asymmetrisches Spacing um H1-Überschriften (4:1 Ratio) zur Führung des Auges.
3. **Chromatische Autorität (Farbe)**
   *Definition:* Das tiefe Dark Theme (`#101922`) strahlt absolute Ruhe aus, während das hell leuchtende K-Aqua Blau (`#137fec`) punktuell Spannung erzeugt und Handlungen triggert.
   *Beispiele:* (1) Dunkle Gradient-Overlays auf großflächigen Referenzbildern. (2) Hellblaue Hover-Effekte mit weichem Glow (Biolumineszenz). (3) Dezente Sekundärtöne (`#283039`) zur strukturellen Trennung.
4. **Die Typografie der Ingenieure (Schrift)**
   *Definition:* Die Typografie ("Space Grotesk" / "Inter") funktioniert wie ein präzises technisches Datenblatt – hyperlesbar, mathematisch skaliert und absolut schnörkellos.
   *Beispiele:* (1) Enge Buchstabenabstände in Headlines (`-0.015em`) für monolithic Impact. (2) Tabellarische Ziffern für Spezifikationen und Referenz-Metriken. (3) Strenge Trennung durch nur drei genutzte Font-Weights.
5. **Geführter Kognitionsfluss (Interaktion)**
   *Definition:* Keine Bewegung ohne Bedeutung. Animationen simulieren physikalische Realität (Gewicht, Spannung, Fluidität).
   *Beispiele:* (1) Physik-basierte Hover-Elevations von Cards (-10px Y-Achse, dynamischer Schatten). (2) Sanft orchestrierte Stagger-Animationen bei Mobile-Navigationspunkten. (3) Progressiver Image-Reveal.

---

## 2. Zielgruppen-Matrix & Visuelle Erwartungshaltung
Jede Zielgruppe wird gezielt abgeholt, ohne die anderen auszuschließen.

* **Primär: [Fachplaner & Ingenieure]**
  * *Erwartungshaltung:* Fakten, Normen, CAD-Daten, absolute Präzision.
  * *Visueller Einstieg:* Technische Diagramme, Tabellen, Konfigurator.
  * *Vertrauensauslöser:* DIN-Norm-Badges, exakte Materialspezifikationen.
  * *Handlungsimpuls:* "Datenblatt als PDF laden" / "CAD-Datei anfordern".
* **Sekundär: [Installateure & Bauunternehmen]**
  * *Erwartungshaltung:* Haltbarkeit, Montage-Einfachheit, Verfügbarkeit.
  * *Visueller Einstieg:* Produktkatalog, großformatige Detailbilder (Verbindungen).
  * *Vertrauensauslöser:* Haltbarkeits-Garantien, Testimonials von anderen Handwerkern.
  * *Handlungsimpuls:* "Zum Produktkatalog" / "Händlersuche".
* **Tertiär: [Investoren & Entscheider]**
  * *Erwartungshaltung:* ROI, Langlebigkeit, Referenzen.
  * *Visueller Einstieg:* Spektakuläre Hero-Bilder von Großprojekten (z.B. Dubai Jumeirah Palm).
  * *Vertrauensauslöser:* Umsatzkennzahlen, gerettete CO2-Tonnen, globale Präsenz.
  * *Handlungsimpuls:* "Projektanfrage starten" / "Unternehmens-Broschüre".

**Konfliktauflösung (Die Matrix):** Die Homepage verwendet *Progressive Disclosure*. Der Hero bedient ZG3 (Vision/Referenz). Die Trust-Bar und Features bedienen ZG2 (Greifbarkeit). Deep-Dives und interaktive Konfiguratoren fungieren als Honey-Pot für ZG1.

---

## 3. Trust-Architektur & Glaubwürdigkeits-Signale
Vertrauen ist im B2B-Infrastruktur-Bereich die Währung Nummer eins.

* **[TRUST-SIGNAL-1] Legitimation:** "Made in Germany" & DIN-Zertifikate.
  * *Visuelle Form:* Prominente (aber elegante) Vektor-Badges im Hero und Footer.
* **[TRUST-SIGNAL-2] Bewährtheit:** "Seit 1990 innovativ".
  * *Visuelle Form:* Interaktive Firmen-Timeline mit animierten Meilensteinen (Über-Uns).
* **[TRUST-SIGNAL-3] Massennachweis:** Globale Referenzen.
  * *Visuelle Form:* Horizontale Scrolling-Carousels von Weltklasse-Projekten (Dubai, etc.) mit harten, beeindruckenden Rohdaten (z.B. "500km verlegtes Rohr").
* **[TRUST-SIGNAL-4] Menschlichkeit:** Persönlicher Support & Erreichbarkeit.
  * *Visuelle Form:* Direkte Ansprechpartner auf Kontakt/Detailseiten mit Portrait, Name, Titel und sofort klickbaren (href:tel/mailto) Icons.

---

## 4. Emotionale Journey & Sektions-Dramaturgie
Jede Seite durchläuft exakt 4 psychologische Phasen:

1. **Orientierung (Sekunde 0-3):** Hero Section. Der Nutzer sieht den Dark Gradient, das klare H1 ("Weltklasse Sanitärlösungen") und ein dominantes Bild. Das Gefühl: *“Hier bin ich bei den Profis.”*
2. **Vertiefung (Sekunde 4-15):** Content Grid. Technische Diagramme, Icon-Listen, saubere Typografie. Das Gefühl: *“Die Substanz bestätigt den ersten Eindruck.”*
3. **Bestätigung (Sekunde 16-25):** Social Proof. Testimonials, Metriken, Referenzen blockweise inszeniert. Das Gefühl: *“Andere vertrauen ihnen auch.”*
4. **Aktion (Ende der Seite):** CTA-Bereich. Akzentfarbiger Untergrund. Logischer Abschluss. Das Gefühl: *“Ein Anruf / Eine Anfrage ist der nächste logische, risikoarme Schritt.”*

---

## 5. Informationsarchitektur & Seitenstruktur (Progressive Disclosure)
Wir setzen auf ein flaches, 3-Click-Max-System.

**Knotenpunkte (Seitentypen):**
1. `/` (Mobile & Desktop Varianten)
2. `/produkte` (Katalog)
3. `/produkte/[slug]` (Detail mit Konfigurator-Anbindung)
4. `/referenzen` (Portfolio)
5. `/referenzen/[slug]` (Deep Dive)
6. `/ueber-uns` (Timeline, Werte)
7. `/konfigurator` (Das 3D Herzstück für ZG1)
8. `/kontakt` (Conversion-Hub)

Jedes Dropdown-Menü zeigt nur die 5-7 wichtigsten Links. Alles Weitere ist kontextuell auf der Seite als In-Page-Verlinkung oder im Footer zu finden.

---

## 6. Marken-Konsistenz-Regeln (Tokens Outlook)
*(Details in 02_color_system und 03_typography)*
Jedes visuelle Element besteht aus Semantischen Tokens:
* Keine Hex-Codes im Markup, nur CSS-Variablen (`var(--color-primary)`).
* Keine Hardcoded Pixel-Abstände, nur Tailwind-Spacing (`gap-8`, `p-10`).
* Keine arbiträren Schatten, nur vordefinierte Elevations (`shadow-elevation-1` bis `3`).

---

## 7. Hero-Philosophie & Erster-Eindruck-Architektur
Die Hero-Einstufungen:
* **Maximal (Home):** 80vh (Desktop) / 90vh (Mobile). Full-Bleed Video/Bild. 135° Gradient Overlay für Dynamik. H1 als Hero.
* **Fokussiert (Service/Katalog):** 50vh (Desktop) / 40vh (Mobile). Gradient ohne Bild oder subtiles Pattern. H1 linksbündig.
* **Minimal (Datenschutz/Impressum):** 30vh. Reiner Background-Color-Ton. H1 als Inhaltsstart.

---

## 8. Navigation-Design & Wayfinding-System
* **Glasmorphismus:** `backdrop-blur-md` auf `bg-background-dark/95`. Fühlt sich hochwertig und transparent an, überdeckt aber Inhalte lesbar.
* **Hover-Zustände:** Horizontale Linie, die unter dem Menüpunkt von 0 auf 100% Weite in 0.3s wächst.
* **Mobile-Overlay:** Fluid Dropdown, bei dem die Menüpunkte mit 50ms Versatz (Staggering) nacheinander einschweben.

---

## 9. Footer-Architektur (Der visuelle Abschluss)
Nicht nur Resteverwertung, sondern Fundament.
* Hintergrund: 180° Gradient (`#101922` zu `#050a10`).
* Grid: 4 Spalten auf Desktop (Branding, Leistungen, Unternehmen, Kontakt). 
* Micro-Trust: Zertifikats-Badges nochmals klein als Stempel der Qualität. Unten (Border-Top mit 10% Opacity) die Legal-Links.

---

## 10. Sektionswechsel-Rhythmus (Visuelles Atmen)
Das Scroll-Erlebnis ist architektonisch:
* Weiße (`#ffffff`/`#f6f7f8` im Light, bzw. `#1a2632` im Dark) Sektionen wechseln sich mit reinen Dark-Sektionen (`#101922`) ab.
* **Abstands-Vorgabe:** Konstantes vertikales Padding (`py-20` auf Desktop, was 80px entspricht. `py-12` auf Mobile = 48px).
* Es muss atmen: Kein Container klebt an einem anderen. Jeder Themenwechsel ist auch ein nachvollziehbarer Farb/Raumwechsel.
