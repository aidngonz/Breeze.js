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
import { createLayer, createState } from 'breezejs-web/src/breeze.js';
import { appendElementWithListener, createElementAndAppend } from 'breezejs-web/src/helpers.js';

// Create two layers with different z-indexes
const layer1 = createLayer('layer1', 10);
const layer2 = createLayer('layer2', 20);

// Add elements to the layers
createElementAndAppend(layer1.element, 'h1', { classListAdd: 'blue' }, 'Hello World in Layer');
createElementAndAppend(layer1.element, 'p', {}, 'This is a paragraph in layer 1.');

// Initialize state for a button's click count
const buttonState = createState({ start: "Clicked 0 times", count: 0 });

// Create a button that updates the state on click
let button = appendElementWithListener(layer2.element, 'button', {}, 'click', () => {
    buttonState.setState({ count: buttonState.getState().count + 1 });
});

// Set the initial text for the button
button.textContent = `Clicked ${buttonState.getState().count} times`;

// Update button text whenever state changes
buttonState.addListener((state) => {
    button.textContent = `Clicked ${state.count} times`;
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
