export const fontFamily = {
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
} as const;

export const fontSize = {
  xs:   "11px",
  sm:   "13px",
  md:   "14px",
  lg:   "16px",
  xl:   "18px",
  "2xl":"22px",
  "3xl":"28px",
} as const;

export const fontWeight = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

export const lineHeight = {
  tight:  1.2,
  normal: 1.5,
  loose:  1.75,
} as const;
