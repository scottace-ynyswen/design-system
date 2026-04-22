import { primitives } from "../data";
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

export function ColourPrimitivePage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "960px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Primitive Colours
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Raw colour values. These are the foundation of all alias and product tokens.
      </p>

      {primitives.map((palette) => (
        <div key={palette.name} style={{ marginBottom: "36px" }}>
          <h2 style={{ fontFamily: fontFamily.sans, fontSize: "13px", fontWeight: fontWeight.semibold, color: "#555555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
            {palette.name}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {palette.swatches.map((swatch) => {
              const fg = textOnBg(swatch.hex);
              return (
                <div
                  key={String(swatch.scale)}
                  style={{
                    width:           "88px",
                    borderRadius:    "4px",
                    overflow:        "hidden",
                    border:          "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ backgroundColor: swatch.hex, height: "56px" }} />
                  <div style={{ backgroundColor: swatch.hex, padding: "6px 8px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ fontFamily: fontFamily.sans, fontSize: "11px", fontWeight: fontWeight.semibold, color: fg }}>
                      {swatch.scale}
                    </div>
                    <div style={{ fontFamily: fontFamily.sans, fontSize: "10px", color: fg, opacity: 0.7 }}>
                      {swatch.hex}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
