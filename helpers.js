// helpers.js

import { newElement } from './breeze.js';

const appendTo = (parent, child) => parent.appendChild(child);
const setTextContent = (element, text) => element.textContent = text;

const setAttributes = (element, attributes) => {
    for (let attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
};

const createElementWithText = (type, attributes = {}, text = '') => {
    const element = newElement(type, attributes);
    setTextContent(element, text);
    return element;
};

const createElementAndAppend = (parent, type, attributes = {}, text = '') => {
    const element = createElementWithText(type, attributes, text);
    appendTo(parent, element);
    return element;
};

const appendElementWithListener = (parent, tag, props, event, callback) => {
    const element = newElement(tag, props);
    element.addEventListener(event, callback);
    parent.appendChild(element);
    return element;
}

export { appendTo, setTextContent, setAttributes, createElementWithText, createElementAndAppend, appendElementWithListener };