import { USER_INTERFACE_ID } from "../constants.js";


export const getMovieInfoElement = () => {

    const element = document.createElement("div");
    element.innerHTML = String.raw`

    <img src="" alt=""></img>
    <div id="movie-genre">this is movie genre</div>
    <div id="movie-plot">PLOTTTT</div>
    `
    return element;
}