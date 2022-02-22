// main search view

import { DROPDOWN_ID, INFO_WRAPPER_ID, SEARCH_WRAPPER_ID, RESULTS_TRIGGER_ID, SEARCH_FIELD_ID } from "../constants.js";

export const getSearchElement = () => {
    const element = document.createElement("div");
    element.classList.add("interface-wrapper")
    element.innerHTML = String.raw`
    <div id="${SEARCH_WRAPPER_ID}">
        
        <h1 class="logo">MovieMANIA</h1>
        <input type="text" id="${SEARCH_FIELD_ID}" placeholder="Search movie...">
        <a id="${RESULTS_TRIGGER_ID}" class='dropdown-trigger btn waves-effect waves-red yellow accent-4' href='#' data-target='dropdown1'>SEARCH <i class="material-icons">search</i></a>
    </div>
    <ul id="${DROPDOWN_ID}" class="dropdown-content">
        <li>NO MATCHING MOVIES FOUND</li>
    </ul>
    <div id="${INFO_WRAPPER_ID}" class="container-background">
        <p class="slogan">Get 
        <br>Information 
        <br>About All Movies</p>
    </div>
    <footer class="footer-container">
        <p>© 2022 brkzmn </p>
    </footer>
    `
    return element;
}