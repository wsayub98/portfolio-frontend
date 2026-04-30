import { getPortfolio } from "../services/portfolioService.js";

export function initPortfolioPage() {
    // call service 
    const data = getPortfolio();

    console.log("Data: ", data);
    return data;
}
