:root {
  --bg: #070b17;
  --bg-soft: #0d1321;
  --panel: rgba(15, 23, 42, 0.9);
  --panel-strong: rgba(17, 24, 39, 0.96);
  --line: rgba(148, 163, 184, 0.14);
  --text: #edf4ff;
  --muted: #9aaac0;
  --purple: #8b5cf6;
  --purple-soft: #d8c3ff;
  --cyan: #22d3ee;
  --green: #34d399;
  --orange: #f59e0b;
  --danger: #fb7185;
  --shadow: 0 28px 60px rgba(3, 7, 18, 0.52);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.2), transparent 26%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.15), transparent 24%),
    var(--bg);
  color: var(--text);
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: rgba(9, 15, 25, 0.92);
  border-right: 1px solid var(--line);
  padding: 28px 18px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.brand-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  border-radius: 14px;
  font-weight: 800;
  box-shadow: 0 18px 34px rgba(139, 92, 246, 0.28);
}

.brand-name {
  font-weight: 800;
}

.brand-subtitle {
  color: var(--muted);
  font-size: 0.75rem;
}

.sidebar-nav {
  display: grid;
  gap: 10px;
}

.nav-item {
  border: 1px solid transparent;
  text-align: left;
  background: transparent;
  color: var(--muted);
  padding: 12px 14px;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.nav-item.active {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.2);
  color: var(--text);
}

.sidebar-card {
  margin-top: 30px;
  background: rgba(17, 24, 39, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 16px;
}

.tiny-label {
  display: inline-block;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-size: 0.68rem;
  margin-bottom: 8px;
}

.sidebar-card strong {
  display: block;
  margin-bottom: 14px;
}

.progress-track {
  width: 100%;
  height: 10px;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-track span,
.queue-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--purple), var(--cyan));
}

.sidebar-card small,
.video-copy small,
.team-copy small,
.queue-copy small,
.video-duration,
.stat-body small {
  color: var(--muted);
}

.main-panel {
  padding: 28px 28px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  color: var(--purple-soft);
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  margin-bottom: 8px;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.05em;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.78);
  border-radius: 12px;
  padding: 10px 12px;
  min-width: 220px;
}

.search-box span {
  color: var(--muted);
}

.search-box input {
  border: none;
  background: transparent;
  color: var(--muted);
  width: 100%;
}

.primary-btn,
.ghost-btn {
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  color: white;
  box-shadow: 0 18px 36px rgba(139, 92, 246, 0.25);
}

.ghost-btn {
  background: rgba(15, 23, 42, 0.82);
  color: var(--text);
  border-color: var(--line);
}

.primary-btn:hover,
.ghost-btn:hover,
.nav-item:hover {
  transform: translateY(-1px);
}

.profile-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid var(--line);
  padding: 8px 12px;
  border-radius: 14px;
}

.profile-avatar,
.team-avatar {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.85), rgba(34, 211, 238, 0.85));
  color: white;
  font-weight: 700;
}

.profile-pill strong,
.profile-pill small,
.team-row span {
  display: block;
}

.profile-pill small {
  color: var(--muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 16px;
}

.stat-tone {
  width: 14px;
  height: 54px;
  border-radius: 999px;
}

.stat-tone.purple { background: linear-gradient(180deg, var(--purple), rgba(139, 92, 246, 0.3)); }
.stat-tone.cyan { background: linear-gradient(180deg, var(--cyan), rgba(34, 211, 238, 0.3)); }
.stat-tone.green { background: linear-gradient(180deg, var(--green), rgba(52, 211, 153, 0.32)); }
.stat-tone.orange { background: linear-gradient(180deg, var(--orange), rgba(245, 158, 11, 0.28)); }

.stat-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-body span {
  color: var(--muted);
  font-size: 0.8rem;
}

.stat-body strong {
  font-size: 1.8rem;
  letter-spacing: -0.05em;
}

.content-grid,
.secondary-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.95fr;
  gap: 18px;
  margin-top: 22px;
}

.panel {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px 18px 16px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.chart-wrap {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 14px;
  height: 220px;
  padding-top: 14px;
}

.chart-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 12px;
  height: 100%;
}

.chart-bar {
  width: 100%;
  min-height: 20px;
  max-width: 52px;
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.95), rgba(34, 211, 238, 0.55));
  border-radius: 14px 14px 10px 10px;
  box-shadow: inset 0 -14px 28px rgba(0, 0, 0, 0.16);
}

.chart-col span {
  color: var(--muted);
  font-size: 0.75rem;
}

.prompt-panel textarea {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 16px;
  background: rgba(9, 15, 25, 0.9);
  color: var(--text);
  margin-top: 10px;
  line-height: 1.6;
}

.prompt-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 18px;
}

.prompt-tags span {
  background: rgba(139, 92, 246, 0.12);
  color: var(--purple-soft);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.74rem;
}

.full {
  width: 100%;
}

.video-list,
.queue-list,
.team-list,
.idea-list {
  display: grid;
  gap: 12px;
}

.video-row,
.team-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.video-row:first-child,
.team-row:first-child {
  border-top: none;
  padding-top: 0;
}

.video-thumb {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.65), rgba(34, 211, 238, 0.45));
  flex-shrink: 0;
}

.video-thumb.cyan { background: linear-gradient(135deg, rgba(34, 211, 238, 0.7), rgba(34, 211, 238, 0.2)); }
.video-thumb.green { background: linear-gradient(135deg, rgba(52, 211, 153, 0.7), rgba(52, 211, 153, 0.2)); }
.video-thumb.orange { background: linear-gradient(135deg, rgba(245, 158, 11, 0.7), rgba(245, 158, 11, 0.2)); }

.video-copy,
.team-copy {
  flex: 1;
}

.video-copy strong,
.team-copy strong,
.queue-copy strong {
  display: block;
  margin-bottom: 4px;
}

.video-meta {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
}

.status-pill {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.status-pill.ready {
  background: rgba(52, 211, 153, 0.12);
  color: #b7f7d9;
}

.status-pill.rendering {
  background: rgba(34, 211, 238, 0.12);
  color: #b9f5ff;
}

.status-pill.draft {
  background: rgba(245, 158, 11, 0.12);
  color: #f9d77d;
}

.queue-item {
  display: grid;
  gap: 8px;
  border-top: 1px solid rgba(148, 163, 184, 0.08);
  padding-top: 12px;
}

.queue-item:first-child {
  border-top: none;
  padding-top: 0;
}

.queue-progress {
  width: 100%;
  height: 10px;
  background: rgba(148, 163, 184, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.queue-item em {
  color: var(--purple-soft);
  font-style: normal;
  font-weight: 700;
}

.team-row {
  border-top: 1px solid rgba(148, 163, 184, 0.08);
  padding-top: 12px;
}

.team-row:first-child {
  border-top: none;
  padding-top: 0;
}

.team-row span {
  color: var(--purple-soft);
  font-weight: 700;
}

.idea-list {
  margin-top: 8px;
}

.idea-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  background: rgba(9, 15, 25, 0.85);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
}

.spark {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--cyan));
}

@media (max-width: 1080px) {
  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }
}

@media (max-width: 840px) {
  .stats-grid,
  .content-grid,
  .secondary-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .search-box {
    min-width: 0;
    flex: 1 1 180px;
  }
}

@media (max-width: 560px) {
  .main-panel {
    padding: 20px 16px 32px;
  }

  .sidebar {
    padding: 18px 14px;
  }

  .topbar-actions {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .profile-pill {
    justify-content: center;
  }

  .video-row,
  .team-row {
    flex-wrap: wrap;
  }
}
