import { Select, AccountButton } from "./components";
import type { SelectState, AccountButtonState, AccountButtonSize } from "./components";
import { colors, fontFamily, fontSize, fontWeight } from "./tokens";

const SELECT_STATES: SelectState[] = ["default", "hover", "focused", "error"];
const BTN_STATES: AccountButtonState[] = ["default", "hover", "active", "disabled"];
const BTN_SIZES:  AccountButtonSize[]  = ["xs", "sm", "md", "lg"];

const headingStyle = {
  fontFamily:   fontFamily.sans,
  fontSize:     fontSize["2xl"],
  fontWeight:   fontWeight.bold,
  color:        colors.neutral900,
  marginBottom: "6px",
};

const subheadStyle = {
  fontFamily:   fontFamily.sans,
  fontSize:     fontSize.sm,
  color:        colors.neutral500,
  marginBottom: "32px",
};

const tagStyle = {
  fontFamily:   fontFamily.sans,
  fontSize:     "11px",
  fontWeight:   fontWeight.medium,
  color:        colors.neutral600,
  background:   colors.neutral100,
  border:       `1px solid ${colors.neutral200}`,
  borderRadius: "4px",
  padding:      "2px 6px",
};

export default function App() {
  return (
    <div
      style={{
        fontFamily: fontFamily.sans,
        padding:    "48px",
        maxWidth:   "1600px",
        margin:     "0 auto",
        background: colors.white,
        minHeight:  "100vh",
      }}
    >
      <h1
        style={{
          fontFamily:   fontFamily.sans,
          fontSize:     "32px",
          fontWeight:   fontWeight.bold,
          color:        colors.neutral900,
          marginBottom: "6px",
        }}
      >
        Design System
      </h1>
      <p style={{ ...subheadStyle, marginBottom: "56px" }}>Component showcase</p>

      {/* ── Select / Combobox ───────────────────────────────── */}
      <section style={{ marginBottom: "64px" }}>
        <h2 style={headingStyle}>Select · "Pick a value"</h2>
        <p style={subheadStyle}>4 states × closed/open = 8 variants</p>

        {/* Closed row */}
        <p style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral500, marginBottom: "12px", fontWeight: fontWeight.medium, textTransform: "uppercase", letterSpacing: "0.08em" }}>Closed</p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "40px" }}>
          {SELECT_STATES.map((state) => (
            <div key={`closed-${state}`} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={tagStyle}>{state}</span>
              <Select forceState={state} open={false} disabled={state === "disabled"} />
            </div>
          ))}
        </div>

        {/* Open row */}
        <p style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral500, marginBottom: "12px", fontWeight: fontWeight.medium, textTransform: "uppercase", letterSpacing: "0.08em" }}>Open</p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {SELECT_STATES.map((state) => (
            <div key={`open-${state}`} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={tagStyle}>{state}</span>
              <Select forceState={state} open={true} disabled={state === "disabled"} />
            </div>
          ))}
        </div>
      </section>

      {/* ── AccountButton / Row item ────────────────────────── */}
      <section>
        <h2 style={headingStyle}>AccountButton · "Add account"</h2>
        <p style={subheadStyle}>4 sizes × 4 states = 16 variants</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {BTN_SIZES.map((size) => (
            <div key={size}>
              <p style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral500, marginBottom: "12px", fontWeight: fontWeight.medium, textTransform: "uppercase", letterSpacing: "0.08em" }}>{size}</p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {BTN_STATES.map((state) => (
                  <div key={`${size}-${state}`} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={tagStyle}>{state}</span>
                    <AccountButton size={size} forceState={state} disabled={state === "disabled"} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
