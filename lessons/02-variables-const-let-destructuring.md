# Lesson 2: `const`, `let`, Destructuring, and Template Literals

## `const` vs `let`

- `const` declares a value that cannot be reassigned.
- `let` declares a variable with block scope that can change.

Example:
```js
const PI = 3.14159;
let counter = 0;
counter += 1;
```

## Destructuring arrays and objects

Destructuring lets you extract values cleanly.

### Arrays
```js
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
```

### Objects
```js
const user = { name: 'Ava', age: 24 };
const { name, age } = user;
```

## Default values

Provide defaults when a value may be missing.
```js
const { city = 'Unknown' } = user;
```

## Template literals

Template literals allow string interpolation and multi-line strings.
```js
const intro = `Name: ${name}
Age: ${age}`;
```

## Practice concept

- Use `const` for values that do not change.
- Use `let` for counters and variables that update.
- Unpack data with destructuring.
- Build strings with template literals.

Proceed to `lessons/03-functions-arrow-parameters-default-rest.md`.
