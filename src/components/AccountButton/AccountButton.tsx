import React, { useState } from "react";
import { colors, fontSize, fontFamily, fontWeight, radius, shadows, spacing } from "../../tokens";

export type AccountButtonSize  = "xs" | "sm" | "md" | "lg";
export type AccountButtonState = "default" | "hover" | "active" | "disabled";

export interface AccountButtonProps {
  label?: string;
  onClick?: () => void;
  size?: AccountButtonSize;
  /** Override visual state for demos/storybook */
  forceState?: AccountButtonState;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const sizeMap: Record<AccountButtonSize, {
  height:    string;
  paddingX:  string;
  fontSize:  string;
  iconSize:  number;
  gap:       string;
  borderRadius: string;
}> = {
  xs: {
    height:   "28px",
    paddingX: `${spacing[2]}px`,
    fontSize: fontSize.xs,
    iconSize: 12,
    gap:      `${spacing[1]}px`,
    borderRadius: radius.sm,
  },
  sm: {
    height:   "32px",
    paddingX: `${spacing[3]}px`,
    fontSize: fontSize.sm,
    iconSize: 14,
    gap:      `${spacing[1]}px`,
    borderRadius: radius.md,
  },
  md: {
    height:   "40px",
    paddingX: `${spacing[4]}px`,
    fontSize: fontSize.md,
    iconSize: 16,
    gap:      `${spacing[2]}px`,
    borderRadius: radius.md,
  },
  lg: {
    height:   "48px",
    paddingX: `${spacing[6]}px`,
    fontSize: fontSize.lg,
    iconSize: 18,
    gap:      `${spacing[2]}px`,
    borderRadius: radius.lg,
  },
};

function getStateStyles(state: AccountButtonState): React.CSSProperties {
  switch (state) {
    case "hover":
      return {
        backgroundColor: colors.primary700,
        boxShadow:       shadows.md,
      };
    case "active":
      return {
        backgroundColor: colors.primary800,
        boxShadow:       shadows.sm,
        transform:       "translateY(1px)",
      };
    case "disabled":
      return {
        backgroundColor: colors.neutral200,
        color:           colors.neutral400,
        cursor:          "not-allowed",
        boxShadow:       shadows.none,
      };
    default:
      return {
        backgroundColor: colors.primary600,
        boxShadow:       shadows.sm,
      };
  }
}

function PlusIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AccountButton({
  label = "Add account",
  onClick,
  size = "md",
  forceState,
  disabled = false,
  icon,
  type = "button",
}: AccountButtonProps) {
  const [hover, setHover]   = useState(false);
  const [active, setActive] = useState(false);

  const derivedState: AccountButtonState =
    forceState ??
    (disabled ? "disabled" : active ? "active" : hover ? "hover" : "default");

  const sz = sizeMap[size];
  const stateStyles = getStateStyles(derivedState);

  const buttonStyle: React.CSSProperties = {
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            sz.gap,
    height:         sz.height,
    paddingLeft:    sz.paddingX,
    paddingRight:   sz.paddingX,
    fontSize:       sz.fontSize,
    fontFamily:     fontFamily.sans,
    fontWeight:     fontWeight.semibold,
    color:          derivedState === "disabled" ? colors.neutral400 : colors.white,
    border:         "none",
    borderRadius:   sz.borderRadius,
    outline:        "none",
    cursor:         disabled ? "not-allowed" : "pointer",
    transition:     "background-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease",
    whiteSpace:     "nowrap",
    ...stateStyles,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => !disabled && setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = shadows.focus;
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          stateStyles.boxShadow as string ?? shadows.sm;
      }}
    >
      {icon ?? <PlusIcon size={sz.iconSize} />}
      {label}
    </button>
  );
}
