// K-Aqua Gamification — "Aqua-Punkte" engine + floating widget
// Points for exploring pages and using tools. Persisted in localStorage (own key only).
const KGAME_KEY = 'kaqua-game-v1';

const KGAME_LEVELS = [
  { min: 0, name: 'Tropfen' },
  { min: 50, name: 'Rinnsal' },
  { min: 120, name: 'Bach' },
  { min: 240, name: 'Fluss' },
  { min: 420, name: 'Strom' },
  { min: 650, name: 'Ozean' },
];

const KGAME_BADGES = [
  { id: 'visit_products', label: 'Sortiment gesichtet', icon: 'Layers', pts: 10, hint: 'Produktseite besuchen' },
  { id: 'visit_solutions', label: 'Material-Profi', icon: 'Leaf', pts: 10, hint: 'Lösungen besuchen' },
  { id: 'visit_trust', label: 'Vertrauensfrage', icon: 'Shield', pts: 10, hint: 'Trust Center besuchen' },
  { id: 'visit_partner', label: 'Netzwerker', icon: 'Handshake', pts: 10, hint: 'Partnerschaft entdecken' },
  { id: 'use_finder', label: 'Daten-Detektiv', icon: 'Ruler', pts: 25, hint: 'Produktfinder filtern' },
  { id: 'use_co2', label: 'Klima-Rechner', icon: 'Recycle', pts: 25, hint: 'CO₂-Rechner nutzen' },
  { id: 'spin_globe', label: 'Weltenbummler', icon: 'Globe', pts: 25, hint: 'Referenz-Globus drehen' },
  { id: 'quiz_done', label: 'Schweiß-Geselle', icon: 'Flame', pts: 50, hint: 'Academy-Quiz abschließen' },
  { id: 'quiz_perfect', label: 'Schweiß-Meister', icon: 'Award', pts: 75, hint: 'Quiz fehlerfrei bestehen' },
  { id: 'use_benefits', label: 'Netto-Optimierer', icon: 'Users', pts: 25, hint: 'Benefits-Rechner nutzen' },
  { id: 'use_culture', label: 'Kultur-Match', icon: 'Check', pts: 25, hint: 'Culture Matcher abschließen' },
  { id: 'build_docs', label: 'Audit-Bereit', icon: 'FileText', pts: 25, hint: 'Doku-Paket schnüren' },
];

const KGame = (() => {
  let state;
  try { state = JSON.parse(localStorage.getItem(KGAME_KEY)) || {}; } catch (e) { state = {}; }
  if (!state.earned) state = { earned: {}, points: 0 };

  function save() {
    try { localStorage.setItem(KGAME_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function levelFor(points) {
    let lvl = KGAME_LEVELS[0], next = null;
    for (let i = 0; i < KGAME_LEVELS.length; i++) {
      if (points >= KGAME_LEVELS[i].min) lvl = KGAME_LEVELS[i];
      else { next = KGAME_LEVELS[i]; break; }
    }
    return { lvl, next };
  }
  function award(id) {
    const badge = KGAME_BADGES.find((b) => b.id === id);
    if (!badge || state.earned[id]) return false;
    state.earned[id] = Date.now();
    const before = levelFor(state.points).lvl;
    state.points += badge.pts;
    const after = levelFor(state.points).lvl;
    save();
    window.dispatchEvent(new CustomEvent('kgame', {
      detail: { badge, points: state.points, levelUp: after !== before ? after : null }
    }));
    return true;
  }
  return {
    award,
    levelFor,
    get points() { return state.points; },
    get earned() { return state.earned; },
  };
})();

/* ---------- widget: FAB + panel + toasts + droplet burst ---------- */
function GameWidget() {
  const { useState, useEffect } = React;
  const [open, setOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const onAward = (e) => {
      setTick((t) => t + 1);
      const { badge, levelUp } = e.detail;
      setToast({ label: badge.label, pts: badge.pts, levelUp });
      burst();
      const tid = setTimeout(() => setToast(null), levelUp ? 4200 : 2800);
      return () => clearTimeout(tid);
    };
    window.addEventListener('kgame', onAward);
    return () => window.removeEventListener('kgame', onAward);
  }, []);

  function burst() {
    if (!document.documentElement.classList.contains('anim-ok')) return;
    const fab = document.querySelector('.k-game-fab');
    if (!fab) return;
    const r = fab.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
      const d = document.createElement('span');
      d.className = 'k-burst';
      d.style.left = (r.left + r.width / 2) + 'px';
      d.style.top = (r.top + r.height / 2) + 'px';
      document.body.appendChild(d);
      const ang = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 50;
      const anim = d.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.cos(ang) * dist}px, ${Math.sin(ang) * dist - 30}px) scale(0.4)`, opacity: 0 },
      ], { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(0.16,1,0.3,1)' });
      anim.onfinish = () => d.remove();
      setTimeout(() => d.remove(), 1200);
    }
  }

  const points = KGame.points;
  const { lvl, next } = KGame.levelFor(points);
  const prog = next ? (points - lvl.min) / (next.min - lvl.min) : 1;
  const earnedCount = Object.keys(KGame.earned).length;
  const C = 2 * Math.PI * 27;

  return (
    <React.Fragment>
      <button type="button" className="k-game-fab" onClick={() => setOpen(!open)}
        aria-label={`Aqua-Punkte: ${points}, Level ${lvl.name}`} aria-expanded={open}>
        <svg className="ring" width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="27" fill="none" stroke="var(--card-border)" strokeWidth="3"></circle>
          <circle cx="30" cy="30" r="27" fill="none" stroke="var(--primary)" strokeWidth="3"
            strokeLinecap="round" strokeDasharray={`${C * prog} ${C}`}></circle>
        </svg>
        <Icons.Droplet size={24} style={{ color: 'var(--primary)' }} />
      </button>

      {open ? (
        <div className="k-game-panel" role="dialog" aria-label="Aqua-Punkte Übersicht">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22 }}>{points} <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted-foreground)' }}>Aqua-Punkte</span></span>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--primary)' }}>Level: {lvl.name}</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'var(--background-subtle)', overflow: 'hidden', marginBottom: 6 }}>
            <div style={{ height: '100%', width: `${Math.round(prog * 100)}%`, background: 'linear-gradient(90deg, var(--primary), var(--accent-strong))', borderRadius: 4 }}></div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 16 }}>
            {next ? `Noch ${next.min - points} Punkte bis Level „${next.name}"` : 'Höchstes Level erreicht — der Ozean.'}
            {' '}· {earnedCount}/{KGAME_BADGES.length} Abzeichen
          </p>
          <div className="k-badge-grid">
            {KGAME_BADGES.map((b) => {
              const Ic = Icons[b.icon];
              const earned = !!KGame.earned[b.id];
              return (
                <div key={b.id} className={`k-badge ${earned ? 'is-earned' : ''}`} title={earned ? b.label : b.hint}>
                  <span className="ic"><Ic size={18} /></span>
                  <span>{earned ? b.label : b.hint}</span>
                  <span style={{ fontWeight: 700, color: earned ? 'var(--primary)' : 'var(--faint-foreground)' }}>+{b.pts}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {toast ? (
        <div className="k-toast" role="status">
          <Icons.Droplet size={18} />
          <span>{toast.levelUp ? `Level-Aufstieg: ${toast.levelUp.name}! · ` : ''}„{toast.label}" +{toast.pts} Punkte</span>
        </div>
      ) : null}
    </React.Fragment>
  );
}

Object.assign(window, { KGame, GameWidget, KGAME_BADGES });
