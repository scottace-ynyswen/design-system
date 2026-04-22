import { aliasGroups } from "../data";
import { fontFamily, fontWeight } from "../tokens";

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function textOnBg(hex: string): string {
  return luminance(hex) > 0.35 ? "#1F1F1F" : "#FFFFFF";
}

export function ColourAliasPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "900px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Alias Tokens
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "8px" }}>
        Semantic tokens that map to primitives. Use these in components, never raw hex.
      </p>
      <div style={{ display: "inline-flex", gap: "8px", marginBottom: "40px", padding: "10px 14px", backgroundColor: "#FAFAFA", border: "1px solid #EFEFEF", borderRadius: "4px" }}>
        <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: "#555555" }}>
          <strong>Primitive</strong> → <strong>Alias</strong> → Product Mode
        </span>
      </div>

      {aliasGroups.map((group) => (
        <div key={group.group} style={{ marginBottom: "36px" }}>
          <h2 style={{ fontFamily: fontFamily.sans, fontSize: "13px", fontWeight: fontWeight.semibold, color: "#555555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            {group.group}
          </h2>
          <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
            {group.tokens.map((token, i) => (
              <div
                key={token.name}
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  gap:             "14px",
                  padding:         "10px 16px",
                  borderBottom:    i < group.tokens.length - 1 ? "1px solid #F5F5F5" : "none",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div style={{
                  width:           "36px",
                  height:          "36px",
                  borderRadius:    "4px",
                  backgroundColor: token.value,
                  border:          "1px solid rgba(0,0,0,0.07)",
                  flexShrink:      0,
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontFamily:      fontFamily.sans,
                  fontSize:        "8px",
                  color:           textOnBg(token.value),
                  fontWeight:      fontWeight.bold,
                  letterSpacing:   "0.02em",
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: fontFamily.sans, fontSize: "13px", fontWeight: fontWeight.medium, color: "#1F1F1F" }}>
                    {token.name}
                  </div>
                  <div style={{ fontFamily: fontFamily.sans, fontSize: "11px", color: "#8A8A8A", marginTop: "1px" }}>
                    {token.primitive}
                  </div>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555" }}>
                  {token.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
