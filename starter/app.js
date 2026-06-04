const loadButton = document.querySelector('#loadButton');
const result = document.querySelector('#result');

const fetchTodo = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    const todo = await response.json();
    const { title, completed } = todo;

    result.innerHTML = `
      <strong>Todo item</strong>
      <p>${title}</p>
      <p>Status: <strong>${completed ? 'Completed' : 'Pending'}</strong></p>
    `;
  } catch (error) {
    result.textContent = 'Unable to load data. Check the console for details.';
    console.error('Fetch error:', error);
  }
};

loadButton.addEventListener('click', fetchTodo);
