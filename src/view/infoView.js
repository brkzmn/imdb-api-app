import { INFO_SECTION_ID, MOVIE_PLOT_ID, TRAILER_TRIGGER_ID, MOVIE_GENRE_ID, RELEASE_DATE_ID, MOVIE_TITLE_ID } from "../constants.js";


export const getMovieInfoElement = (date, imgSrc, imgAlt) => {

    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <h1 id="${MOVIE_TITLE_ID}"></h1>
    <p id="${RELEASE_DATE_ID}">Release Date: "${date}"</p>
    <div id="${INFO_SECTION_ID}">
        <div>
            <img src="${imgSrc}" alt="poster of ${imgAlt}"></img>
            <ul id="${MOVIE_GENRE_ID}"></ul>
        </div>
        <div id="${MOVIE_PLOT_ID}"></div>
    </div>
    <a id="${TRAILER_TRIGGER_ID}" class="waves-effect waves-red btn yellow accent-4">Watch Trailer</a>
    `
    return element;
}

