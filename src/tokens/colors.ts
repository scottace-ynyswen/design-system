export const colors = {
  // Primitive
  white: "#ffffff",
  black: "#000000",

  // Neutral
  neutral50:  "#f8f9fa",
  neutral100: "#f1f3f5",
  neutral200: "#e9ecef",
  neutral300: "#dee2e6",
  neutral400: "#ced4da",
  neutral500: "#adb5bd",
  neutral600: "#6c757d",
  neutral700: "#495057",
  neutral800: "#343a40",
  neutral900: "#212529",

  // Primary (brand blue)
  primary50:  "#eff6ff",
  primary100: "#dbeafe",
  primary200: "#bfdbfe",
  primary300: "#93c5fd",
  primary400: "#60a5fa",
  primary500: "#3b82f6",
  primary600: "#2563eb",
  primary700: "#1d4ed8",
  primary800: "#1e40af",
  primary900: "#1e3a8a",

  // Semantic
  errorDefault:   "#ef4444",
  errorLight:     "#fee2e2",
  successDefault: "#22c55e",
  successLight:   "#dcfce7",
  warningDefault: "#f59e0b",
  warningLight:   "#fef9c3",
} as const;

export type ColorToken = keyof typeof colors;
