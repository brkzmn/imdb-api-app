//main search page

import { USER_INTERFACE_ID } from "../constants.js";
import { getSearchElement } from "../view/searchView.js";
import { SEARCH_FIELD_ID } from "../constants.js";
import { RESULTS_FIELD_ID } from "../constants.js";
import { RESULTS_LIST_ID } from "../constants.js";
import { initMovieInfoElement } from "../pages/infoPage.js";


export const initSearchPage = () => {
    const searchElement = getSearchElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(searchElement);

    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    showResults();
    
}

const showResults = () => {
    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    searchFieldEl.addEventListener("keyup", (e) => {

        if(e.target.value.trim().length === 0) {
            return;
        }
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            coverTrigger : false,
        });
    } );

    const resultsTrigger = document.getElementById("results-trigger");
    
    resultsTrigger.addEventListener("click", () => {
        if(searchFieldEl.value.length === 0) {
            const droplist = document.getElementById("dropdown1");
            droplist.innerHTML = "<li>PLEASE WRITE A MOVIE NAME</li>";
        }
        searchMovies(searchFieldEl.value);

    });
}

const searchMovies = async (query) => {
    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    if(searchFieldEl.value.length !== 0) {
        
        const droplist = document.getElementById("dropdown1");
        droplist.innerHTML = String.raw`
            <li class="list-center">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </li>
        `
    }
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US&query=${query}&page=1`
    // const searchUrl = `https://www.omdbapi.com/?apikey=fc83c46c&s=${query}`
    // const searchUrl = `https://imdb-api.com/en/API/Trailer/k_dymzyouh/tt1375666`

    try {
        const response = await fetch(searchUrl);
        if(response.ok) {
            const jsonData = await response.json();
            console.log(jsonData,"status ok");
            if(jsonData.results.length === 0) {
                throw new Error("MOVIE NOT FOUND");
            }
    
            setTimeout(() => {
                renderResults(jsonData.results);
            }, 200);
        }

    } catch (error) {
        console.log(error.message);
        setTimeout(() => {
            const droplist = document.getElementById("dropdown1");
            droplist.innerHTML = String.raw`
            <li class="error-message">${error.message}</li>
            `
        }, 200)
    }
}

const renderResults = (resultsArr) => {
    console.log(resultsArr);
    const droplist = document.getElementById("dropdown1");
    droplist.innerHTML = "";
    resultsArr.forEach(movieInfo => {
        const movieItem = document.createElement("li");
        movieItem.innerText = movieInfo.title;
        movieItem.id = movieInfo.id;
        droplist.appendChild(movieItem);
    });

    chooseMovie();
}

const chooseMovie = () => {
    const movieItems = Array.from(document.getElementsByTagName("li"));
    console.log(movieItems);
    movieItems.forEach(movieItem => {
        movieItem.addEventListener("click", (e) => {
            initMovieInfoElement(e.target.id);

            const infoWrapper = document.getElementById("info-wrapper");
            if(infoWrapper.classList.contains("container-background"))
            infoWrapper.classList.remove("container-background");
        })
    });
}
