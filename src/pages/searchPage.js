//main search page

import { USER_INTERFACE_ID, API_KEY, RESULTS_TRIGGER_ID, DROPDOWN_ID, LOADER_DURATION, INFO_WRAPPER_ID } from "../constants.js";
import { getSearchElement } from "../view/searchView.js";
import { SEARCH_FIELD_ID } from "../constants.js";
import { initMovieInfoElement } from "../pages/infoPage.js";


export const initSearchPage = () => {
    const searchElement = getSearchElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(searchElement);

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

    const resultsTrigger = document.getElementById(RESULTS_TRIGGER_ID);
    
    resultsTrigger.addEventListener("click", () => {
        if(searchFieldEl.value.length === 0) {
            const droplist = document.getElementById(DROPDOWN_ID);
            droplist.innerHTML = "<li>PLEASE WRITE A MOVIE NAME</li>";
        }

        searchMovies(searchFieldEl.value);
    });
}

const searchMovies = async (query) => {
    const searchFieldEl = document.getElementById(SEARCH_FIELD_ID);
    if(searchFieldEl.value.length !== 0) {
        
        const droplist = document.getElementById(DROPDOWN_ID);
        droplist.innerHTML = String.raw`
            <li class="list-center">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </li>
        `
    }
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`

    try {
        const response = await fetch(searchUrl);
        if(response.ok) {
            const jsonData = await response.json();
            if(jsonData.results.length === 0) {
                throw new Error("MOVIE NOT FOUND");
            }
    
            setTimeout(() => {
                renderResults(jsonData.results);
            }, LOADER_DURATION);
        } else {
            throw new Error("HTTP ERROR");
        }

    } catch (error) {
        console.log(error.message);
        setTimeout(() => {
            const droplist = document.getElementById(DROPDOWN_ID);
            droplist.innerHTML = String.raw`
            <li class="error-message">${error.message}</li>
            `
        }, LOADER_DURATION)
    }
}

const renderResults = (resultsArr) => {
    const droplist = document.getElementById(DROPDOWN_ID);
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
    movieItems.forEach(movieItem => {
        movieItem.addEventListener("click", (e) => {
            initMovieInfoElement(e.target.id);

            const infoWrapper = document.getElementById(INFO_WRAPPER_ID);
            if(infoWrapper.classList.contains("container-background"))
            infoWrapper.classList.remove("container-background");
        })
    });
}
