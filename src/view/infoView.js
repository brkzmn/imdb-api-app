import { USER_INTERFACE_ID } from "../constants.js";


export const getMovieInfoElement = (date, imgSrc, imgAlt, trailerKey) => {

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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    return element;
}

