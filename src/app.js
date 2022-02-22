import { initSearchPage } from "./pages/searchPage.js"

const loadApp = () => {
    initSearchPage();
}

window.addEventListener("load", loadApp);