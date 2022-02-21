
import { getTrailerElement } from "../view/trailerView.js";
import { getTrailerLoader } from "../view/trailerView.js";

export const initTrailerElement = async (movieId, title) => {
    try {
        
        const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0ebff7764b918b4ccc3850487ed1f39a&language=en-US`
        const data = await fetch(trailerUrl);
        const jsonData = await data.json();
        jsonData.results.forEach(trailerData => { 
            const upperCasedName = trailerData.name.toUpperCase();
            trailerData.name = upperCasedName;
        });
        const upperCasedTitle = title.toUpperCase();
        const filteredData = jsonData.results.filter(trailerData => trailerData.name.includes(upperCasedTitle));
        if( filteredData.length === 0) {
            throw new Error("OOPS, TRAILER NOT FOUND!");
        }
        const { key } = filteredData[0];
        const trailerElement = getTrailerElement(key);
        const infoWrapper = document.getElementById("info-wrapper");
        infoWrapper.appendChild(trailerElement);
    } catch (error) {
        console.log(`trailer error ${error.message}`);
        const trailerSection = document.getElementById("trailer-section");
        trailerSection.innerHTML = String.raw`
        <p class="error-message">${error.message}</p>
        `
    }

}


export const initTrailerSection = (movieId, title) => {
    const trailerSection = document.createElement("div");
    trailerSection.id = "trailer-section";
    const infoWrapper = document.getElementById("info-wrapper")
    infoWrapper.appendChild(trailerSection);

    const trailerBtn = document.getElementById("trailer-trigger");
    trailerBtn.addEventListener("click", async () => {
        getTrailerLoader();

        await initTrailerElement(movieId, title); 

        const pageHeight = document.getElementById("user-interface").clientHeight;
        window.scrollTo(0, pageHeight);
        console.log(pageHeight,"height after");
    });
}
