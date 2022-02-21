
import { getTrailerElement } from "../view/trailerView.js";

export const initTrailerElement = async (movieId, title) => {
    try {
        
        const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US`
        const data = await fetch(trailerUrl);
        const jsonData = await data.json();
        // console.log(jsonData, "movie trailer");
        jsonData.results.forEach(trailerData => { 
            const upperCasedName = trailerData.name.toUpperCase();
            trailerData.name = upperCasedName;
        });
        // console.log(jsonData.results,"uppercase names");
        const upperCasedTitle = title.toUpperCase();
        const filteredData = jsonData.results.filter(trailerData => trailerData.name.includes(upperCasedTitle));
        // console.log(filteredData,"right movie video key");
        const { key } = filteredData[0];
        // console.log(key);
        const trailerElement = getTrailerElement(key);
        const infoWrapper = document.getElementById("info-wrapper");
        infoWrapper.appendChild(trailerElement);
    } catch (error) {
        console.log(`trailer error ${error.message}`);
    }

}

// export const initTrailerLoader = () => {
//     const trailerBtn = document.getElementById("trailer-trigger");
//     trailerBtn.addEventListener("click", ());
// }

export const initTrailerSection = (movieId, title) => {
    const trailerBtn = document.getElementById("trailer-trigger");
    trailerBtn.addEventListener("click", async () => {
        await initTrailerElement(movieId, title); 

        const pageHeight = document.getElementById("user-interface").clientHeight;
        window.scrollTo(0, pageHeight);
        console.log(pageHeight,"height after");
    });
}