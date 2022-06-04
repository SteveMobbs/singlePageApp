let colors = ["rgb(240, 14, 128)", "rgb(14, 14, 128)", "rgb(240, 14, 14)", "rgb(14, 14, 200)", "rgb(120, 238, 128)", "rgb(240, 280, 128)"];

let cuadrados = document.querySelectorAll(".square")

let span = document.getElementById("colorDisplay")

let message = document.getElementById("message")

let pickedColor = colors[4];

span.textContent = pickedColor;

let h1 = document.querySelector("h1");

for (let i = 0; i < cuadrados.length; i++) {
    console.log(cuadrados[i]);
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correcto!";
            changeColor(clickedColor);
            span.textContent = pickedColor; h1.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
        }
    })

}

function changeColor(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = color; 
    }
}



