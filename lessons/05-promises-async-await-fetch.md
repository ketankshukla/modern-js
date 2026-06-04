# Lesson 5: Promises, `async`/`await`, and `fetch`

## Promises

A Promise represents an asynchronous result.
```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(1000).then(() => console.log('Done'));
```

## `async`/`await`

`async` functions return Promises and `await` pauses execution.
```js
const loadData = async () => {
  await wait(500);
  return 'data loaded';
};

loadData().then(console.log);
```

## `fetch`

Use `fetch` to request resources from the network.
```js
const fetchJson = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
```

## Error handling

Handle failures with `try`/`catch`.
```js
const getData = async url => {
  try {
    return await fetchJson(url);
  } catch (error) {
    console.error('Fetch failed', error);
    return null;
  }
};
```

## Practice concept

- Build Promises for async work.
- Use `await` for sequential operations.
- Keep network calls separate from UI logic.

Continue on to `lessons/06-dom-events-templates.md`.
