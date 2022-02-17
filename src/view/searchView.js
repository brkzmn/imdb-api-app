// main search view

import { USER_INTERFACE_ID } from "../constans.js";

export const getSearchElement = () => {
    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <label for="site-search">Search movie:</label>
    <input type="text" id="search-field" placeholder="Search movie...">
    `
    return element;
}