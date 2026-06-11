// K-Aqua Redesign — App shell: nav, footer, routing, theme, tweaks
const { useState: useS, useEffect: useE } = React;

const NAV_PAGES = [
  { id: 'home', label: 'Start' },
  { id: 'products', label: 'Produkte' },
  { id: 'solutions', label: 'Lösungen' },
  { id: 'service', label: 'Service' },
  { id: 'references', label: 'Referenzen' },
  { id: 'about', label: 'Über uns' },
  { id: 'news', label: 'News' },
  { id: 'career', label: 'Karriere' },
];

const BRAND_OPTIONS = ['#5B2D8C', '#2D5A8C', '#0E7A6E'];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "brandColor": "#5B2D8C",
  "radius": 16,
  "glassNav": true
}/*EDITMODE-END*/;

/* brand color overrides: recompute ramp from a hex via oklch relative syntax */
function applyBrand(hex) {
  const root = document.documentElement;
  if (hex === '#5B2D8C') {
    ['--brand-300','--brand-400','--brand-500','--brand-600','--brand-700'].forEach(v => root.style.removeProperty(v));
    return;
  }
  root.style.setProperty('--brand-300', `oklch(from ${hex} 0.76 calc(c * 0.7) h)`);
  root.style.setProperty('--brand-400', `oklch(from ${hex} 0.62 c h)`);
  root.style.setProperty('--brand-500', `oklch(from ${hex} 0.51 c h)`);
  root.style.setProperty('--brand-600', `oklch(from ${hex} 0.44 c h)`);
  root.style.setProperty('--brand-700', `oklch(from ${hex} 0.38 c h)`);
}

