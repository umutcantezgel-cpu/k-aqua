// K-Aqua Redesign — Views 2: Service, References, About, News, Career, Contact, Imprint

function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="k-section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--hero-wash)', pointerEvents: 'none' }}></div>
      <div className="k-container" style={{ position: 'relative' }}>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}><h1 className="k-h1" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)' }}>{title}</h1></Reveal>
        {lead ? <Reveal delay={140}><p className="k-lead">{lead}</p></Reveal> : null}
      </div>
    </section>
  );
}

/* =====================  SERVICE  ===================== */
function ServiceView() {
  const downloads = [
    { title: 'K-Aqua Produktprogramm', sub: 'Vollständiger Katalog mit Dimensionen & Artikeln', href: 'https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf' },
    { title: 'K-Aqua Produkteigenschaften', sub: 'Technische Eigenschaften & Materialdaten', href: 'https://www.k-aqua.de/PDF/K-Aqua_Product_Features_en.pdf' },
    { title: 'K-Aqua Qualitätssicherung', sub: 'Prüfverfahren & Qualitätsstandards', href: 'https://www.k-aqua.de/PDF/K-Aqua_Quality_Assurance_en.pdf' },
  ];
  const videos = [
    { title: 'Muffenschweißen mit Handschweißgerät', sub: 'PP-R/PP-RCT Rohr & Formteil', href: 'https://www.youtube.com/watch?v=d56p048YB2o&t=20s' },
    { title: 'Muffenschweißen mit Schweißmaschine', sub: 'PP-R Socket Welding', href: 'https://www.youtube.com/watch?v=yD99teROIKc&t=59s' },
    { title: 'Elektroschweißen (Electrofusion)', sub: 'PP-R/PP-RCT Rohr & Formteil', href: 'https://www.youtube.com/watch?v=ob2wMFZgm0k' },
    { title: 'Stumpfschweißen (Butt Fusion)', sub: 'PP-R/PP-RCT Großdimensionen', href: 'https://www.youtube.com/watch?v=Ws7-whaL-q8&t=43s' },
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Service" title={<span>Kunden&shy;service & <span className="k-grad-text">Know-how.</span></span>}
        lead="Technische Unterlagen zum Download und Schritt-für-Schritt-Videos zu allen Schweißverfahren." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <SectionHead eyebrow="Downloads" title="Technische Unterlagen" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-4)' }}>
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <a href={d.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <BentoCard style={{ height: '100%', flexDirection: 'row', alignItems: 'center', gap: 'var(--sp-4)' }}>
                    <div className="k-icon-chip"><Icons.FileText size={24} /></div>
                    <div style={{ flex: 1 }}>
                      <h3 className="k-h3" style={{ fontSize: 17 }}>{d.title}</h3>
                      <p className="k-body" style={{ fontSize: 14 }}>{d.sub}</p>
                    </div>
                    <Icons.Download size={20} style={{ color: 'var(--primary)' }} />
                  </BentoCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Installation" title="Schweißverfahren im Video" lead="Vier Verfahren, vier Videos — direkt aus der Praxis." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--sp-4)' }}>
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <a href={v.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div style={{ aspectRatio: '16 / 9', borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, var(--inverse-surface), oklch(0.3 0.08 302))', display: 'grid', placeItems: 'center', color: '#fff' }}>
                      <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'oklch(1 0 0 / 0.15)', backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', border: '1px solid oklch(1 0 0 / 0.3)' }}>
                        <Icons.Play size={26} strokeWidth={1.8} />
                      </span>
                    </div>
                    <h3 className="k-h3" style={{ fontSize: 17 }}>{v.title}</h3>
                    <p className="k-body" style={{ fontSize: 14, marginTop: -8 }}>{v.sub}</p>
                  </BentoCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================  REFERENCES  ===================== */
function ReferencesView({ go }) {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Referenzen" title={<span>Weltweit <span className="k-grad-text">bewährt.</span></span>}
        lead="Über Jahrzehnte haben sich K-Aqua-Produkte unzählige Male in Projekten auf der ganzen Welt bewährt. Die Referenzen spiegeln die umfangreichen Einsatzmöglichkeiten des Systems wider." />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-4)' }}>
            {['Wohnungsbau & Hochhäuser', 'Hotels & öffentliche Gebäude', 'Industrie & Infrastruktur'].map((t, i) => (
              <Reveal key={t} delay={i * 80}>
                <BentoCard style={{ height: '100%' }}>
                  <div style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--card-border)', background: 'var(--background-subtle)', position: 'relative' }}>
                    <image-slot id={'ref-' + i} placeholder={'Projektfoto: ' + t} shape="rect" fit="cover" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
                  </div>
                  <h3 className="k-h3" style={{ fontSize: 18 }}>{t}</h3>
                </BentoCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="k-body" style={{ marginTop: 'var(--sp-8)', fontSize: 14.5 }}>
              Hinweis: Die Original-Website listet keine einzelnen Referenzprojekte. Diese Kategorien sind Vorschläge — echte Projektfotos und Namen sollten vom Kunden geliefert werden.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  ABOUT  ===================== */
function AboutView({ go }) {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Über uns" title={<span>Erfahrung ist Ihr <span className="k-grad-text">Vorteil.</span></span>}
        lead="Neue Strategien, gewachsenes Wissen: Die KWT GmbH verbindet jahrzehntelange Fertigungserfahrung mit einem klaren Blick nach vorn." />

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-12)', alignItems: 'center' }}>
          <Reveal>
            <Photo src={PICS.kaqua} alt="K-Aqua Produktion" ratio="4 / 3" radius="var(--radius-lg)" style={{ boxShadow: 'var(--shadow-lift)' }} />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="k-h2" style={{ marginBottom: 'var(--sp-4)' }}>K-Aqua — Leading in Water Supply</h2>
              <p className="k-body" style={{ marginBottom: 'var(--sp-4)' }}>
                Das Geschäftsfeld der KWT GmbH ist die Fertigung von Rohren und Formteilen für die Wasserversorgung aus verschiedenen Kunststoffen. Damit positioniert sich das Unternehmen in der Wertschöpfungskette Bau als Baustofflieferant und Hersteller.
              </p>
              <p className="k-body">
                Mit dem Premiumhersteller KESSEL — „Leading in drainage" — besteht eine enge und langjährige Partnerschaft. Mit dieser Erfahrung aus Jahrzehnten tragen wir unseren Erfolg in die Zukunft.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="k-section k-section--subtle">
        <div className="k-container">
          <SectionHead eyebrow="Unternehmenspolitik" title="Nutzen entsteht im Zusammenspiel."
            lead="Kein Kundennutzen ohne Mitarbeiternutzen, kein Mitarbeiternutzen ohne Unternehmensnutzen — und kein Unternehmensnutzen ohne Nutzen für Umwelt und Mitwelt." />
          <div className="k-bento">
            {[
              { icon: 'Users', title: 'Menschen im Mittelpunkt', text: 'Alle Mitarbeitenden sind in den kontinuierlichen Verbesserungsprozess eingebunden — Qualität bleibt dabei stets mit Kosten und Terminen vereinbar.' },
              { icon: 'Handshake', title: 'Verlässlichkeit', text: 'Wünsche von Kunden und allen Interessierten werden unter Einhaltung gesetzlicher und sozialer Standards erkannt, ernst genommen und umgesetzt.' },
              { icon: 'Leaf', title: 'Ökologische Verantwortung', text: 'Alle Unternehmensaktivitäten erfolgen unter Beachtung von Ressourcenschonung, Umweltverträglichkeit und strikter Einhaltung aller Verpflichtungen.' },
            ].map((c, i) => {
              const Ic = Icons[c.icon];
              return (
                <Reveal key={c.title} delay={i * 80} style={{ gridColumn: 'span 2' }}>
                  <BentoCard style={{ height: '100%' }}>
                    <div className="k-icon-chip"><Ic size={24} /></div>
                    <h3 className="k-h3">{c.title}</h3>
                    <p className="k-body">{c.text}</p>
                  </BentoCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: 'var(--sp-12)', alignItems: 'start' }}>
          <Reveal>
            <div>
              <SectionHead eyebrow="GENAU-Managementsystem" title="Genau hinschauen. Genau verbessern."
                lead="Das GENAU-Managementsystem ist in das House of KWT integriert und damit ein zentrales Element unserer Philosophie." />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                {[
                  'Kontinuierliche Verbesserung von Arbeits-, Umwelt- und Gesundheitsschutz',
                  'Optimierung der Energieeffizienz',
                  'Prävention, laufende Gefahrenermittlung und Risikobewertung',
                  'Jeder Mitarbeitende ist verpflichtet, Gefahren zu melden und aktiv mitzuwirken',
                ].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start', color: 'var(--muted-foreground)' }}>
                    <span style={{ color: 'var(--accent-strong)', marginTop: 3 }}><Icons.Check size={18} /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint>
              <div className="k-icon-chip"><Icons.Award size={24} /></div>
              <h3 className="k-h3">Zertifiziert nach Norm</h3>
              <p className="k-body">Das gelebte GENAU-Management erfüllt die Anforderungen der DIN EN ISO 14001 und 50001 — seit Oktober 2025 ergänzt um ISO 9001:2015.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                {['ISO 9001:2015', 'ISO 14001:2015', 'ISO 50001:2018'].map((c) => (
                  <span key={c} className="k-chip" style={{ background: 'var(--card)', fontSize: 13 }}><strong>{c}</strong></span>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  NEWS & EVENTS  ===================== */
function NewsView() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="News & Events" title={<span>Aktuelles von <span className="k-grad-text">K-Aqua.</span></span>} />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: 'var(--sp-4)', alignItems: 'start' }}>
          <Reveal>
            <BentoCard>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--faint-foreground)' }}>Oktober 2025</span>
              <h2 className="k-h2" style={{ fontSize: 'clamp(24px, 2.6vw, 34px)' }}>Wir sind dreifach ISO-zertifiziert</h2>
              <p className="k-body">Unser ISO-Managementsystem wurde erweitert und umfasst nun Qualitäts-, Umwelt- und Energiemanagement:</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                {[
                  ['ISO 9001:2015', 'Qualitätsmanagementsystem'],
                  ['ISO 14001:2015', 'Umweltmanagementsystem'],
                  ['ISO 50001:2018', 'Energiemanagementsystem'],
                ].map(([code, label]) => (
                  <li key={code} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'center', color: 'var(--muted-foreground)' }}>
                    <span style={{ color: 'var(--accent-strong)' }}><Icons.Check size={18} /></span>
                    <span><strong style={{ color: 'var(--foreground)' }}>{code}</strong> — {label}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-2)' }}>
                <KButton size="sm" href="https://www.k-aqua.de/PDF/KWT%20Zertifikat%20Deutsch.pdf" icon={<Icons.Download size={16} />}>Zertifikat (DE)</KButton>
                <KButton size="sm" variant="ghost" href="https://www.k-aqua.de/PDF/KWT%20Zertifikate%20English.pdf" icon={<Icons.Download size={16} />}>Certificate (EN)</KButton>
              </div>
            </BentoCard>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint>
              <div className="k-icon-chip"><Icons.MapPin size={24} /></div>
              <h3 className="k-h3">Messen & Events</h3>
              <p className="k-body">Besuchen Sie K-Aqua auf kommenden Veranstaltungen. Aktuell sind keine Termine angekündigt — schauen Sie bald wieder vorbei.</p>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  CAREER  ===================== */
function CareerView({ go }) {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Karriere" title={<span>Arbeiten bei <span className="k-grad-text">K-Aqua.</span></span>}
        lead="Kreativität und Erfahrung sind die Basis für Entwicklung, Fertigung und Vermarktung unserer marktführenden Lösungen in der Wasserversorgung." />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)', alignItems: 'stretch' }}>
          <Reveal>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Users size={24} /></div>
              <h3 className="k-h3">Wachsen Sie mit uns</h3>
              <p className="k-body">
                Wir haben eine starke Marktposition erreicht, die wir weiter festigen und ausbauen. Wenn Sie Teil dieses Erfolgs werden möchten und Interesse an einem modernen, wachsenden Unternehmen haben, freuen wir uns auf Ihre Bewerbung.
              </p>
              <KButton href="mailto:andrea.nickel@k-aqua.de" icon={<Icons.ArrowUpRight size={18} />}>Jetzt bewerben</KButton>
            </BentoCard>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard tint style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Phone size={24} /></div>
              <h3 className="k-h3">Fragen zu offenen Stellen?</h3>
              <p className="k-body">Weitere Informationen zu Jobangeboten und Ihrer Karriere bei K-Aqua erhalten Sie telefonisch:</p>
              <a className="k-link" href="tel:+4960859868410">+49 (0)60 85 / 9868-410</a>
              <a className="k-link" href="mailto:andrea.nickel@k-aqua.de">andrea.nickel@k-aqua.de</a>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  CONTACT  ===================== */
function ContactView() {
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Kontakt" title={<span>Sprechen wir über Ihr <span className="k-grad-text">Projekt.</span></span>} />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-4)' }}>
          <Reveal>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.MapPin size={24} /></div>
              <h3 className="k-h3">Standort Deutschland</h3>
              <p className="k-body">KWT GmbH<br />Auweg 3<br />35647 Waldsolms-Brandoberndorf</p>
            </BentoCard>
          </Reveal>
          <Reveal delay={80}>
            <BentoCard style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Phone size={24} /></div>
              <h3 className="k-h3">Vertrieb</h3>
              <p className="k-body">Tel. +49 (0)60 85 / 9868-410<br />Fax +49 (0)60 85 / 9868-420</p>
              <a className="k-link" href="mailto:info@k-aqua.de">info@k-aqua.de <Icons.ArrowUpRight size={16} /></a>
            </BentoCard>
          </Reveal>
          <Reveal delay={160}>
            <BentoCard tint style={{ height: '100%' }}>
              <div className="k-icon-chip"><Icons.Wrench size={24} /></div>
              <h3 className="k-h3">Qualität & technischer Support</h3>
              <p className="k-body">Unser Support-Team hilft bei technischen Fragen rund um Planung, Material und Verarbeitung.</p>
              <a className="k-link" href="mailto:support@k-aqua.de">support@k-aqua.de <Icons.ArrowUpRight size={16} /></a>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* =====================  IMPRINT  ===================== */
function ImprintView() {
  const rows = [
    ['Unternehmen', 'KWT GmbH, Auweg 3, 35647 Waldsolms-Brandoberndorf'],
    ['Geschäftsführung', 'Philipp Nickel, Marcello Gallio'],
    ['Registergericht', 'Wetzlar HRB 6732'],
    ['Sitz', 'Waldsolms'],
    ['USt-IdNr.', 'DE 296238486'],
    ['Telefon / Fax', '+49 (0)60 85 / 9868-410 · Fax -420'],
    ['E-Mail', 'info@k-aqua.de'],
  ];
  return (
    <main className="k-page" style={{ paddingTop: 72 }}>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-container" style={{ maxWidth: 820 }}>
          <Reveal>
            <BentoCard style={{ padding: 'var(--sp-6)' }}>
              <table className="k-table">
                <tbody>
                  {rows.map(([k, v]) => (
                    <tr key={k}><th style={{ borderBottom: '1px solid var(--card-border)', width: 180 }}>{k}</th><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </BentoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { ServiceView, ReferencesView, AboutView, NewsView, CareerView, ContactView, ImprintView, PageHero });
