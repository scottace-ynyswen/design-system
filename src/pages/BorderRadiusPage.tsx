import { radius } from "../tokens";
import { fontFamily, fontWeight } from "../tokens";
import { colors } from "../tokens";

const SCALE = Object.entries(radius) as [string, string][];

export function BorderRadiusPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "800px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Border Radius
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Corner radius tokens used across surfaces, inputs, and components.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "20px", marginBottom: "40px" }}>
        {SCALE.map(([token, value]) => (
          <div key={token} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width:           "72px",
                height:          "72px",
                backgroundColor: "#43023B",
                borderRadius:    value,
                opacity:         0.15,
                border:          "2px solid #43023B",
              }}
            />
            <div style={{ textAlign: "center" as const }}>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#555555" }}>radius.{token}</div>
              <div style={{ fontFamily: fontFamily.sans, fontSize: "11px", color: colors.neutral400 }}>{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        {SCALE.map(([token, value], i) => (
          <div
            key={token}
            style={{
              display:         "flex",
              alignItems:      "center",
              gap:             "14px",
              padding:         "10px 16px",
              borderBottom:    i < SCALE.length - 1 ? "1px solid #F5F5F5" : "none",
              backgroundColor: "#FFFFFF",
            }}
          >
            <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555", minWidth: "100px" }}>
              radius.{token}
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  width:           "40px",
                  height:          "40px",
                  backgroundColor: "#F0E8EF",
                  borderRadius:    value,
                  border:          "1.5px solid #43023B",
                  opacity:         0.8,
                }}
              />
            </div>
            <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
