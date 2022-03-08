// array destructing

let arr = ["amazon", "flipkart", "salesforce"];
    // very long way to assing
let company1 = arr[0];
let company2 = arr[1];
let company3 = arr[2];
console.log(company1, company2, company3);

    // short hand notation using array destructing in js
let [company4, company5, company6] = arr;
console.log(company4, company5, company6);


// Object destructing
let obj = {
    name: "mahendra",
    age: 24,
    goal: "software developer and Entrepreneur"
}

    // very long way to assing
// let name = obj.name;
// let age = obj.age;
// let goal = obj.goal;
// console.log(name)
// console.log(age)
// console.log(goal);

    // short hand notation using array destructing in js
let {name, age, goal} = obj
console.log(name)
console.log(age)
console.log(goal);