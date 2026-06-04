# Exercise 1: Basic JavaScript Syntax

Practice the fundamentals of modern JavaScript.

1. Create a constant `firstName` and `lastName`.
2. Create a `let` variable `age` and give it a number.
3. Use object destructuring to extract `firstName` and `age` from an object.
4. Build a message using a template literal: `Hello, <firstName>. You are <age> years old.`

Example starter:
```js
const person = { firstName: 'Sam', age: 22 };
const { firstName, age } = person;
const greeting = `Hello, ${firstName}. You are ${age} years old.`;
console.log(greeting);
```

Tip: keep `firstName` and `lastName` separate, then combine them as needed.
