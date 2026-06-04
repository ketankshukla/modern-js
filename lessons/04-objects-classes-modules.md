# Lesson 4: Objects, Classes, and Modules

## Modern objects

Objects store structured data and behavior.
```js
const profile = {
  name: 'Jordan',
  age: 30,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
```

## Classes

Classes provide a cleaner way to build objects.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const sarah = new Person('Sarah', 27);
```

## Modules

Modules help split code into reusable files.

### Export example
```js
// utils.js
export const square = x => x * x;
```

### Import example
```js
// app.js
import { square } from './utils.js';
console.log(square(5));
```

## Practical notes

- Use object methods to group related behavior.
- Prefer classes for models and reusable components.
- Keep modules small and meaningful.

Next: `lessons/05-promises-async-await-fetch.md`.
