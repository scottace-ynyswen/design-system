import { useState } from "react";
import { Select } from "./components";
import type { SelectState } from "./components";
import { colors, fontFamily, fontWeight } from "./tokens";

const STATES: { label: string; value: SelectState }[] = [
  { label: "Default",  value: "default"  },
  { label: "Hover",    value: "hover"    },
  { label: "Focused",  value: "focused"  },
  { label: "Error",    value: "error"    },
  { label: "Disabled", value: "disabled" },
];

export default function App() {
  const [activeState, setActiveState] = useState<SelectState | undefined>(undefined);

  return (
    <div
      style={{
        fontFamily:      fontFamily.sans,
        minHeight:       "100vh",
        backgroundColor: "#FAFAFA",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
        gap:             "40px",
        padding:         "48px 24px",
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: fontFamily.sans, fontSize: "28px", fontWeight: fontWeight.bold, color: colors.neutral900, marginBottom: "6px" }}>
          Select
        </h1>
        <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: colors.neutral500 }}>
          Click the component to open · hover and focus work naturally
        </p>
      </div>

      {/* Component */}
      <Select forceState={activeState} disabled={activeState === "disabled"} />

      {/* State controls */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        {STATES.map(({ label, value }) => {
          const isActive = activeState === value || (value === "default" && activeState === undefined);
          return (
            <button
              key={value}
              onClick={() => setActiveState(value === "default" ? undefined : value)}
              style={{
                fontFamily:      fontFamily.sans,
                fontSize:        "13px",
                fontWeight:      isActive ? fontWeight.semibold : fontWeight.regular,
                color:           isActive ? "#FFFFFF" : colors.neutral700,
                backgroundColor: isActive ? stateColor(value) : "#FFFFFF",
                border:          `1.5px solid ${isActive ? stateColor(value) : "#DDDDDD"}`,
                borderRadius:    "20px",
                padding:         "6px 16px",
                cursor:          "pointer",
                transition:      "all 0.15s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Current state badge */}
      <p style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        State: {activeState ?? "default (interactive)"}
      </p>
    </div>
  );
}

function stateColor(state: SelectState): string {
  switch (state) {
    case "focused":  return "#43023B";
    case "error":    return "#A20101";
    case "disabled": return "#AAAAAA";
    case "hover":    return "#1F1F1F";
    default:         return "#555555";
  }
}
