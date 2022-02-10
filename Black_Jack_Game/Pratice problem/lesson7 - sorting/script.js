let fruits = ['apple', 'orange', 'apple', 'orange', 'apple'];

let appleShelf = document.getElementById("apple-store");
let orangeShelf = document.getElementById("orange-store");

function arrangeFruits() {
    for(let i = 0; i < fruits.length; i++) {
        if(fruits[i] === "apple") {
            appleShelf.textContent += "🍎";
        }else {
            orangeShelf.textContent += "🍊";
        }
    }
}

arrangeFruits()