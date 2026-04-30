import { fetchPortfolio } from "../api/portfolio.js";

export async function getPortfolio() {
    // call api 
    const data = await fetchPortfolio()
    return data
    // return [
    //     { name: "Project A" },
    //     { name: "Project B" },
    // ];
}
