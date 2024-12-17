# Breeze.js
### Description:
Breeze.js is a lightweight JavaScript framework designed to streamline web development. It simplifies DOM manipulation, state management, and common development tasks. With its minimalist approach, Breeze.js offers essential tools for creating dynamic and interactive user interfaces, handling application state, and working with layered document structures.

### Features:
Dynamic UI Creation: Effortlessly create and manipulate DOM elements to dynamically update user interfaces based on data changes.
Layered Application Structure: Manage complex layouts with distinct layers, allowing for organized and visually distinct components.
State Management: Maintain and synchronize application state across components, making it easier to update UI elements based on state changes.
Utility Functions: Simplify common DOM operations like element creation, attribute setting, and event handling.

### Use Cases:
Breeze.js is ideal for developers who need a lightweight framework to build responsive and interactive web applications. Key use cases include:

- Dynamic Content Updates: Dynamically update elements in the DOM without the overhead of heavy frameworks.
- Layered Layouts: Organize your application's interface with layered elements for clearer structure and visual hierarchy.
- State-Driven UI: Build state-driven applications with ease, where UI updates are triggered by changes in the application's state.
- And other lightweight web applications.

### Installation
You can install Breeze.js via npm:

```shell
npm i breezejs-web
```

### Example Code:
```javascript
import { h } from './node_modules/breezejs/src/h.js';

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
