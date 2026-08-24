export function toggle() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');

    themeBtn.addEventListener("click", () => {
        const isDark = html.getAttribute('data-theme') === "dark";
        html.setAttribute('data-theme', isDark ? "light" : "dark");
        localStorage.setItem('theme', isDark ? "light" : "dark");
        // themeBtn.innerHTML = isDark ? `
        //   <!-- Moon icon (shown in light mode — click to go dark) -->
        //   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-moon">
        //     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        //   </svg>
        //
        // ` : `
        //   <!-- Sun icon (shown in dark mode — click to go light) -->
        //   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sun">
        //     <circle cx="12" cy="12" r="5"/>
        //     <line x1="12" y1="1" x2="12" y2="3"/>
        //     <line x1="12" y1="21" x2="12" y2="23"/>
        //     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        //     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        //     <line x1="1" y1="12" x2="3" y2="12"/>
        //     <line x1="21" y1="12" x2="23" y2="12"/>
        //     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        //     <line x1="18.36" y1="5.64" x2="19.78" y2="18.36"/>
        //   </svg>
        // `;
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme)
    };
}
