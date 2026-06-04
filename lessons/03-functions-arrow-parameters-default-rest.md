# Lesson 3: Functions, Arrow Syntax, Default Parameters, and Rest/Spread

## Arrow functions

Arrow functions are concise and preserve lexical `this`.
```js
const multiply = (x, y) => x * y;
```

## Function parameters

Default values let functions handle missing arguments.
```js
const greet = (name = 'Guest') => `Hello, ${name}!`;
```

## Rest parameters

Use rest to accept a variable number of arguments.
```js
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
```

## Spread syntax

Spread expands arrays or objects.
```js
const base = [1, 2];
const extended = [...base, 3, 4];
```

## Combining techniques

```js
const user = { name: 'Mia', role: 'developer' };
const updated = { ...user, role: 'senior developer' };
```

## Practice concept

- Write arrow functions for simple operations.
- Use default values for safer function calls.
- Collect arguments with rest parameters.
- Clone and merge arrays/objects with spread.

Then continue to `lessons/04-objects-classes-modules.md`.
