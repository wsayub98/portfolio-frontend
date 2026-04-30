import { request } from "../utils/http.js";

export function fetchPortfolio() {
    return request("POST", "/v1/portfolio")
}
