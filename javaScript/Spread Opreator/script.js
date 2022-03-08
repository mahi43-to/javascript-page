// spread opreator

// Expanding string 
var string1 = "hello world"
var string2 = "javascript"
console.log(...string1[0]);
var string3 = [...string1, ...string2];
console.log(string3)

// combing array
let arr1 = ["abc", "def", "ghi"];
let arr2 = ["jkl", "mno", "pqr"];
console.log(...arr1);
console.log(...arr1[2]);
let arr3 = [...arr1, ...arr2];
console.log(arr3)
let arr4 = [...arr1, ...arr2, "mahi"];
console.log(arr4)
let arr5 = ["mahendra", ...arr1, "sahu", ...arr2, "mahi"];
console.log(arr5)

// combining object
var obj1= {
    name: "mahi",
    age: 24,
    brand: "flipkart",
    date: "23/04/2022"
}

var obj2= {
    name:"fli",
    age: 23,
    next: "hello"
}

var obj3= {
    ...obj1, ...obj2
}
console.log(obj3)

// shallow copy
let array1 = ["x", "y", "z"];
let array2 = [...array1];
array2.push("mahi");
console.log(array1);
console.log(array2);

//nested copy
var arrObj = [
    {name: "mahi"},
    {name: "salesforce"}
]
// var arrObj1 = [...arrObj]
// console.log(arrObj1)
// arrObj1[1].name= "amazom";
// console.log(arrObj)
// console.log(arrObj1)


// hack for nested copy
var arrObj2 = JSON.parse(JSON.stringify(arrObj))
arrObj2[1].name="amazom";
console.log(arrObj);
console.log(arrObj2);
