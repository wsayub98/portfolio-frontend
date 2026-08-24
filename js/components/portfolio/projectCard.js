export async function renderProjCard(data) {
    const cardHtml = displayCards(data);
    const html = `
        <div class="project-viewport">
          <div class="project-list" id="projectList">
            ${cardHtml}
          </div>
        </div>
    `;

    return html;
}

function displayCards(data) {
    const html = data.map((project) => {
        return `
          <div class="project-card">
            <img
              src="/public/images/projects/${project.thumbnail}"
              alt="Product"
              class="card-image"
            />
            <div class="card-body">
              <h3 class="card-title">${project.title}</h3>
              <p class="card-text">
                ${project.description}
              </p>
            </div>
          </div>
`
    }).join(" ");

    return html;
}
