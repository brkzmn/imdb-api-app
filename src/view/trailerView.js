

export const getTrailerElement = (videoKey) => {
    const trailerSection = document.getElementById("trailer-container");
    trailerSection.innerHTML = String.raw`
    <iframe id="trailer-element" width="560" height="315" src="https://www.youtube.com/embed/${videoKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    return trailerSection;
}

export const getTrailerLoader = () => {
    const trailerSection = document.getElementById("trailer-container");
    trailerSection.innerHTML = String.raw`
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    `
};