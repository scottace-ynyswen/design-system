import { useState } from "react";
import { fontFamily, fontWeight } from "../tokens";

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function ArrowRight({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Download({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3V10M8 10L5 7M8 10L11 7M3 13H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Upload({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10V3M8 3L5 6M8 3L11 6M3 13H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Share({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2.5C11 3.33 11.67 4 12.5 4C13.33 4 14 3.33 14 2.5C14 1.67 13.33 1 12.5 1C11.67 1 11 1.67 11 2.5Z" stroke={color} strokeWidth="1.2" />
      <path d="M11 13.5C11 14.33 11.67 15 12.5 15C13.33 15 14 14.33 14 13.5C14 12.67 13.33 12 12.5 12C11.67 12 11 12.67 11 13.5Z" stroke={color} strokeWidth="1.2" />
      <path d="M2 8C2 8.83 2.67 9.5 3.5 9.5C4.33 9.5 5 8.83 5 8C5 7.17 4.33 6.5 3.5 6.5C2.67 6.5 2 7.17 2 8Z" stroke={color} strokeWidth="1.2" />
      <path d="M4.9 7.1L11.1 3.9M4.9 8.9L11.1 12.1" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Spinner({ color = "currentColor", size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: "spin 0.8s linear infinite" }}>
      <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="2" strokeOpacity="0.25" />
      <path d="M16 9C16 5.13 12.87 2 9 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Product colour data ───────────────────────────────────────────────────────

const PRODUCTS = [
  { name: "Motor",     label: "Car insurance",        color: "#58AAE0", hover: "#8AC4E9", icon: MotorIcon   },
  { name: "Home",      label: "Home insurance",       color: "#4DB6A1", hover: "#82CCBD", icon: HomeIcon    },
  { name: "Pet",       label: "Pet insurance",        color: "#A8DE89", hover: "#C2E8AC", icon: PetIcon     },
  { name: "Life",      label: "Life insurance",       color: "#81D5EB", hover: "#A7E2F1", icon: LifeIcon    },
  { name: "Travel",    label: "Travel insurance",     color: "#FF8684", hover: "#FFB2B1", icon: TravelIcon  },
  { name: "Business",  label: "Business insurance",   color: "#A08ADD", hover: "#BDADE7", icon: BusinessIcon},
  { name: "Utilities", label: "Utilities insurance",  color: "#BE80D1", hover: "#D2A6DF", icon: UtilitiesIcon},
  { name: "Finance",   label: "Finance insurance",    color: "#EA9665", hover: "#F0B693", icon: FinanceIcon },
] as const;

// ── Product SVG icons (white, 24×24) ──────────────────────────────────────────

function MotorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13L6.5 8H17.5L19 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="13" width="18" height="5" rx="2" stroke="white" strokeWidth="1.5"/>
      <circle cx="7" cy="18" r="2" stroke="white" strokeWidth="1.5"/>
      <circle cx="17" cy="18" r="2" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 11L12 4L21 11V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21V15H15V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 7C8.5 8.1 7.6 9 6.5 9C5.4 9 4.5 8.1 4.5 7C4.5 5.9 5.4 5 6.5 5C7.6 5 8.5 5.9 8.5 7Z" stroke="white" strokeWidth="1.4"/>
      <path d="M19.5 7C19.5 8.1 18.6 9 17.5 9C16.4 9 15.5 8.1 15.5 7C15.5 5.9 16.4 5 17.5 5C18.6 5 19.5 5.9 19.5 7Z" stroke="white" strokeWidth="1.4"/>
      <path d="M12 10C14.8 10 17 12 17 14.5C17 17.5 15 20 12 20C9 20 7 17.5 7 14.5C7 12 9.2 10 12 10Z" stroke="white" strokeWidth="1.5"/>
      <circle cx="10.5" cy="14" r="0.8" fill="white"/>
      <circle cx="13.5" cy="14" r="0.8" fill="white"/>
      <path d="M10.5 16.5C10.9 17.1 11.5 17.5 12 17.5C12.5 17.5 13.1 17.1 13.5 16.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function LifeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20L4 12C2.3 10.3 2.3 7.6 4 5.9C5.7 4.2 8.4 4.2 10.1 5.9L12 7.8L13.9 5.9C15.6 4.2 18.3 4.2 20 5.9C21.7 7.6 21.7 10.3 20 12L12 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TravelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16L16 11.5L18 5L15.5 3.5L12 9L8 7.5L7 5L5 5.5L6 9.5L2 12V14L6.5 13.5L8 19.5L10 20L10.5 16L15 17.5L14.5 21H16.5L18 18L21 18V16Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3L8 13H12L11 21L18 9H14L13 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UtilitiesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12.5C5 8.9 8.1 6 12 6C15.9 6 19 8.9 19 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 15C7.5 12.5 9.5 10.5 12 10.5C14.5 10.5 16.5 12.5 16.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="17.5" r="1.5" fill="white"/>
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H21M5 21V10L12 4L19 10V21M9 21V15H15V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Shared layout helpers ─────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: fontFamily.sans,
      fontSize: "13px",
      fontWeight: fontWeight.semibold,
      color: "#555555",
      textTransform: "uppercase" as const,
      letterSpacing: "0.08em",
      marginBottom: "12px",
      marginTop: "40px",
    }}>
      {children}
    </h2>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: fontFamily.sans, fontSize: "13px", color: "#8A8A8A", marginBottom: "20px", marginTop: "-8px" }}>
      {children}
    </p>
  );
}

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: fontFamily.sans, fontSize: "11px", color: "#8A8A8A", display: "block", marginTop: "8px", textAlign: "center" as const }}>
      {children}
    </span>
  );
}

