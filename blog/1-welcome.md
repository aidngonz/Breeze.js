# Welcome to Breeze.js&#x20;

**Published: July 26, 2025**

---

## Why I Made Breeze.js

Frontend development today can be overwhelming. From React to Vue to Svelte, frameworks are everywhere—and so are the opinions, bundlers, boilerplates, and breaking changes.

**Breeze.js takes a different approach.** It asks:

> What if building dynamic UIs didn't require a full framework?

Breeze.js is a micro-library designed around minimalism, flexibility, and control. It gives you the essentials for creating reactive interfaces—without giving up the native web platform or pulling in thousands of lines of code.

It's not a framework. It's a **toolbox**.

---

## Our Philosophy

### 1. **Stay Close to the DOM**

Instead of abstracting HTML and JavaScript away, Breeze.js leans into them. Its utilities are thin wrappers around real browser APIs that reduce repetitive code without obscuring what’s happening under the hood.

### 2. **Only What You Need**

No virtual DOM. No component lifecycle spaghetti. Just reactive state, DOM helpers, and optional form management. Use as little or as much as you like.

### 3. **Zero Dependencies**

You can read the source in minutes. Breeze.js is dependency-free and lightweight, so it’s perfect for learning, rapid prototyping, and embedding into small projects.

### 4. **Build**

Breeze.js works well with other tools. Use it alongside Alpine.js, HTMX, or even React if you want to. It doesn’t take over, it just helps out.

---

## What Comes with Breeze.js

* `newElement()` – Clean, safe element creation
* `State` – Tiny reactive container with DOM bindings
* `Form` – Programmatic form creation
* `Layer` – DOM layering with z-index management
* `h()` – Declarative DOM builder with optional event binding

---

## Getting Started: A Simple Counter

Here’s a quick example of what building with Breeze.js feels like:

```js
import { createState, newElement } from './breeze.js';
import { h } from './h.js';

const state = createState({ count: 0 });

const app = document.getElementById('app');

const display = newElement('p');
state.bind(display, 'textContent', 'count');

h(app, 'button', {}, 'Increment', 'click', () => {
  state.setState({ count: state.getState().count + 1 });
});

app.appendChild(display);
```

💡 That’s it. No build tools. No configs. Just HTML, JS, and Breeze.

---

## Final Thoughts

If you're tired of fighting complexity and want to enjoy building interfaces again, give Breeze.js a try.

* 📜 MIT Licensed
* 💬 Feedback welcome
* 🔨  Feel free to contribute to the GitHub repo.

Thanks for reading!

— Aiden Gonzalez