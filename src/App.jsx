const navItems = [
  'Overview',
  'Projects',
  'Videos',
  'Templates',
  'Analytics',
  'Team',
  'Settings',
];

const overviewStats = [
  { label: 'Videos created', value: '12,480', delta: '+18.2%', tone: 'purple' },
  { label: 'Active plans', value: '284', delta: '+9.4%', tone: 'cyan' },
  { label: 'Avg. completion', value: '92%', delta: '+6.1%', tone: 'green' },
  { label: 'Render credits', value: '8.4k', delta: '-12%', tone: 'orange' },
];

const performanceBars = [
  { day: 'Mon', value: 64 },
  { day: 'Tue', value: 78 },
  { day: 'Wed', value: 58 },
  { day: 'Thu', value: 84 },
  { day: 'Fri', value: 92 },
  { day: 'Sat', value: 74 },
  { day: 'Sun', value: 88 },
];

const recentVideos = [
  { title: 'AI founder story', status: 'Ready', duration: '00:45', channel: 'YouTube Shorts', accent: 'purple' },
  { title: 'Product launch teaser', status: 'Rendering', duration: '00:32', channel: 'Instagram Reels', accent: 'cyan' },
  { title: 'Growth strategy explainer', status: 'Draft', duration: '01:12', channel: 'LinkedIn', accent: 'green' },
  { title: 'Daily mindset reel', status: 'Ready', duration: '00:28', channel: 'TikTok', accent: 'orange' },
];

const renderQueue = [
  { name: 'Client pitch reel', value: '78%', meta: 'Scene 4 of 6' },
  { name: 'Brand ad campaign', value: '42%', meta: 'Voice sync in progress' },
  { name: 'Creator toolkit', value: '89%', meta: 'Export queued' },
];

const team = [
  { name: 'Maya', role: 'Creative lead', score: '96%' },
  { name: 'Jordan', role: 'Motion designer', score: '91%' },
  { name: 'Elena', role: 'Script editor', score: '94%' },
];

const trendIdeas = [
  'AI productivity hacks for solo founders',
  'Why faceless channels outperform text first',
  'Career growth in the AI creator economy',
  'Short-form video frameworks that convert',
];

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-icon">V</div>
          <div>
            <div className="brand-name">VibeForge</div>
            <div className="brand-subtitle">Studio</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <button key={item} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <span className="tiny-label">Usage</span>
          <strong>68% of plan</strong>
          <div className="progress-track">
            <span style={{ width: '68%' }} />
          </div>
          <small>1,420 / 2,100 credits used</small>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Dashboard</div>
            <h1>Creator workspace</h1>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <span>⌕</span>
              <input type="text" value="Search projects" readOnly />
            </div>
            <button className="primary-btn">New video</button>
            <div className="profile-pill">
              <div className="profile-avatar">R</div>
              <div>
                <strong>Raj</strong>
                <small>Pro</small>
              </div>
            </div>
          </div>
        </header>

        <section className="stats-grid">
          {overviewStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <div className={`stat-tone ${stat.tone}`} />
              <div className="stat-body">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <small>{stat.delta} this month</small>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel panel-wide">
            <div className="panel-header">
              <div>
                <div className="tiny-label">Performance</div>
                <h2>Video engagement</h2>
              </div>
              <button className="ghost-btn">This week</button>
            </div>

            <div className="chart-wrap">
              {performanceBars.map((bar) => (
                <div key={bar.day} className="chart-col">
                  <div className="chart-bar" style={{ height: `${bar.value}%` }} />
                  <span>{bar.day}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel prompt-panel">
            <div className="tiny-label">Generate</div>
            <h2>New prompt</h2>
            <textarea
              defaultValue="AI is reshaping creator businesses. Create a high-retention faceless video with a punchy hook and bold visuals."
            />
            <div className="prompt-tags">
              <span>Short-form</span>
              <span>Voiceover</span>
              <span>4K</span>
            </div>
            <button className="primary-btn full">Generate video</button>
          </article>
        </section>

        <section className="secondary-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="tiny-label">Library</div>
                <h2>Recent videos</h2>
              </div>
              <button className="ghost-btn">View all</button>
            </div>

            <div className="video-list">
              {recentVideos.map((video) => (
                <div key={video.title} className="video-row">
                  <div className={`video-thumb ${video.accent}`} />
                  <div className="video-copy">
                    <strong>{video.title}</strong>
                    <small>{video.channel}</small>
                  </div>
                  <div className="video-meta">
                    <span className="video-duration">{video.duration}</span>
                    <span className={`status-pill ${video.status.toLowerCase()}`}>{video.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="tiny-label">Queue</div>
                <h2>Render pipeline</h2>
              </div>
            </div>

            <div className="queue-list">
              {renderQueue.map((item) => (
                <div key={item.name} className="queue-item">
                  <div className="queue-copy">
                    <strong>{item.name}</strong>
                    <small>{item.meta}</small>
                  </div>
                  <div className="queue-progress">
                    <span style={{ width: item.value }} />
                  </div>
                  <em>{item.value}</em>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="tiny-label">Team</div>
                <h2>Creative score</h2>
              </div>
            </div>

            <div className="team-list">
              {team.map((member) => (
                <div key={member.name} className="team-row">
                  <div className="team-avatar">{member.name.charAt(0)}</div>
                  <div className="team-copy">
                    <strong>{member.name}</strong>
                    <small>{member.role}</small>
                  </div>
                  <span>{member.score}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <div className="tiny-label">Ideas</div>
                <h2>Trending topics</h2>
              </div>
            </div>

            <div className="idea-list">
              {trendIdeas.map((idea) => (
                <div key={idea} className="idea-item">
                  <span className="spark" />
                  {idea}
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
