//main search page

import { USER_INTERFACE_ID } from "../constants.js";
import { getSearchElement } from "../view/searchView.js";
import { SEARCH_FIELD_ID } from "../constants.js";
import { RESULTS_FIELD_ID } from "../constants.js";
import { RESULTS_LIST_ID } from "../constants.js";
import { initMovieInfoElement } from "../pages/infoPage.js";

let searchTimeOutToken = 0;

export const initSearchPage = () => {
    const searchElement = getSearchElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(searchElement);

    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    // searchFieldEl.addEventListener("click", searchMovies);
    showResults();
    
}

const showResults = () => {
    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    searchFieldEl.addEventListener("keyup", (e) => {

        if(e.target.value.trim().length === 0) {
            const list = document.getElementById(RESULTS_LIST_ID);
            list.innerHTML = "PLEASE WRITE A MOVIE NAME";
            return;
        }
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            coverTrigger : false,
        });
    } );

    const resultsTrigger = document.getElementById("results-trigger");
    
    resultsTrigger.addEventListener("click", () => {
        searchMovies(searchFieldEl.value);
    });
}

const searchMovies = async (query) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US&query=${query}&page=1`
    // const searchUrl = `https://www.omdbapi.com/?apikey=fc83c46c&s=${query}`
    // const searchUrl = `https://imdb-api.com/en/API/Trailer/k_dymzyouh/tt1375666`

    console.log(searchUrl,"triggerrrr clicked");
    try {
        const response = await fetch(searchUrl);
        console.log(response, "response");
        if(response.ok) {
            const jsonData = await response.json();
            console.log(jsonData,"status ok");
            if(jsonData.results.length === 0) {
                throw new Error("MOVIE NOT FOUND");
            }
            const list = document.getElementById(RESULTS_LIST_ID);
            list.innerHTML = "";
            const droplist = document.getElementById("dropdown1");
            droplist.innerHTML = "<li>RESULTS LOADING</li>";
            setTimeout(() => {
                renderResults(jsonData.results);
            }, 0);
        }
        
    } catch (error) {
        console.log(error.message);
        const list = document.getElementById(RESULTS_LIST_ID);
        list.innerHTML = `${error.message}`;
    }
}

const renderResults = (resultsArr) => {
    const list = document.getElementById(RESULTS_LIST_ID);
    console.log(resultsArr);
    list.innerHTML = "";
    const droplist = document.getElementById("dropdown1");
    droplist.innerHTML = "";
    resultsArr.forEach(movieInfo => {
        const movieItem = document.createElement("li");
        movieItem.innerText = movieInfo.title;
        movieItem.id = movieInfo.id;
        // list.appendChild(movieItem);
        droplist.appendChild(movieItem);
    });

    chooseMovie();

}

const chooseMovie = () => {
    const movieItems = Array.from(document.getElementsByTagName("li"));
    console.log(movieItems);
    movieItems.forEach(movieItem => {
        movieItem.addEventListener("click", (e) => {
            console.log(e.target.id, "imdb id");
            initMovieInfoElement(e.target.id);
        })
    })
}