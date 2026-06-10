Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte SEO-Strategie dieser Next.js/React/TypeScript-Website von "gutes SEO" zu "dominantes SEO" zu transformieren — die Website erscheint nicht nur in Suchergebnissen, sondern DOMINIERT die SERPs mit Rich Results, Featured Snippets, Knowledge-Panel-Signalen und AI-Search-Optimierung für Google SGE/AI Overviews. Phase 1 hat das technische SEO-Fundament gelegt (Metadata API, Structured Data, Sitemap, Robots). Phase 11 baut darauf auf und verwandelt die Website in eine Suchmaschinen-Autorität, die für ihre Kern-Keywords die unangefochtene Nummer 1 ist. Dies ist Phase 11 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere Phase 1–10, besonders:
- SEO-Infrastruktur aus Phase 1 (Metadata, JSON-LD, Sitemap, Robots)
- Content-Architektur aus Phase 10 (Sektions-Blaupausen, Blog-Template)
- FAQ-Sektionen und ihre Platzierung

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe Handoff von Phase 10. Ergänze:
```
## Phase 11: Advanced SEO Dominanz
- [ ] 0.3 Pre-Flight SEO-Audit abgeschlossen
- [ ] Task 1: Featured-Snippet-Eroberung
- [ ] Task 2: Tabellen-Snippets und Vergleichs-Content
- [ ] Task 3: AI-Search-Optimierung (Google SGE/AI Overviews)
- [ ] Task 4: Content-Freshness-Strategie
- [ ] Task 5: Hub-and-Spoke-Content-Cluster
- [ ] Task 6: Interne-Verlinkung-Systematik
- [ ] Task 7: E-E-A-T-Signale maximieren
- [ ] Task 8: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight SEO-Audit:
1. Bestehende JSON-LD Schemas: Welche Typen existieren? (Phase 1)
2. FAQ-Sektionen: Haben sie FAQPage-Schema?
3. Blog-Posts: Haben sie BlogPosting-Schema? Autoren-Info?
4. Interne Verlinkung: Wie viele eingehende Links hat jede Seite?
5. Content-Lücken: Welche relevanten Keywords fehlen?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🔍 Advanced SEO & Content-Strategie

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — FEATURED-SNIPPET-EROBERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: SNIPPET-TYPEN IDENTIFIZIEREN UND CONTENT FORMATIEREN

Schritt 1.1 — Snippet-Typ-Mapping pro Keyword:
4 Haupttypen:
- Paragraph-Snippet (häufigst): Frage als H2/H3, Antwort 40–60 Wörter DIREKT darunter
- Listen-Snippet: H2 mit Keyword, darunter HTML ol/ul mit 5–8 kurzen Punkten
- Tabellen-Snippet: Semantische HTML-Tabelle (thead, tbody, th, td)
- Video-Snippet: VideoObject-Schema + Kapitelmarkierungen

Schritt 1.2 — <SnippetAnswer /> Komponente:
Props: question (→ H2/H3), shortAnswer (40–60 Wörter, prominent), detailedAnswer (ReactNode).
Generiert automatisch FAQPage-Schema via <JsonLd /> aus Phase 1.

Schritt 1.3 — "People Also Ask" erobern:
Pro Ziel-Keyword: 15–20 PAA-Fragen recherchieren. 5–7 relevanteste in FAQ aufnehmen. Akkordeon + FAQPage-Schema.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: TABELLEN-SNIPPETS UND VERGLEICHS-CONTENT

Schritt 2.1 — <ComparisonTable /> Komponente:
Semantische HTML-Tabelle. Responsive (scrollbar oder Card-Reformat). Eigene Lösung hervorgehoben.

Schritt 2.2 — <PricingTable /> (falls Pakete existieren):
Semantische Tabelle, empfohlenes Paket hervorgehoben, CTA pro Spalte.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — AI-SEARCH UND E-E-A-T
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: CONTENT FÜR AI-ZITIERUNG OPTIMIEREN

Schritt 3.1 — Conversational Authority:
- Definitionen: Glasklare Ein-Satz-Definition am Anfang jedes Fachbegriff-Abschnitts
- Antworten: Antwort im ERSTEN Satz, dann Details
- Statistiken: Quelle + Datum angeben

Schritt 3.2 — Unique Data:
2–3 datenbasierte Content-Pieces mit eigenen Daten (Branchen-Analyse, Benchmarks, proprietäre Frameworks). Nicht kopierbar → AI zitiert als unique Source.

Schritt 3.3 — Entity-Optimierung:
- NAP konsistent auf allen Plattformen
- Organization-Schema mit sameAs-Links
- Konsistente Marken-Schreibweise

Schritt 3.4 — Author-Entity für Blog:
Jeder Artikel: Autor mit Profil, Foto, Bio, Social-Links. Person-Schema im JSON-LD.

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: CONTENT-FRESHNESS-STRATEGIE

Schritt 4.1 — <LastUpdated /> Komponente:
"Zuletzt aktualisiert am [Datum]" auf Service-Seiten und Blog-Posts. dateModified im Schema.

Schritt 4.2 — Content-Decay-Detection:
src/content/audit.ts: Liste aller Seiten mit lastReviewDate. CI-Warnung bei >90 Tagen. Dev-Banner auf veralteten Seiten.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CONTENT-CLUSTER UND VERLINKUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: HUB-AND-SPOKE-CONTENT-MODELL

Schritt 5.1 — Pillar-Seiten:
Jeder Kern-Service = Pillar (2000–5000 Wörter). Inhaltsverzeichnis, Links zu Cluster-Seiten. URL: /[service-name] (Root-Level).

Schritt 5.2 — Cluster-Seiten:
5–10 pro Pillar. Vertiefen Unterthemen. Bidirektionale Verlinkung: Cluster → Pillar und Cluster → Cluster. Signalisiert topical authority.

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: INTERNE-VERLINKUNG-SYSTEMATIK

Schritt 6.1 — Verlinkungsmatrix (src/lib/internal-links.ts):
Pro Seite: relatedPages Array. <RelatedContent /> am Seitenende.

Schritt 6.2 — Kontextuelle Links:
In Fließtexten: Links zu Cluster/Pillar mit keyword-relevanten Ankertexten.

Schritt 6.3 — Validierung:
Build-Script prüft: Jede Seite hat ≥3 eingehende interne Links.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: E-E-A-T-SIGNALE MAXIMIEREN

Experience: Case Studies mit konkreten Ergebnissen, Vorher/Nachher.
Expertise: Autoren-Profile, Qualifikationen, Zertifizierungen auf der Website.
Authoritativeness: Externe Erwähnungen, Gastbeiträge, Branchenverzeichnisse.
Trustworthiness: Impressum, Datenschutz, SSL, Kontaktdaten, Bewertungen.

Implementiere als Checkliste die bei jedem Build validiert wird.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 11 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 8.1 — .ai-architectural-context.md aktualisieren:
- Snippet-Strategie und SnippetAnswer-Komponente
- Content-Cluster-Architektur (Pillars + Clusters)
- Interne-Verlinkung-Matrix
- E-E-A-T-Maßnahmen
- Content-Freshness-System

Schritt 8.2 — .upgrade-state.md finalisieren.

Schritt 8.3 — Handoff an Phase 12:
```
## Handoff → Phase 12 (Design System & Storybook)
- Alle Komponenten die Stories brauchen: [Vollständige Liste]
- Design-Token-Dateipfade: [Pfade]
- Animations-Tokens: [Pfade]
- Viewport-Breakpoints: [Liste]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 11
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ <SnippetAnswer /> Komponente mit FAQPage-Schema
□ 3–5 Snippet-optimierte Abschnitte pro Service-Seite
□ PAA-Fragen in FAQ-Sektionen
□ <ComparisonTable /> mit semantischer HTML-Tabelle
□ AI-Search: Glasklare Definitionen, direkte Antworten
□ 2+ Pieces mit eigenen Daten
□ Entity-Signale: NAP konsistent, Organization-Schema mit sameAs
□ <LastUpdated /> auf Service- und Blog-Seiten
□ Content-Cluster: Pillar + Cluster mit bidirektionaler Verlinkung
□ Jede Seite ≥3 eingehende interne Links
□ E-E-A-T-Checkliste implementiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 12
