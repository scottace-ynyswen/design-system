import React, { useState } from "react";
import { colors, fontSize, fontFamily, fontWeight, radius, shadows, spacing } from "../../tokens";

export type SelectSize  = "md" | "lg";
export type SelectState = "default" | "hover" | "focused" | "disabled";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: SelectSize;
  /** Override the visual state (for storybook / demos). Normal usage omit this. */
  forceState?: SelectState;
  disabled?: boolean;
  label?: string;
  id?: string;
}

const sizeMap: Record<SelectSize, {
  height: string;
  paddingX: string;
  paddingY: string;
  fontSize: string;
  iconSize: number;
}> = {
  md: {
    height:   "36px",
    paddingX: `${spacing[3]}px`,
    paddingY: `${spacing[2]}px`,
    fontSize: fontSize.md,
    iconSize: 16,
  },
  lg: {
    height:   "44px",
    paddingX: `${spacing[4]}px`,
    paddingY: `${spacing[3]}px`,
    fontSize: fontSize.lg,
    iconSize: 18,
  },
};

function getStateStyles(state: SelectState): React.CSSProperties {
  switch (state) {
    case "focused":
      return {
        borderColor: colors.primary500,
        boxShadow:   shadows.focus,
        backgroundColor: colors.white,
      };
    case "hover":
      return {
        borderColor: colors.neutral500,
        backgroundColor: colors.neutral50,
      };
    case "disabled":
      return {
        borderColor: colors.neutral200,
        backgroundColor: colors.neutral100,
        color: colors.neutral400,
        cursor: "not-allowed",
        opacity: 0.7,
      };
    default:
      return {
        borderColor: colors.neutral300,
        backgroundColor: colors.white,
      };
  }
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Pick a value",
  size = "md",
  forceState,
  disabled = false,
  label,
  id,
}: SelectProps) {
  const [hover, setHover]     = useState(false);
  const [focused, setFocused] = useState(false);

  const derivedState: SelectState =
    forceState ??
    (disabled ? "disabled" : focused ? "focused" : hover ? "hover" : "default");

  const sz = sizeMap[size];
  const stateStyles = getStateStyles(derivedState);

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display:  "inline-flex",
    flexDirection: "column",
    gap: `${spacing[1]}px`,
    fontFamily: fontFamily.sans,
  };

  const selectStyle: React.CSSProperties = {
    appearance: "none",
    display: "flex",
    alignItems: "center",
    height:   sz.height,
    paddingLeft:  sz.paddingX,
    paddingRight: `calc(${sz.paddingX} + ${sz.iconSize + 8}px)`,
    paddingTop:    sz.paddingY,
    paddingBottom: sz.paddingY,
    fontSize:   sz.fontSize,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.regular,
    color:      derivedState === "disabled" ? colors.neutral400 : colors.neutral900,
    border:     `1px solid`,
    borderRadius: radius.md,
    outline:    "none",
    cursor:     disabled ? "not-allowed" : "pointer",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
    width:      "100%",
    minWidth:   "180px",
    ...stateStyles,
  };

  const labelStyle: React.CSSProperties = {
    fontSize:   fontSize.sm,
    fontWeight: fontWeight.medium,
    color:      colors.neutral700,
    fontFamily: fontFamily.sans,
  };

  const chevronStyle: React.CSSProperties = {
    position:      "absolute",
    right:         sz.paddingX,
    top:           "50%",
    transform:     label ? "translateY(calc(-50% + 10px))" : "translateY(-50%)",
    pointerEvents: "none",
    color:         disabled ? colors.neutral400 : colors.neutral600,
  };

  return (
    <div style={wrapperStyle}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={id}
          style={selectStyle}
          value={value ?? ""}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          onMouseEnter={() => !disabled && setHover(true)}
          onMouseLeave={() => !disabled && setHover(false)}
          onFocus={() => !disabled && setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <svg
          style={chevronStyle}
          width={sz.iconSize}
          height={sz.iconSize}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
