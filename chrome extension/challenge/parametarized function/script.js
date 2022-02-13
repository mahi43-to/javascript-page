const welcomeEl = document.getElementById("welcome-el");

function greetUser(greet, name, emoji) {
    welcomeEl.textContent = `${greet}, ${name} ${emoji}`;
}
let name = " mahendra sahu"

// greetUser("mahendra sahu")
greetUser("hello great pleasure to meet you", name, "👋")


//-----------------------------------------------------------

//create a function, add(), that adds two numbers together and returns the sum
function add(no1, no2) {
    return no1 + no2;
}
console.log(add(3, 4))
console.log(add(9, 102))

//---------------------------------------------------------------
// create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
    // arr.push('hello');
    return arr[0];
}

console.log(getFirst(arr = ['Entrepreneur', 'startups']))