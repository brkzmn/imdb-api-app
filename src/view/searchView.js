// main search view

import { USER_INTERFACE_ID } from "../constants.js";

export const getSearchElement = () => {
    const element = document.createElement("div");
    element.classList.add("interface-wrapper")
    element.innerHTML = String.raw`
    <div id="search-wrapper">
        <label for="site-search">MovieMANIA</label>
        <input type="text" id="search-field" placeholder="Search movie...">
        <a id="results-trigger" class='dropdown-trigger btn waves-effect waves-red yellow accent-4' href='#' data-target='dropdown1'>SEARCH <i class="material-icons">search</i></a>
    </div>
    <ul id='dropdown1' class='dropdown-content'>
        <li>NO MATCHING MOVIES FOUND</li>
    </ul>
    <div id="info-wrapper"></div>
    `
    return element;
}