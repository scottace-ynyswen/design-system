export interface AliasToken {
  name: string;
  value: string;
  primitive: string;
}

export interface AliasGroup {
  group: string;
  tokens: AliasToken[];
}

export const aliasGroups: AliasGroup[] = [
  {
    group: "Background",
    tokens: [
      { name: "bg/default",        value: "#FFFFFF", primitive: "White" },
      { name: "bg/subtle",         value: "#FAFAFA", primitive: "Neutral 50" },
      { name: "bg/muted",          value: "#F5F5F5", primitive: "Neutral 100" },
      { name: "bg/emphasis",       value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "bg/disabled",       value: "#EFEFEF", primitive: "Neutral 200" },
      { name: "bg/overlay",        value: "#0D0D0D", primitive: "Neutral 950" },
    ],
  },
  {
    group: "Text",
    tokens: [
      { name: "text/primary",      value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "text/secondary",    value: "#555555", primitive: "Neutral 700" },
      { name: "text/tertiary",     value: "#8A8A8A", primitive: "Neutral 600" },
      { name: "text/placeholder",  value: "#B0B0B0", primitive: "Neutral 500" },
      { name: "text/disabled",     value: "#C8C8C8", primitive: "Neutral 400" },
      { name: "text/inverse",      value: "#FFFFFF", primitive: "White" },
      { name: "text/error",        value: "#A20101", primitive: "Cherry 600" },
      { name: "text/success",      value: "#438F33", primitive: "Forrest 600" },
      { name: "text/warning",      value: "#AC831B", primitive: "Honey 600" },
      { name: "text/info",         value: "#2D5674", primitive: "Aqua 700" },
    ],
  },
  {
    group: "Icon",
    tokens: [
      { name: "icon/default",      value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "icon/secondary",    value: "#555555", primitive: "Neutral 700" },
      { name: "icon/tertiary",     value: "#8A8A8A", primitive: "Neutral 600" },
      { name: "icon/disabled",     value: "#C8C8C8", primitive: "Neutral 400" },
      { name: "icon/inverse",      value: "#FFFFFF", primitive: "White" },
      { name: "icon/error",        value: "#A20101", primitive: "Cherry 600" },
      { name: "icon/success",      value: "#438F33", primitive: "Forrest 600" },
      { name: "icon/warning",      value: "#AC831B", primitive: "Honey 600" },
    ],
  },
  {
    group: "Border",
    tokens: [
      { name: "border/default",    value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "border/subtle",     value: "#D4D4D4", primitive: "Neutral 300" },
      { name: "border/muted",      value: "#EFEFEF", primitive: "Neutral 200" },
      { name: "border/disabled",   value: "#C8C8C8", primitive: "Neutral 400" },
      { name: "border/focus",      value: "#43023B", primitive: "Violet" },
      { name: "border/error",      value: "#A20101", primitive: "Cherry 600" },
      { name: "border/success",    value: "#438F33", primitive: "Forrest 600" },
    ],
  },
  {
    group: "Divider",
    tokens: [
      { name: "divider/default",   value: "#EFEFEF", primitive: "Neutral 200" },
      { name: "divider/strong",    value: "#D4D4D4", primitive: "Neutral 300" },
    ],
  },
  {
    group: "Button",
    tokens: [
      { name: "button/primary/bg",         value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "button/primary/text",       value: "#FFFFFF", primitive: "White" },
      { name: "button/secondary/bg",       value: "#FFFFFF", primitive: "White" },
      { name: "button/secondary/border",   value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "button/secondary/text",     value: "#1F1F1F", primitive: "Neutral 900" },
      { name: "button/destructive/bg",     value: "#A20101", primitive: "Cherry 600" },
      { name: "button/destructive/text",   value: "#FFFFFF", primitive: "White" },
      { name: "button/disabled/bg",        value: "#EFEFEF", primitive: "Neutral 200" },
      { name: "button/disabled/text",      value: "#B0B0B0", primitive: "Neutral 500" },
    ],
  },
  {
    group: "Focus / State",
    tokens: [
      { name: "state/focus",       value: "#43023B", primitive: "Violet brand" },
      { name: "state/error",       value: "#A20101", primitive: "Cherry 600" },
      { name: "state/success",     value: "#438F33", primitive: "Forrest 600" },
      { name: "state/warning",     value: "#FACF61", primitive: "Honey 500" },
      { name: "state/info",        value: "#58AAE0", primitive: "Aqua 500" },
      { name: "state/disabled",    value: "#C8C8C8", primitive: "Neutral 400" },
    ],
  },
];