function Row({ label, children, dark }: { label?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "16px",
      alignItems: "center",
      padding: "20px 24px",
      backgroundColor: dark ? "#1F1F1F" : "#FFFFFF",
      borderBottom: "1px solid #F0F0F0",
    }}>
      {label && (
        <span style={{
          fontFamily: fontFamily.sans,
          fontSize: "11px",
          color: dark ? "#666666" : "#B0B0B0",
          minWidth: "72px",
          textTransform: "uppercase" as const,
          letterSpacing: "0.08em",
        }}>
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

// ── Primary CTA ───────────────────────────────────────────────────────────────

interface PrimaryCtaProps {
  label: string;
  subLabel?: string;
  loading?: boolean;
  disabled?: boolean;
}

function PrimaryCta({ label, subLabel, loading, disabled }: PrimaryCtaProps) {
  const [hovered, setHovered] = useState(false);

  const bg = disabled ? "#CCCCCC" : hovered ? "#3C3C3C" : "#1F1F1F";

  return (
    <button
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      style={{
        display:         "flex",
        flexDirection:   "column" as const,
        alignItems:      "center",
        justifyContent:  "center",
        gap:             "2px",
        padding:         "0 24px",
        height:          subLabel ? "64px" : "52px",
        minWidth:        "200px",
        backgroundColor: bg,
        border:          "none",
        borderRadius:    "12px",
        cursor:          disabled ? "not-allowed" : "pointer",
        transition:      "background-color 0.15s ease",
      }}
    >
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Spinner color="#FFFFFF" size={18} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>
            {label}
          </span>
        </div>
      ) : (
        <>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 600, color: "#FFFFFF" }}>
            {label}
          </span>
          {subLabel && (
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>
              {subLabel}
            </span>
          )}
        </>
      )}
    </button>
  );
}

// ── Secondary CTA (no icon) ───────────────────────────────────────────────────

type SecondaryVariant = "standard" | "ghost" | "white";

interface SecondaryCtaProps {
  label: string;
  variant?: SecondaryVariant;
}

function SecondaryCta({ label, variant = "standard" }: SecondaryCtaProps) {
  const [hovered, setHovered] = useState(false);

  let bg = "transparent";
  let border = "1.5px solid #1F1F1F";
  let color = "#1F1F1F";

  if (variant === "standard") {
    bg    = hovered ? "#F5F5F5" : "#FFFFFF";
    border = "1.5px solid #1F1F1F";
    color  = "#1F1F1F";
  } else if (variant === "ghost") {
    bg    = hovered ? "#F5F5F5" : "transparent";
    border = "1.5px solid #DDDDDD";
    color  = "#1F1F1F";
  } else if (variant === "white") {
    bg    = hovered ? "#EFEFEF" : "#FFFFFF";
    border = "1.5px solid #FFFFFF";
    color  = "#1F1F1F";
  }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "0 20px",
        height:          "44px",
        minWidth:        "140px",
        backgroundColor: bg,
        border,
        borderRadius:    "12px",
        cursor:          "pointer",
        transition:      "background-color 0.15s ease",
      }}
    >
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color }}>
        {label}
      </span>
    </button>
  );
}

// ── Secondary CTA with icon ───────────────────────────────────────────────────

type IconType = "arrow" | "download" | "upload" | "share";

interface SecondaryIconCtaProps {
  label: string;
  icon: IconType;
}

