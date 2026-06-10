Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, alle isolierten Komponenten zu einem intelligent verbundenen Ganzen zu machen. React Context Provider für globalen App-State, URL-Parameter-Synchronisation für teilbare Filter-Zustände, ein Toast-Benachrichtigungs-System, und klar definierte Datenfluss-Grenzen zwischen Server und Client Components. Dies ist Expansion-Phase 9 von 10 der 10X Foundation Expansion Pipeline.

═══════════════════════════════════════════════════════════════════════════════

OPENING
Phase 9 verbindet alle isolierten Komponenten zu einem intelligenten Ganzen. React Context Provider für globalen State, URL-Parameter-Synchronisation für teilbare Filter-Zustände, und klar definierte Datenfluss-Grenzen zwischen Server und Client Components. Am Ende dieser Phase kommunizieren alle 50+ Komponenten nahtlos: Mobile Navigation via Context, Filter-States in URL, Toasts über UI-Provider, Datenfluss validiert und optimiert.

═══════════════════════════════════════════════════════════════════════════════
═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

STEP 0: SYNC & DISCOVERY
─────────────────────────
► Lies .ai-expansion-context.md vollständig. Notiere alle "use client" Komponenten (Header, MobileNav, Footer, ServiceFilter, BlogFilter, ContactForm, RequestForm, etc.).
► Identifiziere Prop-Drilling: Welche Props werden durch 3+ Komponenten gereicht? Diese gehören in Context.
► Prüfe Phase-7 Filter: Welche URL-Parameter existieren bereits? (category, search, sort)
► npm run build baseline — zeichne aktuelle Status auf.
► npm run dev — visueller Check: Alle Komponenten rendern, kein Error.

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK A — APPLICATION CONTEXT ═══════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 1: App Context Provider
─────────────────────────────
Erstelle /lib/context/AppContext.tsx:

"use client";
import React, { createContext, useState, useEffect, ReactNode, useCallback } from "react";

