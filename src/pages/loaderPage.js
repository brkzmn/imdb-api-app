import { getLoaderElement } from "../view/loaderView.js";

export const initLoaderElement = () => {
    const resultsField = document.getElementById("results-field");
    const loaderElement = getLoaderElement();
    resultsField.appendChild(loaderElement);
}

export const ejectLoaderElement = () => {
    const resultsField = document.getElementById("results-field");
    const loaderElement = document.getElementById("loader-wrapper");
    // resultsField.removeChild(loaderElement); 
    resultsField.innerHTML = "";
}