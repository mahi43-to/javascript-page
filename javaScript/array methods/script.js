let arr = [2, 3, 4, 5, 6, 8];

// syntax --> arrayName.methodName(function(currentItem, index, array) {

//})

// map()
let newArray = arr.map(function(currentItem, index, array) {
    console.log(`currentIten is ${currentItem} index is ${index} and array is ${array}`)
    return currentItem * 2;
})
console.log(newArray)

// filter()
let filterNo = arr.filter(function(currentItem, index, array) {
    return currentItem > 5;
})
console.log(filterNo)

//every()
let age = [32, 22, 18, 40];
let isAllAdult = age.every(function(currentItem) {
    return currentItem >= 18;
})
console.log(isAllAdult)

//some()
let agelist = [32, 22, 18, 40];
let isAdult = agelist.some(function(currentItem) {
    return currentItem > 32;
})
console.log(isAdult)

// sort()
// string 
let name = ["mahi", "raj", "vipul", "mahesh"];
console.log(name.sort());

// number 
let value = [10, 2, 3, 22, 20];
let sortValut = value.sort(function(a, b){
    return a-b; // in asc
    // return b-a // in desc
})
console.log(sortValut)

// reduce()
//syntax --> arrayName.reduce(function(total, currentItem, index, array) {

//}, intialValue)

let num = [13, 54, 34];
let sum = num.reduce(function(total, currentItem){
    return total+currentItem;
},0)
console.log(sum)

//forEact() 
num.forEach(function(currentItem){
    console.log(currentItem)
})