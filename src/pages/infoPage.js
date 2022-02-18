import { USER_INTERFACE_ID } from "../constants.js";
import { getMovieInfoElement } from "../view/infoView.js";

export const initMovieInfoElement = async (movieID) => {
    const infoUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US`
    const response = await fetch(infoUrl);
    const jsonData = await response.json();
    console.log(jsonData, "this is movie info details");
    
    const infoElement = getMovieInfoElement();
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.appendChild(infoElement);
    }