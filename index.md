---
layout: default
---

<style>
  :root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --bg-card: #ffffff;
    --border-radius: 1rem;
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: #f7fafc;
  }

  .v0-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Hero Section */
  .v0-hero {
    background: var(--gradient-primary);
    color: white;
    padding: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .v0-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
  }

  .v0-hero-content {
    position: relative;
    z-index: 1;
  }

  .v0-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .v0-hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #ffffff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .v0-hero-subtitle {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    opacity: 0.95;
    line-height: 1.8;
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
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 1rem;
  }

  .v0-btn-primary {
    background: white;
    color: #667eea;
    box-shadow: var(--shadow-lg);
  }

  .v0-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  .v0-btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .v0-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  /* Section */
  .v0-section {
    padding: 5rem 0;
  }

  .v0-section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .v0-section-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--gradient-accent);
    color: white;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .v0-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .v0-section-intro {
    font-size: 1.125rem;
    color: var(--text-secondary);
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
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--shadow-md);
    transition: all 0.3s;
    border: 1px solid #e2e8f0;
  }

  .v0-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }

  .v0-card-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .v0-card-icon-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  .v0-card-icon-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
  .v0-card-icon-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
  .v0-card-icon-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
  .v0-card-icon-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
  .v0-card-icon-6 { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }

  .v0-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .v0-card p {
    color: var(--text-secondary);
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
    background: var(--gradient-primary);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow-lg);
  }

  .v0-step h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .v0-step p {
    color: var(--text-secondary);
    line-height: 1.7;
  }

  /* Projects Section */
  .v0-project {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s;
    border: 1px solid #e2e8f0;
  }

  .v0-project:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }

  .v0-project-image {
    width: 100%;
    height: 200px;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }

  .v0-project-content {
    padding: 2rem;
  }

  .v0-project-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #edf2f7;
    color: #4a5568;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .v0-project h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .v0-project p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .v0-project-link {
    display: inline-flex;
    align-items: center;
    color: #667eea;
    font-weight: 600;
    text-decoration: none;
  }

  .v0-project-link:hover {
    text-decoration: underline;
  }

  /* Stats Section */
  .v0-stats {
    background: white;
    border-radius: var(--border-radius);
    padding: 3rem;
    box-shadow: var(--shadow-lg);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    text-align: center;
  }

  .v0-stat-number {
    font-size: 3rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .v0-stat-label {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  /* Contact Section */
  .v0-cta {
    background: var(--gradient-primary);
    color: white;
    padding: 5rem 0;
    text-align: center;
    border-radius: var(--border-radius);
    margin: 3rem 0;
  }

  .v0-cta h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  .v0-cta p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  /* Build in Public Section */
  .v0-social-banner {
    background: linear-gradient(135deg, #1da1f2 0%, #0c85d0 100%);
    color: white;
    padding: 3rem;
    border-radius: var(--border-radius);
    text-align: center;
    box-shadow: var(--shadow-xl);
    position: relative;
    overflow: hidden;
  }

  .v0-social-banner::before {
    content: '𝕏';
    position: absolute;
    font-size: 15rem;
    opacity: 0.05;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
  }

  .v0-social-banner-content {
    position: relative;
    z-index: 1;
  }

  .v0-social-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .v0-social-banner h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  .v0-social-banner p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .v0-social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: white;
    color: #1da1f2;
    border-radius: 0.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;
    box-shadow: var(--shadow-lg);
    font-size: 1.125rem;
  }

  .v0-social-link:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .v0-hero h1 {
      font-size: 2.5rem;
    }

    .v0-hero-subtitle {
      font-size: 1.125rem;
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
  }
</style>

<div class="v0-hero">
  <div class="v0-container">
    <div class="v0-hero-content">
      <span class="v0-badge">🚀 ChamsDel Online · App Studio</span>
      <h1>We Build & Publish Apps That Matter</h1>
      <p class="v0-hero-subtitle">
        From concept to launch, we create beautiful, functional applications that users love. 
        AI-powered development meets thoughtful design.
      </p>
      <div class="v0-btn-group">
        <a href="#projects" class="v0-btn v0-btn-primary">View Our Work</a>
        <a href="#contact" class="v0-btn v0-btn-secondary">Start a Project</a>
      </div>
    </div>
  </div>
</div>

<div class="v0-section">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">What We Do</span>
      <h2>Building Apps End-to-End</h2>
      <p class="v0-section-intro">
        We're a lean, fast-moving studio that turns ideas into shipped products. 
        From mobile apps to web platforms, we handle everything.
      </p>
    </div>

    <div class="v0-grid">
      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-1">📱</div>
        <h3>Mobile Apps</h3>
        <p>
          Native iOS and Android apps built with React Native and Expo. 
          Fast development, beautiful UX, and seamless deployment to app stores.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-2">🌐</div>
        <h3>Web Applications</h3>
        <p>
          Modern web apps with React, TypeScript, and cutting-edge frameworks. 
          Responsive, performant, and built for scale.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-3">🤖</div>
        <h3>AI Integration</h3>
        <p>
          Leverage the power of LLMs and AI to create intelligent features 
          that enhance your product and delight users.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-4">🎨</div>
        <h3>UI/UX Design</h3>
        <p>
          Beautiful, intuitive interfaces designed with user research and 
          modern design principles. Every pixel matters.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-5">🔧</div>
        <h3>Backend & APIs</h3>
        <p>
          Robust backends with Supabase, Firebase, or custom Node.js solutions. 
          Real-time data, auth, and scalable architecture.
        </p>
      </div>

      <div class="v0-card">
        <div class="v0-card-icon v0-card-icon-6">🚢</div>
        <h3>Publishing & Launch</h3>
        <p>
          We handle the entire deployment process—App Store, Google Play, 
          web hosting, and ongoing maintenance.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" style="background: white;">
  <div class="v0-container">
    <div class="v0-stats">
      <div class="v0-stat">
        <div class="v0-stat-number">12+</div>
        <div class="v0-stat-label">Apps Published</div>
      </div>
      <div class="v0-stat">
        <div class="v0-stat-number">50K+</div>
        <div class="v0-stat-label">Active Users</div>
      </div>
      <div class="v0-stat">
        <div class="v0-stat-number">2-6</div>
        <div class="v0-stat-label">Weeks to Launch</div>
      </div>
      <div class="v0-stat">
        <div class="v0-stat-number">100%</div>
        <div class="v0-stat-label">Client Satisfaction</div>
      </div>
    </div>
  </div>
</div>

<div class="v0-section">
  <div class="v0-container">
    <div class="v0-social-banner">
      <div class="v0-social-banner-content">
        <span class="v0-social-badge">🚀 Building in Public</span>
        <h3>Follow Our Journey on X</h3>
        <p>
          We believe in transparency and community. Follow along as we share our wins, 
          learnings, and behind-the-scenes glimpses of building great apps.
        </p>
        <a href="https://x.com/chamindg" target="_blank" class="v0-social-link">
          <span>Follow @chamindg</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" id="process">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">Our Process</span>
      <h2>How We Work</h2>
      <p class="v0-section-intro">
        A proven process that gets you from idea to launch quickly, 
        without sacrificing quality or cutting corners.
      </p>
    </div>

    <div class="v0-process">
      <div class="v0-step">
        <span class="v0-step-number">1</span>
        <h3>Discovery</h3>
        <p>
          We dive deep into your vision, users, and goals. 
          Define scope, features, and timeline together.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">2</span>
        <h3>Design</h3>
        <p>
          Create wireframes and high-fidelity mockups. 
          Iterate until the design feels perfect.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">3</span>
        <h3>Build</h3>
        <p>
          Rapid development with weekly demos. 
          You'll see progress every step of the way.
        </p>
      </div>

      <div class="v0-step">
        <span class="v0-step-number">4</span>
        <h3>Launch</h3>
        <p>
          Deploy to production, submit to app stores, 
          and celebrate with real users.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" id="projects" style="background: white;">
  <div class="v0-container">
    <div class="v0-section-header">
      <span class="v0-section-badge">Our Work</span>
      <h2>Current Projects</h2>
      <p class="v0-section-intro">
        Check out what we're building right now. Each project is a labor of love.
      </p>
    </div>

    <div class="v0-grid">
      <div class="v0-project">
        <div class="v0-project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          📋
        </div>
        <div class="v0-project-content">
          <span class="v0-project-tag">Compliance & Training</span>
          <h3>CompliQuiz</h3>
          <p>
            An AI-powered compliance quiz platform that helps businesses identify 
            applicable regulatory frameworks and train teams effectively. 
            Smart assessments for modern compliance needs.
          </p>
          <a href="https://CompliQuiz.ai" class="v0-project-link">
            Visit Site →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
          💭
        </div>
        <div class="v0-project-content">
          <span class="v0-project-tag">Personal Growth</span>
          <h3>DearMeWiser</h3>
          <p>
            A thoughtful companion app that helps you tap into your inner wisdom 
            through guided reflection and journaling. Your personal space for 
            growth and self-discovery.
          </p>
          <a href="https://DearMeWiser.com" class="v0-project-link">
            Visit Site →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
          🤖
        </div>
        <div class="v0-project-content">
          <span class="v0-project-tag">Productivity & AI</span>
          <h3>TwitPly (an X Reply Assistant)</h3>
          <p>
            Chrome extension that uses AI to help you craft better replies on X (Twitter). 
            Smart, context-aware, and fast.
          </p>
          <a href="#" class="v0-project-link">
            Learn More →
          </a>
        </div>
      </div>

      <div class="v0-project">
        <div class="v0-project-image" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
          🍽️
        </div>
        <div class="v0-project-content">
          <span class="v0-project-tag">Food & Lifestyle</span>
          <h3>PickEats</h3>
          <p>
            Never stress about "what to eat" again. PickEats helps you discover 
            the perfect meal, whether you're dining out or cooking at home. 
            Smart food decisions made easy.
          </p>
          <a href="https://PickEats.app" class="v0-project-link">
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
      <h2 id="contact">Ready to Build Something Great?</h2>
      <p>
        Whether you have a fully-formed idea or just a spark, 
        we'd love to help bring it to life.
      </p>
      <div class="v0-btn-group">
        <a href="mailto:chaminda@chamsdel.online" class="v0-btn v0-btn-primary">Get In Touch</a>
      </div>
    </div>
  </div>
</div>

<div class="v0-section" style="background: white; padding: 3rem 0; text-align: center;">
  <div class="v0-container">
    <p style="color: var(--text-secondary);">
      © 2025 ChamsDel Online. Building the future, one app at a time.
    </p>
  </div>
</div>
