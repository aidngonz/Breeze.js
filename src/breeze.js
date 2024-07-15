const newElement = (type, attributes = {}, content = '') => {
    if (typeof type !== 'string') {
        throw new Error('Invalid element type. Expected a string.');
    }
    
    const element = document.createElement(type);

    if (attributes.classListAdd) {
        if (Array.isArray(attributes.classListAdd)) {
            attributes.classListAdd.forEach(cls => element.classList.add(cls));
        } else if (typeof attributes.classListAdd === 'string') {
            element.classList.add(attributes.classListAdd);
        } else {
            throw new Error('Invalid classListAdd. Expected a string or an array of strings.');
        }
        delete attributes.classListAdd;
    }

    for (let attr in attributes) {
        try {
            if (attr === 'style' && typeof attributes[attr] === 'object') {
                Object.assign(element.style, attributes[attr]);
            } else {
                element.setAttribute(attr, attributes[attr]);
            }
        } catch (error) {
            console.error(`Failed to set attribute ${attr} on element:`, error);
        }
    }

    element.textContent = content;
    return element;
}

export { newElement };

class Layer {
    constructor(id, zIndex = 0) {
        if (typeof id !== 'string' || typeof zIndex !== 'number') {
            throw new Error('Invalid parameters for Layer. Expected a string for id and a number for zIndex.');
        }

        this.id = id;
        this.zIndex = zIndex;
        this.element = newElement('div', { id: id, style: { zIndex: zIndex } });

        document.body.appendChild(this.element);
    }

    addElement(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Invalid element. Expected an HTMLElement.');
        }
        this.element.appendChild(element);
    }

    removeElement(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Invalid element. Expected an HTMLElement.');
        }
        if (!this.element.contains(element)) {
            throw new Error('Element not found in this layer.');
        }
        this.element.removeChild(element);
    }

    setZIndex(zIndex) {
        if (typeof zIndex !== 'number') {
            throw new Error('Invalid zIndex. Expected a number.');
        }
        this.zIndex = zIndex;
        this.element.style.zIndex = zIndex;
    }
}

export { Layer };

const createLayer = (id, zIndex) => {
    return new Layer(id, zIndex);
}

export { createLayer };

class State {
    constructor(initialState = {}) {
        if (typeof initialState !== 'object' || initialState === null) {
            throw new Error('Invalid initialState. Expected an object.');
        }

        this.state = { ...initialState };
        this.listeners = [];
        this.bindings = new Map();
    }

    getState() {
        return { ...this.state };
    }

    setState(newState) {
        if (typeof newState !== 'object' || newState === null) {
            throw new Error('Invalid newState. Expected an object.');
        }

        this.state = { ...this.state, ...newState };
        this.notifyListeners();
        this.updateBindings();
    }

    resetState() {
        this.state = {};
        this.notifyListeners();
        this.updateBindings();
    }

    addListener(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Invalid listener. Expected a function.');
        }
        this.listeners.push(listener);
    }

    removeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => {
            try {
                listener(this.state);
            } catch (error) {
                console.error('Error in listener:', error);
            }
        });
    }

    bind(element, property, stateKey) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Invalid element. Expected an HTMLElement.');
        }
        if (typeof property !== 'string' || typeof stateKey !== 'string') {
            throw new Error('Invalid property or stateKey. Expected strings.');
        }
        if (!this.state.hasOwnProperty(stateKey)) {
            throw new Error(`State key "${stateKey}" does not exist.`);
        }

        if (!this.bindings.has(element)) {
            this.bindings.set(element, []);
        }
        this.bindings.get(element).push({ property, stateKey });
        this.updateElement(element, property, stateKey);
    }

    updateBindings() {
        this.bindings.forEach((bindings, element) => {
            bindings.forEach(({ property, stateKey }) => {
                this.updateElement(element, property, stateKey);
            });
        });
    }

    updateElement(element, property, stateKey) {
        try {
            if (property === 'textContent') {
                element.textContent = this.state[stateKey];
            } else if (property === 'style') {
                Object.assign(element.style, this.state[stateKey]);
            } else {
                element.setAttribute(property, this.state[stateKey]);
            }
        } catch (error) {
            console.error(`Failed to update element ${element} property ${property} with state key ${stateKey}:`, error);
        }
    }
}

export { State };

const createState = (initialState = {}) => {
    return new State(initialState);
}

export { createState };

class Form {
    constructor(id, layer) {
        if (typeof id !== 'string') {
            throw new Error('Invalid id. Expected a string.');
        }
        if (layer && !(layer instanceof Layer)) {
            throw new Error('Invalid layer. Expected an instance of Layer.');
        }

        this.id = id;
        this.element = newElement('form', { id: id });

        if (layer) {
            layer.addElement(this.element);
        } else {
            document.body.appendChild(this.element);
        }

        this.inputs = [];
    }

    addInput(id, placeholder) {
        if (typeof id !== 'string' || typeof placeholder !== 'string') {
            throw new Error('Invalid id or placeholder. Expected strings.');
        }
        const input = newElement('input', { id: id, placeholder: placeholder });
        this.element.appendChild(input);
        this.inputs.push(input);
    }

    addSubmit(id, value) {
        if (typeof id !== 'string' || typeof value !== 'string') {
            throw new Error('Invalid id or value. Expected strings.');
        }
        const submit = newElement('input', { type: 'submit', id: id, value: value });
        this.element.appendChild(submit);
    }

    getDataOnSubmit() {
        try {
            return this.inputs.map(input => ({ name: input.name, value: input.value }));
        } catch (error) {
            console.error('Error collecting form data:', error);
            return [];
        }
    }
}

export { Form };

const createForm = (id, layer) => {
    return new Form(id, layer);
}

export { createForm };