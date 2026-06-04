# Lesson 11: Capstone Project — Build a Small Web App

## Put everything together

A capstone project helps you practice multiple modern JavaScript concepts at once.

### App idea

Build a simple todo list or note app that:
- uses `const` and `let` appropriately
- stores data in `localStorage`
- updates the DOM dynamically
- uses functions, object methods, and array helpers
- handles errors and user input cleanly

### Core architecture

1. Data model
```js
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
```
2. Render function
```js
const renderTodos = todoList => {
  const list = document.querySelector('#todoList');
  list.innerHTML = '';
  todoList.forEach(todo => {
    const item = document.createElement('li');
    item.textContent = todo.text;
    list.appendChild(item);
  });
};
```
3. Event handling
```js
const form = document.querySelector('#todoForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  // add todo logic
});
```
4. Persistence
```js
localStorage.setItem('todos', JSON.stringify(todos));
```

## Deployment notes

Once the app works locally, deploy it through GitHub or Vercel by pushing the repo and connecting it to the platform.

## Practice concept

- Design a small app with a clear data flow.
- Use browser storage for persistence.
- Keep DOM updates isolated in reusable functions.
- Test each part separately before combining it.
