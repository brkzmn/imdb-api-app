import { USER_INTERFACE_ID } from "../constants.js";


export const getMovieInfoElement = (date, imgSrc, imgAlt) => {

    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <h1 id="movie-title"></h1>
    <p id="release-date">Release Date: "${date}"</p>
    <div id="info-section">
        <div>
            <img src="${imgSrc}" alt="poster of ${imgAlt}"></img>
            <ul id="movie-genre"></ul>
        </div>
        <div id="movie-plot"></div>
    </div>
    <a id="trailer-trigger" class="waves-effect waves-light btn">Watch Trailer</a>
    `
    return element;
}

