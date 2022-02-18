//main search page

import { USER_INTERFACE_ID } from "../constants.js";
import { getSearchElement } from "../view/searchView.js";
import { SEARCH_FIELD_ID } from "../constants.js";
import { RESULTS_FIELD_ID } from "../constants.js";
import { RESULTS_LIST_ID } from "../constants.js";

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
/*     searchFieldEl.addEventListener("keyup", (e) => {
        console.log(e.target.value);

        clearTimeout(searchTimeOutToken);

        if(e.target.value.trim().length === 0) {
            return;
        }

        searchTimeOutToken = setTimeout(() => {
            searchMovies(e.target.value)
            // searchMovies()
        },250);
    } ); */
    searchFieldEl.addEventListener("keyup", (e) => {
        if(e.target.value.trim().length === 0) {
            const list = document.getElementById(RESULTS_LIST_ID);
            list.innerHTML = "please write a movie name";
            return;
        }
        if(e.keyCode === 13) {
            setTimeout(() => {
                searchMovies(e.target.value)
            },250);
        }
    } );
}

const searchMovies = async (query) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US&query=${query}&page=1`
    // const searchUrl = `https://www.omdbapi.com/?apikey=fc83c46c&s=${query}`
    // const searchUrl = `https://imdb-api.com/en/API/Trailer/k_dymzyouh/tt1375666`

    console.log(searchUrl);
    try {
        const response = await fetch(searchUrl);
        const jsonData = await response.json();
        console.log(jsonData);
        const list = document.getElementById(RESULTS_LIST_ID);
        list.innerHTML = "";
        renderResults(jsonData.results);
        
    } catch (error) {
        console.log(error.message);
        const list = document.getElementById(RESULTS_LIST_ID);
        list.innerHTML = "movie not found";
    }
    
}

const renderResults = (resultsArr) => {
    const list = document.getElementById(RESULTS_LIST_ID);
    console.log(resultsArr);
    list.innerHTML = "";
    resultsArr.forEach(movieInfo => {
        const movieItem = document.createElement("li");
        movieItem.innerText = movieInfo.title;
        movieItem.id = movieInfo.id;
        list.appendChild(movieItem);
    });

    chooseMovie();

}

const chooseMovie = () => {
    const movieItems = Array.from(document.getElementsByTagName("li"));
    console.log(movieItems);
    movieItems.forEach(movieItem => {
        movieItem.addEventListener("click", (e) => {
            console.log(e.target.id, "imdb id");
        })
    })
}