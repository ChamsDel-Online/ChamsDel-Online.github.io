---
layout: default
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L6VPXH0LQK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-L6VPXH0LQK');
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --color-primary: #000000;
    --color-secondary: #666666;
    --color-accent: #134686;
    --color-bg: #ffffff;
    --color-bg-alt: #fafafa;
    --color-border: #e5e5e5;
    --color-text: #000000;
    --color-text-secondary: #666666;
    --border-radius: 0.5rem;
    --transition: all 0.2s ease;
  }

  [data-theme="dark"] {
    --color-primary: #ffffff;
    --color-secondary: #999999;
    --color-accent: #4A7BA7;
    --color-bg: #000000;
    --color-bg-alt: #111111;
    --color-border: #333333;
    --color-text: #ffffff;
    --color-text-secondary: #999999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: var(--color-text);
    background: var(--color-bg);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .theme-toggle {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.25rem;
  }

  .theme-toggle:hover {
    background: var(--color-bg-alt);
  }

  .v0-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Hero Section */
  .v0-hero {
    padding: 8rem 0 6rem;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
  }

  .v0-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-bg-alt);
    border: 1px solid var(--color-accent);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: var(--color-accent);
  }

  .v0-hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .v0-hero-bio {
    font-size: 1.40625rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    font-family: 'Caveat', cursive;
    font-weight: 400;
  }

  .v0-hero-bio strong {
    color: var(--color-text);
    font-weight: 600;
    font-family: 'Caveat', cursive;
  }

  .v0-hero-subtitle {
    font-size: 1.5625rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    font-family: 'Caveat', cursive;
    font-weight: 400;
  }

  .v0-btn-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .v0-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.875rem 2rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    font-size: 1rem;
    border: 1px solid var(--color-border);
  }

  .v0-btn-primary {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
  }

  .v0-btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  [data-theme="dark"] .v0-btn-primary {
    background: var(--color-accent);
    color: white;
  }

  [data-theme="dark"] .v0-btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .v0-btn-secondary {
    background: transparent;
    color: var(--color-text);
    border-color: var(--color-border);
  }

  .v0-btn-secondary:hover {
    background: var(--color-bg-alt);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  /* Section */
  .v0-section {
    padding: 5rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .v0-section:last-child {
    border-bottom: none;
  }

  .v0-section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .v0-section-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-bg-alt);
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .v0-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .v0-section-intro {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
  }

  /* Cards Grid */
  .v0-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .v0-card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 2rem;
    transition: var(--transition);
  }

  .v0-card:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(19, 70, 134, 0.15);
  }

  .v0-card-icon {
    width: 3rem;
    height: 3rem;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
  }

  .v0-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .v0-card p {
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  /* Process Steps */
  .v0-process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .v0-step {
    position: relative;
    text-align: center;
  }

  .v0-step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--color-accent);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  [data-theme="dark"] .v0-step-number {
    background: var(--color-accent);
    color: white;
  }

  .v0-step h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--color-text);
  }

  .v0-step p {
    color: var(--color-text-secondary);
    line-height: 1.7;
  }

  /* Projects Section */
  .v0-project {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
  }

  .v0-project:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(19, 70, 134, 0.15);
  }

  .v0-project-image {
    width: 100%;
    height: 200px;
    background: var(--color-bg-alt);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    border-bottom: 1px solid var(--color-border);
  }

  .v0-project-content {
    padding: 2rem;
  }

  .v0-project-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--color-bg-alt);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .v0-project-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 600;
  }

  .v0-status-live {
    background: var(--color-accent);
    color: white;
    border: none;
  }

  .v0-status-soon {
    background: var(--color-bg-alt);
    color: var(--color-text);
    border: 1px solid var(--color-border);
  }

  .v0-status-beta {
    background: var(--color-bg-alt);
    color: var(--color-text);
    border: 1px solid var(--color-border);
  }

  .v0-status-coming {
    background: var(--color-bg-alt);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
  }

  .v0-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: baseline;
    margin-bottom: 1rem;
  }

  .v0-project h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    margin-top: 0;
    color: var(--color-text);
    line-height: 1.2;
  }

  .v0-project p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .v0-project-link {
    display: inline-flex;
    align-items: center;
    color: var(--color-accent);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .v0-project-link:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  /* Contact Section */
  .v0-cta {
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    padding: 5rem 0;
    text-align: center;
    border-radius: var(--border-radius);
    margin: 3rem 0;
  }

  .v0-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .v0-cta p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: var(--color-text-secondary);
  }

  /* Build in Public Section */
  .v0-social-banner {
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    color: var(--color-text);
    padding: 3rem;
    border-radius: var(--border-radius);
    text-align: center;
    position: relative;
  }

  .v0-social-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--color-bg);
    border: 1px solid var(--color-accent);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-accent);
  }

  .v0-social-banner h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .v0-social-banner p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .v0-social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--color-accent);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 700;
    text-decoration: none;
    transition: var(--transition);
    font-size: 1.125rem;
    border: 1px solid var(--color-accent);
  }

  .v0-social-link:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  [data-theme="dark"] .v0-social-link {
    background: var(--color-accent);
    color: white;
  }

  /* Footer */
  .v0-footer {
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid var(--color-border);
  }

  .v0-footer p {
    color: var(--color-text-secondary);
  }

  .v0-footer a {
    color: var(--color-accent);
    text-decoration: none;
    margin: 0 0.5rem;
  }

  .v0-footer a:hover {
    text-decoration: underline;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .v0-hero {
      padding: 6rem 0 4rem;
    }

    .v0-hero h1 {
      font-size: 2.5rem;
    }

    .v0-hero-subtitle {
      font-size: 1.40625rem;
    }

    .v0-section h2 {
      font-size: 2rem;
    }

    .v0-grid {
      grid-template-columns: 1fr;
    }

    .v0-btn-group {
      flex-direction: column;
    }

    .v0-btn {
      width: 100%;
      justify-content: center;
    }

    .theme-toggle {
      top: 1rem;
      right: 1rem;
    }
  }
