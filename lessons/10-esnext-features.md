# Lesson 10: ESNext Features and Modern Patterns

## Optional chaining and nullish coalescing

These features reduce boilerplate checks.

```js
const config = { user: { profile: null } };
const username = config.user?.profile?.name ?? 'Guest';
```

## Logical assignment operators

Use `&&=`, `||=`, and `??=` for concise updates.

```js
let count = 0;
count ||= 5; // becomes 5 because 0 is falsy
let name = '';
name ??= 'Unknown';
```

## Dynamic imports

Load modules only when needed.

```js
const loadModule = async () => {
  const math = await import('./utils/math.js');
  console.log(math.square(5));
};
```

## Top-level await

Supported in ES modules.

```js
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const todo = await response.json();
console.log(todo);
```

## Records and tuples (proposal)

New syntax is still evolving, but the core idea is immutable data structures.

## Practice concept

- Use new syntax to simplify common patterns.
- Load modules dynamically for performance.
- Keep modern JavaScript readable by avoiding overly clever one-liners.
