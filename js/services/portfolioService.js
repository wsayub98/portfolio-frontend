import { fetchPortfolio } from "../api/portfolio.js";

export function getPortfolio() {
    // call api 
    const data = fetchPortfolio()
    return data
    // return [
    //     { name: "Project A" },
    //     { name: "Project B" },
    // ];
}
