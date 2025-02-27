
// Note: For all the tasks in this file, use only conditional branching (if).
// Task 1: Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here

// Task 2: Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// < 60 → F
// Write your code here

// Task 3: Weekend Checker
// Ask the user to enter a day of the week (e.g., "Monday", "Saturday").
// Print "It's the weekend!" if it's Saturday or Sunday, otherwise print "It's a weekday".
// Write your code here

// Task4: Game Score Adjuster
// Problem Statement:
// You are developing a simple game where the player starts with 10 points.
// If they answer a question correctly, their score increases by 1 (++).
// If they answer incorrectly, their score decreases by 1 (--).
// The program should check if the player’s score has reached 0 and print "Game Over" if true.
// Steps to Implement:
// Initialize score = 10.
// Ask the user if their answer is correct (true/false).
// Use if-else with ++ and -- to update the score.
// If the score reaches 0, print "Game Over".
// Otherwise, print the updated score.
// Write your code here


//Task1



let num = 15;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



//Task2

let score = 70;

if (score >= 90 && score <= 100) {
    console.log("The grade is: A");
} else if (score >= 80 && score < 90) {
    console.log("The grade is: B");
} else if (score >= 70 && score < 80) {
    console.log("The grade is: C");
} else if (score >= 60 && score < 70) {
    console.log("The grade is: D");
} else if (score >= 0 && score < 60) {
    console.log("The grade is: F");
} else {
    console.log("Invalid Score. Please enter a number between 0 and 100.");
}


//Task3



let day = 'saturday';

if (day === "saturday" || day === "sunday") {
    console.log("It's the weekend!");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log("It's a weekday.");
} else {
    console.log("Invalid input. Please enter a valid day of the week.");
}


//Task4

let score1 = 10; 
let answer = true;

if (answer === true) {
    score1 ++ ; 
} else {
    score1 -- ;
}

if (score1 === 0) {
    console.log("Game Over");
} else {
    console.log(`Updated Score: ${score1}`);
}
