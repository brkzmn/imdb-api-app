//main search page

import { USER_INTERFACE_ID } from "../constants.js";
import { getSearchElement } from "../view/searchView.js";
import { SEARCH_FIELD_ID } from "../constants.js";
import { RESULTS_FIELD_ID } from "../constants.js";
import { RESULTS_LIST_ID } from "../constants.js";

export const initSearchPage = () => {
    const searchElement = getSearchElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(searchElement);

    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    searchFieldEl.addEventListener("click", searchMovies);

    showResults();
}


const searchMovies = async () => {
    const response = await fetch("https://imdb-api.com/en/API/SearchMovie/k_dymzyouh/inception 2010");
    const jsonData = await response.json();
    renderResults(jsonData.results);
    
}

const renderResults = (resultsArr) => {
    const list = document.getElementById(RESULTS_LIST_ID);
    resultsArr.forEach(movieInfo => {
        const movieItem = document.createElement("li");
        movieItem.innerText = movieInfo.title;
        list.appendChild(movieItem);
    });

}

const showResults = () => {
    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    searchFieldEl.addEventListener("click", searchMovies);
}