// h.js

import { newElement } from './breeze.js';
import { appendTo, setTextContent, setAttributes } from './helpers.js';

/**
 * A flexible helper function to create HTML elements and append them to a parent.
 * 
 * @param {HTMLElement} parent - The parent element to append the created element to.
 * @param {string} type - The type of element to create (e.g., 'div', 'span').
 * @param {Object} attributes - The attributes to set on the element.
 * @param {string | HTMLElement | HTMLElement[]} content - The content to set inside the element.
 * @param {string} event - (Optional) Event to listen for.
 * @param {function} callback - (Optional) Event handler for the event.
 * @returns {HTMLElement} - The created element.
 */
const h = (parent, type, attributes = {}, content = '', event = null, callback = null) => {
    // Create the element
    const element = newElement(type, attributes);

    // Handle content
    if (Array.isArray(content)) {
        // If content is an array, append all elements inside it
        content.forEach(child => {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            } else {
                throw new Error('Content array must contain HTMLElement elements.');
            }
        });
    } else if (typeof content === 'string') {
        // If content is a string, set it as textContent
        setTextContent(element, content);
    } else if (content instanceof HTMLElement) {
        // If content is an HTMLElement, append it directly
        element.appendChild(content);
    }

    // Handle event listener if provided
    if (event && callback) {
        element.addEventListener(event, callback);
    }

    // Append the element to the parent
    appendTo(parent, element);

    return element;
};

export { h };
