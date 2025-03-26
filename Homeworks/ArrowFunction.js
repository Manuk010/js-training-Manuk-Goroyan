// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
    return a * b;
  }
  // Writhe your code here
  
  function cube(n) {
    return n * n * n;
  }
//   // Writhe your code here
  
  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  // Writhe your code here
  
  // Task 2. Arrow Function with Default Parameters
  // Requirement:
  // Create an arrow function greet that takes a name parameter.
  // The parameter should have a default value of "Guest".
  // The function should return "Hello, [name]!".
  // Writhe your code here
  
  // Task 3. Calculate Percentage
  // Requirement:
  // Write an arrow function that takes two arguments:
  // total: the total value
  // percentage: the percentage to calculate
  // The function should return the calculated percentage of the total.
  // Writhe your code here




  //Task1

let multiply1 = (a, b) => a * b;

let cube1 = (n) => n * n * n;

let sayHello1 = (name) => `Hello, ${name}`;

console.log(multiply1(5, 4));
console.log(cube1(2)); 
console.log(sayHello1("Manuk"));


//Task2

const greet = (name => {
  return `Hello, ${name || "Guest"}!`;
});

console.log(greet()); 
console.log(greet("Manuk")); 


//Task3 

const calculatePercentage = (total, percentage) => {
  return (total * percentage) / 100;
};


console.log(calculatePercentage(100, 10)); 
console.log(calculatePercentage(100, 25)); 
