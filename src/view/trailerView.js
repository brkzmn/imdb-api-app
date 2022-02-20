

export const getTrailerElement = (videoKey) => {
    const element = document.createElement("div");
    element.innerHTML = String.raw`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    return element;
}