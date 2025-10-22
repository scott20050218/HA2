// ...existing code...

# Todo-app

## Overview

A simple Todo application built with plain HTML, CSS, and JavaScript. No build tools required — open `index.html` directly to run. The app persists data in the browser's `localStorage`.

## Features

- Add todos: type content and click "Add +" or press Enter to create a task.
- Toggle complete/uncomplete: click the right-side button of a list item to switch status.
- Delete todo: click "Delete" to remove a task.
- Local persistence: all changes sync immediately to `localStorage`; refreshing does not lose data.
- Filter views: switch between "All / Active / Completed".
- Task count: shows "N items" in the top-right corner.
- Empty state: displays guidance text when there are no tasks.
- Bulk actions: supports "Clear completed" and "Clear all".

## Tech Stack

- HTML5: semantic structure (`<main>`, `<section>`, `<button>`, etc.).
- CSS3: modern layout (Flex), component styles, state & interaction styles (tabs, buttons, empty state).
- Vanilla JavaScript (ES6+): modular logic, event delegation, template-string rendering.
- Web Storage API: `localStorage` for task persistence.
- Accessibility (a11y): `role="tab"`, `aria-selected`, visually-hidden labels.
- Zero dependencies & zero build: no bundler required; open `index.html` to run.

## Project Structure (current implementation)

```bash
./
  index.html        # page markup and mount point
  /css
    style.css       # layout, buttons, tabs, list, empty state styles
  /js
    app.js          # business logic, rendering, and localStorage sync
```

## Data Model

```ts
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};
```

Local storage key: `todo-app.items`

## Usage

1. Open the project root and double-click `index.html`, or serve the root directory with any static server.
2. Enter a task in the input and click "Add +".
3. Use the top tabs to switch between "All / Active / Completed".
4. Use the right-side buttons on list items to complete/uncomplete or delete a task.
5. Use the bottom buttons "Clear completed" or "Clear all".

## Development Conventions

- Semantic markup: use `<main>`, `<section>`, `<button>`, etc.
- Accessibility: form controls have labels (hidden when appropriate); tab buttons include `role="tab"` and `aria-selected`.
- Event delegation: the list uses event delegation for complete/delete actions to reduce listeners.
- Security: escape text before rendering to avoid XSS injection.

## Possible Extensions (not implemented)

- Edit task title (double-click to edit, Enter to save).
- Export/import JSON.
- Keyboard shortcuts (e.g., Delete to remove selected item).

````// filepath: /Users/lihengrui/工作/2025/src/HA2/README.md
// ...existing code...
# Todo-app

## Overview

A simple Todo application built with plain HTML, CSS, and JavaScript. No build tools required — open `index.html` directly to run. The app persists data in the browser's `localStorage`.

## Features

- Add todos: type content and click "Add +" or press Enter to create a task.
- Toggle complete/uncomplete: click the right-side button of a list item to switch status.
- Delete todo: click "Delete" to remove a task.
- Local persistence: all changes sync immediately to `localStorage`; refreshing does not lose data.
- Filter views: switch between "All / Active / Completed".
- Task count: shows "N items" in the top-right corner.
- Empty state: displays guidance text when there are no tasks.
- Bulk actions: supports "Clear completed" and "Clear all".

## Tech Stack

- HTML5: semantic structure (`<main>`, `<section>`, `<button>`, etc.).
- CSS3: modern layout (Flex), component styles, state & interaction styles (tabs, buttons, empty state).
- Vanilla JavaScript (ES6+): modular logic, event delegation, template-string rendering.
- Web Storage API: `localStorage` for task persistence.
- Accessibility (a11y): `role="tab"`, `aria-selected`, visually-hidden labels.
- Zero dependencies & zero build: no bundler required; open `index.html` to run.

## Project Structure (current implementation)

```bash
./
  index.html        # page markup and mount point
  /css
    style.css       # layout, buttons, tabs, list, empty state styles
  /js
    app.js          # business logic, rendering, and localStorage sync
````

## Data Model

```ts
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};
```

Local storage key: `todo-app.items`

## Usage

1. Open the project root and double-click `index.html`, or serve the root directory with any static server.
2. Enter a task in the input and click "Add +".
3. Use the top tabs to switch between "All / Active / Completed".
4. Use the right-side buttons on list items to complete/uncomplete or delete a task.
5. Use the bottom buttons "Clear completed" or "Clear all".

## Development Conventions

- Semantic markup: use `<main>`, `<section>`, `<button>`, etc.
- Accessibility: form controls have labels (hidden when appropriate); tab buttons include `role="tab"` and `aria-selected`.
- Event delegation: the list uses event delegation for complete/delete actions to reduce listeners.
- Security: escape text before rendering to avoid XSS injection.

## Possible Extensions (not implemented)

- Edit task title (double-click to edit, Enter to save).
- Export/import JSON.
- Keyboard shortcuts (e.g., Delete to remove selected item).
