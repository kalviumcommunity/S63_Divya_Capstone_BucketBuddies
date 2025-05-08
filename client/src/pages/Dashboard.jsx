import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dashboard.css';

const feeds = [
  {
    user: {
      name: 'Joshua Jen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: '2 hours ago',
    },
    text: '"Conquered the climb, crushed the goal! 🏔️✅ #BucketListComplete #TrailBlazer #AdventureTime #BucketBuddies #BucketListWin"',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    ],
    stats: { views: 254, likes: 1, comments: 0 },
    reactions: ['❤️','👍','😎','🎉','✌️','😃'],
  },
  {
    user: {
      name: 'Abhay Sen',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      time: '4 days ago',
    },
    text: '"Bucket list ✅. Created my own canvas artwork and I\'m in love with it! #GoalAchieved #ArtistInMe #BucketBuddies"',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    ],
    stats: { views: 146, likes: 1, comments: 0 },
    reactions: ['✅','🎨','😍','👏','🌟'],
  },
];

const stories = [
  { name: 'Alan T', img: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { name: 'RAM', img: 'https://randomuser.me/api/portraits/men/35.jpg' },
];

const suggestions = [
  { name: 'Alex Singh', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { name: 'Raghu Sain', img: 'https://randomuser.me/api/portraits/men/37.jpg' },
  { name: 'Mira Dadhich', img: 'https://randomuser.me/api/portraits/women/38.jpg' },
];

export default function Dashboard() {
  // For staggered animation
  const feedListRef = useRef(null);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    // Animate feed cards in a staggered way
    const cards = feedListRef.current?.querySelectorAll('.feed-card');
    if (cards) {
      cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)';
          card.style.opacity = 1;
          card.style.transform = 'none';
        }, 200 + i * 120);
      });
    }
  }, []);

  useEffect(() => {
    // Check for login/signup flag
    if (sessionStorage.getItem('showBurst') === 'true') {
      setShowBurst(true);
      setTimeout(() => {
        setShowBurst(false);
        sessionStorage.removeItem('showBurst');
      }, 2500);
    }
  }, []);

  return (
    <div className="dashboard-root">
      {showBurst && (
        <div className="burst-popup">
          <div className="burst-confetti">
            {[...Array(18)].map((_, i) => (
              <div className={`confetti confetti-${i}`} key={i}></div>
            ))}
          </div>
          <div className="burst-message">🎉 Welcome! You have successfully signed in! 🎉</div>
        </div>
      )}
      {/* Sidebar */}
      <aside className="dashboard-sidebar" style={{height: '100vh', minHeight: '100vh'}}> {/* Fill vertical */}
        <div className="sidebar-logo">BB</div>
        <nav className="sidebar-nav">
          <a className="active"><span role="img" aria-label="home">🏠</span> <span>Home</span></a>
          <a><span role="img" aria-label="explore">🧭</span></a>
          <a><span role="img" aria-label="bucket">🗑️</span></a>
          <a><span role="img" aria-label="notifications">🔔</span></a>
        </nav>
        <div className="sidebar-settings">
          <span role="img" aria-label="settings">⚙️</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        {/* Top Bar */}
        <header className="dashboard-header">
          <div className="dashboard-greeting">
            <div className="greeting-main">Good to see you, <span className="greeting-highlight">BUD</span> !</div>
            <div className="greeting-sub">One step closer to achieving something amazing</div>
          </div>
          <div className="dashboard-header-actions">
            <button className="dashboard-search"><span role="img" aria-label="search">🔍</span></button>
            <div className="dashboard-profile"><span role="img" aria-label="profile">👤</span></div>
          </div>
        </header>

        {/* Feeds Section */}
        <section className="dashboard-feeds" style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <div className="feeds-title-row">
            <span className="feeds-title">FEEDS</span>
            <nav className="feeds-tabs">
              <a className="active">Recents</a>
              <a>Buddies</a>
              <a>Popular</a>
            </nav>
          </div>
          <div className="feeds-list" ref={feedListRef}>
            {feeds.map((feed, i) => (
              <div className={`feed-card ${i === 0 ? 'feed-blue' : 'feed-yellow'}`} key={i}>
                <div className="feed-user-row">
                  <img src={feed.user.avatar} alt={feed.user.name} className="feed-avatar" />
                  <div>
                    <div className="feed-user-name">{feed.user.name}</div>
                    <div className="feed-user-time">{feed.user.time}</div>
                  </div>
                  <span className="feed-menu">⋮</span>
                </div>
                <div className="feed-text">{feed.text}</div>
                <div className="feed-images-row">
                  {feed.images.map((img, j) => (
                    <img src={img} alt="feed" className="feed-img" key={j} />
                  ))}
                </div>
                <div className="feed-actions-row">
                  <span className="feed-views">👁️ {feed.stats.views}</span>
                  <span className="feed-like">❤️ Like</span>
                  <span className="feed-comments">💬 Comments</span>
                </div>
                <div className="feed-reactions-row">
                  {feed.reactions.map((r, k) => (
                    <span key={k}>{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="dashboard-rightbar" style={{height: '100vh', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div className="rightbar-section">
          <div className="rightbar-title">STORIES</div>
          <div className="rightbar-stories">
            {stories.map((story, i) => (
              <div className="story-card" key={i}>
                <img src={story.img} alt={story.name} className="story-img" />
                <div className="story-name">{story.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightbar-section">
          <div className="rightbar-title">SUGGESTIONS</div>
          <div className="rightbar-suggestions">
            {suggestions.map((s, i) => (
              <div className="suggestion-row" key={i}>
                <img src={s.img} alt={s.name} className="suggestion-avatar" />
                <span className="suggestion-name">{s.name}</span>
                <button className="suggestion-follow">Follow</button>
              </div>
            ))}
            <button className="suggestion-seeall">See All</button>
          </div>
        </div>
        <div className="rightbar-section">
          <div className="share-box">
            <input className="share-input" placeholder="Share Something.." />
            <div className="share-actions-row">
              <span>📁 File</span>
              <span>🖼️ Image</span>
              <span>📍 Location</span>
              <span>🌐 Public</span>
            </div>
            <button className="share-send">Send</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
