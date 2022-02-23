import { INFO_WRAPPER_ID, MOVIE_GENRE_ID, API_KEY, MOVIE_TITLE_ID, MOVIE_PLOT_ID } from "../constants.js";
import { getMovieInfoElement } from "../view/infoView.js";
import { initTrailerSection } from "./trailerPage.js";

export const initMovieInfoElement = async (movieID) => {

    try {
        const infoUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
        const response = await fetch(infoUrl);
        if(response.ok) {
            const jsonData = await response.json();        
            //getting movie infos by destructuring 
            const {original_title, overview, genres, release_date, poster_path, id} = jsonData;
            const infoWrapper = document.getElementById(INFO_WRAPPER_ID);
            infoWrapper.innerHTML = "";
            const imgSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`
            const infoElement = getMovieInfoElement(release_date, imgSrc, original_title);
            infoWrapper.appendChild(infoElement);
            const movieTitle = document.getElementById(MOVIE_TITLE_ID);
            movieTitle.innerHTML = original_title;
            const moviePlot = document.getElementById(MOVIE_PLOT_ID);
            moviePlot.innerHTML = overview;
            getMovieGenre(genres);
            initTrailerSection(id, original_title)
        } else {
            throw new Error("HTTP ERROR");
        }
        
    } catch (error) {
        const infoWrapper = document.getElementById(INFO_WRAPPER_ID);
        infoWrapper.innerHTML = String.raw`
        <h1>OOPS, something went wrong!</h1>
        <h2>"${error.message}"</h2>
        `
    }
};

const getMovieGenre = (genreArr) => {
    genreArr.forEach( genre => {
        const genreItem = document.createElement("li");
        genreItem.textContent = genre.name;
        const movieGenreList = document.getElementById(MOVIE_GENRE_ID);
        movieGenreList.appendChild(genreItem);
    });
}
