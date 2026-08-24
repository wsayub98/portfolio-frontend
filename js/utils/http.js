import { PROD_URL } from "./config";

const BASE_URL = "http://localhost:8000"
const PROD = PROD_URL;
const API_V1 = "/api/v1"

export async function request(method, path, body) {
    try {
        var url = PROD + API_V1 + path;
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const result = await response.json();
        if (!result.status) {
            throw result.error
        }

        var data = result.data

        return data;
    } catch (error) {
        console.log(error.message);
    }
}
