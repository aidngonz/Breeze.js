
## Breeze.js: Lightning-fast DOM and State Management for Modern Web Apps.
**Current version:** 1.0.1

**Description:**

Breeze.js is a lightweight JavaScript framework designed for simplified web development, focusing on DOM manipulation and state management. With a minimalist approach, it offers essential functionalities such as creating DOM elements (`newElement`), managing document layers (`Layer`), handling application state (`State`), create forms and collect form data (`Form `), and utility functions (`Helpers`) to streamline development tasks.

**Use Cases:**

Breeze.js is ideal for developers looking to build responsive and interactive web applications efficiently. Use cases include:

-   **Dynamic UI Creation:** Easily generate and manipulate DOM elements to dynamically update user interfaces based on data changes.
    
-   **Layered Application Structure:** Manage complex application layouts with layered elements (`Layer`), facilitating organized and visually distinct components.
    
-   **State Management:** Maintain application state (`State`) across components, enabling synchronized updates and efficient data handling.
    
-   **Utility Functions:** Simplify common DOM operations (`Helpers`), such as element creation, attribute setting, and event handling, enhancing developer productivity.
    

Whether creating interactive dashboards, real-time data displays, or customizable web components, Breeze.js empowers developers with essential tools to build modern web experiences effectively.

### Set up:

Create an HTML file like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breeze.js Website</title>
    <script type="module" src="app.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
</body>
</html>
```

Create app.js:

```javascript
import { createLayer, createState, createForm } from './node_modules/breeze-web-framework/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breeze-web-framework/helpers.js';

// Layers:
const layer1 = createLayer('layer1', 10);
const layer2 = createLayer('layer2', 20);
const layer3 = createLayer('layer3', 30);

// Elements:
createElementAndAppend(layer1.element, 'h1', { classListAdd: 'blue' }, 'Hello World in Layer');
createElementAndAppend(layer1.element, 'p', {}, 'This is a paragraph in layer 1.');

// Buttons and Reactivity:
const buttonState = createState({ count: 0 });

let button = appendElementWithListener(layer2.element, 'button', {}, 'click', () => {
    buttonState.setState({ count: buttonState.getState().count + 1 });
});

button.textContent = `Clicked ${buttonState.getState().count} times`;

buttonState.addListener((state) => {
    button.textContent = `Clicked ${state.count} times`;
});

// Form:
const form = createForm('form', layer3);
form.addInput('firstInput', 'placeholder');
form.addSubmit('submit', 'Submit');
form.getDataOnSubmit();
```

Run the HTML file.

----------

## Imports
```shell
npm i breeze-web-framework
```
```javascript
import { newElement, Layer, createLayer, State, createState } from  './node_modules/breeze-web-framework/breeze.js';
import { appendTo, setTextContent, setAttributes, createElementWithText, createElementAndAppend, appendElementWithListener } from  './node_modules/breeze-web-framework/helpers.js';
```
---

#### `newElement(type, attributes = {}, content = '')`

Creates a new DOM element with the specified type, attributes, and optional content.

-   **Parameters:**
    
    -   `type` (string): Type of HTML element to create (e.g., 'div', 'span').
        
    -   `attributes` (object): Attributes to apply to the element.
        
        -   `classListAdd` (string or array of strings): Class(es) to add to the element's classList.
            
        -   Other attributes (e.g., 'id', 'style').
            
    -   `content` (string): Inner text content of the element.
        
-   **Returns:**

    -   `element` (HTMLElement): Newly created DOM element.

----------

#### `Layer`

Represents a layer on the document with methods to manage elements within it.

-   **Constructor:**
    
    -   `new Layer(id, zIndex = 0)`: Creates a new layer with a specified ID and zIndex.
 
    -   Alternative Function: `createLayer(id, zIndex)`.
        
-   **Methods:**
    
    -   `addElement(element)`: Adds a child element to the layer.
        
    -   `removeElement(element)`: Removes a child element from the layer.
        
    -   `setZIndex(zIndex)`: Sets the z-index of the layer.
 

----------

#### `State`

Manages state data and notifies listeners of state changes.

-   **Constructor:**
    
    -   `new State(initialState = {})`: Creates a new state instance with optional initial state.
 
    -   Alternative Function: `createState(initialState = {})`.
        
-   **Methods:**

    -   `getState()`: Retrieves the current state object.
        
    -   `setState(newState)`: Updates the state with new data and notifies listeners.
        
    -   `resetState()`: Resets the state to an empty object.
        
    -   `addListener(listener)`: Adds a listener function to be notified of state changes.
        
    -   `removeListener(listener)`: Removes a previously added listener.

----------

#### `Form`
Creates a Form element and collects data on submit.

- **Constructor:**

    - `new Form(id, layer)`: Returns a newly created form element.
 
    -  Alternative Function: `createForm(id, layer)`.
 
- **Methods:**

    - `addInput(id, placeholder)`: Adds an input element in the form.
 
    - `addSubmit(id, value)`: A trigger to submit form data.
 
    - `getDataOnSubmit()`: Get input values and return them to an array.
 
----------

#### `Helpers`

Additional utility functions to assist with DOM manipulation.

-   **Functions:**
    
    -   `appendTo(parent, child)`: Appends a child element to a parent element.
        
    -   `setTextContent(element, text)`: Sets the text content of an element.
        
    -   `setAttributes(element, attributes)`: Sets attributes on an element.
        
    -   `createElementWithText(type, attributes = {}, text = '')`: Creates an element with specified attributes and text content.
        
    -   `createElementAndAppend(parent, type, attributes = {}, text = '')`: Creates an element, appends it to a parent, and returns it.
        
    -   `appendElementWithListener(parent, tag, props, event, callback)`: Creates an element with an event listener and appends it to a parent.
        

#### Full Example Code:

```javascript
import { createLayer, createState, createForm } from './node_modules/breeze-web-framework/breeze.js';
import { appendElementWithListener, createElementAndAppend } from './node_modules/breeze-web-framework/helpers.js';

// Layers:
const layer1 = createLayer('layer1', 10);
const layer2 = createLayer('layer2', 20);
const layer3 = createLayer('layer3', 30);

// Elements:
createElementAndAppend(layer1.element, 'h1', { classListAdd: 'blue' }, 'Hello World in Layer');
createElementAndAppend(layer1.element, 'p', {}, 'This is a paragraph in layer 1.');

// Buttons and Reactivity:
const buttonState = createState({ count: 0 });

let button = appendElementWithListener(layer2.element, 'button', {}, 'click', () => {
    buttonState.setState({ count: buttonState.getState().count + 1 });
});

button.textContent = `Clicked ${buttonState.getState().count} times`;

buttonState.addListener((state) => {
    button.textContent = `Clicked ${state.count} times`;
});

// Form:
const form = createForm('form', layer3);
form.addInput('firstInput', 'placeholder');
form.addSubmit('submit', 'Submit');
form.getDataOnSubmit();
```

----------

This documentation covers the core functionalities of Breeze.js, providing a lightweight framework for DOM manipulation, state management, and layering within web applications.
