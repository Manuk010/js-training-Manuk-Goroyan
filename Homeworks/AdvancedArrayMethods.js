// ✅ Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

//function customForEach(array, callback) {
    // your code here
  //}
  
  // ✅ Task 2: Implement customMap
  // Description:
  // Write a function customMap that works like Array.prototype.map().
  // It should return a new array with the results of applying a given function to every element in the input array.
  // Requirements:
  // Do not use .map().
  // Use your own logic with a loop.
  // Must return a new array (do not modify the original array).
  
  //function customMap(array, callback) {
    // your code here
  //}
  
  // ✅ Task 3: Implement customReverse
  // Description:
  // Create a function customReverse that reverses the elements of an array and returns the reversed array.
  // Requirements:
  // Do not use .reverse().
  // You may use a loop or swap elements manually.
  // Should not use built-in methods that directly reverse arrays.
  
  
  // ✅ Task 4: Implement Bubble Sort
  // Description:
  // Write a function that sorts an array of numbers using the bubble sort algorithm.
  // Requirements:
  // Do not use .sort().
  // Implement the bubble sort algorithm using loops.
  // Return the sorted array.
  
  //function bubbleSort(array) {
    // your code here
  //}
  
  // ✅ Task 5: Implement customReduce
  // Description:
  // Create a function customReduce that takes an array, a callback function, and an optional initial value.
  // It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
  //
  // Requirements:
  // - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
  // - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
  // - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
  // - Return the final accumulated value.
  // - Do not use the built-in .reduce() method.
  // - If the array is empty and no initialValue is provided, return undefined.
  
  //function customReduce(array, callback, initialValue) {
    // your code here
  //}



//   //Task1

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
   
      callback(array[i], i, array);
    }
  }
  
 
  const numbers = [5, 10, 15];
  
  customForEach(numbers, function(currentValue, index, array) {
    console.log('Value:', currentValue, 'Index:', index, 'Array:', array);
  });
  
  

// //Task2


function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
    }
    return result; 
  }
  
  const number = [3, 5, 7, 9];
  
  const squared = customMap(number, function(value, index, array) {
    return value * value;
  });
  
  console.log(number);  
  console.log(squared);  
  

//   //Task3


function customReverse(array) {
    const result = []; 
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]); 
    }
    return result;
  }

  const original = [1, 2, 3, 4,];
  const reversed = customReverse(original);
  
  console.log(original);   
  console.log(reversed); 
  

//Task5 


function customReduce(array, callback, initialValue) {
    if (array.length === 0 && initialValue === undefined) {
      return undefined; 
    }
  
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
  
  const numbers1 = [1,2,3,4];
  
  const sum = customReduce(numbers1, function(acc, currentValue) {
    return acc + currentValue;
  });
  
  console.log(sum); 
  

  const product = customReduce(numbers1, function(acc, currentValue) {
    return acc * currentValue;
  }, 1);
  
  console.log(product); 
  
  const emptyResult = customReduce([], function(acc, currentValue) {
    return acc + currentValue;
  });
  console.log(emptyResult); 
  