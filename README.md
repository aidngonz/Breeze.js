# Breeze.js 1.2.0
### Description:

Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management. With a minimalist approach, it offers essential functionalities such as creating DOM elements (`newElement`), managing document layers (`Layer`), handling application state (`State`), create forms and collect form data (`Form `), and utility functions (`Helpers`) to streamline development tasks.

### Use Cases:

Breeze.js is ideal for developers looking to build responsive and interactive web applications efficiently. Use cases include:

- Dynamic UI Creation: Easily generate and manipulate DOM elements to dynamically update user interfaces based on data changes.

- Layered Application Structure: Manage complex application layouts with layered elements (`Layer`), facilitating organized and visually distinct components.

- State Management: Maintain application state (`State`) across components, enabling synchronized updates and efficient data handling.

- Utility Functions: Simplify common DOM operations (`Helpers`), such as element creation, attribute setting, and event handling, enhancing developer productivity.

# Documentation
https://github.com/aidngonz/Breeze.js/blob/main/Documentation.md

# Install
NPM: https://www.npmjs.com/package/breeze-web-framework

```shell
npm i breeze-web-framework
```

# Example Code
```javascript
import { createLayer, createState } from './node_modules/breeze-web-framework/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breeze-web-framework/helpers.js';

const layer1 = createLayer('layer1', 10);
const layer2 = createLayer('layer2', 20);

createElementAndAppend(layer1.element, 'h1', { classListAdd: 'blue' }, 'Hello World in Layer');
createElementAndAppend(layer1.element, 'p', {}, 'This is a paragraph in layer 1.');

const buttonState = createState({ start: "Clicked 0 times", count: 0 });

let button = appendElementWithListener(layer2.element, 'button', {}, 'click', () => {
    buttonState.setState({ count: buttonState.getState().count + 1 });
});

button.textContent = `Clicked ${buttonState.getState().count} times`;

buttonState.addListener((state) => {
    button.textContent = `Clicked ${state.count} times`;
});
```

# Contributing
As of now Breeze.js is simple and in some ways limited. Please contribute to this project to help improve it, not to damage the project or someones computer with malitious code, not to insult someone with offensive languange or comments. 
Thank you (and the rest of the Github communty) for helping contribute to the growth of Breeze.js.
