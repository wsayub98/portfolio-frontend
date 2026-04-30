import { renderHeader } from "../components/portfolio/header.js";
import { getPortfolio } from "../services/portfolioService.js";

export async function initPortfolioPage() {
    try {
        const header = document.getElementById("header-name");
        // call service 
        const data = await getPortfolio();

        const htmlHeader = renderHeader(data);

        header.innerHTML = htmlHeader;
    } catch (error) {
        header.innerHTML = `<p>Error</p>`;
    }
}
