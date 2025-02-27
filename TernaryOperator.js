// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here



//Task1

//conditional branching
let number = 72; 

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// ternary operator

let number1 = 72;

console.log(number1 + (number1 % 2 === 0 ? " is even." : " is odd."));




//Task2 

// conditional branching

let examScore = 50;

if (examScore >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ternary operator

let examScore1 = 51;

console.log(examScore1 >= 50 ? "Pass" : "Fail");