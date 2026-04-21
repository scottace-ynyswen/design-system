import React, { useState } from "react";
import { fontFamily, fontWeight } from "../../tokens";

export type TextFieldState = "default" | "focused" | "error" | "disabled";

export interface TextFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  forceState?: TextFieldState;
  disabled?: boolean;
  label?: string;
}

const borderMap: Record<TextFieldState, string> = {
  default:  "2px solid #1F1F1F",
  focused:  "2px solid #43023B",
  error:    "2px solid #A20101",
  disabled: "2px solid #CCCCCC",
};

export function TextField({
  placeholder = "Enter text",
  value,
  onChange,
  forceState,
  disabled = false,
  label,
}: TextFieldProps) {
  const [focused,  setFocused]  = useState(false);
  const [internal, setInternal] = useState("");

  const state: TextFieldState =
    forceState ?? (disabled ? "disabled" : focused ? "focused" : "default");

  const inputStyle: React.CSSProperties = {
    width:           "356px",
    height:          "48px",
    padding:         "0 16px",
    fontSize:        "14px",
    fontFamily:      fontFamily.sans,
    fontWeight:      state === "default" || state === "disabled" ? fontWeight.regular : fontWeight.medium,
    color:           disabled ? "#BBBBBB" : "#3C3C3C",
    backgroundColor: disabled ? "#FAFAFA" : "#FFFFFF",
    border:          borderMap[state],
    outline:         "none",
    boxSizing:       "border-box" as const,
    cursor:          disabled ? "not-allowed" : "text",
    transition:      "border 0.12s ease",
  };

  const labelStyle: React.CSSProperties = {
    display:     "block",
    fontFamily:  fontFamily.sans,
    fontSize:    "12px",
    fontWeight:  fontWeight.medium,
    color:       state === "error" ? "#A20101" : "#555555",
    marginBottom: "6px",
  };

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {label && <span style={labelStyle}>{label}</span>}
      <input
        type="text"
        placeholder={placeholder}
        value={value ?? internal}
        disabled={disabled}
        style={inputStyle}
        onChange={(e) => {
          setInternal(e.target.value);
          onChange?.(e.target.value);
        }}
        onFocus={() => !disabled && setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
