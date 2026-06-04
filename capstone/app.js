const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const countLabel = document.querySelector('#count');
const clearCompleted = document.querySelector('#clearCompleted');

const STORAGE_KEY = 'modern-js-todos';

const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    console.error('Failed to load todos:', error);
    return [];
  }
};

const saveTodos = todos => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const renderTodos = todos => {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    todoList.innerHTML = '<li class="todo-item">No todos yet. Add one above.</li>';
  }

  todos.forEach(todo => {
    const item = document.createElement('li');
    item.className = `todo-item${todo.completed ? ' completed' : ''}`;

    const text = document.createElement('span');
    text.textContent = todo.text;

    const buttons = document.createElement('div');
    buttons.innerHTML = `
      <button class="toggle">${todo.completed ? 'Undo' : 'Done'}</button>
      <button class="remove">Remove</button>
    `;

    item.append(text, buttons);

    item.querySelector('.toggle').addEventListener('click', () => {
      todo.completed = !todo.completed;
      saveTodos(todos);
      renderTodos(todos);
    });

    item.querySelector('.remove').addEventListener('click', () => {
      const index = todos.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos(todos);
      }
    });

    todoList.appendChild(item);
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  countLabel.textContent = `${activeCount} active item${activeCount === 1 ? '' : 's'}`;
};

const todos = loadTodos();

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  todos.push({
    id: Date.now(),
    text,
    completed: false,
  });

  saveTodos(todos);
  renderTodos(todos);
  todoInput.value = '';
});

clearCompleted.addEventListener('click', () => {
  const filtered = todos.filter(todo => !todo.completed);
  todos.length = 0;
  todos.push(...filtered);
  saveTodos(todos);
  renderTodos(todos);
});

renderTodos(todos);
