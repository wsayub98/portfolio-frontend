export async function renderExpCard(data) {
    const html = await data.map((company) => {
        return `
<div class="experience-card">
    <h3>${company.name} - ${company.role}</h3>
    <div class="reponsibilities" style="border: 1px solid green">
        <ul class="activities" style="border: 1px solid red">
          <li style="border: 1px solid blue">Developed</li>
          <li style="border: 1px solid yellowgreen">setup</li>
          <li style="border: 1px solid orchid">Built</li>
        </ul>
        </div>
        <div class="projects">
        <div class="project-thumb">
          <img
            src="https://unsplash.com"
            alt="Product"
            class="card-image"
          />
        </div>
        <div class="project-thumb">
          <img
            src="https://unsplash.com"
            alt="Product"
            class="card-image"
          />
        </div>
    </div>
</div>
`
    }).join("");

    return html;
}
