const iconMap = {
    php: "https://cdn.simpleicons.org/php/8892BF",
    laravel: "https://cdn.simpleicons.org/laravel/FF2D20",
    drupal: "https://cdn.simpleicons.org/drupal/0678BE",
    codeigniter: "https://cdn.simpleicons.org/codeigniter/EF4223",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    vuejs: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
    mysql: "https://cdn.simpleicons.org/mysql/4479A1",
    git: "https://cdn.simpleicons.org/git/F05032",
    docker: "https://cdn.simpleicons.org/docker/2496ED",
    css: "https://cdn.simpleicons.org/css/1572B6",
    bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
};

export async function renderStackCard(data) {
    const html = data.map((skill) => {
        return `
            <div class="stack-card">
                <img src="${iconMap[skill]}" alt="${skill}" class="stack-icon" />
                <p>${skill.toUpperCase()}</p>
            </div>
        `;
    }).join("");

    return html;
}
