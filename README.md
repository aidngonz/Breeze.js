# Breeze.js
### Description:
Breeze.js is a lightweight JavaScript micro-library for building interactive UI widgets using a virtual DOM. It’s designed to make creating embedded components (like chat widgets or popups) simple, fast, and modular — without requiring a full framework like React or Vue.

### Use Cases:
Breeze.js is ideal for developers who need a lightweight framework to build responsive and interactive web applications. Key use cases include:

- Dynamic Content Updates: Dynamically update elements in the DOM without the overhead of heavy frameworks.
- Layered Layouts: Organize your application's interface with layered elements for clearer structure and visual hierarchy.
- State-Driven UI: Build state-driven applications with ease, where UI updates are triggered by changes in the application's state.
- And other lightweight web applications.

### Installation
You can install Breeze.js by cloning this GitHub repo.

### Example Code:
```javascript
import { h } from './Breezejs/src/h.js';

// Create a parent div and add two h1 elements to it
h(document.body, 'div', { class: 'container' }, [
    h(document.body, 'h1', {}, "Hello"),
    h(document.body, 'h1', {}, "World")
]);

// Create a button with click event
h(document.body, 'button', { class: 'btn' }, 'Click Me', 'click', () => {
    alert('Button clicked!');
});
```

### Documentation:
For more detailed information about Breeze.js, please check the full documentation here:
[Docs](https://github.com/aidngonz/Breeze.js/blob/main/Documentation.md)

### Contributing:
We welcome contributions to Breeze.js! If you'd like to help improve the framework, feel free to fork the project, submit pull requests, or provide feedback. However, please remember:

- Do not introduce malicious code.
- Respect others and refrain from using offensive language or comments.
- Your contributions will help Breeze.js grow and become an even better tool for the web development community.

### License:
MIT License.
