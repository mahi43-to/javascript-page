let myCourses = ['Learn css', 'Learn javascript', 'Learn Apex', 'Learn Java', 'Learn LWC'];

// creating a function that takes a single parameters an array
function course(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

course(myCourses);