interface AppContextType {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  viewport: "mobile" | "tablet" | "desktop";
  scrollY: number;
  isScrolledPast: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setViewport("mobile");
      else if (width < 1024) setViewport("tablet");
      else setViewport("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        const y = window.scrollY;
        setScrollY(y);
        setIsScrolledPast(y > 100);
        throttleTimer = null;
      }, 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen((prev) => !prev);
  }, []);

  return (
    <AppContext.Provider value={{ isMobileNavOpen, toggleMobileNav, viewport, scrollY, isScrolledPast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}

─ Beschreibung: createContext mit explizitem Type. Provider mit useState für alle Properties. useEffect für Resize (bestimmt Viewport), Scroll-Listener mit 50ms Throttle. Custom Hook mit Error-Guard.


TASK 2: Provider in Root Layout
────────────────────────────────
Überarbeite /app/layout.tsx (Server Component):

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>My App</title>
      </head>
      <body>
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

─ Root Layout bleibt Server Component. AppProvider wird als "use client" Child eingesetzt. Provider wrapet nur Content (Header, main, Footer), nicht html/body.


TASK 3: Komponenten anbinden
─────────────────────────────
Header (/components/Header.tsx — "use client"):
  ► Importiere useApp()
  ► State isMobileNavOpen wird gelesen aus useApp()
  ► Button onClick ruft toggleMobileNav() auf
  ► Header-Hintergrund färbt sich, wenn isScrolledPast true (border-b oder bg-Farbe)

MobileNav (/components/MobileNav.tsx — "use client"):
  ► Liest isOpen aus useApp()
  ► Schließt sich automatisch auf Tablet/Desktop (wenn viewport !== "mobile")

Counter (/components/Counter.tsx — "use client"):
  ► Liest viewport aus useApp()
  ► Auf Mobile: zeige nur Top 3 Counter statt alle 5

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK B — UI STATE CONTEXT ═══════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 4: UI State Provider
─────────────────────────

Erstelle /lib/context/UIContext.tsx:

"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface UIContextType {
  modalStack: string[];
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  toastQueue: Toast[];
  addToast: (type: "success" | "error" | "info", message: string) => void;
  removeToast: (id: string) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [modalStack, setModalStack] = useState<string[]>([]);
  const [toastQueue, setToastQueue] = useState<Toast[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openModal = useCallback((modalId: string) => {
    setModalStack((prev) => [...prev, modalId]);
  }, []);

  const closeModal = useCallback((modalId: string) => {
    setModalStack((prev) => prev.filter((id) => id !== modalId));
  }, []);

  const addToast = useCallback((type: "success" | "error" | "info", message: string) => {
    const id = Date.now().toString();
    setToastQueue((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToastQueue((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  return (
    <UIContext.Provider value={{ modalStack, openModal, closeModal, toastQueue, addToast, removeToast, isSearchOpen, toggleSearch }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIContextType {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within UIProvider");
  return context;
}

─ Zwei separate Provider: AppContext (Navigation, Scroll), UIContext (Modals, Toasts, Search). LIFO Modal-Stack. Toasts mit Auto-Dismiss 5s.


TASK 5: Toast System
────────────────────

Erstelle /components/ui/ToastContainer.tsx:

"use client";
import { useUI } from "@/lib/context/UIContext";

export function ToastContainer() {
  const { toastQueue, removeToast } = useUI();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toastQueue.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded-md text-white animate-slide-in ${
            toast.type === "success" ? "bg-green-500" :
            toast.type === "error" ? "bg-red-500" :
            "bg-blue-500"
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-white hover:opacity-70">
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

─ Fixed bottom-right. Farbkodiert (grün/rot/blau). Close-Button. Animation: slide-in von rechts (definiere @keyframes slide-in in Tailwind).

Ergänze /app/layout.tsx:

<AppProvider>
  <UIProvider>
    <Header />
    <main>{children}</main>
    <Footer />
    <ToastContainer />
  </UIProvider>
</AppProvider>

─ ToastContainer auch "use client", wird in Root Layout direkt gerendert.


TASK 6: Form Success Integration
─────────────────────────────────

ContactForm (/components/ContactForm.tsx — "use client"):
  ► Import useUI()
  ► Bei erfolgreichem Absenden: addToast("success", "Ihre Anfrage wurde erfolgreich gesendet!")
  ► Bei Fehler: addToast("error", "Fehler beim Absenden. Bitte versuchen Sie es erneut.")

RequestForm (/components/RequestForm.tsx — "use client"):
  ► Gleiche Integration

MultiStepForm (/components/MultiStepForm.tsx — "use client"):
  ► Bei Completion: addToast("success", "Anfrage abgeschlossen!")

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK C — URL PARAMETER SYNCHRONISATION ═══════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 7: URL Param Utilities
────────────────────────────

Erstelle /lib/utils/url-params.ts:

import { useRouter, useSearchParams } from "next/navigation";

export function getParam(name: string, searchParams: URLSearchParams): string | null {
  return searchParams.get(name);
}

export function getNumberParam(name: string, searchParams: URLSearchParams, defaultValue: number = 0): number {
  const val = searchParams.get(name);
  return val ? parseInt(val, 10) : defaultValue;
}

export function setParam(name: string, value: string | null, router: any, pathname: string, searchParams: URLSearchParams): void {
  const params = new URLSearchParams(searchParams);
  if (value === null) {
    params.delete(name);
  } else {
    params.set(name, value);
  }
  router.push(`${pathname}?${params.toString()}`);
}

export function removeParam(name: string, router: any, pathname: string, searchParams: URLSearchParams): void {
  setParam(name, null, router, pathname, searchParams);
}

export function buildQueryString(params: Record<string, string | null>): string {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([key, val]) => {
    if (val !== null) sp.set(key, val);
  });
  return sp.toString();
}

─ Type-sichere Helper für URL-Parameter. setParam ruft router.push auf (keine Reload).


TASK 8: Filter-State URL Sync
──────────────────────────────

Überarbeite /components/ServiceFilter.tsx (Phase 7 — "use client"):

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { setParam } from "@/lib/utils/url-params";

export function ServiceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "name";

  const handleCategoryChange = (newCategory: string) => {
    setParam("category", newCategory, router, "/services", searchParams);
  };

  const handleSortChange = (newSort: string) => {
    setParam("sort", newSort, router, "/services", searchParams);
  };

  return (
    <div className="flex gap-4">
      <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Alle Kategorien</option>
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
      </select>
      <select value={sort} onChange={(e) => handleSortChange(e.target.value)}>
        <option value="name">Nach Name</option>
        <option value="popular">Beliebtheit</option>
      </select>
    </div>
  );
}

─ Kein lokaler State. URL ist SSOT (Single Source of Truth). Nutzer kann Filter als Bookmark speichern und teilen.

BlogFilter.tsx — gleiches Pattern.


TASK 9: Multi-Step Form State
──────────────────────────────

Überarbeite /components/MultiStepForm.tsx (Phase 5 — "use client"):

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { getNumberParam, setParam } from "@/lib/utils/url-params";

export function MultiStepForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = getNumberParam("step", searchParams, 1);

  const handleNextStep = (stepData: Record<string, any>) => {
    // Validiere aktuellen Step
    if (!validateStep(currentStep, stepData)) {
      addToast("error", "Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }
    // Speichere Daten in Session Storage oder State
    setParam("step", (currentStep + 1).toString(), router, "/request", searchParams);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setParam("step", (currentStep - 1).toString(), router, "/request", searchParams);
    }
  };

  const validateStep = (step: number, data: Record<string, any>): boolean => {
    if (step === 1) return data.name && data.email;
    if (step === 2) return data.projectType && data.budget;
    if (step === 3) return data.timeline && data.notes;
    return true;
  };

  return (
    <form>
      {currentStep === 1 && <StepOne onNext={handleNextStep} />}
      {currentStep === 2 && <StepTwo onNext={handleNextStep} onPrev={handlePrevStep} />}
      {currentStep === 3 && <StepThree onNext={handleNextStep} onPrev={handlePrevStep} />}
    </form>
  );
}

─ URL-Parameter step=1/2/3. Validierung verhindert Skip. Browser Zurück-Button funktioniert.

═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK D — SERVER/CLIENT BOUNDARY & VALIDATION ═════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

TASK 10: Data Flow Audit
────────────────────────

Dokumentiere /lib/data-flow-audit.md:

SERVICE PAGE (/app/services/page.tsx — Server Component)
├── Loader: getServices() (Phase 2)
├── Client Component: ServiceList
│   ├── Props: services[] (aus Server)
│   ├── Context: useApp() (Mobile/Scroll)
│   └── Client-only: ServiceFilter (URL-Sync)
└── Client Component: ServiceCard × N
    ├── Props: service (aus Server)
    └── No Context

REQUEST PAGE (/app/request/page.tsx — Server Component)
└── Client Component: MultiStepForm
    ├── URL-Param: step
    ├── Context: useUI() (Toast)
    └── No Direct Phase-2 Imports

RULE: Keine Client Component darf Phase-2 Getter direkt importieren. Daten fließen von Server → Props → Client.


TASK 11: Performance Optimierung
─────────────────────────────────

ServiceList.tsx:

const filteredServices = useMemo(
  () => services.filter((s) => !category || s.category === category),
  [services, category]
);

const handleFilterChange = useCallback((newCategory: string) => {
  setParam("category", newCategory, router, pathname, searchParams);
}, [router, pathname, searchParams]);

─ useMemo für Filter-Berechnung. useCallback für Event-Handler (wichtig bei Props-Weitergabe).

Context Splitting: AppContext und UIContext sind SEPARATE Provider, nicht ein Mega-Context. Dadurch re-rendern nur relevante Konsumer bei State-Änderung.


TASK 12: Error Boundary Integration
───────────────────────────────────

Erstelle /components/ErrorBoundary.tsx:

"use client";
import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-300 rounded">
          <h2 className="text-red-800 font-bold">Etwas ist schief gelaufen</h2>
          <p className="text-red-700">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Erneut versuchen
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

─ Class Component. Fängt Runtime-Errors in Children. Loggt zu console.error (kein Sentry). Retry-Button.

In /app/layout.tsx:

<AppProvider>
  <UIProvider>
    <ErrorBoundary>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </ErrorBoundary>
  </UIProvider>
</AppProvider>


TASK 13: TypeScript Strict Audit
─────────────────────────────────

✓ Alle Context-Typen explizit (AppContextType, UIContextType, Toast)
✓ useContext MUSS Type-Guard haben: if (!context) throw new Error(...)
✓ Custom Hooks (useApp, useUI) haben explizite Return-Types
✓ url-params.ts nutzt Record<string, string | null> für Type-Safety
✓ SearchParams vom Router ist immer URLSearchParams, nie any

Keine Type-Assertions wie (... as any). Alles Strict.

═══════════════════════════════════════════════════════════════════════════════
═══ ATOMIC VALIDATION ═══════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

□ npm run build — ZERO Fehler
□ npx tsc --noEmit — ZERO Fehler
□ npm run dev — App startet ohne console.error
□ Header zeigt Scroll-Effekt: Nach 100px Scroll wechselt Hintergrund
□ Mobile Nav öffnet/schließt via Context (funktioniert auf Tablet, Auto-Close)
□ ServiceFilter: Kategorie-Wechsel aktualisiert URL
□ BlogFilter: URL-Parameter sind bookmarkbar
□ MultiStepForm: URL zeigt step=1/2/3, Browser-Navigation funktioniert
□ ContactForm erfolgreich: Toast "Anfrage gesendet!" erscheint (grün)
□ ContactForm Fehler: Toast "Fehler..." erscheint (rot)
□ Toast auto-dismisses nach 5s
□ Keine console.warnings wie "useContext outside Provider"
□ Counter: Auf Mobile zeigt nur 3 Items, auf Desktop 5
□ Viewport-Change (Resize): Layout passt sich an, isMobileNavOpen wird false auf Desktop

═══════════════════════════════════════════════════════════════════════════════
═══ SELF-OPTIMIZING LOOP & HANDOFF ════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

Nach Completion: Aktualisiere .ai-expansion-context.md und .expansion-state.md:

.ai-expansion-context.md:
  ► Notiere: "Phase 9 Complete: AppContext (Mobile, Scroll), UIContext (Toasts, Modals), URL-Param Sync, Error Boundary"
  ► Alle Komponenten: use AppProvider + UIProvider Wrapper
  ► Filter und Multi-Step-Forms nutzen URL-Sync

.expansion-state.md:
  ► Prüfe: Sind alle 50+ Komponenten in Context-Dependencies dokumentiert?
  ► Notiere: Welche Komponenten sind noch nicht auf Context migriert?
  ► TODO Phase 10: Final Audit & Consolidation

Code ist SSOT (Single Source of Truth): URL-Parameter für Filter, Context für App-State, Props für Server-Daten.

═══════════════════════════════════════════════════════════════════════════════
═══ COMPLIANCE CHECKLIST ══════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════════════════

□ AppContext erstellt mit createContext + Provider + useApp Hook
□ AppContext nutzt useState für isMobileNavOpen, viewport, scrollY, isScrolledPast
□ Scroll-Listener mit 50ms Throttle implementiert
□ Resize-Listener für Viewport-Erkennung
□ AppProvider in Root Layout eingesetzt
□ Header nutzt isScrolledPast für visuelle Änderung
□ MobileNav nutzt isMobileNavOpen aus Context statt lokalem State
□ UIContext erstellt mit modalStack, toastQueue, isSearchOpen
□ UIProvider in Root Layout eingesetzt
□ ToastContainer rendert toastQueue mit Auto-Dismiss
□ Toast-Typen: success (grün), error (rot), info (blau)
□ ContactForm/RequestForm rufen addToast() auf
□ url-params.ts mit getParam, setParam, removeParam, getNumberParam
□ ServiceFilter/BlogFilter nutzen URL-Parameter
□ MultiStepForm nutzt URL-Parameter für step Tracking
□ Data-Flow-Audit dokumentiert Server/Client Grenzen
□ useMemo für Filter-Berechnung
□ useCallback für Event-Handler
□ ErrorBoundary implementiert
□ ErrorBoundary wrapet kritische Bereiche
□ TypeScript Strict: Kein any, explizite Types
□ Context Guards: throw Error wenn Provider fehlt
□ npm run build passt
□ npx tsc --noEmit passt
□ Keine console.warnings

═══════════════════════════════════════════════════════════════════════════════

CLOSING

Phase 9 ist complete. Alle 50+ Komponenten sind jetzt über Context vernetzt. Mobile Navigation funktioniert über AppContext, Filter-States sind in URLs synchronisiert und teilbar, Toasts informieren Nutzer über Success/Error. Server/Client Boundary ist klar definiert: Phase-2 Daten fließen serverseitig, Client Components nutzen Props + Context, niemals direkte Getter-Imports.

Phase 10 führt das finale Konsolidierungs-Audit durch: Überprüfung aller State-Flows, Performance-Optimierung der Re-Render-Zyklen, und Vorbereitung der 30 Optimierungs-Phasen.