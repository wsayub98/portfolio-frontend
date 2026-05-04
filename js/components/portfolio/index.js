import { renderExpCard } from "./experienceCard.js";
import { renderStackCard } from "./stackCard.js";

export async function renderIndex(data) {
    console.log(data.name)

    const expCardHtml = await renderExpCard(data.companies);
    const stackCardHtml = await renderStackCard(data.skills);
    // loop data.companies/experience card, map join html element.
    const template = `
<header>
    <div class="container">
      <div class="nav">
        <div class="logo" id="header-name">${data.name}</div>
        <nav>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Stacks</a>
          <a href="#">Blogs</a>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              voluptatem veniam consectetur ab harum alias repellat, sequi
              eum. Iusto repudiandae, facere quae assumenda pariatur
              temporibus. Alias explicabo voluptatibus earum minima.
            </p>

            <div class="action" style="border: 1px solid purple">
              <button style="border: 1px solid yellow">Resume</button>
              <button style="border: 1px solid blue">LinkedIn</button>
              <button style="border: 1px solid green">Github</button>
            </div>
          </div>
          <div class="hero-image" style="border: 1px solid aqua">PIC</div>
        </div>
      </div>
    </section>
    <section id="projects">
      <h2>Personal Projects</h2>
      <div class="project-wrapper">
        <button>←</button>
        <div class="project-list">
          <div class="project-card">
            <img
              src="https://unsplash.com"
              alt="Product"
              class="card-image"
            />
            <div class="card-body">
              <h3 class="card-title">Project A</h3>
              <p class="card-text">
                This project is about Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto blanditiis praesentium voluptatum...
              </p>
            </div>
          </div>
          <div class="project-card">
            <img
              src="https://unsplash.com"
              alt="Product"
              class="card-image"
            />
            <div class="card-body">
              <h3 class="card-title">Project B</h3>
              <p class="card-text">
                This project is about Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto blanditiis praesentium voluptatum...
              </p>
            </div>
          </div>
        </div>
        <button>→</button>
      </div>
    </section>
    <section id="experience">
      <h3>Work Experience</h3>
      <div class="experience-wrapper">
        ${expCardHtml}
      </div>
    </section>
    <section class="stacks">
      <h2>Technologies</h2>
      <div class="stack-wrapper">
        ${stackCardHtml}
      </div>
    </section>
</main>

<footer>
    <div class="container">
      <div class="footer-wrapper">
        &copy; 2026 ${data.name}
        <div class="footer-link">
          <a href="#">Git</a>
          <a href="#">Link</a>
        </div>
      </div>
    </div>
</footer>
`;
    return template;
}
