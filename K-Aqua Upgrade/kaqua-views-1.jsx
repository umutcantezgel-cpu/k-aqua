// K-Aqua Redesign — Views 1: Home, Products, Solutions
const PICS = {
  house: 'https://www.k-aqua.de/Pics/products_kaqua_house.jpg',
  products: 'https://www.k-aqua.de/Pics/mobile_products.jpg',
  env: 'https://www.k-aqua.de/Pics/solutions_environmentally_friendly.jpg',
  recycle: 'https://www.k-aqua.de/Pics/solutions_recycleable.jpg',
  superior: 'https://www.k-aqua.de/Pics/solutions_superior.png',
  kaqua: 'https://www.k-aqua.de/Pics/mobile_k-aqua.jpg',
  kessel: 'https://www.k-aqua.de/Pics/mobile_kessel.jpg',
  dakks: 'https://www.k-aqua.de/Pics/news_dakks_logo.jpg',
};

/* =====================  HOME  ===================== */
function HomeView({ go }) {
  return (
    <main className="k-page">
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: 'var(--sp-12)', alignItems: 'center', paddingBlock: 'clamp(64px, 8vw, 120px)' }}>
          <div>
            <Reveal>
              <div className="k-chip" style={{ marginBottom: 'var(--sp-6)' }}>
                <Icons.Award size={15} />
                <span><strong>ISO 9001 · 14001 · 50001</strong> zertifiziert seit Oktober 2025</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="k-h1">
                Leading in <span className="k-grad-text">Water Supply.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="k-lead" style={{ fontSize: 19 }}>
                K-Aqua entwickelt und fertigt PP-R/PP-RCT-Rohrsysteme für Trinkwasser — von 20 bis 630 mm,
                in Partnerschaft mit dem Premiumhersteller KESSEL. Jahrzehnte Erfahrung, ein Ziel: Wasser sicher ans Ziel bringen.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
                <KButton size="lg" onClick={() => go('products')} icon={<Icons.ArrowRight size={18} />}>Produktsystem entdecken</KButton>
                <KButton size="lg" variant="ghost" onClick={() => go('contact')}>Kontakt aufnehmen</KButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="k-float" style={{ position: 'relative' }}>
              <Photo src={PICS.house} alt="K-Aqua PP-R/PP-RCT Rohrsystem im Gebäude" ratio="4 / 4.4" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
              <div className="k-card" style={{ position: 'absolute', left: -28, bottom: 28, padding: 'var(--sp-4) var(--sp-6)', gap: 2, maxWidth: 230 }}>
                <span className="k-stat-num" style={{ fontSize: 34 }}>20–630<span style={{ fontSize: 18, fontWeight: 600 }}> mm</span></span>
                <span className="k-stat-label" style={{ marginTop: 2 }}>Rohrdimensionen, SDR 6 bis SDR 17</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--sp-4)' }}>
            {[
              { n: '630', u: 'mm', l: 'maximale Rohrdimension im Programm' },
              { n: '5', u: 'SDR', l: 'Druckstufen: SDR 6 / 7,4 / 9 / 11 / 17' },
              { n: '3×', u: 'ISO', l: 'Qualität, Umwelt & Energie zertifiziert' },
              { n: '100', u: '%', l: 'Produktionsabfälle werden recycelt' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <BentoCard style={{ height: '100%', gap: 0 }}>
                  <span className="k-stat-num">{s.n}<span style={{ fontSize: '0.45em', fontWeight: 700, marginLeft: 3, color: 'var(--accent-strong)' }}>{s.u}</span></span>
                  <span className="k-stat-label">{s.l}</span>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO: company + partnership */}
      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead
            eyebrow="Das Unternehmen"
            title={<span>Baustofflieferant und Hersteller — <span className="k-grad-text">aus einer Hand.</span></span>}
            lead="Die KWT GmbH fertigt Rohre und Formteile für die Wasserversorgung aus verschiedenen Kunststoffen und positioniert sich damit in der Wertschöpfungskette Bau als Lieferant und Hersteller zugleich."
          />
          <div className="k-bento">
            <Reveal style={{ gridColumn: 'span 4' }}>
              <BentoCard style={{ height: '100%' }}>
                <Photo src={PICS.kessel} alt="Partnerschaft mit KESSEL" ratio="16 / 7" />
                <div>
                  <h3 className="k-h3" style={{ marginBottom: 'var(--sp-2)' }}>Starke Partnerschaft mit KESSEL</h3>
                  <p className="k-body">Mit dem Premiumhersteller KESSEL — „Leading in drainage" — verbindet uns eine enge, langjährige Partnerschaft. Diese Erfahrung aus Jahrzehnten tragen wir in die Zukunft.</p>
                </div>
                <button type="button" className="k-link" onClick={() => go('about')}>Mehr über uns <Icons.ArrowRight size={16} /></button>
              </BentoCard>
            </Reveal>
            <Reveal delay={100} style={{ gridColumn: 'span 2' }}>
              <BentoCard tint style={{ height: '100%', justifyContent: 'space-between' }}>
                <div className="k-icon-chip"><Icons.Globe size={24} /></div>
                <div>
                  <h3 className="k-h3" style={{ marginBottom: 'var(--sp-2)' }}>Weltweit bewährt</h3>
                  <p className="k-body">K-Aqua-Produkte haben sich über Jahrzehnte unzählige Male in Projekten auf der ganzen Welt bewährt.</p>
                </div>
                <button type="button" className="k-link" onClick={() => go('references')}>Referenzen <Icons.ArrowRight size={16} /></button>
              </BentoCard>
            </Reveal>
            <Reveal delay={60} style={{ gridColumn: 'span 2' }}>
              <BentoCard style={{ height: '100%' }}>
                <div className="k-icon-chip"><Icons.Shield size={24} /></div>
                <h3 className="k-h3">GENAU-Managementsystem</h3>
                <p className="k-body">Kontinuierliche Verbesserung von Arbeits-, Umwelt- und Gesundheitsschutz — nach DIN EN ISO 14001 und 50001.</p>
              </BentoCard>
            </Reveal>
            <Reveal delay={120} style={{ gridColumn: 'span 2' }}>
              <BentoCard style={{ height: '100%' }}>
                <div className="k-icon-chip"><Icons.Factory size={24} /></div>
                <h3 className="k-h3">Fertigung in Deutschland</h3>
                <p className="k-body">Entwicklung und Produktion am Standort Waldsolms — Qualität, Kosten und Termine immer im Einklang.</p>
              </BentoCard>
            </Reveal>
            <Reveal delay={180} style={{ gridColumn: 'span 2' }}>
              <BentoCard style={{ height: '100%' }}>
                <div className="k-icon-chip"><Icons.Recycle size={24} /></div>
                <h3 className="k-h3">Ökologische Verantwortung</h3>
                <p className="k-body">Ressourcenschonung und Umweltverträglichkeit sind fester Bestandteil unseres Qualitätsverständnisses.</p>
              </BentoCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="k-section">
        <div className="k-container">
          <Reveal>
            <div className="k-cta-band">
              <div style={{ position: 'relative', maxWidth: 640 }}>
                <h2 className="k-h2" style={{ marginBottom: 'var(--sp-4)' }}>Bereit für die nächste Generation der Wasserversorgung?</h2>
                <p style={{ opacity: 0.75, marginBottom: 'var(--sp-8)', fontSize: 17 }}>Sprechen Sie mit unserem Vertriebsteam über Ihr Projekt — von der Planung bis zur Schweißtechnik.</p>
                <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                  <KButton variant="inverse" size="lg" onClick={() => go('contact')} icon={<Icons.ArrowRight size={18} />}>Jetzt Kontakt aufnehmen</KButton>
                  <KButton variant="ghost" size="lg" onClick={() => go('service')}>Downloads & Service</KButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  PRODUCTS  ===================== */
function ProductsView({ go }) {
  const range = [
    { icon: 'Layers', title: 'Rohre — Mono & Multilayer', text: 'Monolayer- und glasfaserverstärkte Multilayer-Rohre in SDR 6, 7,4, 9, 11 und 17. Dimensionen von 20 mm bis 630 mm.' },
    { icon: 'Wrench', title: 'Formteile & Armaturen', text: 'Fittings von 20 mm bis 315 mm, ergänzt um Ventile, Verschraubungen und Übergangsstücke.' },
    { icon: 'Flame', title: 'Schweißtechnik & Werkzeug', text: 'Schneidwerkzeuge, Schweißgeräte und Schweißmaschinen für Muffen-, Stumpf- und Elektroschweißverfahren.' },
    { icon: 'Thermometer', title: 'Heiß- & Kaltwasser', text: 'Ausgelegt für Trinkwasser — heiß und kalt — mit hoher Temperatur- und Druckbeständigkeit über Jahrzehnte.' },
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <section className="k-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.9fr)', gap: 'var(--sp-12)', alignItems: 'center' }}>
            <div>
              <Reveal><Eyebrow>Produkte</Eyebrow></Reveal>
              <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>PP-R/PP-RCT Rohre & Formteile für <span className="k-grad-text">Trinkwasser.</span></h1></Reveal>
              <Reveal delay={140}>
                <p className="k-lead">Ein vollständiges Rohrleitungssystem für heißes und kaltes Trinkwasser — vom Rohr über das Formteil bis zur Schweißtechnik.</p>
              </Reveal>
              <Reveal delay={220}>
                <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-8)' }}>
                  <KButton href="https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf" icon={<Icons.Download size={18} />}>Produktkatalog (PDF)</KButton>
                  <KButton variant="ghost" onClick={() => go('service')}>Installationsvideos</KButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Photo src={PICS.products} alt="K-Aqua Produktprogramm" ratio="4 / 3.4" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Das System" title="Vier Bausteine, ein System." />
          <div className="k-bento">
            {range.map((r, i) => {
              const Ic = Icons[r.icon];
              return (
                <Reveal key={r.title} delay={i * 80} style={{ gridColumn: 'span 3' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div className="k-icon-chip"><Ic size={24} /></div>
                    <h3 className="k-h3">{r.title}</h3>
                    <p className="k-body">{r.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 'var(--sp-12)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <SectionHead eyebrow="Technische Daten" title="Dimensionen & Druckstufen" lead="Je nach Rohrtyp ab 20 mm bis 630 mm — Formteile bis 315 mm." />
              <KButton href="https://www.k-aqua.de/PDF/K-Aqua_Product_Features_en.pdf" variant="ghost" icon={<Icons.Download size={18} />}>Produkteigenschaften (PDF)</KButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard style={{ padding: 'var(--sp-6)' }}>
              <table className="k-table">
                <thead>
                  <tr><th>Komponente</th><th>Dimension</th><th>Druckstufen</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monolayer-Rohre</td><td>20 – 630 mm</td><td>SDR 6 / 7,4 / 9 / 11 / 17</td></tr>
                  <tr><td>Multilayer-Rohre (GF-verstärkt)</td><td>20 – 630 mm</td><td>SDR 6 / 7,4 / 9 / 11 / 17</td></tr>
                  <tr><td>Formteile</td><td>20 – 315 mm</td><td>systemkompatibel</td></tr>
                  <tr><td>Ventile & Verschraubungen</td><td>systemabhängig</td><td>—</td></tr>
                  <tr><td>Schweißtechnik & Werkzeuge</td><td>alle Dimensionen</td><td>—</td></tr>
                </tbody>
              </table>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  SOLUTIONS  ===================== */
function SolutionsView({ go }) {
  const benefits = [
    { icon: 'Leaf', img: PICS.env, title: 'Umweltfreundlich', text: 'Polypropylen entsteht aus Gasen, die früher nutzlos verbrannt wurden — und reduziert so die Luftverschmutzung drastisch. Die Produktion nutzt Wasser im geschlossenen Kühlkreislauf und schützt Flüsse, Bäche und Seen.' },
    { icon: 'Recycle', img: PICS.recycle, title: 'Recycelbar', text: 'PP trägt den Recycling-Code „5" und lässt sich sortenrein trennen. Wir recyceln sämtliche Produktionsabfälle und Verschnitte — bei hoher Nachfrage nach PP-Rezyklat.' },
    { icon: 'Shield', img: PICS.superior, title: 'Überlegen', text: 'Als technischer Kunststoff ist PP ungewöhnlich beständig gegen Lösungsmittel, Laugen und Säuren — und formt im Spritzguss komplexe Geometrien bei niedrigen Kosten und hohen Stückzahlen.' },
    { icon: 'Thermometer', img: null, title: 'Langlebig', text: 'PP-Produkte halten deutlich länger als vergleichbare Materialien: pflegeleicht, verschleißfest und beständig gegen Alterung und Temperaturextreme.' },
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <section className="k-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
        <div className="k-container" style={{ position: 'relative' }}>
          <Reveal><Eyebrow>Lösungen</Eyebrow></Reveal>
          <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>Ein <span className="k-grad-text">verantwortungsvolles</span> Produkt.</h1></Reveal>
          <Reveal delay={140}><p className="k-lead">Warum Polypropylen das richtige Material für die Wasserversorgung von morgen ist — ökologisch, technisch und wirtschaftlich.</p></Reveal>
        </div>
      </section>

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div className="k-bento">
            {benefits.map((b, i) => {
              const Ic = Icons[b.icon];
              const wide = i === 0 || i === 3;
              return (
                <Reveal key={b.title} delay={i * 80} style={{ gridColumn: `span ${wide ? 4 : 2}` }}>
                  <BentoCard tint={i === 3} style={{ height: '100%' }}>
                    {b.img ? <Photo src={b.img} alt={b.title} ratio={wide ? '16 / 6' : '16 / 9'} /> : <div className="k-icon-chip" style={{ width: 56, height: 56 }}><Ic size={28} /></div>}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                      {b.img ? <div className="k-icon-chip" style={{ width: 40, height: 40, borderRadius: 12 }}><Ic size={20} /></div> : null}
                      <h3 className="k-h3">{b.title}</h3>
                    </div>
                    <p className="k-body">{b.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container" style={{ textAlign: 'center' }}>
          <Reveal>
            <SectionHead align="center" eyebrow="Nächster Schritt" title="Vom Material zum System." lead="Sehen Sie, wie diese Materialvorteile im K-Aqua Produktprogramm konkret werden." />
            <KButton size="lg" onClick={() => go('products')} icon={<Icons.ArrowRight size={18} />}>Zum Produktprogramm</KButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeView, ProductsView, SolutionsView, PICS });
