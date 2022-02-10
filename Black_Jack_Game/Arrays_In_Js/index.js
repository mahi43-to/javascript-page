// Arrays - ordered list of items

// let featurePosts = [
//   "check out mu Netflix clone",          // 0th index
//   "Here's the code for my project",      // 1st index
//   "I've just relaunched my portfolio",   // 2nd index
// ];

// console.log(featurePosts[2]);
// console.log(featurePosts[0]);
// console.log(featurePosts[1]);

// console.log(featurePosts.length)


//----------------------------------------------------------------

// create an array that lists your i.e. experience, education, license, skills or similar
// the items of the should be strings

// let experience = [
//   "intern at IEEE in 2021",
//   "intern at itechcloudsolution 2022",
// ];
// let education = [
//   "ssc - decent child high school - 56%",
//   "hsc - sunrays science school - 63%",
//   "diploma in cse(gtu) - vbp - 7.90 cgpa",
//   "B.E in cse(gtu) - mgiter - present",
// ];
// let license = [
//   "udemy html certificate",
//   "udemy css certificate",
//   "salseforce Developer certificate",
// ];
// let skills = ["java", "c++", "c", "html", "css", "javascript", "git", "dsa"];

//----------------------------------------------------------------

// Array - ordered list of items - coposite / complex data type

// create an array that describes yourself. Use the three primitive data types you've learned
// it should contain your name (string), your age (number), and whether you like pizza (boolean)

// let myself = ["mahendra sahu", 24, false];
// console.log(myself)
// console.log(myself[1])
// console.log(myself.length)

//----------------------------------------------------------------

// let cards = [4, 7];

// push the data into end of an array
// cards.push(3);
// console.log(cards.length);

//----------------------------------------------------------------

// push the newMessage to the messages array, and then log out the array
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!";

// messages.push(newMessage);
// console.log(messages);

// now remove the last message you push into the array

// messages.pop()
// console.log(messages)

//----------------------------------------------------------------

// access the message by each index

// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

// access the message by each index using for loop
// for(let i = 0; i < messages.length; i++) {
//     document.writeln(messages[i]);
//     console.log(messages[i]);
// }

// let myCards = [7, 3, 9];
//create a for loop that logs out all the cards in the array

// for(let a = 0; a < myCards.length; a++) {
//     console.log(myCards[a]);
// }
// console.log(myCards.forEach());

//-----------------------------------------------------------------------------

let sentence = ["Hello", "my", "name", "is", "mahi"];
let greetEl = document.getElementById("greeting-el")

for(let i = 0; i < sentence.length; i++ ) {
    greetEl.textContent += sentence[i] + " ";
}
// console.log(greetEl);
