import { renderHeader } from "../components/portfolio/header.js";
import { renderIndex } from "../components/portfolio/index.js";
import { getPortfolio } from "../services/portfolioService.js";
import { store } from "../utils/store.js";

export async function initPortfolioPage() {
    const app = document.getElementById("app")
    try {
        // const header = document.getElementById("header-name");
        // call service 
        const data = await getPortfolio();
        store.portfolio = data;
        // const htmlHeader = renderHeader(data);
        const html = await renderIndex(store.portfolio)
        app.innerHTML = html;
    } catch (error) {
        console.log(error)
        app.innerHTML = `<p>Error</p>`;
    }
}
