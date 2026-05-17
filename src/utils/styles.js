// ============================================================
// styles.js — Global CSS string (injected once in App.jsx)
// ============================================================
import { COLORS } from "./constants";

export const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, #root {
    background: ${COLORS.bg};
    color: ${COLORS.text};
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    min-height: 100vh;
  }

  .app-shell { display: flex; flex-direction: column; min-height: 100vh; }

  /* ── NAV ── */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(15,15,16,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid ${COLORS.border};
    padding: 0 32px;
    display: flex; align-items: center; justify-content: space-between;
    height: 60px;
  }
  .nav-logo {
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 20px;
    color: ${COLORS.text}; letter-spacing: -0.5px;
  }
  .nav-logo span { color: ${COLORS.accent}; }
  .nav-links { display: flex; gap: 4px; }
  .nav-btn {
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 14px;
    color: ${COLORS.muted}; padding: 8px 16px;
    border-radius: 8px; transition: all 0.18s ease; font-weight: 400;
  }
  .nav-btn:hover { color: ${COLORS.text}; background: ${COLORS.surfaceAlt}; }
  .nav-btn.active { color: ${COLORS.text}; background: ${COLORS.surfaceAlt}; font-weight: 500; }
  .nav-pill {
    font-size: 11px; background: ${COLORS.accentDim}; color: ${COLORS.accentLight};
    border-radius: 99px; padding: 2px 8px; margin-left: 6px; font-weight: 500;
  }

  /* ── PAGE WRAPPER ── */
  .page { flex: 1; padding: 48px 32px; max-width: 960px; margin: 0 auto; width: 100%; }

  /* ── HOME ── */
  .home-hero { padding: 80px 0 60px; text-align: center; }
  .home-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${COLORS.accentDim}; color: ${COLORS.accentLight};
    font-size: 12px; font-weight: 500; letter-spacing: 0.06em;
    text-transform: uppercase; border-radius: 99px; padding: 5px 14px;
    margin-bottom: 28px; border: 1px solid rgba(108,99,255,0.2);
  }
  .home-eyebrow-dot {
    width: 6px; height: 6px; background: ${COLORS.accent};
    border-radius: 50%; animation: pulse 2s ease infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.75); }
  }
  .home-title {
    font-family: 'Syne', sans-serif; font-size: 52px; font-weight: 800;
    line-height: 1.08; letter-spacing: -2px; color: ${COLORS.text}; margin-bottom: 20px;
  }
  .home-title-accent { color: ${COLORS.accent}; }
  .home-subtitle {
    font-size: 17px; color: ${COLORS.muted}; line-height: 1.6;
    max-width: 480px; margin: 0 auto 40px; font-weight: 300;
  }
  .home-cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    background: ${COLORS.accent}; color: #fff; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
    padding: 11px 24px; border-radius: 10px; transition: all 0.18s ease;
  }
  .btn-primary:hover { background: ${COLORS.accentLight}; transform: translateY(-1px); }
  .btn-ghost {
    background: none; color: ${COLORS.muted}; border: 1px solid ${COLORS.border};
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 400; padding: 11px 24px;
    border-radius: 10px; transition: all 0.18s ease;
  }
  .btn-ghost:hover { border-color: ${COLORS.borderLight}; color: ${COLORS.text}; }
  .home-features {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 64px;
  }
  .feature-card {
    background: ${COLORS.surface}; border: 1px solid ${COLORS.border};
    border-radius: 14px; padding: 24px; transition: border-color 0.18s;
  }
  .feature-card:hover { border-color: ${COLORS.borderLight}; }
  .feature-icon {
    width: 40px; height: 40px; background: ${COLORS.accentDim};
    border-radius: 10px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 16px; font-size: 18px;
  }
  .feature-title {
    font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 600;
    margin-bottom: 8px; color: ${COLORS.text};
  }
  .feature-desc { font-size: 13px; color: ${COLORS.muted}; line-height: 1.6; font-weight: 300; }

  /* ── DASHBOARD ── */
  .dash-header { margin-bottom: 32px; }
  .dash-header h2 {
    font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 700;
    letter-spacing: -0.8px; margin-bottom: 4px;
  }
  .dash-header p { color: ${COLORS.muted}; font-size: 14px; font-weight: 300; }
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 36px; }
  .stat-card {
    background: ${COLORS.surface}; border: 1px solid ${COLORS.border};
    border-radius: 14px; padding: 20px 22px; transition: border-color 0.18s;
  }
  .stat-card:hover { border-color: ${COLORS.borderLight}; }
  .stat-label {
    font-size: 12px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
    color: ${COLORS.faint}; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
  }
  .stat-label-dot { width: 7px; height: 7px; border-radius: 50%; }
  .stat-value {
    font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 700;
    letter-spacing: -1px; line-height: 1; margin-bottom: 4px;
  }
  .stat-sub { font-size: 12px; color: ${COLORS.muted}; font-weight: 300; }
  .score-dist-section { margin-bottom: 32px; }
  .section-title {
    font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 600;
    margin-bottom: 16px; color: ${COLORS.text};
  }
  .bar-row { display: flex; flex-direction: column; gap: 12px; }
  .bar-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .bar-label { font-size: 13px; color: ${COLORS.muted}; }
  .bar-count { font-size: 13px; font-weight: 500; color: ${COLORS.text}; }
  .bar-track { height: 6px; background: ${COLORS.surfaceAlt}; border-radius: 99px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 99px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
  .empty-dash { text-align: center; padding: 60px 0; color: ${COLORS.muted}; font-size: 14px; font-weight: 300; }
  .empty-dash-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.3; }

  /* ── CANDIDATES PAGE ── */
  .cand-layout { display: grid; grid-template-columns: 360px 1fr; gap: 24px; align-items: start; }

  /* ── CANDIDATE FORM ── */
  .form-card {
    background: ${COLORS.surface}; border: 1px solid ${COLORS.border};
    border-radius: 16px; padding: 28px; position: sticky; top: 80px;
  }
  .form-card-title { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; margin-bottom: 6px; }
  .form-card-sub { font-size: 13px; color: ${COLORS.muted}; font-weight: 300; margin-bottom: 24px; }
  .field { margin-bottom: 16px; }
  .field-label {
    font-size: 12px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
    color: ${COLORS.faint}; margin-bottom: 8px; display: block;
  }
  .field-input {
    width: 100%; background: ${COLORS.surfaceAlt}; border: 1px solid ${COLORS.border};
    border-radius: 10px; padding: 11px 14px; color: ${COLORS.text};
    font-family: 'DM Sans', sans-serif; font-size: 14px; outline: none; transition: border-color 0.18s;
  }
  .field-input::placeholder { color: ${COLORS.faint}; }
  .field-input:focus { border-color: ${COLORS.accent}; }
  .field-hint { font-size: 11px; color: ${COLORS.faint}; margin-top: 5px; }
  .field-select {
    width: 100%; background: ${COLORS.surfaceAlt}; border: 1px solid ${COLORS.border};
    border-radius: 10px; padding: 11px 14px; color: ${COLORS.text};
    font-family: 'DM Sans', sans-serif; font-size: 14px; outline: none;
    cursor: pointer; transition: border-color 0.18s; appearance: none;
  }
  .field-select:focus { border-color: ${COLORS.accent}; }
  .field-select option { background: ${COLORS.surface}; }
  .submit-btn {
    width: 100%; background: ${COLORS.accent}; color: #fff; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
    padding: 12px; border-radius: 10px; margin-top: 8px; transition: all 0.18s ease; letter-spacing: 0.01em;
  }
  .submit-btn:hover { background: ${COLORS.accentLight}; }
  .submit-btn:active { transform: scale(0.99); }
  .error-msg {
    background: ${COLORS.redDim}; border: 1px solid rgba(224,82,82,0.25);
    color: ${COLORS.red}; border-radius: 8px; padding: 10px 14px;
    font-size: 13px; margin-bottom: 16px;
  }

  /* ── CANDIDATE LIST ── */
  .cand-list { display: flex; flex-direction: column; gap: 12px; }
  .cand-empty {
    text-align: center; padding: 60px 20px; background: ${COLORS.surface};
    border: 1px dashed ${COLORS.border}; border-radius: 16px;
    color: ${COLORS.muted}; font-size: 14px; font-weight: 300;
  }
  .cand-empty-icon { font-size: 36px; margin-bottom: 12px; opacity: 0.3; }

  /* ── CANDIDATE CARD ── */
  .cand-card {
    background: ${COLORS.surface}; border: 1px solid ${COLORS.border};
    border-radius: 14px; padding: 18px 20px;
    display: flex; align-items: center; gap: 16px;
    transition: border-color 0.18s; animation: fadeIn 0.25s ease;
  }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
  .cand-card:hover { border-color: ${COLORS.borderLight}; }
  .score-ring {
    flex-shrink: 0; width: 54px; height: 54px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; flex-direction: column;
    font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; line-height: 1; border: 2px solid;
  }
  .score-ring-sub { font-size: 9px; font-weight: 400; font-family: 'DM Sans', sans-serif; opacity: 0.7; }
  .cand-info { flex: 1; min-width: 0; }
  .cand-name {
    font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 600;
    margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .cand-meta { display: flex; gap: 16px; flex-wrap: wrap; }
  .cand-meta-item { font-size: 12px; color: ${COLORS.muted}; }
  .cand-meta-item span { color: ${COLORS.text}; font-weight: 500; }
  .status-badge {
    flex-shrink: 0; font-size: 12px; font-weight: 500;
    padding: 5px 12px; border-radius: 99px; letter-spacing: 0.01em;
  }
  .cand-actions { flex-shrink: 0; display: flex; gap: 8px; align-items: center; }
  .delete-btn {
    background: none; border: none; cursor: pointer; color: ${COLORS.faint};
    font-size: 18px; width: 32px; height: 32px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center; transition: all 0.15s;
  }
  .delete-btn:hover { background: ${COLORS.redDim}; color: ${COLORS.red}; }

  /* ── SORT BAR ── */
  .sort-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .sort-bar-count { font-size: 13px; color: ${COLORS.muted}; }
  .sort-select {
    background: ${COLORS.surface}; border: 1px solid ${COLORS.border};
    border-radius: 8px; color: ${COLORS.text}; font-family: 'DM Sans', sans-serif;
    font-size: 13px; padding: 6px 12px; outline: none; cursor: pointer;
  }
  .sort-select option { background: ${COLORS.surface}; }

  /* ── SCORE BAR ── */
  .score-bar-wrap { width: 100%; height: 3px; background: ${COLORS.border}; border-radius: 99px; margin-top: 8px; }
  .score-bar-fill { height: 100%; border-radius: 99px; }
`;
