import { renderExpCard } from "./experienceCard.js";
import { renderStackCard } from "./stackCard.js";
import { renderProjCard } from "./projectCard.js";

export async function renderIndex(data) {
    const projCardHtml = await renderProjCard(data.projects);
    const expCardHtml = await renderExpCard(data.companies);
    const stackCardHtml = await renderStackCard(data.skills);
    // loop data.companies/experience card, map join html element.
    const template = `
<header>
    <div class="container">
      <div class="nav">
        <div class="logo" id="header-name">${data.name}</div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#technologies">Stacks</a>
          <a href="#">Blogs</a>
          <button id="themeToggle" class="theme-toggle" title="Toggle Dark Mode">
            <!-- Moon icon (shown in light mode — click to go dark) -->
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>

              <!-- Sun icon (shown in dark mode — click to go light) -->
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sun">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="18.36"/>
              </svg>
          </button>
        </nav>
      </div>
    </div>
</header>

<main>
    <section id="hero">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-text">
            <h1>Hi, I'm ${data.name}</h1>
            <p class="tagline">Software Developer | PHP • Laravel • VueJS • REST APIs</p>
            <p class="hero-desc">
                I build and maintain web applications with a focus on clean code, reliable APIs, database-driven systems, and practical solutions to real-world problems. With 4+ years of professional experience, I've worked across fintech, government, and enterprise applications.
            </p>

            <div class="action">
              <a class="icon-btn" href="/resume.pdf" download title="Download Resume"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <polyline points="9 15 12 12 15 15"/>
                </svg>
              </a>
              <a class="icon-btn" href="https://linkedin.com/in/wsayub98" target="_blank" title="LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"/>
                </svg>
              </a>
              <a class="icon-btn" href="https://github.com/wsayub98" target="_blank" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.103.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.826.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src="/public/images/profile.jpg" alt="Syahir Ayub" class="profile-pic" />
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <h2>Personal Projects</h2>
      <div class="project-wrapper">
        <button class="slider-btn" id="prevBtn">←</button>
        ${projCardHtml}
        <button class="slider-btn" id="nextBtn">→</button>
      </div>
    </section>
    <section id="experience">
      <h3>Work Experience</h3>
      <div class="experience-wrapper">
        ${expCardHtml}
      </div>
    </section>
    <section class="stacks" id="technologies">
      <h2>Technologies</h2>
      <div class="stack-wrapper grid grid-cols-5 gap-3">
        ${stackCardHtml}
      </div>
    </section>
</main>

<footer>
    <div class="container">
      <div class="footer-wrapper">
        &copy; 2026 ${data.name}
        <div class="footer-link">
          <a href="https://github.com/wsayub98" target="_blank" title="GitHub" class="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.103.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.826.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/wsayub98" target="_blank" title="LinkedIn" class="footer-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
</footer>
`;
    return template;
}
