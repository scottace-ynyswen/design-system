import { fontFamily, fontWeight } from "../tokens";

export type PageId =
  | "colour-primitive"
  | "colour-alias"
  | "typography"
  | "spacing"
  | "border-radius"
  | "icons"
  | "components"
  | "ctas";

interface NavItem {
  id: PageId;
  label: string;
  parent?: string;
}

const NAV: { section: string; items: NavItem[] }[] = [
  {
    section: "Foundations",
    items: [
      { id: "colour-primitive", label: "Primitive",    parent: "Colour" },
      { id: "colour-alias",     label: "Alias",        parent: "Colour" },
      { id: "typography",       label: "Typography" },
      { id: "spacing",          label: "Spacing" },
      { id: "border-radius",    label: "Border Radius" },
      { id: "icons",            label: "Icons" },
    ],
  },
  {
    section: "Components",
    items: [
      { id: "components", label: "All Components" },
      { id: "ctas",       label: "CTAs & Buttons" },
    ],
  },
];

interface SidebarProps {
  active: PageId;
  onNavigate: (id: PageId) => void;
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <nav
      style={{
        width:           "220px",
        minHeight:       "100vh",
        backgroundColor: "#FFFFFF",
        borderRight:     "1px solid #EFEFEF",
        padding:         "32px 0",
        flexShrink:      0,
        position:        "sticky",
        top:             0,
        alignSelf:       "flex-start",
      }}
    >
      <div style={{ padding: "0 20px 24px", borderBottom: "1px solid #EFEFEF", marginBottom: "8px" }}>
        <span style={{ fontFamily: fontFamily.sans, fontSize: "15px", fontWeight: fontWeight.bold, color: "#1F1F1F" }}>
          Design System
        </span>
      </div>

      {NAV.map(({ section, items }) => {
        let lastParent: string | undefined;
        return (
          <div key={section} style={{ marginBottom: "24px" }}>
            <div style={{
              padding:         "8px 20px 4px",
              fontFamily:      fontFamily.sans,
              fontSize:        "10px",
              fontWeight:      fontWeight.bold,
              color:           "#B0B0B0",
              textTransform:   "uppercase",
              letterSpacing:   "0.1em",
            }}>
              {section}
            </div>

            {items.map((item) => {
              const showParent = item.parent && item.parent !== lastParent;
              if (item.parent) lastParent = item.parent;
              const isActive = active === item.id;

              return (
                <div key={item.id}>
                  {showParent && (
                    <div style={{
                      padding:    "6px 20px 2px",
                      fontFamily: fontFamily.sans,
                      fontSize:   "12px",
                      fontWeight: fontWeight.medium,
                      color:      "#555555",
                    }}>
                      {item.parent}
                    </div>
                  )}
                  <button
                    onClick={() => onNavigate(item.id)}
                    style={{
                      display:         "block",
                      width:           "100%",
                      textAlign:       "left",
                      padding:         item.parent ? "5px 20px 5px 32px" : "5px 20px",
                      fontFamily:      fontFamily.sans,
                      fontSize:        "13px",
                      fontWeight:      isActive ? fontWeight.semibold : fontWeight.regular,
                      color:           isActive ? "#1F1F1F" : "#555555",
                      backgroundColor: isActive ? "#F5F5F5" : "transparent",
                      border:          "none",
                      cursor:          "pointer",
                      borderLeft:      isActive ? "2px solid #1F1F1F" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
}
