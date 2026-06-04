# Exercise 2: Functions and Objects

Practice functions, rest/spread, and object usage.

1. Write an arrow function named `createUser` that accepts `name`, `email`, and `role = 'member'`.
2. Return an object from `createUser` containing those fields.
3. Write a function `formatUser` that destructures the user object and returns a string like `Name: <name>, Email: <email>, Role: <role>`.
4. Use spread syntax to create a new user object with `role: 'admin'`.

Example starter:
```js
const createUser = (name, email, role = 'member') => ({
  name,
  email,
  role,
});

const formatUser = ({ name, email, role }) =>
  `Name: ${name}, Email: ${email}, Role: ${role}`;

const user = createUser('Nina', 'nina@example.com');
const admin = { ...user, role: 'admin' };
console.log(formatUser(admin));
```
