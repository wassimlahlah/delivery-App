// ============================================================
// constants.js — Shared colors, helpers, degree labels
// ============================================================

export const COLORS = {
  bg: "#0f0f10",
  surface: "#1a1a1d",
  surfaceAlt: "#222226",
  border: "#2e2e34",
  borderLight: "#3a3a42",
  text: "#f0f0f3",
  muted: "#888892",
  faint: "#444450",
  accent: "#6c63ff",
  accentLight: "#8c85ff",
  accentDim: "#1e1c3a",
  green: "#22c98a",
  greenDim: "#0d2f20",
  amber: "#f5a623",
  amberDim: "#2e2010",
  red: "#e05252",
  redDim: "#2e1212",
};

export const DEGREE_LABELS = {
  1: "High School",
  2: "Associate's",
  3: "Bachelor's",
  4: "Master's",
  5: "PhD",
};

export function getStatus(score) {
  if (score > 80)
    return { label: "Hire", color: COLORS.green, dimColor: COLORS.greenDim, ringColor: COLORS.green };
  if (score > 50)
    return { label: "Interview", color: COLORS.amber, dimColor: COLORS.amberDim, ringColor: COLORS.amber };
  return { label: "Reject", color: COLORS.red, dimColor: COLORS.redDim, ringColor: COLORS.red };
}

export function calculateScore(c) {
  return Number(c.experience) * 5 + Number(c.testScore) * 0.6 + Number(c.degree) * 10;
}
