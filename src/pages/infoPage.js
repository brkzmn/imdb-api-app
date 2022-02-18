import { USER_INTERFACE_ID } from "../constants.js";
import { getMovieInfoElement } from "../view/infoView.js";

export const initMovieInfoElement = async (movieID) => {

    try {
        const infoUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US`
        const response = await fetch(infoUrl);
        const jsonData = await response.json();
        console.log(jsonData, "this is movie info details");
    
        //getting movie infos by destructuring 
        const {original_title, overview, genres} = jsonData;
        const infoWrapper = document.getElementById("info-wrapper");
        infoWrapper.innerHTML = "";
        const infoElement = getMovieInfoElement();
        infoWrapper.appendChild(infoElement);
        const movieTitle = document.getElementById("movie-title");
        movieTitle.innerHTML = original_title;
        const moviePlot = document.getElementById("movie-plot");
        moviePlot.innerHTML = overview;
        getMovieGenre(genres);
        
    } catch (error) {
        const infoWrapper = document.getElementById("info-wrapper");
        infoWrapper.innerHTML = String.raw`
        <h1>OOOPS, something went wrong</h1>
        <h2>"${error.message}"</h2>
        `
    }

    
};
const getMovieGenre = (genreArr) => {
    genreArr.forEach( genre => {
        const genreItem = document.createElement("li");
        genreItem.textContent = genre.name;
        const movieGenreList = document.getElementById("movie-genre");
        movieGenreList.appendChild(genreItem);
    });
}