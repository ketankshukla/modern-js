# Exercise 4: Arrays, Sets, and Maps

Practice advanced collections and iteration.

1. Create an array of numbers from 1 to 10.
2. Use `map` to make a new array of values squared.
3. Filter the array to keep only odd numbers.
4. Create a `Set` from the squared values, then convert it back to an array.
5. Create a `Map` where the keys are the original numbers and the values are their squares.
6. Use `for...of` to print each `Map` entry.

Example starter:
```js
const values = [1, 2, 3, 4, 5];
const squared = values.map(n => n * n);
const odds = squared.filter(n => n % 2 !== 0);
const unique = new Set(odds);
const map = new Map(values.map(n => [n, n * n]));
for (const [key, value] of map) {
  console.log(key, value);
}
```
