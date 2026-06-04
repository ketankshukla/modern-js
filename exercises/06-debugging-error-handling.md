# Exercise 6: Debugging and Error Handling

Practice validating input and handling runtime errors.

1. Write a function `parseNumber(value)` that returns a number or throws an error if the input isn’t numeric.
2. Write a function `safeDivide(a, b)` that throws an error for division by zero.
3. Call both functions inside a `try`/`catch` block and log a helpful message when an error occurs.
4. Use `console.log`, `console.warn`, and `console.error` to inspect values.

Example starter:
```js
const parseNumber = value => {
  const number = Number(value);
  if (Number.isNaN(number)) {
    throw new Error('Value is not a number');
  }
  return number;
};

const safeDivide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

try {
  const x = parseNumber('10');
  const result = safeDivide(x, 0);
  console.log(result);
} catch (error) {
  console.error('Calculation failed:', error.message);
}
```