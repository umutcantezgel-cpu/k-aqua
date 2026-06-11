// K-Aqua Redesign — Views 4: Trust Center, KESSEL-Partnerschaft, Academy + Quiz
const { useState: useS4 } = React;

/* =====================  TRUST CENTER  ===================== */
const K_DOCS = [
  'ISO 9001:2015 Zertifikat (DE/EN)',
  'ISO 14001:2015 Zertifikat (DE/EN)',
  'ISO 50001:2018 Zertifikat (DE/EN)',
  'GENAU-Politik & Risikobewertung',
  'Trinkwasser-Konformität (DVGW/KTW)',
  'EPD-Datenblätter (Typ III, EN 15804)',
  'GAEB-Ausschreibungstexte',
  'Qualitätssicherungs-Handbuch',
];

function TrustView({ go }) {
  const [picked, setPicked] = useS4([]);
  const [genauTab, setGenauTab] = useS4(0);
  const togglePick = (d) => {
    const next = picked.includes(d) ? picked.filter((x) => x !== d) : picked.concat(d);
    setPicked(next);
    if (next.length >= 3) KGame.award('build_docs');
  };
  const genau = [
    { k: 'G', t: 'Gesundheit', d: 'Arbeits- und Gesundheitsschutz mit kontinuierlicher Gefahrenermittlung — jeder Mitarbeitende ist verpflichtet, Risiken aktiv zu melden.' },
    { k: 'E', t: 'Energie', d: 'Optimierung der Energieeffizienz nach ISO 50001 — vom Extruder bis zum geschlossenen Kühlwasserkreislauf.' },
    { k: 'N', t: 'Nachhaltigkeit', d: '100 % der Schnittreste und Produktionsabfälle gehen zurück in den Wertstoffkreislauf.' },
    { k: 'A', t: 'Arbeitssicherheit', d: 'Prävention und Risikobewertung als tägliche Praxis — nicht als jährliche Pflichtübung.' },
    { k: 'U', t: 'Umwelt', d: 'Umweltmanagement nach ISO 14001: Ressourcenschonung ist Teil des Qualitätsverständnisses.' },
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Trust Center" title={<span>Vertrauen ist <span className="k-grad-text">messbar.</span></span>}
        lead="Zertifikate, GENAU-Framework und Audit-Dokumente — als Self-Service. Kein tagelanges Warten auf manuelle Zusendung." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--sp-4)' }}>
            {[
              ['ISO 9001:2015', 'Qualitätsmanagement', 'Q-2025-6732'],
              ['ISO 14001:2015', 'Umweltmanagement', 'U-2025-6733'],
              ['ISO 50001:2018', 'Energiemanagement', 'E-2025-6734'],
            ].map(([code, label, no], i) => (
              <Reveal key={code} delay={i * 80}>
                <BentoCard style={{ height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="k-icon-chip"><Icons.Award size={24} /></div>
                    <span className="k-chip" style={{ fontSize: 12 }}>DAkkS-akkreditiert</span>
                  </div>
                  <h3 className="k-h3">{code}</h3>
                  <p className="k-body" style={{ marginTop: -8 }}>{label}</p>
                  <table className="k-table" style={{ fontSize: 13.5 }}>
                    <tbody>
                      <tr><td style={{ padding: '6px 0' }}>Zertifikat-Nr.</td><td style={{ padding: '6px 0', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{no}</td></tr>
                      <tr><td style={{ padding: '6px 0' }}>Gültig</td><td style={{ padding: '6px 0', textAlign: 'right' }}>10/2025 – 10/2028</td></tr>
                    </tbody>
                  </table>
                  <KButton size="sm" variant="ghost" href="https://www.k-aqua.de/PDF/KWT%20Zertifikat%20Deutsch.pdf" icon={<Icons.Download size={16} />}>Download</KButton>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 'var(--sp-12)', alignItems: 'start' }}>
          <Reveal>
            <SectionHead eyebrow="GENAU-Framework" title="Fünf Buchstaben. Ein System."
              lead="Das GENAU-Managementsystem ist im House of KWT verankert — klicken Sie sich durch die fünf Säulen." />
          </Reveal>
          <Reveal delay={100}>
            <div>
              <div className="k-chips" style={{ marginBottom: 'var(--sp-4)' }}>
                {genau.map((g, i) => (
                  <button key={g.k} type="button" className={`k-filter-chip ${genauTab === i ? 'is-on' : ''}`}
                    aria-pressed={genauTab === i} onClick={() => setGenauTab(i)}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 18, minWidth: 56 }}>{g.k}</button>
                ))}
              </div>
              <BentoCard tint>
                <h3 className="k-h3">{genau[genauTab].t}</h3>
                <p className="k-body">{genau[genauTab].d}</p>
              </BentoCard>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="k-section">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-8)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <SectionHead eyebrow="Self-Service" title="Ihr RFP-Dokumentenpaket."
                lead="Stellen Sie Ihr Audit- und Ausschreibungspaket selbst zusammen — statt tagelang auf manuelle Zusendung zu warten." />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {K_DOCS.map((doc) => (
                  <label key={doc} className={`k-doc-check ${picked.includes(doc) ? 'is-on' : ''}`}>
                    <input type="checkbox" checked={picked.includes(doc)} onChange={() => togglePick(doc)} />
                    <span>{doc}</span>
                  </label>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint className="k-sticky-result" style={{ gap: 'var(--sp-3)' }}>
              <div className="k-icon-chip"><Icons.FileText size={24} /></div>
              <span className="k-result-num" style={{ fontSize: 44 }}>{picked.length}<span style={{ fontSize: 20, color: 'var(--muted-foreground)', fontWeight: 600 }}> / {K_DOCS.length}</span></span>
              <p className="k-body">Dokumente im Paket. {picked.length === 0 ? 'Wählen Sie links aus.' : 'Per Klick als ZIP anfordern:'}</p>
              <KButton href={`mailto:support@k-aqua.de?subject=RFP-Dokumentenpaket&body=${encodeURIComponent('Bitte senden Sie mir folgende Dokumente:\n\n- ' + picked.join('\n- '))}`}
                icon={<Icons.ArrowUpRight size={18} />}>{picked.length ? `Paket anfordern (${picked.length})` : 'Paket anfordern'}</KButton>
              <p className="k-body" style={{ fontSize: 13 }}>Scope-3-Emissionsdaten und EPD-Rohdaten auf Anfrage — proaktive Transparenz statt Pflichterfüllung.</p>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  KESSEL-PARTNERSCHAFT  ===================== */
function PartnerView({ go }) {
  const [ring, setRing] = useS4(0);
  const rings = [
    { label: 'Kernmarke', title: 'KESSEL — Leading in Drainage', text: 'Premiumhersteller der Entwässerungstechnik. Weltleitmessen wie die ISH, das PlanerPortal und das KundenForum machen KESSEL zur Autorität der TGA-Branche.' },
    { label: 'System', title: 'K-Aqua — Leading in Water Supply', text: 'Die Versorgungsseite derselben Ingenieurs-DNA: vollständiges PP-R/PP-RCT-System d20–d630, gefertigt in Deutschland. Entwässerung und Versorgung aus einer Wertegemeinschaft.' },
    { label: 'Service', title: 'Gemeinsames Ökosystem', text: 'Planer profitieren doppelt: Schulungen, Schweißtechnik-Support und digitale Planungswerkzeuge — perspektivisch bis zum parametrischen Rohrnetz-Konfigurator.' },
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Partnerschaft" title={<span>Zwei Marken. <span className="k-grad-text">Eine Haltung.</span></span>}
        lead="Die enge, jahrzehntelange Partnerschaft mit KESSEL überträgt Premium-Vertrauen aus der Entwässerung in die Wasserversorgung." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-12)', alignItems: 'center' }}>
          <Reveal>
            <div className="k-onion" role="tablist" aria-label="Zwiebelschalenmodell der Partnerschaft">
              {rings.map((r, i) => {
                const inset = i * 16.5;
                return (
                  <button key={r.label} type="button" role="tab" aria-selected={ring === i}
                    className={`k-onion-ring ${ring === i ? 'is-on' : ''}`}
                    style={{ inset: `${inset}%` }}
                    onClick={() => setRing(i)}>
                    <span className="k-onion-label">{r.label}</span>
                  </button>
                );
              })}
              <div style={{ position: 'absolute', inset: '33%', borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--primary)', color: 'var(--primary-foreground)', pointerEvents: 'none' }}>
                <Icons.Droplet size={36} strokeWidth={1.6} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint>
              <span className="k-eyebrow" style={{ marginBottom: 0 }}>{rings[ring].label}</span>
              <h3 className="k-h3" style={{ fontSize: 24 }}>{rings[ring].title}</h3>
              <p className="k-body">{rings[ring].text}</p>
            </BentoCard>
          </Reveal>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Warum PP-R/PP-RCT" title="Das Rückgrat des Produktversprechens." />
          <div className="k-bento">
            {[
              { icon: 'Shield', t: 'Absolute Korrosionsfreiheit', d: 'Immun gegen elektrochemische Korrosion — kein Lochfraß, keine Rohrbrüche wie bei Kupfer oder verzinktem Stahl.' },
              { icon: 'Thermometer', t: 'Thermische Effizienz', d: 'Minimaler Wärmeverlust in der Warmwasserzirkulation — direkte Energieeinsparung über Jahrzehnte.' },
              { icon: 'Droplet', t: 'Hygienische Neutralität', d: 'Geschmacks- und geruchsneutral; die extrem glatte Innenoberfläche verhindert Biofilm und Inkrustation.' },
            ].map((c, i) => {
              const Ic = Icons[c.icon];
              return (
                <Reveal key={c.t} delay={i * 80} style={{ gridColumn: 'span 2' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div className="k-icon-chip"><Ic size={24} /></div>
                    <h3 className="k-h3">{c.t}</h3>
                    <p className="k-body">{c.d}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================  ACADEMY + QUIZ  ===================== */
const K_QUIZ = [
  { q: 'Welches Schweißverfahren ist für Großdimensionen (z. B. d630) Standard?', opts: ['Muffenschweißen von Hand', 'Stumpfschweißen (Butt Fusion)', 'Kleben'], a: 1 },
  { q: 'Wofür steht SDR bei Rohrsystemen?', opts: ['Standard Dimension Ratio (d/s)', 'Static Density Rating', 'Sicherheits-Druck-Reserve'], a: 0 },
  { q: 'Was unterscheidet PP-RCT von klassischem PP-R?', opts: ['Niedrigerer Preis', 'Modifizierte Kristallstruktur → mehr Temperatur- & Druckreserve', 'Metallische Verstärkung'], a: 1 },
  { q: 'Welchen Recycling-Code trägt Polypropylen?', opts: ['Code 3', 'Code 5', 'Code 7'], a: 1 },
  { q: 'Beim Elektroschweißen (Electrofusion) kommt die Wärme …', opts: ['aus einem Heizelement-Spiegel', 'aus eingebetteten Heizwendeln im Fitting', 'aus Heißluft'], a: 1 },
];

function AcademyView() {
  const [step, setStep] = useS4(-1);   // -1 = intro, 0..n-1 = question, n = result
  const [answers, setAnswers] = useS4([]);
  const [chosen, setChosen] = useS4(null);

  const videos = [
    { title: 'Muffenschweißen von Hand', sub: 'bis d63 — Handschweißgerät', href: 'https://www.youtube.com/watch?v=d56p048YB2o&t=20s' },
    { title: 'Muffenschweißen mit Maschine', sub: 'mittlere Dimensionen', href: 'https://www.youtube.com/watch?v=yD99teROIKc&t=59s' },
    { title: 'Elektroschweißen', sub: 'Heizwendel-Fittings', href: 'https://www.youtube.com/watch?v=ob2wMFZgm0k' },
    { title: 'Stumpfschweißen', sub: 'Großdimensionen bis d630', href: 'https://www.youtube.com/watch?v=Ws7-whaL-q8&t=43s' },
  ];

  const answer = (i) => {
    if (chosen !== null) return;
    setChosen(i);
    setTimeout(() => {
      const next = answers.concat(i);
      setAnswers(next);
      setChosen(null);
      const s = step + 1;
      setStep(s);
      if (s === K_QUIZ.length) {
        const correct = next.filter((x, j) => x === K_QUIZ[j].a).length;
        KGame.award('quiz_done');
        if (correct === K_QUIZ.length) KGame.award('quiz_perfect');
      }
    }, 850);
  };

  const correct = answers.filter((x, j) => x === K_QUIZ[j]?.a).length;

  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="K-Aqua Academy" title={<span>Wissen, das <span className="k-grad-text">verbindet.</span></span>}
        lead="Vier Schweißverfahren im Video — und ein Quiz, das Sie zum Schweiß-Meister macht. Optimiert für die Baustelle: große Ziele, hohe Kontraste." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--sp-4)' }}>
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <a href={v.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div style={{ aspectRatio: '16 / 9', borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, var(--inverse-surface), oklch(0.3 0.08 302))', display: 'grid', placeItems: 'center', color: '#fff' }}>
                      <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'oklch(1 0 0 / 0.15)', display: 'grid', placeItems: 'center', border: '1px solid oklch(1 0 0 / 0.3)' }}>
                        <Icons.Play size={24} strokeWidth={1.8} />
                      </span>
                    </div>
                    <h3 className="k-h3" style={{ fontSize: 16.5 }}>{v.title}</h3>
                    <p className="k-body" style={{ fontSize: 13.5, marginTop: -8 }}>{v.sub}</p>
                  </BentoCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container" style={{ maxWidth: 760 }}>
          <SectionHead align="center" eyebrow="Schweiß-Meister-Quiz" title="Fünf Fragen. Ein Abzeichen." />
          <BentoCard style={{ minHeight: 320 }}>
            {step === -1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'center', textAlign: 'center', margin: 'auto' }}>
                <div className="k-icon-chip" style={{ width: 64, height: 64 }}><Icons.Flame size={32} /></div>
                <p className="k-body">Testen Sie Ihr Verarbeitungs-Wissen zu PP-R/PP-RCT. Fehlerfrei = Abzeichen „Schweiß-Meister" (+75 Punkte).</p>
                <KButton onClick={() => { setStep(0); setAnswers([]); }} icon={<Icons.ArrowRight size={18} />}>Quiz starten</KButton>
              </div>
            ) : step < K_QUIZ.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--primary)' }}>Frage {step + 1} / {K_QUIZ.length}</span>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {K_QUIZ.map((_, i) => (
                      <span key={i} style={{ width: 22, height: 5, borderRadius: 3, background: i < step ? 'var(--primary)' : i === step ? 'var(--accent-strong)' : 'var(--card-border)' }}></span>
                    ))}
                  </div>
                </div>
                <h3 className="k-h3">{K_QUIZ[step].q}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  {K_QUIZ[step].opts.map((o, i) => (
                    <button key={o} type="button" disabled={chosen !== null}
                      className={`k-quiz-opt ${chosen !== null && i === K_QUIZ[step].a ? 'is-correct' : ''} ${chosen === i && i !== K_QUIZ[step].a ? 'is-wrong' : ''}`}
                      onClick={() => answer(i)}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary)', width: 22 }}>{String.fromCharCode(65 + i)}</span>
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'center', textAlign: 'center', margin: 'auto' }}>
                <div className="k-icon-chip" style={{ width: 64, height: 64, background: correct === K_QUIZ.length ? 'var(--primary)' : undefined, color: correct === K_QUIZ.length ? 'var(--primary-foreground)' : undefined }}>
                  <Icons.Award size={32} />
                </div>
                <span className="k-result-num" style={{ fontSize: 52 }}>{correct}/{K_QUIZ.length}</span>
                <p className="k-body">
                  {correct === K_QUIZ.length ? 'Perfekt — Abzeichen „Schweiß-Meister" verdient!' : correct >= 3 ? 'Solide! Abzeichen „Schweiß-Geselle" gesichert. Für den Meister: alle fünf richtig.' : 'Die Videos oben helfen — danach klappt der Meister.'}
                </p>
                <KButton variant="ghost" onClick={() => { setStep(-1); setAnswers([]); }}>Nochmal versuchen</KButton>
              </div>
            )}
          </BentoCard>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { TrustView, PartnerView, AcademyView });
