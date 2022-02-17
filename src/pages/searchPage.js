//main search page

import { USER_INTERFACE_ID } from "../constans.js";
import { getSearchElement } from "../view/searchView.js";

export const initSearchPage = () => {
    const searchElement = getSearchElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(searchElement);
}