let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// create four functions: add(), subtract(), divide(), multiply()
// call the correct function when the user clicks on one of the buttons
// perform the given calculation using num1 and num2
// render the result of the calculation in the paragraph with id="sum-el"

//e.g ig the user clicks on the "add" button, you should render
// "sum: 10" inside the paragraph with id = "sum-el"

let totalEl = document.getElementById("total-el");

function add() {
    let total = num1 + num2;
    totalEl.textContent ="Total: " + total; 
}

function sub() {
    let total = num1 - num2;
    totalEl.textContent ="Total: " + total; 
}

function div() {
    let total = num1 / num2;
    totalEl.textContent ="Total: " + total; 
}

function mul() {
    let total = num1 * num2;
    totalEl.textContent ="Total: " + total; 
}
