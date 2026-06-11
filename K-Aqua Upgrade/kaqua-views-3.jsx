// K-Aqua Redesign — Views 3: Produktfinder + CO₂-Rechner
const { useState: useS3, useMemo: useMemo3, useEffect: useE3 } = React;

/* ---------- product data model (derived from SDR geometry) ---------- */
const K_DIMS = [20, 25, 32, 40, 50, 63, 75, 90, 110, 125, 160, 200, 250, 315, 400, 500, 630];
const K_SDRS = [6, 7.4, 9, 11, 17];
const K_TYPES = [
  { id: 'mono', label: 'PP-R Monolayer', short: 'PP-R' },
  { id: 'fiber', label: 'PP-RCT Faserverbund (GF)', short: 'K-Fiber' },
  { id: 'fitting', label: 'Formteile', short: 'Fitting' },
];

function buildCatalog() {
  const rows = [];
  K_TYPES.forEach((t) => {
    K_DIMS.forEach((d) => {
      if (t.id === 'fitting' && d > 315) return;
      const sdrs = t.id === 'fitting' ? [null] : K_SDRS;
      sdrs.forEach((sdr) => {
        const wall = sdr ? Math.max(1.9, Math.round((d / sdr) * 10) / 10) : null;
        rows.push({
          type: t.id,
          typeLabel: t.label,
          short: t.short,
          d,
          sdr,
          wall,
          di: wall ? Math.round((d - 2 * wall) * 10) / 10 : null,
          pn: sdr ? ({ 6: 'PN 20', 7.4: 'PN 16', 9: 'PN 12,5', 11: 'PN 10', 17: 'PN 6' })[sdr] : '—',
        });
      });
    });
  });
  return rows;
}
const K_CATALOG = buildCatalog();

/* =====================  PRODUKTFINDER  ===================== */
function FinderView({ go }) {
  const [types, setTypes] = useS3(['mono', 'fiber']);
  const [sdrs, setSdrs] = useS3([]);
  const [maxD, setMaxD] = useS3(630);
  const [interacted, setInteracted] = useS3(false);

  const toggle = (arr, set, v) => {
    set(arr.includes(v) ? arr.filter((x) => x !== v) : arr.concat(v));
    if (!interacted) { setInteracted(true); KGame.award('use_finder'); }
  };

  const rows = useMemo3(() => K_CATALOG.filter((r) =>
    (types.length === 0 || types.includes(r.type)) &&
    (sdrs.length === 0 || (r.sdr && sdrs.includes(r.sdr))) &&
    r.d <= maxD
  ), [types, sdrs, maxD]);

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Produktfinder" title={<span>Keine PDF-Wüste. <span className="k-grad-text">Sofort Daten.</span></span>}
        lead="Statt 220-seitiger Kataloge: Filtern Sie das komplette PP-R/PP-RCT-System interaktiv — Dimension, Druckstufe, Wandstärke, alles live." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.62fr) minmax(0, 1.38fr)', gap: 'var(--sp-8)', alignItems: 'start' }}>
          <div className="k-sticky-result" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
            <BentoCard>
              <h3 className="k-h3" style={{ fontSize: 17 }}>Produkttyp</h3>
              <div className="k-chips">
                {K_TYPES.map((t) => (
                  <button key={t.id} type="button" className={`k-filter-chip ${types.includes(t.id) ? 'is-on' : ''}`}
                    aria-pressed={types.includes(t.id)} onClick={() => toggle(types, setTypes, t.id)}>{t.short}</button>
                ))}
              </div>
              <h3 className="k-h3" style={{ fontSize: 17, marginTop: 8 }}>Druckstufe (SDR)</h3>
              <div className="k-chips">
                {K_SDRS.map((s) => (
                  <button key={s} type="button" className={`k-filter-chip ${sdrs.includes(s) ? 'is-on' : ''}`}
                    aria-pressed={sdrs.includes(s)} onClick={() => toggle(sdrs, setSdrs, s)}>SDR {String(s).replace('.', ',')}</button>
                ))}
              </div>
              <h3 className="k-h3" style={{ fontSize: 17, marginTop: 8 }}>Max. Außendurchmesser</h3>
              <input type="range" className="k-range" min="20" max="630" step="5" value={maxD}
                aria-label="Maximaler Außendurchmesser in Millimetern"
                onChange={(e) => { setMaxD(+e.target.value); if (!interacted) { setInteracted(true); KGame.award('use_finder'); } }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--muted-foreground)' }}>
                <span>d20</span>
                <strong style={{ color: 'var(--primary)', fontSize: 17 }}>bis d{maxD}</strong>
                <span>d630</span>
              </div>
            </BentoCard>
            <BentoCard tint style={{ gap: 'var(--sp-2)' }}>
              <span className="k-result-num" style={{ fontSize: 44 }}>{rows.length}</span>
              <span className="k-body">Artikelvarianten gefunden — jede sofort mit Wandstärke, Innendurchmesser und Nenndruck.</span>
              <KButton size="sm" variant="ghost" href="https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf" icon={<Icons.Download size={16} />}>Katalog (PDF)</KButton>
            </BentoCard>
          </div>

          <BentoCard style={{ padding: 'var(--sp-4)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto', maxHeight: 560, overflowY: 'auto' }}>
              <table className="k-table">
                <thead style={{ position: 'sticky', top: 0, background: 'var(--card)', zIndex: 1 }}>
                  <tr><th>Typ</th><th>d (mm)</th><th>SDR</th><th>Wand (mm)</th><th>di (mm)</th><th>Nenndruck</th></tr>
                </thead>
                <tbody>
                  {rows.slice(0, 120).map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, color: 'var(--foreground)' }}>{r.short}</td>
                      <td>{r.d}</td>
                      <td>{r.sdr ? String(r.sdr).replace('.', ',') : '—'}</td>
                      <td>{r.wall ?? '—'}</td>
                      <td>{r.di ?? '—'}</td>
                      <td>{r.pn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {rows.length > 120 ? <p className="k-body" style={{ padding: 'var(--sp-3)', fontSize: 13.5 }}>+ {rows.length - 120} weitere — Filter verfeinern für die volle Liste.</p> : null}
              {rows.length === 0 ? <p className="k-body" style={{ padding: 'var(--sp-6)', textAlign: 'center' }}>Keine Treffer — Filter lockern.</p> : null}
            </div>
          </BentoCard>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container" style={{ textAlign: 'center' }}>
          <SectionHead align="center" eyebrow="Weiterdenken" title="Wie klimafreundlich ist Ihre Planung?"
            lead="Übergeben Sie Dimension und Länge direkt an den CO₂-Rechner und vergleichen Sie gegen Kupfer, Edelstahl und PVC." />
          <KButton size="lg" onClick={() => go('co2')} icon={<Icons.ArrowRight size={18} />}>Zum CO₂-Rechner</KButton>
        </div>
      </section>
    </main>
  );
}

