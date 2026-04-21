import React, { useState } from "react";
import { fontFamily, fontWeight } from "../../tokens";

export type SelectState = "default" | "hover" | "focused" | "error" | "disabled";

export interface SelectProps {
  placeholder?: string;
  items?: string[];
  open?: boolean;
  forceState?: SelectState;
  disabled?: boolean;
}

function GlobeIcon({ size = 18, color = "#3C3C3C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="15" height="15" stroke={color} strokeWidth="1.5" />
      <line x1="1.5" y1="9" x2="16.5" y2="9" stroke={color} strokeWidth="1" />
      <line x1="9" y1="1.5" x2="9" y2="16.5" stroke={color} strokeWidth="1" />
      <line x1="1.5" y1="1.5" x2="16.5" y2="16.5" stroke={color} strokeWidth="0.75" />
      <line x1="16.5" y1="1.5" x2="1.5" y2="16.5" stroke={color} strokeWidth="0.75" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="5.25" stroke="#555555" strokeWidth="1.5" />
      <line x1="12.2" y1="12.2" x2="15.8" y2="15.8" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const triggerBorder: Record<SelectState, string> = {
  default:  "1px solid #CCCCCC",
  hover:    "1px solid #1F1F1F",
  focused:  "2px solid #43023B",
  error:    "2px solid #A20101",
  disabled: "1px solid #E0E0E0",
};

const DEFAULT_ITEMS = ["Add account", "Add account", "Add account", "Add account"];

export function Select({
  placeholder = "Pick a value",
  items = DEFAULT_ITEMS,
  open = false,
  forceState,
  disabled = false,
}: SelectProps) {
  const [hover, setHover]     = useState(false);
  const [focused, setFocused] = useState(false);

  const state: SelectState =
    forceState ?? (disabled ? "disabled" : focused ? "focused" : hover ? "hover" : "default");

  const triggerStyle: React.CSSProperties = {
    display:         "flex",
    alignItems:      "center",
    width:           "356px",
    height:          "48px",
    backgroundColor: "#FFFFFF",
    border:          triggerBorder[state],
    boxSizing:       "border-box",
    cursor:          disabled ? "not-allowed" : "pointer",
    overflow:        "hidden",
  };

  const placeholderStyle: React.CSSProperties = {
    flex:       1,
    padding:    "0 16px",
    fontSize:   "14px",
    fontFamily: fontFamily.sans,
    fontWeight: state === "default" || state === "disabled" ? fontWeight.regular : fontWeight.medium,
    color:      disabled ? "#BBBBBB" : state === "default" ? "#999999" : "#555555",
    userSelect: "none",
  };

  const searchBoxStyle: React.CSSProperties = {
    width:           "44px",
    height:          "48px",
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "center",
    borderLeft:      "1px solid #DDDDDD",
    backgroundColor: "#F2F2F2",
    flexShrink:      0,
  };

  const listStyle: React.CSSProperties = {
    width:           "356px",
    border:          "2px solid #1F1F1F",
    backgroundColor: "#FFFFFF",
    boxSizing:       "border-box",
  };

  const rowStyle: React.CSSProperties = {
    display:     "flex",
    alignItems:  "center",
    height:      "44px",
    padding:     "0 12px",
    gap:         "10px",
    borderBottom: "1px solid #F0F0F0",
  };

  const rowTextStyle: React.CSSProperties = {
    flex:       1,
    fontSize:   "14px",
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    color:      "#3C3C3C",
  };

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div
        style={triggerStyle}
        onMouseEnter={() => !disabled && setHover(true)}
        onMouseLeave={() => !disabled && setHover(false)}
        onFocus={() => !disabled && setFocused(true)}
        onBlur={() => setFocused(false)}
        tabIndex={disabled ? -1 : 0}
      >
        <span style={placeholderStyle}>{placeholder}</span>
        <div style={searchBoxStyle}>
          <SearchIcon />
        </div>
      </div>

      {open && (
        <div style={listStyle}>
          {items.map((item, i) => (
            <div key={i} style={{ ...rowStyle, borderBottom: i < items.length - 1 ? "1px solid #F0F0F0" : "none" }}>
              <GlobeIcon />
              <span style={rowTextStyle}>{item}</span>
              <GlobeIcon />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
