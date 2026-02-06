'use client';

import React, { createContext, useEffect, useState } from 'react';
import { applyColorMode } from './themeManager';

export const ThemeContext = createContext({ theme: 'sync', setTheme: () => {}, toggleTheme: () => {}, isDark: false, getTheme: () => 'light' });

export function ThemeProvider({ children }) {
  
  const getSystemPref = () => {
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch (e) {
      // ignore
    }
    return 'light';
  };

  const [theme, setTheme] = useState(() => {
    // If a `data-theme` attribute has already been set on the document (for
    // example by server-side logic or an earlier script), prefer that so the
    // initial React render matches the document and avoids a hydration mismatch
    // where `data-theme` is correct but `isDark` is not.
    try {
      if (typeof document !== 'undefined') {
        const docTheme = document.documentElement.getAttribute('data-theme');
        if (docTheme === 'dark' || docTheme === 'light') return docTheme;
      }
    } catch (e) {
      // ignore
    }

    // Fall back to the user's system preference if no data-theme is present.
    return getSystemPref();
  });

  // Apply the requested mode. `applyColorMode` will map requested mode names
  // to collection-specific modes (falling back to defaults) and only set color vars.
  useEffect(() => {
    function apply() {
      if (!theme) return;

      // Determine the effective theme we want applied: 'light' or 'dark'
      let effectiveMode;
      if (theme === 'sync') {
        try {
          effectiveMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
        } catch (e) {
          effectiveMode = 'light';
        }
      } else {
        effectiveMode = theme;
      }

      // Apply theme via themeManager which will set data-theme.
      applyColorMode(effectiveMode);
      try {
        document.documentElement.setAttribute('data-theme', effectiveMode);
      } catch (e) {
        // ignore
      }
    }

    apply();

    // try {
    //   localStorage.setItem('theme', theme);
    // } catch (e) {
    //   // ignore
    // }
  }, [theme]);

  // Provide utility functions: toggleTheme and getEffectiveTheme
  const getEffectiveTheme = () => {
    if (theme === 'sync') {
      try {
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
      } catch (e) {
        return 'light';
      }
    }
    return theme;
  };

  const toggleTheme = () => {
    const effective = getEffectiveTheme();
    const next = effective === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  // If using 'sync', respond to OS changes
  useEffect(() => {
    if (theme !== 'sync') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const prefersDark = mq.matches;
      const effectiveMode = prefersDark ? 'dark' : 'light';
      applyColorMode(effectiveMode);
      try { document.documentElement.setAttribute('data-theme', effectiveMode); } catch (e) { /* ignore */ }
    };
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [theme]);

  const effective = getEffectiveTheme();
  const isDark = effective === 'dark';
  //console.log('ThemeProvider render: theme=', theme, ' effective=', effective, ' isDark=', isDark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, getTheme: getEffectiveTheme, isDark }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
