
function callApi(color, mode){
    fetch(`https://www.thecolorapi.com/scheme?` + new URLSearchParams({
        hex: color,
        format: "json",
        mode: mode,
        count: "6"
    }))
        .then(res => res.json())
        .then(data => {
            for (let i=0; i < data.colors.length; i++) {
                document.getElementById(`output-${i+1}`).style.backgroundColor = 
                data.colors[i].hex.value
                document.getElementById(`output-${i+1}-text`).innerHTML = 
                data.colors[i].hex.value
            }
        })        
}

const callButton = document.getElementById("call-api")
const selectColor = document.getElementById("select-color")
const selectMode = document.getElementById("select-mode")

callButton.addEventListener('click', () => {
    callApi(selectColor.value, selectMode.value)
})

            
            // forloop//
            
            //  document.getElementById("output-1").style.backgroundColor = data.colors[0].hex.value
            //  document.getElementById("output-2").style.backgroundColor = data.colors[1].hex.value
            //  document.getElementById("output-3").style.backgroundColor = data.colors[2].hex.value
            //  document.getElementById("output-4").style.backgroundColor = data.colors[3].hex.value
            //  document.getElementById("output-5").style.backgroundColor = data.colors[4].hex.value
            //  document.getElementById("output-6").style.backgroundColor = data.colors[5].hex.value
             
            //  document.getElementById("output-1-text").innerHTML = data.colors[0].hex.value
            //  document.getElementById("output-2-text").innerHTML = data.colors[1].hex.value
            //  document.getElementById("output-3-text").innerHTML = data.colors[2].hex.value
            //  document.getElementById("output-4-text").innerHTML = data.colors[3].hex.value
            //  document.getElementById("output-5-text").innerHTML = data.colors[4].hex.value
            //  document.getElementById("output-6-text").innerHTML = data.colors[5].hex.value
            //  console.log(data)