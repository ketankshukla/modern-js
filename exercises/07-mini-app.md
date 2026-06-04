# Exercise 7: Mini App Capstone

Practice building a simple app using the skills from this course.

1. Create an HTML page with:
   - a form input for a todo item
   - a submit button
   - a list container for todos
2. Use JavaScript to:
   - add new todos to an array
   - save the todos to `localStorage`
   - render the todo list into the page
3. Use array helpers like `map` or `forEach` to display the list.
4. Add one extra feature:
   - mark todos complete
   - remove a todo
   - or save a timestamp with each item

Example starter:
```js
const todos = JSON.parse(localStorage.getItem('todos') || '[]');

const renderTodos = list => {
  const container = document.querySelector('#todoList');
  container.innerHTML = '';
  list.forEach(todo => {
    const item = document.createElement('li');
    item.textContent = todo.text;
    container.appendChild(item);
  });
};

const form = document.querySelector('#todoForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#todoInput');
  const value = input.value.trim();
  if (!value) return;
  todos.push({ text: value, completed: false });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
  input.value = '';
});

renderTodos(todos);
```
