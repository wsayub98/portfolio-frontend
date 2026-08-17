import { renderIndex } from "../components/portfolio/index.js";
import { initProjectSlider } from "../components/portfolio/slider.js";
import { getPortfolio } from "../services/portfolioService.js";
import { store } from "../utils/store.js";

export async function initPortfolioPage() {
    const app = document.getElementById("app")
    try {
        // Call service. 
        const data = await getPortfolio();
        store.portfolio = data;

        // Body. 
        const html = await renderIndex(store.portfolio);
        app.innerHTML = html;

        // Prev & Next btn function.
        initProjectSlider();

        // Title in head tag.
        document.title = `Portfolio - ${store.portfolio.name}`;
    } catch (error) {
        console.log(error)
        app.innerHTML = `<p>Error: ${error}</p>`;
    }
}