function Nav({ page, go, dark, setDark }) {
  const [scrolled, setScrolled] = useS(false);
  const [menuOpen, setMenuOpen] = useS(false);
  useE(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useE(() => { setMenuOpen(false); }, [page]);
  return (
    <React.Fragment>
      <header className={`k-nav ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
        <div className="k-container k-nav-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} aria-label="K-Aqua Startseite" style={{ textDecoration: 'none', display: 'inline-flex', minHeight: 44, alignItems: 'center' }}>
            <KAquaLogo height={28} />
          </a>
          <nav className="k-nav-links" aria-label="Hauptnavigation">
            {NAV_PAGES.map((p) => (
              <button key={p.id} type="button"
                className={`k-nav-link ${page === p.id ? 'is-active' : ''}`}
                aria-current={page === p.id ? 'page' : undefined}
                onClick={() => go(p.id)}>
                {p.label}
              </button>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
            <button type="button" className="k-icon-btn" aria-label={dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'} onClick={() => setDark(!dark)}>
              {dark ? <Icons.Sun size={19} /> : <Icons.Moon size={19} />}
            </button>
            <span className="k-nav-cta" style={{ display: 'inline-flex' }}>
              <KButton size="sm" onClick={() => go('contact')}>Kontakt</KButton>
            </span>
            <button type="button" className="k-icon-btn k-menu-btn" aria-label="Menü öffnen" aria-expanded={menuOpen}
              style={{ display: 'none' }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen ? (
        <div className="k-mobile-menu">
          {NAV_PAGES.concat([{ id: 'contact', label: 'Kontakt' }]).map((p) => (
            <button key={p.id} type="button" className={`k-nav-link ${page === p.id ? 'is-active' : ''}`} onClick={() => go(p.id)}>{p.label}</button>
          ))}
        </div>
      ) : null}
      <style>{`@media (max-width: 980px) { .k-menu-btn { display: grid !important; } .k-nav-cta { display: none !important; } }`}</style>
    </React.Fragment>
  );
}

function Footer({ go }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' };
  const head = { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 10 };
  return (
    <footer className="k-footer">
      <div className="k-container" style={{ position: 'relative', paddingBlock: 'clamp(48px, 6vw, 80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 1.4fr) repeat(3, minmax(140px, 1fr))', gap: 'var(--sp-8)', flexWrap: 'wrap' }} className="k-footer-grid">
          <div style={{ ...col, gap: 'var(--sp-4)' }}>
            <KAquaLogo height={26} />
            <p style={{ fontSize: 15, opacity: 0.65, maxWidth: 320 }}>
              K-Aqua — Leading in Water Supply. PP-R/PP-RCT Rohrsysteme für Trinkwasser, gefertigt von der KWT GmbH in Waldsolms.
            </p>
          </div>
          <div style={col}>
            <span style={head}>Produkte</span>
            <button type="button" className="k-footer-link" onClick={() => go('products')}>Produktprogramm</button>
            <button type="button" className="k-footer-link" onClick={() => go('solutions')}>Materialvorteile</button>
            <button type="button" className="k-footer-link" onClick={() => go('service')}>Downloads & Videos</button>
          </div>
          <div style={col}>
            <span style={head}>Unternehmen</span>
            <button type="button" className="k-footer-link" onClick={() => go('about')}>Über uns</button>
            <button type="button" className="k-footer-link" onClick={() => go('references')}>Referenzen</button>
            <button type="button" className="k-footer-link" onClick={() => go('news')}>News & Events</button>
            <button type="button" className="k-footer-link" onClick={() => go('career')}>Karriere</button>
          </div>
          <div style={col}>
            <span style={head}>Kontakt</span>
            <a className="k-footer-link" href="tel:+4960859868410">+49 (0)60 85 / 9868-410</a>
            <a className="k-footer-link" href="mailto:info@k-aqua.de">info@k-aqua.de</a>
            <button type="button" className="k-footer-link" onClick={() => go('contact')}>Anfahrt & Standort</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap', marginTop: 'var(--sp-12)', paddingTop: 'var(--sp-6)', borderTop: '1px solid oklch(1 0 0 / 0.12)' }}>
          <span style={{ fontSize: 14, opacity: 0.5 }}>© 2026 KWT GmbH. Alle Rechte vorbehalten.</span>
          <div style={{ display: 'flex', gap: 'var(--sp-6)' }}>
            <button type="button" className="k-footer-link" onClick={() => go('imprint')}>Impressum</button>
            <a className="k-footer-link" href="https://www.k-aqua.de/privacy.php" target="_blank" rel="noreferrer">Datenschutz</a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 800px) { .k-footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}

const VIEWS = {
  home: HomeView, products: ProductsView, solutions: SolutionsView,
  service: ServiceView, references: ReferencesView, about: AboutView,
  news: NewsView, career: CareerView, contact: ContactView, imprint: ImprintView,
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useS(() => {
    const h = (location.hash || '').replace('#', '');
    return VIEWS[h] ? h : 'home';
  });
  const go = (p) => {
    setPage(p);
    try { history.replaceState(null, '', '#' + p); } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useE(() => {
    document.documentElement.dataset.theme = t.dark ? 'dark' : 'light';
  }, [t.dark]);
  useE(() => {
    if (window.KAquaLoader) window.KAquaLoader.hideOverlay();
  }, []);
  useE(() => { applyBrand(t.brandColor); }, [t.brandColor]);
  useE(() => {
    const el = document.querySelector('.k-page');
    if (!el) return;
    el.classList.add('k-page-anim', 'k-page-enter');
    const t1 = setTimeout(() => el.classList.remove('k-page-enter'), 60);
    const t2 = setTimeout(() => {
      el.classList.remove('k-page-anim');
      if (el.getAnimations) el.getAnimations().forEach((a) => { try { a.finish(); } catch (e) {} });
    }, 560);
    return () => { clearTimeout(t1); clearTimeout(t2); el.classList.remove('k-page-enter', 'k-page-anim'); };
  }, [page]);
  useE(() => {
    document.documentElement.style.setProperty('--radius', t.radius + 'px');
    document.documentElement.style.setProperty('--radius-lg', Math.round(t.radius * 1.5) + 'px');
  }, [t.radius]);

  const View = VIEWS[page] || HomeView;
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link" style={{ position: 'absolute', left: -9999, zIndex: 100 }}>Zum Inhalt springen</a>
      <Nav page={page} go={go} dark={t.dark} setDark={(v) => setTweak('dark', v)} />
      <div id="main-content" data-screen-label={`Seite: ${page}`}>
        <View key={page} go={go} />
      </div>
      <Footer go={go} />
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakToggle label="Dark Mode (OLED)" value={t.dark} onChange={(v) => setTweak('dark', v)} />
        <TweakColor label="Markenfarbe" value={t.brandColor} options={BRAND_OPTIONS} onChange={(v) => setTweak('brandColor', v)} />
        <TweakSection label="Form" />
        <TweakSlider label="Eckenradius" value={t.radius} min={0} max={28} step={2} unit="px" onChange={(v) => setTweak('radius', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