</style>

<button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">🌙</button>

<div class="v0-hero">
  <div class="v0-container">
    <div class="v0-hero-content">
      <span class="v0-badge">Building in Public</span>
      <h1>Chaminda Delpagodage</h1>
      <p class="v0-hero-bio">
        <strong>Technology executive with nearly 2 decades of experience in Cybersecurity, Systems Engineering, and Leadership. Ex-PayPal.</strong><br>
        I'm actively building my own founder journey and sharing the process publicly.
      </p>
      <p class="v0-hero-subtitle">
        Shipping apps across different platforms—from mobile to web, experimenting with AI, 
        and learning from each launch. Some hit, some miss, all ship.
      </p>
      <div class="v0-btn-group">
        <a href="#projects" class="v0-btn v0-btn-primary">See What I'm Building</a>
        <a href="https://x.com/chams_builds" target="_blank" class="v0-btn v0-btn-secondary">Follow @chams_builds</a>
        <a href="https://www.linkedin.com/in/chamindadelpagodage/" target="_blank" class="v0-btn v0-btn-secondary">LinkedIn</a>
      </div>
    </div>
  </div>
</div>

<div class="v0-section">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">What I Build</span>
      <h2>My Toolkit & Approach</h2>
      <p class="v0-section-intro">
        I've shipped apps across different platforms and domains. 
        Here's what I've learned and the tools I've come to rely on.
      </p>
    </div>

    <div class="v0-grid">
      <div class="v0-card">
        <div class="v0-card-icon">📱</div>
        <h3>Mobile Apps</h3>
        <p>
          I've built several iOS apps using React Native and Expo. 
          I use Figma for app design and Supabase for backend. 
          The cross-platform approach lets me ship faster while maintaining native feel. 
          Each launch teaches me something new about mobile UX patterns.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon">🌐</div>
        <h3>Web Applications</h3>
        <p>
          From simple landing pages to complex web apps, I use React and TypeScript 
          to build responsive experiences. I use Supabase for backend and Vercel for hosting. 
          The web's flexibility lets me iterate quickly and reach users everywhere.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon">🤖</div>
        <h3>AI Integration</h3>
        <p>
          I've been experimenting with LLMs and AI features in my apps. 
          I use RAG (Retrieval-Augmented Generation) with LLMs for enhanced context accuracy. 
          It's fascinating to see how AI can enhance user experiences—from smart 
          content generation to personalized interactions.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon">🎨</div>
        <h3>UI/UX Design</h3>
        <p>
          Good design makes all the difference. I use Figma for app design and Canva for graphic design. 
          I've learned that simplicity and clarity beat complexity every time. Each app iteration helps me refine 
          my design instincts.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon">🔧</div>
        <h3>Backend & APIs</h3>
        <p>
          I use Supabase as backend and Vercel for hosting APIs. I also build custom Node.js backends depending on 
          the project needs. The right backend choice can make or break an app's 
          performance and scalability.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon">🚢</div>
        <h3>Publishing & Launch</h3>
        <p>
          Getting apps into the App Store, Chrome Web Store (browser extensions), and live on the web is 
          always a milestone. I've navigated the submission processes, learned 
          from rejections, and celebrated each successful launch.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="v0-section">
  <div class="v0-container">
    <div class="v0-social-banner">
      <div class="v0-social-banner-content">
        <span class="v0-social-badge">Everything in the Open</span>
        <h3>Follow the Journey</h3>
        <p>
          I share it all on X—wins, failures, revenue numbers, and lessons learned. 
          No BS, no highlight reel. Real indie hacking in real time.
        </p>
        <a href="https://x.com/chams_builds" target="_blank" class="v0-social-link">
          <span>Follow @chams_builds</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" id="process">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">The Recipe</span>
      <h2>How I Ship</h2>
      <p class="v0-section-intro">
        I keep it simple: ship, learn, iterate. No overthinking, no endless planning docs. 
        I maintain an agile mindset and embrace failing fast as a path to learning and growth. 
        Here's the playbook I follow for every app.
      </p>
    </div>

    <div class="v0-process">
      <div class="v0-step">
        <span class="v0-step-number">1</span>
        <h3>Idea → MVP</h3>
        <p>
          Got a problem worth solving? Build the smallest version 
          that tests the hypothesis. 2-4 weeks max.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">2</span>
        <h3>Ship Fast</h3>
        <p>
          Launch to early users ASAP. Real feedback beats 
          perfect code every time.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">3</span>
        <h3>Learn Quick</h3>
        <p>
          Watch what users do (not what they say). I use Reddit extensively for user feedback. 
          Double down on what works, kill what doesn't.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">4</span>
        <h3>Repeat</h3>
        <p>
          Iterate weekly. Some apps pop off, others fizzle. 
          Keep shipping either way.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" id="projects">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">The Lab</span>
      <h2>What I'm Shipping</h2>
      <p class="v0-section-intro">
        Multiple apps in flight. Some live, some launching soon. All built in public. 
        Jump in, try them out, and let me know what you think!
      </p>
    </div>

    <div class="v0-grid">
      <div class="v0-project">
        <div class="v0-project-image">
          💭
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Personal Growth</span>
            <span class="v0-project-status v0-status-live">🟢 In TestFlight</span>
          </div>
          <h3>DearMeWiser</h3>
          <p>
            Your pocket therapist. Journal, reflect, and tap into your inner wisdom. 
            iOS app in beta testing—join TestFlight to get early access!
          </p>
          <a href="https://testflight.apple.com/join/YQMkfRDU" class="v0-project-link">
            Beta Test It →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image">
          📋
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Compliance & Training</span>
            <span class="v0-project-status v0-status-live">🟢 Live</span>
          </div>
          <h3>CompliQuiz</h3>
          <p>
            Discover which compliance frameworks apply to your business in 60 seconds. 
            Scan your website, take the assessment, and get AI-powered guidance on PCI DSS, SOC 2, and more. 
            Free assessment available—upgrade to Premium for full requirement tracking.
          </p>
          <a href="https://CompliQuiz.ai" class="v0-project-link">
            Try it Now →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image">
          🤖
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Productivity & AI</span>
            <span class="v0-project-status v0-status-live">🟢 Live</span>
          </div>
          <h3>TwitPly</h3>
          <p>
            Reply habit tracking and AI-assisted reply generation for X (Twitter). 
            Chrome extension built for creators who want to grow their audience fast by being consistently responsive.
          </p>
          <a href="https://twitply.com" class="v0-project-link">
            Visit Site →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image">
          📊
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Analytics & Tools</span>
            <span class="v0-project-status v0-status-live">🟢 Live</span>
          </div>
          <h3>X Growth History Chart</h3>
          <p>
            Free tool for analyzing Twitter account performance. Upload your account_overview_analytics.csv to explore interactive charts: time-series metrics, follower growth with milestone celebrations, correlation heatmaps, and scatter plots. Track impressions, engagements, follows, and discover patterns in your Twitter analytics.
          </p>
          <a href="https://x-charts.xyz/" class="v0-project-link">
            Try it Now →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image">
          🍽️
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Food & Lifestyle</span>
            <span class="v0-project-status v0-status-beta">⏸️ Paused</span>
          </div>
          <h3>PickEats</h3>
          <p>
            End the "what's for dinner?" debate. Swipe, pick, eat. I'm testing with early users—
            join the waitlist and help shape the app!
          </p>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image">
          🎯
        </div>
        <div class="v0-project-content">
          <div class="v0-project-tags">
            <span class="v0-project-tag">Founder Journey</span>
            <span class="v0-project-status v0-status-live">🟢 Live</span>
          </div>
          <h3>IkigaiNiche.app</h3>
          <p>
            Still searching for your niche after months of exploration? Join a community of people finding their niche. 
            Discover your Ikigai, connect with like-minded members, and build something that matters—on your schedule.
          </p>
          <a href="https://ikigainiche.app/" class="v0-project-link">
            Visit Site →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="v0-section">
  <div class="v0-container">
    <div class="v0-cta">
      <h2 id="contact">Want to Chat?</h2>
      <p>
        Got questions? Feedback on my apps? Just want to say hi? 
        I'm building in public—let's connect!
      </p>
      <div class="v0-btn-group">
        <a href="mailto:chaminda@chamsdel.online" class="v0-btn v0-btn-primary">Drop Me a Line</a>
        <a href="https://x.com/chams_builds" target="_blank" class="v0-btn v0-btn-secondary">Follow @chams_builds</a>
      </div>
    </div>
  </div>
</div>

<div class="v0-footer">
  <div class="v0-container">
    <p>
      © 2025 ChamsDel Online. Shipping apps, making mistakes, learning in public. 🚀
    </p>
    <p style="margin-top: 1rem; font-size: 0.875rem;">
      <a href="privacy.html">Privacy Policy</a> | 
      <a href="terms.html">Terms of Service</a>
    </p>
  </div>
</div>

<script>
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
</script>
