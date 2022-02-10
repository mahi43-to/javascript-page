// //1. Create two variables, firstCard and secondCard
// // set their values to a random number between 2-11

/*
let firstCard = getRandomCard() ;
let secondCard = getRandomCard(); 
*/

// //2. Create a variable, sum and set it to the sum the two cards
let sum = 0

// 3. check is blackjack
let hasBlackJack = false;

// 4. check is player alive
let isAlive = false;



let message = "";

let messageEl = document.getElementById("message-el");

// let sumEl = document.getElementById("sum-el");
// another way to grab the elemnt is querySelector but we need to add the # for id and . for class
let sumEl = document.querySelector("#sum-el");

let cardEl = document.querySelector("#card-el");

// Create a new array - cards - that contains firstCard and secondCard
let cards = [];

// create object to store these in one element
        // let playerName = "mahendra";
        // let playerChips  = 150;
let player = {
    name: "maherndra",
    chips: 159
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function startgame() {    

    isAlive = true;
    let firstCard = getRandomCard() ;
    let secondCard = getRandomCard();
    
    // arrays 
    cards = [firstCard, secondCard];

    // reassing the sum
    sum = firstCard + secondCard;

    rendergame();
}

function rendergame() {
    console.log("start game was clicked")
    if(sum <= 20 ) {
        message = "Do you want to draw  a new card 🙂"
    } else if(sum === 21) {
        message = "wohoo! You've got Blackjack 🥳"
           hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum;

    // cardEl.textContent = "Cards: " + firstCard +" "+ secondCard 
    // we can now replace this by arrays cards

    cardEl.textContent = "Cards: " //+ cards[0] +" "+ cards[1]

    // Create  a for loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
}

// 

function newcard() {
    // only allow the player to get a new card if she IS alive and does not have Blackjack
    if(isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        rendergame();
    }

    
    
    
    // cardEl.textContent = "Cards: " + firstCard +" "+ secondCard +" "+ newCard;
    // instead of hardcode adding we are now try to push the element bcz this is in array form now
    //cards.push(newCard);
    console.log(cards);

    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
         cardEl.textContent += cards[i] + " "

    }
}

// create a function to generate randome card
function getRandomCard() {

    // return 5;
    let card = Math.floor(Math.random() * 13) + 1;

    // this if statment for treating A(1) is equal to 11 and j(11) k(12) q(13) is equal to 10;
    if(card > 10) {
        return 10;
    } else if(card === 1) {
        return 11;
    } else {
        return card;
    }

}

//check out 
console.log(hasBlackJack)
//----------------------------------------------------------

// let age = 20
// if(age < 21) {
//     document.write("you can not enter the club!")
//     console.log("you can not enter the club!")
// } else {
//     document.write("welcome!")
//     console.log("welcome!")
// }

//----------------------------------------------------------

// let age = 100;
// if(age < 100) {
//     document.write("Not elegible")
//     console.log("Not elegible")
// } else if (age === 100) {
//     document.write("Here is your birthday card from the king!")
//     console.log("Here is your birthday card from the king!")
// } else {
//     document.write("Not elegible, you have already gotten one")
//     console.log("Not elegible, you have already gotten one")
// }

//--------------------------------------------------------------------

// return values in functionn

/*
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if(player1Time < player2Time) {
        return player1Time;
    }
    else if(player2Time < player1Time ) {
        return player2Time;
    } else {
        return player1Time // both are equal in this condition so return any one
    }
}

let startRace = getFastestRaceTime();
console.log(startRace);
*/

// task

// write a function that return the total race time
// call/time the function and store the returned value in a new variable 
// finally, log the variable out

/*
let player1Time = 104;
let player2Time = 107;
 
function totalRaceTime() {
    return player1Time + player2Time;
}

let time = totalRaceTime();
console.log("total time by both player was " + time);
*/

// --------------------------------------------------------------------------

// generating random nubers with Math.random()

// let randomNumber = Math.ceil(Math.random()*10);

/*
// make a dice that generate no between 1 to 6 no

// let randomNumber = Math.floor( Math.random()*6 ) + 1;
// console.log(randomNumber);
*/

/*
// create a function, rollDice() that returns a random number between 1 to 6
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
console.log(rollDice());
*/

//----------------------------------------------------------------------------------------------

// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn Salesforce",
    lessons: 50,
    creator: "trailhead",
    length: 500, // in minute
    level: 3,
    isFree: true,
    tags: ["admin", "developer", "cloud", "intregration"]
}

console.log(course.tags);
console.log(course["title"]);  // same as upar wala

let airbnbCastel = {
    name: "phatepur castel",
    place: "udiapur",
    isAvailable: true,
    price: 8000,
    thingsIncludeWithPacake: ["free breakfast", "free lunch", "free snacks", "free dinner", "access to bar", "gym", "Private beach"]
}

console.log(airbnbCastel.name);
console.log(airbnbCastel["place"]);
console.log(airbnbCastel.thingsIncludeWithPacake);
console.log(airbnbCastel["price"]);
console.log(airbnbCastel.isAvailable);