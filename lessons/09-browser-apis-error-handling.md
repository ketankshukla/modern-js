# Lesson 9: Browser APIs, Timers, and Error Handling

## Browser APIs

Modern JavaScript interacts with browser APIs directly.

### localStorage

Store and retrieve data in the browser.
```js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

### sessionStorage

Use `sessionStorage` for data that only lasts while the tab is open.

### Timers

Use `setTimeout` and `setInterval` for delayed or repeated work.

```js
setTimeout(() => console.log('Delayed'), 1000);
const intervalId = setInterval(() => console.log('Tick'), 1000);
clearInterval(intervalId);
```

## Error handling

Handle runtime errors with `try`/`catch`.

```js
try {
  const value = JSON.parse('bad json');
} catch (error) {
  console.error('Parsing failed', error);
}
```

Use `throw` to signal invalid inputs.

```js
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};
```

## Debugging tips

- Use `console.log`, `console.warn`, and `console.error`.
- Inspect variables in DevTools.
- Add breakpoints and step through code.

## Practice concept

- Use browser storage for simple persistence.
- Keep timer callbacks clean and cancel intervals when needed.
- Wrap risky code in `try`/`catch` and throw errors intentionally when validation fails.
