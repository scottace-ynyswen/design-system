import { spacing } from "../tokens";
import { fontFamily, fontWeight } from "../tokens";
import { colors } from "../tokens";

const SCALE = Object.entries(spacing) as [string, number][];

export function SpacingPage() {
  const maxPx = Math.max(...SCALE.map(([, v]) => v));

  return (
    <div style={{ padding: "40px 48px", maxWidth: "800px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Spacing
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Base-4 scale used for padding, margin, gap, and layout.
      </p>

      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        {SCALE.map(([token, px], i) => (
          <div
            key={token}
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          "16px",
              padding:      "10px 16px",
              borderBottom: i < SCALE.length - 1 ? "1px solid #F5F5F5" : "none",
              backgroundColor: "#FFFFFF",
            }}
          >
            <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555", minWidth: "72px" }}>
              space.{token}
            </span>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height:          "16px",
                  width:           px === 0 ? "2px" : `${(px / maxPx) * 360}px`,
                  backgroundColor: px === 0 ? "#DDDDDD" : "#43023B",
                  borderRadius:    "2px",
                  opacity:         0.7,
                }}
              />
            </div>
            <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400, minWidth: "40px", textAlign: "right" as const }}>
              {px}px
            </span>
            <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400, minWidth: "48px", textAlign: "right" as const }}>
              {px === 0 ? "—" : `${px / 16}rem`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
