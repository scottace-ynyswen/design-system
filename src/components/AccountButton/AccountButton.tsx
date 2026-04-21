import React, { useState } from "react";
import { fontFamily, fontWeight } from "../../tokens";

export type AccountButtonState = "default" | "hover" | "active" | "disabled";
export type AccountButtonSize  = "xs" | "sm" | "md" | "lg";

export interface AccountButtonProps {
  label?:      string;
  forceState?: AccountButtonState;
  size?:       AccountButtonSize;
  disabled?:   boolean;
  onClick?:    () => void;
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

const heightMap: Record<AccountButtonSize, string> = {
  xs: "32px",
  sm: "36px",
  md: "44px",
  lg: "52px",
};

const fontSizeMap: Record<AccountButtonSize, string> = {
  xs: "12px",
  sm: "13px",
  md: "14px",
  lg: "15px",
};

const iconSizeMap: Record<AccountButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
};

const widthMap: Record<AccountButtonSize, string> = {
  xs: "220px",
  sm: "260px",
  md: "320px",
  lg: "356px",
};

const bgMap: Record<AccountButtonState, string> = {
  default:  "#FFFFFF",
  hover:    "#F5F5F5",
  active:   "#EBEBEB",
  disabled: "#FAFAFA",
};

const textColorMap: Record<AccountButtonState, string> = {
  default:  "#3C3C3C",
  hover:    "#1F1F1F",
  active:   "#1F1F1F",
  disabled: "#BBBBBB",
};

const iconColorMap: Record<AccountButtonState, string> = {
  default:  "#3C3C3C",
  hover:    "#1F1F1F",
  active:   "#1F1F1F",
  disabled: "#CCCCCC",
};

export function AccountButton({
  label      = "Add account",
  forceState,
  size       = "md",
  disabled   = false,
  onClick,
}: AccountButtonProps) {
  const [hover,  setHover]  = useState(false);
  const [active, setActive] = useState(false);

  const state: AccountButtonState =
    forceState ?? (disabled ? "disabled" : active ? "active" : hover ? "hover" : "default");

  const rowStyle: React.CSSProperties = {
    display:         "flex",
    alignItems:      "center",
    width:           widthMap[size],
    height:          heightMap[size],
    padding:         "0 12px",
    gap:             "10px",
    backgroundColor: bgMap[state],
    border:          "1px solid #E8E8E8",
    boxSizing:       "border-box",
    cursor:          disabled ? "not-allowed" : "pointer",
    userSelect:      "none",
  };

  const textStyle: React.CSSProperties = {
    flex:       1,
    fontSize:   fontSizeMap[size],
    fontFamily: fontFamily.sans,
    fontWeight: state === "default" ? fontWeight.regular : fontWeight.medium,
    color:      textColorMap[state],
  };

  const iconColor = iconColorMap[state];
  const iconSize  = iconSizeMap[size];

  return (
    <div
      style={rowStyle}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => !disabled && setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      <GlobeIcon size={iconSize} color={iconColor} />
      <span style={textStyle}>{label}</span>
      <GlobeIcon size={iconSize} color={iconColor} />
    </div>
  );
}
