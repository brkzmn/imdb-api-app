import { USER_INTERFACE_ID } from "../constants.js";


export const getMovieInfoElement = () => {

    const element = document.createElement("div");
    element.innerHTML = String.raw`

    <h1 id="movie-title"></h1>

    <img src="" alt=""></img>
    <div id="movie-genre"></div>
    <div id="movie-plot"></div>
    <div id="">1111111</div>
    `
    return element;
}