import { USER_INTERFACE_ID, API_KEY, INFO_WRAPPER_ID, TRAILER_CONTAINER_ID, TRAILER_TRIGGER_ID } from "../constants.js";
import { getTrailerElement, getTrailerLoader } from "../view/trailerView.js";

export const initTrailerElement = async (movieId, title) => {
    try {
        const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
        const data = await fetch(trailerUrl);
        if(data.ok) {
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
            const infoWrapper = document.getElementById(INFO_WRAPPER_ID);
            infoWrapper.appendChild(trailerElement);
        }
    } catch (error) {
        console.log(`${error.message}`);
        const trailerSection = document.getElementById(TRAILER_CONTAINER_ID);
        trailerSection.innerHTML = String.raw`
        <p class="error-message">${error.message}</p>
        `
    }
}

export const initTrailerSection = (movieId, title) => {
    const trailerSection = document.createElement("div");
    trailerSection.id = TRAILER_CONTAINER_ID;
    const infoWrapper = document.getElementById(INFO_WRAPPER_ID)
    infoWrapper.appendChild(trailerSection);

    const trailerBtn = document.getElementById(TRAILER_TRIGGER_ID);
    trailerBtn.addEventListener("click", async () => {
        getTrailerLoader();
        await initTrailerElement(movieId, title); 
        const pageHeight = document.getElementById(USER_INTERFACE_ID).clientHeight;
        window.scrollTo(0, pageHeight);
    });
}
