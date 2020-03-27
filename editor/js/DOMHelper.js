/**
 * Class providing useful methods to work with the HTML DOM
 */
export class DOMHelper {
    /**
     * Convert html string to html element
     * @param {string} html string
     * @return {HTMLElement}
     */
    static htmlElementFromString(html) {
        const creationHelperElement = document.createElement("div");
        creationHelperElement.innerHTML = html.trim();
        if (creationHelperElement.firstChild &&
            creationHelperElement.firstChild.nodeType === Node.ELEMENT_NODE) {
            return creationHelperElement.firstChild;
        }
        throw new Error("Failed to create element from html: " + html);
    }
}