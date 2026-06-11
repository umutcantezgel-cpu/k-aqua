"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export const BRAND_OPTIONS = ['#5B2D8C', '#2D5A8C', '#0E7A6E'];

const TWEAK_DEFAULTS = {
  dark: false,
  brandColor: "#5B2D8C",
  radius: 16,
  glassNav: true
};

export type Tweaks = typeof TWEAK_DEFAULTS;

interface ThemeContextType {
  tweaks: Tweaks;
  setTweak: (keyOrEdits: string | Partial<Tweaks>, val?: any) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function applyBrand(hex: string) {
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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tweaks, setTweaksState] = useState<Tweaks>(TWEAK_DEFAULTS);

  // Mount flag to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const setTweak = useCallback((keyOrEdits: string | Partial<Tweaks>, val?: any) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits as string]: val };
    setTweaksState((prev) => ({ ...prev, ...edits }));
    // Optional: dispatch custom event if needed
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
  }, []);

  useEffect(() => {
    applyBrand(tweaks.brandColor);
  }, [tweaks.brandColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--radius', tweaks.radius + 'px');
    document.documentElement.style.setProperty('--radius-lg', Math.round(tweaks.radius * 1.5) + 'px');
  }, [tweaks.radius]);

  return (
    <ThemeContext.Provider value={{ tweaks, setTweak }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
