export const getLoaderElement = () => {
    const element = document.createElement("div");
    element.id = "loader-wrapper";
    element.innerHTML = String.raw`
    <div class="lds-ellipsis yellow accent-4"><div></div><div></div><div></div><div></div></div>
    `
    return element;

}

