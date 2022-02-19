// main search view

import { USER_INTERFACE_ID } from "../constants.js";

export const getSearchElement = () => {
    const element = document.createElement("div");
    element.classList.add("interface-wrapper")
    element.innerHTML = String.raw`
    <div id="search-wrapper">
        <label for="site-search">Search movie:</label>
        <input type="text" id="search-field" placeholder="Search movie...">
        <a class='dropdown-trigger btn waves-effect waves-light' href='#' data-target='dropdown1'>SEARCH <i class="material-icons">search</i></a>
    </div>
    <div id="results-field">
        <ul id="results-list"></ul>
    </div>
    <ul id='dropdown1' class='dropdown-content'>
        <li>place HOLDER</li>
    </ul>
    <div id="info-wrapper"></div>

    `
    return element;
}