export async function renderStackCard(data) {
    const html = data.map((skill) => {
        return `
            <div class="stack-card">
                <span>ICON ${skill}</span>
                <p>${skill.toUpperCase()}</p>
            </div>
        `;
    }).join("");

    return html;
}
