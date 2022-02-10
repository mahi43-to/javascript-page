// Grab the welcome-el paragraph and store it in a variable called welcomeEl;
let welcomeEl = document.getElementById("welcome-el");

// Create two variables, name and greeting that contains you name
// and the greeting we want to render on the page
let name = "mahi sahu";
let greeting = "welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name;

// add an emoji to the end:👋
// write your code below here, you can't modified the upper one
// HINT : count = count + 1

welcomeEl.innerText += "👋";