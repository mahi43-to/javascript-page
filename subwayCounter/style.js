// document.getElementById("num-value").innerText = 5

// let count = 6 * 5;
// console.log(count)

//1. create a variable, myAge, and set its value to your age
// let myAge = 24;

//2. log the myAge variable to the console
// console.log("my age is : "+myAge)

//--------------------------------------
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
//----------------------------------------

//1. create two variables, myAge and humanDogRatio
//2. Multiply the two together and store the result in myDoga
//3. log myDogAge to the console

// let myAge = 24;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

//----------------------------------------

// create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Deacrease it down to 25, and then finally increase it to 70.
//console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50;
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints)

//--------------------------------------------
// funcutin in javascript
// function countDown() {
//     console.log(0);
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }
//setting up the race 
// countDown();
//go
//players are running the race 
// race is finished
// countDown();

//--------------------------------------------

// create a function (you decide the name) that logs out the number 42 to the console.
// function randomNumber() {
//     console.log(42);

// }
// // call/invoke the function
// randomNumber();

//--------------------------------------------

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// // create a function that logs out the sum of all the lap times.
// function total() {
//     console.log(lap1+lap2+lap3);
// }
// //invoke the function
// total();

//--------------------------------------------

// let lapsCompleted = 0;
// // create a function that increments the lapsCompleted variable with one 
// function incre() {
//     lapsCompleted += 1;
//     console.log(lapsCompleted);
// }
// // run it three times 
// incre();
// incre();
// incre();

//--------------------------------------------

// intialize the count as 0
// listen for clicks on the increament button
// increment the count variable when the button is clicked
// change the num-value in the html to reflect the new count

// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

let count = 0;
let total = 0
function increment() {
    console.log("The increament button was clicked")
    count = count + 1
    document.getElementById("num-value").innerText = count
}
function reset() {
    console.log("The reset button was clicked");
    count = 0;
    document.getElementById("num-value").innerText = count;
    // this is for total part , go to save() to watch more
    total = 0;
    document.getElementById("total-el").textContent = "Total : " + total;

    // to reset the previous entires field
    saveEl.textContent = "Previous entires : ";
}
function decrement() {
    console.log("The decrement button was clicked");
    count -= 1;
    if (count < 0) {
        count = 0
    }
    document.getElementById("num-value").innerText = count;
}
function save() {
    // create a variable that contains both the count and the dash separator, i.e "12 - "
    let store = count +" - ";
    total += count; 
    // Render the variable in the saveEl using innerText
    // saveEl.innerText = store

    // note: Make sure to not delete the exiting content of the paragraph
    saveEl.textContent += store;
    //note: insted of innerText i use textContent to place some space  

    // console.log(count)
    // this is for reset the count value, after save the value and hit the button
    count = 0;
    document.getElementById("num-value").textContent = 0;

    
 
    document.getElementById("total-el").textContent = "Total : " + total;

}

//---------------------------------------------

//working with string in javascript
// let useraName = "mahi" // we can use double as well as single quotes
// console.log(useraName);

// Create a variable, message, that stores the strings: "you have three new notifications"
// let message = 'you have a three new notifications';
// console.log(message);

// //Combine or concenetation of strings
// console.log(useraName +" "+ message)

// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = useraName +", "+ message;
// console.log(messageToUser);

//--------------------------------------------------

//Create two variables, name and greeting, the name variable should store your name,
// and the greeting should store e.g- "HI, my name is "
// let name = "mahi";
// let greeting = "HI, my name is ";

//create a third variable, myGreeting, that contatenates the two strings
//log myGreeting to the console.
// let myGreeting = greeting + name;
// console.log(myGreeting)

//--------------------------------------------------

// //string + int so string always win it convert the int into string type to
// let points = 4;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;
// console.log(totalPoints);
// //here instead of giving 14 its giving "410"  

//--------------------------------------------------

