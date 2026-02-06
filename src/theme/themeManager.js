// The project now handles design tokens and variable values through `src/index.css`.
// We no longer need the figma-variables-resolver. `applyColorMode` simply sets
// the `data-theme` attribute on the document element so the CSS alias variables
// (defined in `index.css`) can take effect.
export function applyColorMode(requestedModeName) {
  if (typeof document === 'undefined') return;

  // Normalize mode: if an unknown value is provided, fall back to 'light'.
  const mode = typeof requestedModeName === 'string' ? requestedModeName.toLowerCase() : 'light';

  // If caller passed 'sync', derive from OS preference.
  let effective = mode;
  if (mode === 'sync') {
    try {
      effective = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    } catch (e) {
      effective = 'light';
    }
  }

  // Only accept 'dark' or 'light' as effective theme names; otherwise default to 'light'.
  if (effective !== 'dark' && effective !== 'light') effective = 'light';

  try {
    document.documentElement.setAttribute('data-theme', effective);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to set data-theme', err);
  }
}

export default {
  applyColorMode,
};
