export async function renderProjCard() {
  const html = `
    <div class="project-viewport">
      <div class="project-list" id="projectList">
          <div class="project-card">
            <img
              src="/public/images/projects/inteksoft.png"
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
          <div class="project-card">
            <img
              src="https://unsplash.com"
              alt="Product"
              class="card-image"
            />
            <div class="card-body">
              <h3 class="card-title">Project C</h3>
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
              <h3 class="card-title">Project D</h3>
              <p class="card-text">
                This project is about Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto blanditiis praesentium voluptatum...
              </p>
            </div>
          </div>
       </div>
    </div>
  `;

  return html;
}