/* =====================  CO₂-RECHNER  ===================== */
/* Demonstrationsfaktoren (kg CO₂e pro Meter, dimensionsskaliert) — finale Werte
   gehören aus ecoinvent/produktspezifischen EPDs (Typ III, EN 15804). */
const K_MATERIALS = [
  { id: 'kaqua', label: 'K-Aqua PP-RCT', factor: 1.0, color: 'var(--primary)' },
  { id: 'pvc', label: 'PVC-C', factor: 1.6, color: 'oklch(0.62 0.02 300)' },
  { id: 'copper', label: 'Kupfer', factor: 4.4, color: 'oklch(0.55 0.1 50)' },
  { id: 'steel', label: 'Edelstahl', factor: 5.2, color: 'oklch(0.5 0.01 260)' },
];
function co2PerMeter(d, sdr) {
  // mass ∝ ring cross-section; base PP ≈ 1.9 kg CO2e/kg, density 0.9 → demo formula
  const wall = d / sdr;
  const area = Math.PI * (d - wall) * wall; // mm²
  return area * 0.9 * 1.9 / 1000; // kg CO2e per meter (demo)
}

function CO2View({ go }) {
  const [d, setD] = useS3(110);
  const [len, setLen] = useS3(500);
  const [sdr, setSdr] = useS3(11);
  const [used, setUsed] = useS3(false);

  const mark = () => { if (!used) { setUsed(true); KGame.award('use_co2'); } };

  const base = co2PerMeter(d, sdr) * len;
  const results = K_MATERIALS.map((m) => ({ ...m, total: base * m.factor }));
  const worst = Math.max(...results.map((r) => r.total));
  const saved = Math.max(...results.filter((r) => r.id !== 'kaqua').map((r) => r.total)) - base;
  const trees = Math.round(saved / 25);     // ~25 kg CO2/Baum/Jahr
  const carKm = Math.round(saved / 0.15);   // ~0,15 kg CO2e/km Pkw

  const fmt = (n) => n >= 1000 ? (n / 1000).toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' t' : Math.round(n).toLocaleString('de-DE') + ' kg';

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="CO₂- & Lebenszyklus-Rechner" title={<span>Rechnen Sie <span className="k-grad-text">grün.</span></span>}
        lead="Modellieren Sie Ihr Bauvorhaben und vergleichen Sie das K-Aqua-System direkt mit Kupfer, Edelstahl und PVC — als Argument für LEED, BREEAM und DGNB." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: 'var(--sp-8)', alignItems: 'start' }}>
          <BentoCard>
            <h3 className="k-h3">Ihr Bauvorhaben</h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <label htmlFor="co2-d" style={{ fontWeight: 600, fontSize: 15 }}>Nennweite</label>
                <strong style={{ color: 'var(--primary)' }}>d{d}</strong>
              </div>
              <input id="co2-d" type="range" className="k-range" min="20" max="250" step="5" value={d}
                onChange={(e) => { setD(+e.target.value); mark(); }} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <label htmlFor="co2-len" style={{ fontWeight: 600, fontSize: 15 }}>Leitungslänge</label>
                <strong style={{ color: 'var(--primary)' }}>{len.toLocaleString('de-DE')} m</strong>
              </div>
              <input id="co2-len" type="range" className="k-range" min="50" max="10000" step="50" value={len}
                onChange={(e) => { setLen(+e.target.value); mark(); }} />
            </div>
            <div>
              <span style={{ fontWeight: 600, fontSize: 15, display: 'block', marginBottom: 8 }}>SDR-Klasse</span>
              <div className="k-chips">
                {[6, 7.4, 9, 11].map((s) => (
                  <button key={s} type="button" className={`k-filter-chip ${sdr === s ? 'is-on' : ''}`}
                    aria-pressed={sdr === s} onClick={() => { setSdr(s); mark(); }}>SDR {String(s).replace('.', ',')}</button>
                ))}
              </div>
            </div>
            <p className="k-body" style={{ fontSize: 13, marginTop: 4 }}>
              Demonstrationswerte. Verbindliche Faktoren liefert die ecoinvent-Datenbank bzw. produktspezifische Typ-III-EPDs (EN 15804).
            </p>
          </BentoCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <BentoCard tint style={{ gap: 'var(--sp-2)' }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Ersparnis vs. bester Metall-Alternative</span>
              <span className="k-result-num">{fmt(saved)}</span>
              <span className="k-body">CO₂-Äquivalent über die Errichtungsphase — entspricht der Jahres-Absorption von <strong style={{ color: 'var(--foreground)' }}>{trees.toLocaleString('de-DE')} Bäumen</strong> oder <strong style={{ color: 'var(--foreground)' }}>{carKm.toLocaleString('de-DE')} Pkw-Kilometern</strong>.</span>
            </BentoCard>
            <BentoCard>
              <h3 className="k-h3" style={{ fontSize: 17 }}>Systemvergleich (kg CO₂e gesamt)</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {results.map((r) => (
                  <div key={r.id} className="k-bar-row">
                    <span style={{ fontSize: 14.5, fontWeight: r.id === 'kaqua' ? 700 : 500, color: r.id === 'kaqua' ? 'var(--primary)' : 'var(--muted-foreground)' }}>{r.label}</span>
                    <div className="k-bar-track">
                      <div className="k-bar-fill" style={{ width: `${Math.max(4, (r.total / worst) * 100)}%`, background: r.color }}></div>
                    </div>
                    <span style={{ fontSize: 14.5, fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{fmt(r.total)}</span>
                  </div>
                ))}
              </div>
            </BentoCard>
            <BentoCard style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--sp-4)' }}>
              <div className="k-icon-chip"><Icons.Award size={24} /></div>
              <p className="k-body" style={{ fontSize: 14.5 }}>
                <strong style={{ color: 'var(--foreground)' }}>Auditor-Cockpit:</strong> EPD-Nachweise, ISO-Zertifikate und GAEB-Texte als Paket — im <button type="button" className="k-link" style={{ minHeight: 0, display: 'inline' }} onClick={() => go('trust')}>Trust Center</button>.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { FinderView, CO2View, K_CATALOG });
