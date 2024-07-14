# Breeze.js
Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management.

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
