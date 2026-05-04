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
## Render
problem: Need to write seperate render functions for each component because cannot reuse the same values across multiple components.
task: refactor portfolio to component-based architecture
action: componentization by creating new js file for different components that return html template; use statemanagement to centralize data handling across these components; put renderIndex() as entry;
result: Achieved a structured data flow where parent components seamlessly pass data to children. Reduced code duplication, improved maintainability, created more scalable rendering pipeline
