import { Select, AccountButton } from "./components";
import type { SelectSize, SelectState, AccountButtonSize, AccountButtonState } from "./components";
import { colors, fontFamily, fontSize, fontWeight } from "./tokens";

const DEMO_OPTIONS = [
  { value: "alice", label: "Alice Johnson" },
  { value: "bob",   label: "Bob Smith" },
  { value: "carol", label: "Carol White" },
];

const SELECT_SIZES:  SelectSize[]       = ["md", "lg"];
const SELECT_STATES: SelectState[]      = ["default", "hover", "focused", "disabled"];
const BTN_SIZES:     AccountButtonSize[] = ["xs", "sm", "md", "lg"];
const BTN_STATES:    AccountButtonState[] = ["default", "hover", "active", "disabled"];

const sectionStyle = {
  marginBottom: "48px",
};

const headingStyle = {
  fontFamily: fontFamily.sans,
  fontSize:   fontSize["2xl"],
  fontWeight: fontWeight.bold,
  color:      colors.neutral900,
  marginBottom: "8px",
};

const subheadStyle = {
  fontFamily:   fontFamily.sans,
  fontSize:     fontSize.sm,
  color:        colors.neutral600,
  marginBottom: "24px",
};

const gridStyle = {
  display:             "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap:                 "16px",
};

const cellStyle = {
  display:       "flex",
  flexDirection: "column" as const,
  alignItems:    "flex-start",
  gap:           "8px",
  padding:       "16px",
  background:    colors.neutral50,
  borderRadius:  "8px",
  border:        `1px solid ${colors.neutral200}`,
};

const tagStyle = {
  fontFamily:   fontFamily.sans,
  fontSize:     "11px",
  fontWeight:   fontWeight.medium,
  color:        colors.neutral600,
  background:   colors.neutral200,
  borderRadius: "4px",
  padding:      "2px 6px",
};

export default function App() {
  return (
    <div
      style={{
        fontFamily: fontFamily.sans,
        padding:    "48px",
        maxWidth:   "1200px",
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
          marginBottom: "8px",
        }}
      >
        Design System
      </h1>
      <p style={{ ...subheadStyle, marginBottom: "56px" }}>
        Component showcase — all sizes × states
      </p>

      {/* ── Select ─────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Select · "Pick a value"</h2>
        <p style={subheadStyle}>
          2 sizes × 4 states = 8 variants
        </p>
        <div style={gridStyle}>
          {SELECT_SIZES.flatMap((size) =>
            SELECT_STATES.map((state) => (
              <div key={`${size}-${state}`} style={cellStyle}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
                  <span style={tagStyle}>{size}</span>
                  <span style={tagStyle}>{state}</span>
                </div>
                <Select
                  options={DEMO_OPTIONS}
                  size={size}
                  forceState={state}
                  disabled={state === "disabled"}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── AccountButton ──────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>AccountButton · "Add account"</h2>
        <p style={subheadStyle}>
          4 sizes × 4 states = 16 variants
        </p>
        <div style={gridStyle}>
          {BTN_SIZES.flatMap((size) =>
            BTN_STATES.map((state) => (
              <div key={`${size}-${state}`} style={cellStyle}>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
                  <span style={tagStyle}>{size}</span>
                  <span style={tagStyle}>{state}</span>
                </div>
                <AccountButton
                  size={size}
                  forceState={state}
                  disabled={state === "disabled"}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
