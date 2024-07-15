// breeze.js

const newElement = (type, attributes = {}, content = '') => {
    const element = document.createElement(type);

    if (attributes.classListAdd) {
        if (Array.isArray(attributes.classListAdd)) {
            attributes.classListAdd.forEach(cls => element.classList.add(cls));
        } else {
            element.classList.add(attributes.classListAdd);
        }
        delete attributes.classListAdd;
    }

    for (let attr in attributes) {
        if (attr === 'style' && typeof attributes[attr] === 'object') {
            Object.assign(element.style, attributes[attr]);
        } else {
            element.setAttribute(attr, attributes[attr]);
        }
    }

    element.textContent = content;
    return element;
}

export { newElement };

class Layer {
    constructor(id, zIndex = 0) {
        this.id = id;
        this.zIndex = zIndex;
        this.element = newElement('div', { id: id, style: { zIndex: zIndex } });
        document.body.appendChild(this.element);
    }

    addElement(element) {
        this.element.appendChild(element);
    }

    removeElement(element) {
        this.element.removeChild(element);
    }

    setZIndex(zIndex) {
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
        this.state = { ...initialState };
        this.listeners = [];
        this.bindings = new Map();
    }

    getState() {
        return { ...this.state };
    }

    setState(newState) {
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
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        }
    }

    removeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }

    bind(element, property, stateKey) {
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
        if (this.state.hasOwnProperty(stateKey)) {
            if (property === 'textContent') {
                element.textContent = this.state[stateKey];
            } else if (property === 'style') {
                Object.assign(element.style, this.state[stateKey]);
            } else {
                element.setAttribute(property, this.state[stateKey]);
            }
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
        const input = newElement('input', { id: id, placeholder: placeholder });
        this.element.appendChild(input);
        this.inputs.push(input);
    }

    addSubmit(id, value) {
        const submit = newElement('input', { type: 'submit', id: id, value: value });
        this.element.appendChild(submit);
    }

    getDataOnSubmit() {
        return this.inputs.map(input => ({ name: input.name, value: input.value }));
    }
}

export { Form };

const createForm = (id, layer) => {
    return new Form(id, layer);
}

export { createForm };
