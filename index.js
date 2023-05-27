const colorContainer = document.querySelector("#output-container");

function callApi(color, mode) {
    fetch(
        `https://www.thecolorapi.com/scheme?` +
        new URLSearchParams({
            hex: color,
            format: "json",
            mode: mode,
            count: "6",
        })
    )
        .then((res) => res.json())
        .then((data) => {
            let temp = "";
            for (let i = 0; i < data.colors.length; i++) {
                temp += `<div class = "color-container">
                            <div id="output-${i + 1}" style="background-color: ${data.colors[i].hex.value}"></div>
                            <div id="output-${i + 1}-text">  ${data.colors[i].hex.value} </div >
                         </div > `;
            }

            colorContainer.innerHTML = temp;
        });

}


/* Get color when there is a change in input on either color pallet or color mode */

// const callButton = document.getElementById("call-api");
const selectColor = document.getElementById("select-color");
const selectMode = document.getElementById("select-mode");

selectColor.addEventListener("input", () => {
    callApi(selectColor.value, selectMode.value);
});

selectMode.addEventListener("input", () => {
    callApi(selectColor.value, selectMode.value);
});
