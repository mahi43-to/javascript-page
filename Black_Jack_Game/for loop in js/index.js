// for loop 
// syntax for(initalization; condition; incr/decr) {}

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// create a for loop that counts from 10 to 100 in steps of 10
for(let i = 10; i <=100; i+=10) {
    document.writeln(i);
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j <= i; j++ ) {
        document.writeln("*");
    }
    document.writeln();
}