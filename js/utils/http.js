const BASE_URL = "http://localhost:8000"

export function request(method, path, body) {
    try {
        var url = BASE_URL + path
        console.log(url)
        const response = fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        console.log(response)

        return response
    } catch (error) {
        console.log(error.message)
    }
}
