# Exercise 5: Browser APIs and Timers

Practice localStorage, timers, and error handling.

1. Write a function `saveTheme(theme)` that stores a theme string in `localStorage`.
2. Write a function `loadTheme()` that returns the saved theme or `'light'` if none exists.
3. Create a timer with `setTimeout` to log a message after 2 seconds.
4. Create an interval with `setInterval` that logs a counter every second, then stop it after 5 seconds.
5. Wrap JSON parsing in a `try`/`catch` and log a friendly error when parsing fails.

Example starter:
```js
const saveTheme = theme => localStorage.setItem('theme', theme);
const loadTheme = () => localStorage.getItem('theme') ?? 'light';

setTimeout(() => console.log('Hello after delay'), 2000);
let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log('Tick', count);
}, 1000);
setTimeout(() => clearInterval(intervalId), 5000);

try {
  JSON.parse('not valid');
} catch (error) {
  console.error('Invalid JSON', error);
}
```