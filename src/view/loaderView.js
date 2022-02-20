export const getLoaderElement = () => {
    const element = document.createElement("div");
    element.id = "loader-wrapper";
    element.innerHTML = String.raw`
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    `
    return element;

}