import { fontFamily, fontWeight } from "../tokens";
import { colors } from "../tokens";

const ICON_PATHS = [
  "M0 0L0 18.334L18.334 18.334L18.334 0L0 0ZM17.417 17.417L0.917 17.417L0.917 0.917L17.417 0.917L17.417 17.417Z",
  "M0.917 9.167C0.917 4.611 4.611 0.917 9.167 0.917C13.723 0.917 17.417 4.611 17.417 9.167C17.417 13.723 13.723 17.417 9.167 17.417L9.167 18.334C14.23 18.334 18.334 14.23 18.334 9.167C18.334 4.104 14.23 0 9.167 0C4.104 0 0 4.104 0 9.167C0 14.23 4.104 18.334 9.167 18.334L9.167 17.417C4.611 17.417 0.917 13.723 0.917 9.167Z",
  "M8.709 17.875L9.625 17.875L9.625 0.459L8.709 0.459L8.709 17.875Z",
  "M15.001 15.649L15.649 15.001L3.333 2.685L2.685 3.333L15.001 15.649Z",
  "M17.875 9.625L17.875 8.709L0.459 8.709L0.459 9.625L17.875 9.625Z",
  "M15.649 3.333L15.001 2.685L2.685 15.001L3.333 15.649L15.649 3.333Z",
];

interface IconSvgProps {
  size: number;
  color?: string;
}

function IconSvg({ size, color = "currentColor" }: IconSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18.334 18.334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {ICON_PATHS.map((d, i) => (
        <path key={i} d={d} fill={color} />
      ))}
    </svg>
  );
}

const SIZES = [
  { token: "siz.3",  px: 12 },
  { token: "siz.4",  px: 16 },
  { token: "siz.5",  px: 20 },
  { token: "siz.6",  px: 24 },
  { token: "siz.8",  px: 32 },
  { token: "siz.10", px: 40 },
  { token: "siz.12", px: 48 },
  { token: "siz.16", px: 64 },
] as const;

const ICONS = [
  { name: "Resize", description: "Scale / move in all directions" },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: fontFamily.sans, fontSize: "13px", fontWeight: fontWeight.semibold, color: "#555555", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "12px", marginTop: "36px" }}>
      {children}
    </h2>
  );
}

export function IconsPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: "900px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        Icons
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A", marginBottom: "40px" }}>
        Icon components and size variants.
      </p>

      {ICONS.map(({ name, description }) => (
        <div key={name}>
          <SectionTitle>{name}</SectionTitle>
          <p style={{ fontFamily: fontFamily.sans, fontSize: "13px", color: "#8A8A8A", marginBottom: "20px", marginTop: "-8px" }}>
            {description}
          </p>

          <div style={{ border: "1px solid #EFEFEF", borderRadius: "4px", overflow: "hidden", marginBottom: "32px" }}>
            {SIZES.map(({ token, px }, i) => (
              <div
                key={token}
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  gap:             "16px",
                  padding:         "12px 16px",
                  borderBottom:    i < SIZES.length - 1 ? "1px solid #F5F5F5" : "none",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#555555", minWidth: "72px" }}>
                  {token}
                </span>
                <div style={{ width: "72px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconSvg size={px} color="#1F1F1F" />
                </div>
                <span style={{ fontFamily: fontFamily.sans, fontSize: "12px", color: colors.neutral400 }}>
                  {px}px
                </span>
              </div>
            ))}
          </div>

          <SectionTitle>Colour variants</SectionTitle>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "24px", padding: "20px", border: "1px solid #EFEFEF", borderRadius: "4px" }}>
            {[
              { label: "Default",   color: "#1F1F1F" },
              { label: "Muted",     color: "#8A8A8A" },
              { label: "Subtle",    color: "#C4C4C4" },
              { label: "Brand",     color: "#43023B" },
              { label: "Inverse",   color: "#FFFFFF", bg: "#1F1F1F" },
            ].map(({ label, color, bg }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "8px" }}>
                <div style={{
                  width:           "48px",
                  height:          "48px",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  backgroundColor: bg ?? "transparent",
                  borderRadius:    "4px",
                  border:          bg ? "none" : "1px solid #EFEFEF",
                }}>
                  <IconSvg size={24} color={color} />
                </div>
                <span style={{ fontFamily: fontFamily.sans, fontSize: "11px", color: "#8A8A8A" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
