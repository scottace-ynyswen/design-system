import { useState } from "react";
import { Select, TextField } from "../components";
import type { SelectState } from "../components";
import { colors, fontFamily, fontWeight } from "../tokens";

const STATES: { label: string; value: SelectState }[] = [
  { label: "Default",  value: "default"  },
  { label: "Focused",  value: "focused"  },
  { label: "Error",    value: "error"    },
  { label: "Disabled", value: "disabled" },
];

function stateColor(state: SelectState): string {
  switch (state) {
    case "focused":  return "#43023B";
    case "error":    return "#A20101";
    case "disabled": return "#AAAAAA";
    default:         return "#1F1F1F";
  }
}

export function ComponentsPage() {
  const [activeState, setActiveState] = useState<SelectState | undefined>(undefined);
  const forced = activeState;

  return (
    <div style={{ padding: "40px 48px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Components
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Click to interact · use buttons below to force a state
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start", marginBottom: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: fontFamily.sans, fontSize: "11px", fontWeight: fontWeight.medium, color: colors.neutral400, textTransform: "uppercase", letterSpacing: "0.08em" }}>Select</span>
          <Select forceState={forced} disabled={forced === "disabled"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontFamily: fontFamily.sans, fontSize: "11px", fontWeight: fontWeight.medium, color: colors.neutral400, textTransform: "uppercase", letterSpacing: "0.08em" }}>Text Field</span>
          <TextField
            placeholder="Enter text"
            forceState={forced}
            disabled={forced === "disabled"}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
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

      <p style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        State: {activeState ?? "default (interactive)"}
      </p>
    </div>
  );
}
