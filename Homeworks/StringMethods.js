// Task 1: Check for a Forbidden Word (Using includes)
// Write a function containsForbiddenWord(text, forbiddenWord)
// that checks if a given string contains a specific forbidden word.
// The function should return true if the word is found, otherwise false.
// Requirements:
// The function should be case-insensitive.
// Use includes() to check for the word presence.
// Write your code here

// Task 2: Get Last N Characters of a String (Using slice)
// Write a function getLastNCharacters(text, n)
// that extracts the last n characters of a string using slice().
// Requirements:
// If n is greater than the string length, return the full string.
// Use slice() to extract the portion.
// Write your code

// Task 3: Extract the Middle Part of a String (Using substring)
// Write a function extractMiddle(text) that returns the middle portion of a string.
// If the string length is even, return the middle two characters.
// If the string length is odd, return only the middle character.
// Requirements:
// Use substring() to extract the middle part of the string.
// The function should handle both even and odd lengths.
// Write your code


//Task1


function containsForbiddenWord(text, forbiddenWord) {
return text.toLowerCase().toString().includes(forbiddenWord.toLowerCase().toString());
}
console.log(containsForbiddenWord("Manuk Goroyan", "Manuk")); 
console.log(containsForbiddenWord("Test Manuk Goroyan", "hello"));




//Task2



function getLastNCharacters(text, n) {
    return text.slice(-n);
}

console.log(getLastNCharacters("Goroyan", 4)); 
console.log(getLastNCharacters("Manuk", 10)); 
 



//Task3



function extractMiddle(text) {
    let length = text.length;
    let middle = length / 2;
    
return text.substring(middle - (length % 2 === 0 ? 1 : 0), middle + 1);
}

console.log(extractMiddle("Manuk"));
console.log(extractMiddle("Manukk")); 
