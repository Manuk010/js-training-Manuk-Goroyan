// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!


//Task1

let wordLenght = "Manuk Goroyan"
console.log(wordLenght.length)



//Task2

function eachCharacter(str) {
    if (typeof str !== 'string') {
        console.log("Input must be a string.");
        return;
    }

    if (str.length < 1 || str.length > 50) {
        console.log("String length must be between 1 and 50 characters.");
        return;
    }

for (let char of str) {
    console.log(char);
}
}

let inputString = "Manuk Goroyan";
eachCharacter(inputString);




//Task3

function capitalizeNameSurname(str) {
    
if (typeof str !== "string") {
    return "Error: Input must be a string.";
}

let parts = str.trim().split(" ");

if (parts.length !== 2) {
    return "Error: Input must contain exactly two words (name and surname).";
}

let capitalizedName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
let capitalizedSurname = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();

return capitalizedName + " " + capitalizedSurname;

}

console.log(capitalizeNameSurname("manuk goroyan"));        
console.log(capitalizeNameSurname("mANuk GoROyAn"));   
console.log(capitalizeNameSurname("manuk"));
console.log(capitalizeNameSurname(123));               




//Task4


function stringCase(str) {
  
if (typeof str !== "string") {
    return "Error: Input must be a string.";
}

if (str.length < 10 || str.length > 20) {
    return "Error: String length must be between 10 and 20 characters.";
}

let result = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        result += str.charAt(i).toUpperCase(); 
    } else {
            result += str.charAt(i).toLowerCase(); 
        }
}

    return result;
}

console.log(stringCase("manuk goroyan")); 
console.log(stringCase("manuktestt")); 
console.log(stringCase("manukgoroyantesttesttestest")); 



// Task5



function checkPalindrome(str) {

    let palindrome1Str = '';
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
        
        
if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        palindrome1Str += char; 
    }
}

    
let isPalindrome = true;
    
    
for (let i = 0; i < palindrome1Str.length / 2; i++) {
    if (palindrome1Str[i] !== palindrome1Str[palindrome1Str.length - i - 1]) {
        isPalindrome = false; 
        break; 
    }
}

    return isPalindrome; 
}

console.log(checkPalindrome("anna"));       
console.log(checkPalindrome("Manuk , ! Goroyan"));
console.log(checkPalindrome("manuk")); 
console.log(checkPalindrome("manuk 'x' goroyan")); 



//Task6



function countCharacterInString(str, char) {
    
if (typeof str !== 'string' || typeof char !== 'string') {
     return "Both inputs must be strings.";
}

if (char.length !== 1) {
    return "The character input must be a single character.";
}

let count = 0;

for (let i = 0; i < str.length; i++) {
if (str[i] === char) {
count++;
}

}

return count;

}

console.log(countCharacterInString("Manuk Goroyan", "o")); 
console.log(countCharacterInString("Manuk Manuk", "M"));     
console.log(countCharacterInString("Goroyan", "p"));      
console.log(countCharacterInString("Goroyan", "r"));      
  

