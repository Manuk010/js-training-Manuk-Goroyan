// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here


//Task1

function calculateSquare(n, callback) {
    let square = n * n;
    callback(square);
}

calculateSquare(2, (square) => {
    console.log(`The square is: ${square}`);
});

//Task2


function checkLogin(username, password) {
    let correctUsername = "Manuk";
    let correctPassword = "Test123";

    if (username === correctUsername && password === correctPassword) {
        console.log("Login successful");
    } else {
        console.log("Incorrect username or password");
    }
}

checkLogin("Manuk", "Test123");  
checkLogin("Hovsep", "Testing123");


//Task3

function sumNumbersUpTo(n,callback){
    let sum = 0
    for (let i = 1; i <= n; i ++) {
        sum = sum + i;
    }
    callback(sum);
} 
sumNumbersUpTo(5,(result)=> {
    console.log(`The sum is: ${result}`);
});