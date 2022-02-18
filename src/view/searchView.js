// main search view

import { USER_INTERFACE_ID } from "../constants.js";

export const getSearchElement = () => {
    const element = document.createElement("div");
    element.classList.add("interface-wrapper")
    element.innerHTML = String.raw`
    <div id="search-wrapper">
        <label for="site-search">Search movie:</label>
        <input type="text" id="search-field" placeholder="Search movie...">
    </div>
    <div id="results-field">
        <ul id="results-list"></ul>
    </div>
    <div id="info-wrapper"></div>

    `
    return element;
}