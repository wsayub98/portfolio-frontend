export async function renderExpCard(data) {
    const html = await data.map((company) => {
        const tasks = listTasks(company.responsibilities);
        const works = displayWorks(company.projects);


        return `
<div class="experience-card">
    <h3>${company.name} - ${company.role}</h3>
    <div class="responsibilities">
        <ul class="activities">
            ${tasks}
        </ul>
    </div>
    <div class="projects">
        ${works}
    </div>
</div>
`
    }).join("");

    return html;
}

function listTasks(tasks) {
    const html = tasks.map((task) => {
        return `
          <li>${task}</li>
     `;
    }).join("");

    return html;
}

function displayWorks(works) {
    const html = works.map((work) => {
        return `
        <div class="project-thumb">
          <img
            src="/public/images/projects/${work}"
            alt="Product"
            class="card-image"
          />
        </div>
    `;
    }).join("");

    return html;
}
