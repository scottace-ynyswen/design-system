export const shadows = {
  none: "none",
  sm:   "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10)",
  md:   "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)",
  lg:   "0 10px 15px rgba(0,0,0,0.10), 0 4px 6px rgba(0,0,0,0.05)",
  focus: "0 0 0 3px rgba(59,130,246,0.35)",
} as const;

export type ShadowToken = keyof typeof shadows;
