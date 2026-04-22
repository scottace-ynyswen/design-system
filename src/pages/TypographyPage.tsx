import { fontFamily, fontWeight } from "../tokens";
import { colors } from "../tokens";

const WEIGHTS = [
  { label: "Regular", value: 400 },
  { label: "Medium",  value: 500 },
  { label: "Semibold",value: 600 },
  { label: "Bold",    value: 700 },
] as const;

const SIZES = [
  { token: "xs",  size: "11px" },
  { token: "sm",  size: "13px" },
  { token: "md",  size: "14px" },
  { token: "lg",  size: "16px" },
  { token: "xl",  size: "18px" },
  { token: "2xl", size: "22px" },
  { token: "3xl", size: "28px" },
] as const;

const LINE_HEIGHTS = [
  { token: "tight",  value: "1.2" },
  { token: "normal", value: "1.5" },
  { token: "loose",  value: "1.75" },
] as const;

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 16px", borderBottom: "1px solid #F5F5F5" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: fontFamily.sans, fontSize: "13px", fontWeight: fontWeight.semibold, color: "#555555", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "12px", marginTop: "36px" }}>
      {children}
    </h2>
  );
}

function TokenLabel({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555", minWidth: "80px" }}>{children}</span>;
}

function ValueLabel({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400 }}>{children}</span>;
}

export function TypographyPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "800px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Typography
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Type scale, font families, weights, and line heights.
      </p>

      <SectionTitle>Font Family</SectionTitle>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        <Row>
          <TokenLabel>font.sans</TokenLabel>
          <div style={{ flex: 1 }}>
            <span style={{ fontFamily: fontFamily.sans, fontSize: "15px", color: "#1F1F1F" }}>
              The quick brown fox jumps over the lazy dog
            </span>
          </div>
          <ValueLabel>Inter</ValueLabel>
        </Row>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 16px" }}>
          <TokenLabel>font.mono</TokenLabel>
          <div style={{ flex: 1 }}>
            <span style={{ fontFamily: fontFamily.mono, fontSize: "14px", color: "#1F1F1F" }}>
              const value = 42;
            </span>
          </div>
          <ValueLabel>JetBrains Mono</ValueLabel>
        </div>
      </div>

      <SectionTitle>Font Size</SectionTitle>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        {SIZES.map(({ token, size }, i) => (
          <div
            key={token}
            style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 16px", borderBottom: i < SIZES.length - 1 ? "1px solid #F5F5F5" : "none" }}
          >
            <TokenLabel>text.{token}</TokenLabel>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: fontFamily.sans, fontSize: size, color: "#1F1F1F", fontWeight: fontWeight.regular }}>
                Ag
              </span>
            </div>
            <ValueLabel>{size}</ValueLabel>
          </div>
        ))}
      </div>

      <SectionTitle>Font Weight</SectionTitle>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        {WEIGHTS.map(({ label, value }, i) => (
          <div
            key={value}
            style={{ display: "flex", alignItems: "center", gap: "14px", padding: "10px 16px", borderBottom: i < WEIGHTS.length - 1 ? "1px solid #F5F5F5" : "none" }}
          >
            <TokenLabel>weight.{label.toLowerCase()}</TokenLabel>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: fontFamily.sans, fontSize: "16px", fontWeight: value, color: "#1F1F1F" }}>
                {label}
              </span>
            </div>
            <ValueLabel>{value}</ValueLabel>
          </div>
        ))}
      </div>

      <SectionTitle>Line Height</SectionTitle>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        {LINE_HEIGHTS.map(({ token, value }, i) => (
          <div
            key={token}
            style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "14px 16px", borderBottom: i < LINE_HEIGHTS.length - 1 ? "1px solid #F5F5F5" : "none" }}
          >
            <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555", minWidth: "80px", paddingTop: "2px" }}>leading.{token}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: fontFamily.sans, fontSize: "13px", color: "#1F1F1F", lineHeight: value, margin: 0 }}>
                This is sample text showing<br />line height across multiple<br />lines of copy.
              </p>
            </div>
            <ValueLabel>{value}</ValueLabel>
          </div>
        ))}
      </div>
    </div>
  );
}
