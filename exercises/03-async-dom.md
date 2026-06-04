# Exercise 3: Async and DOM Interaction

Practice asynchronous code and DOM updates.

1. Create an HTML button and a div with IDs `loadButton` and `result`.
2. Write an async function `fetchData` that uses `fetch` to request JSON from `https://jsonplaceholder.typicode.com/todos/1`.
3. Show the fetched title inside the `result` element.
4. Add a click event listener to the button that calls `fetchData`.

Example starter:
```html
<button id="loadButton">Load Data</button>
<div id="result"></div>
<script>
const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    result.textContent = data.title;
  } catch (error) {
    result.textContent = 'Failed to load data.';
  }
};

loadButton.addEventListener('click', fetchData);
</script>
```

Tip: Open this in a browser or local dev server to verify the UI works.
