# Lesson 6: DOM Manipulation, Events, and Templates

## Selecting DOM elements

Use `querySelector` and `querySelectorAll`.
```js
const button = document.querySelector('button');
const items = document.querySelectorAll('.item');
```

## Updating content

Change text and attributes.
```js
const title = document.querySelector('#title');
title.textContent = 'Modern JavaScript';
```

## Event listeners

Respond to user actions.
```js
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

## Creating UI dynamically

Build elements with JS instead of innerHTML when possible.
```js
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'New item';
list.appendChild(li);
document.body.appendChild(list);
```

## Template literals for markup

Use template strings carefully for HTML.
```js
const cardHtml = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;
container.innerHTML = cardHtml;
```

## Practice concept

- Select and update elements safely.
- Use event listeners for interactivity.
- Prefer element creation over raw HTML injection when possible.

Next: `lessons/07-build-tools-testing.md`.
