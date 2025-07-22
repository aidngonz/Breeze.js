# Breeze.js - Full Documentation

Breeze.js is a lightweight, dependency-free JavaScript micro-library for building dynamic web interfaces. It simplifies common frontend tasks such as DOM manipulation, reactive state management, and form creation—without the need for large frameworks.

---

## 📦 Modules Overview

Breeze.js exports the following primary utilities:

* `newElement` - Safely create DOM elements with flexible attributes and content.
* `Layer`, `createLayer` - Manage DOM elements using layer abstraction and z-index.
* `State`, `createState` - Lightweight, reactive state container with bindings.
* `Form`, `createForm` - Create and manage HTML forms programmatically.
* `h` - Declarative helper for structured, component-like DOM construction (from `h.js`).

---

## 🔧 `newElement(type, attributes = {}, content = '')`

Creates a new DOM element with provided attributes and content.

### Parameters:

* `type` (`string`): Tag name, e.g. `'div'`, `'input'`.
* `attributes` (`object`): HTML attributes or special options:

  * `classListAdd`: `string | string[]`
  * `style`: CSS styles object
* `content` (`string`): Optional text content.

### Returns:

* `HTMLElement`

### Example:

```js
const box = newElement('div', {
  classListAdd: ['box', 'rounded'],
  style: { backgroundColor: 'skyblue' },
}, 'Hello!');
document.body.appendChild(box);
```

---

## 🧱 `class Layer`

Represents a high-level visual layer based on z-index.

### Constructor:

```js
new Layer(id: string, zIndex = 0)
```

### Properties:

* `id`: DOM id of the layer.
* `zIndex`: Layer stacking order.
* `element`: The actual DOM node.

### Methods:

* `addElement(element: HTMLElement)`: Appends child to layer.
* `removeElement(element: HTMLElement)`: Removes child.
* `setZIndex(zIndex: number)`: Updates visual priority.

### Example:

```js
const overlay = new Layer('overlay', 100);
overlay.addElement(newElement('p', {}, 'This is on top!'));
```

### Shorthand:

```js
const overlay = createLayer('overlay', 100);
```

---

## 🔁 `class State`

A reactive state container with DOM bindings.

### Constructor:

```js
new State(initialState: object)
```

### Methods:

* `getState()`: Returns a shallow copy of the current state.
* `setState(newState: object)`: Merges and updates the state.
* `resetState()`: Clears the state.
* `addListener(fn: function)`: Register a listener for state changes.
* `removeListener(fn: function)`: Unregister a listener.
* `bind(element, property, stateKey)`: Bind a DOM element property to a state key.

### Binding Behavior:

* Supports `textContent`, `style`, and HTML attributes.
* Updates automatically when `setState` is called.

### Example:

```js
const state = new State({ name: 'Guest' });
const title = newElement('h1');
state.bind(title, 'textContent', 'name');

document.body.appendChild(title);
state.setState({ name: 'Aiden' });
```

### Shorthand:

```js
const state = createState({ count: 0 });
```

---

## 📝 `class Form`

Simple wrapper to create and manage form elements.

### Constructor:

```js
new Form(id: string, layer?: Layer)
```

### Methods:

* `addInput(id: string, placeholder: string)`: Add a text input.
* `addSubmit(id: string, value: string)`: Add a submit button.
* `getDataOnSubmit()`: Collect input values as an array of objects.

### Example:

```js
const form = new Form('login');
form.addInput('email', 'Enter email');
form.addSubmit('submit-btn', 'Log In');

document.body.appendChild(form.element);
```

### Shorthand:

```js
const form = createForm('signup');
```

---

## 🪄 `h(parent, type, attributes, content, event, callback)`

A declarative, JSX-like utility to create structured DOM trees easily.

### Parameters:

* `parent` (`HTMLElement`): Element to append to.
* `type` (`string`): HTML tag (e.g. `'div'`)
* `attributes` (`object`): HTML attributes (same as `newElement`)
* `content` (`string | HTMLElement | HTMLElement[]`): Inner content
* `event` (`string`, optional): Event name (e.g. `'click'`)
* `callback` (`function`, optional): Event handler

### Returns:

* `HTMLElement`

### Example:

```js
h(document.body, 'div', { id: 'card' }, [
  h(document.createElement('div'), 'h2', {}, 'Welcome'),
  h(document.createElement('div'), 'p', {}, 'Enjoy your stay.')
]);
```

### With Event:

```js
h(document.body, 'button', {}, 'Click me', 'click', () => alert('Hello!'));
```

### Benefits:

* Cleaner, structured creation
* Auto-binding
* Supports nesting and event attachment

---

## 🧰 helpers.js Utilities

* `appendTo(parent, child)`
* `setTextContent(element, text)`
* `setAttributes(element, attributes)`
* `createElementWithText(type, attributes, text)`
* `createElementAndAppend(parent, type, attributes, text)`
* `appendElementWithListener(parent, tag, props, event, callback)`

These utilities support internal functionality and custom DSL development.

---

## 🔐 Error Handling

Breeze.js performs strict input validation and will throw descriptive errors when:

* Element creation is passed invalid types
* State key bindings are invalid or undefined
* DOM operations are performed on non-HTMLElements

---

## ✅ Example App: Counter

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

---

## 🧪 Roadmap Ideas

* Built-in router
* Component-style abstraction
* Lightweight animation helpers
* Virtual DOM diffing (optional)

---

## 💬 License & Contributions

MIT LICENSE

Breeze.js is open to extension and feedback. Fork and improve!

---

For more examples or to get started with templates, check out the GitHub repo (coming soon).