function SecondaryIconCta({ label, icon }: SecondaryIconCtaProps) {
  const [hovered, setHovered] = useState(false);

  const IconComp = icon === "arrow" ? ArrowRight : icon === "download" ? Download : icon === "upload" ? Upload : Share;

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         "flex",
        alignItems:      "center",
        gap:             "8px",
        padding:         "0 20px",
        height:          "44px",
        minWidth:        "140px",
        backgroundColor: hovered ? "#F5F5F5" : "#FFFFFF",
        border:          "1.5px solid #1F1F1F",
        borderRadius:    "12px",
        cursor:          "pointer",
        transition:      "background-color 0.15s ease",
      }}
    >
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 600, color: "#1F1F1F" }}>
        {label}
      </span>
      <IconComp color="#1F1F1F" size={16} />
    </button>
  );
}

// ── Product Colour CTA ────────────────────────────────────────────────────────

interface ProductCtaProps {
  name: string;
  label: string;
  color: string;
  hover: string;
  icon: () => JSX.Element;
}

function ProductCta({ name, label, color, hover, icon: Icon }: ProductCtaProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "8px" }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:         "flex",
          flexDirection:   "column" as const,
          alignItems:      "center",
          justifyContent:  "center",
          gap:             "8px",
          width:           "92px",
          height:          "84px",
          backgroundColor: hovered ? hover : color,
          border:          hovered ? `3px solid ${color}` : "3px solid transparent",
          borderRadius:    "12px",
          cursor:          "pointer",
          transition:      "background-color 0.15s ease, border-color 0.15s ease",
          padding:         0,
        }}
      >
        <div style={{
          width:           "40px",
          height:          "40px",
          borderRadius:    "50%",
          backgroundColor: color,
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          flexShrink:      0,
          ...(hovered ? { backgroundColor: color } : {}),
        }}>
          <Icon />
        </div>
        <span style={{
          fontFamily:  "'Poppins', sans-serif",
          fontSize:    "11px",
          fontWeight:  600,
          color:       "#FFFFFF",
          lineHeight:  1.2,
          textAlign:   "center" as const,
        }}>
          {name}
        </span>
      </button>
      <span style={{ fontFamily: fontFamily.sans, fontSize: "11px", color: "#8A8A8A", textAlign: "center" as const, maxWidth: "92px" }}>
        {label}
      </span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function CTAsPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "960px" }}>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        CTAs & Buttons
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Primary and secondary call-to-action components. Hover over buttons to preview states.
      </p>

      {/* ── Primary ── */}
      <SectionTitle>Primary</SectionTitle>
      <SubLabel>Full-width primary actions. Poppins SemiBold, 12px radius.</SubLabel>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        <Row label="Default">
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <PrimaryCta label="Get a quote" />
            <VariantLabel>Free text</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <PrimaryCta label="Continue" />
            <VariantLabel>Continue</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <PrimaryCta label="Continue" loading />
            <VariantLabel>Loading</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <PrimaryCta label="Get a quote" subLabel="Takes about 5 minutes" />
            <VariantLabel>With sub-label</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <PrimaryCta label="Get a quote" subLabel="Takes about 5 minutes" disabled />
            <VariantLabel>Disabled</VariantLabel>
          </div>
        </Row>
      </div>

      {/* ── Secondary without icon ── */}
      <SectionTitle>Secondary — without icon</SectionTitle>
      <SubLabel>Standard, ghost, and white (on dark) variants.</SubLabel>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        <Row label="Standard">
          <SecondaryCta label="Learn more" variant="standard" />
        </Row>
        <Row label="Ghost">
          <SecondaryCta label="Learn more" variant="ghost" />
        </Row>
        <Row label="White" dark>
          <SecondaryCta label="Learn more" variant="white" />
        </Row>
      </div>

      {/* ── Secondary with icon ── */}
      <SectionTitle>Secondary — with icon</SectionTitle>
      <SubLabel>Icon appears on the right side of the label.</SubLabel>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden" }}>
        <Row>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <SecondaryIconCta label="Next" icon="arrow" />
            <VariantLabel>Arrow</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <SecondaryIconCta label="Download" icon="download" />
            <VariantLabel>Download</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <SecondaryIconCta label="Upload" icon="upload" />
            <VariantLabel>Upload</VariantLabel>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
            <SecondaryIconCta label="Share" icon="share" />
            <VariantLabel>Share</VariantLabel>
          </div>
        </Row>
      </div>

      {/* ── Product colour ── */}
      <SectionTitle>Secondary — product colour</SectionTitle>
      <SubLabel>One per product line. Hover to preview the selected state (lighter fill + coloured border).</SubLabel>
      <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", padding: "24px", backgroundColor: "#FAFAFA" }}>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "20px" }}>
          {PRODUCTS.map((p) => (
            <ProductCta key={p.name} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
