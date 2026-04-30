# HTML
## Skeleton
- header
- main
### main
- HTML, CSS
```
section -> container -> wrapper -> content
```
- HTML, JS
```
Page (HTML) -> Service -> Api (JS) -> Backend (Python)
                  ↓
              Component (render)
```

# JS
## Connection
```js
fetch(url, {
    method: "POST", //GET/DELETE/PUT
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
```
