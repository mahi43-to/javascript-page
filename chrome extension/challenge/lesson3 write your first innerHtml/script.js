let btn = document.getElementById("container");

btn.innerHTML = "<button id='btnEl' onclick='buy()'>Buy!</button>"

function buy() {
    btn.innerHTML += "<p>Thank for buying!</p>"
}