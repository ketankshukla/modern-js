# Lesson 7: Tooling and Testing Basics

## Node.js and npm

Modern JavaScript projects often use Node.js tooling.

- `npm init -y` creates a `package.json`.
- `npm install` adds libraries.

## Bundlers and transpilers

Tools like Vite, Webpack, and Rollup bundle code for the browser.
They also let you use newer syntax safely.

## Simple testing with Jest

Testing helps ensure code works as expected.

Example test:
```js
// sum.test.js
import { sum } from './sum.js';

test('adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

## Debugging tips

- Use browser DevTools console.
- Add `console.log()` for values.
- Use breakpoints and step through code.

## Practice concept

- Learn the basic toolchain for modern web development.
- Write simple tests for small functions.
- Use DevTools to inspect and debug code.

This completes the learning path. Try building a small app with the concepts you learned.
