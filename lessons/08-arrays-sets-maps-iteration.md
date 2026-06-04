# Lesson 8: Arrays, Sets, Maps, and Iteration

## Array methods

Modern JavaScript uses array methods instead of manual loops.

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);
```

## Searching arrays

Use `find`, `some`, and `every`.

```js
const users = [
  { id: 1, active: true },
  { id: 2, active: false }
];
const firstActive = users.find(user => user.active);
const anyActive = users.some(user => user.active);
const allActive = users.every(user => user.active);
```

## Sets and Maps

Use `Set` for unique values and `Map` for key-value pairs.

```js
const colors = new Set(['red', 'green', 'blue', 'red']);
const values = new Map();
values.set('name', 'Ava');
values.set('role', 'developer');
```

## Iterating collections

Use `for...of` and the iterator protocol.

```js
for (const color of colors) {
  console.log(color);
}

for (const [key, value] of values) {
  console.log(`${key}: ${value}`);
}
```

## Optional chaining and nullish coalescing

These features make property access safer.

```js
const profile = { settings: { theme: 'dark' } };
const theme = profile.settings?.theme ?? 'light';
```

## Practice concept

- Prefer array helpers over manual looping.
- Use `Set` for deduplication and `Map` for flexible keys.
- Add guard checks with optional chaining and `??`.
