// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin
      };
  }

  const user = createUser('Manuk', 27, false);
  console.log(user);

  
  // ✅ Task 2: Calculate Total Sales
  // Description:
  // Write a function calculateTotalSales that takes a nested object representing products sold during the day.
  // Each product key contains an object with price and quantitySold.
  // The function should return the total revenue.
  // Requirements:
  // - Use a for...in loop to iterate over the object.
  // - Multiply price * quantitySold for each product and sum the results.
  
  function calculateTotalSales(salesData) {
    let total = 0;
    for (let product in salesData){
        const item = salesData[product];
        total += item.price * item.quantitySold;
    }
    return total;
  }
  const todaySales = {
    apples: {price:500,quantitySold:10},
    potato:{price:300,quantitySold:5},
};

const totalRevenue = calculateTotalSales(todaySales);
console.log(totalRevenue)



  // ✅ Task 3: Convert Array to Object
  // Description:
  // Create a function arrayToObject that takes an array and returns an object.
  // The object should have the array indexes as keys and the elements as values.
  // Requirements:
  // - Use a loop to build the object manually (no Object.fromEntries).
  // - Return the constructed object.
  
  function arrayToObject(arr) {
    const result = {};
    for (let i =0; i < arr.length;i++){
        result[i] = arr[i];
    }
    return result;
  }

  const inputArray =['t','e','s','t'];
  const outputObject = arrayToObject(inputArray);
  console.log(outputObject)

  
  // ✅ Task 4: Get Keys with String Values Only
  // Description:
  // Create a function getStringKeys that takes an object and returns an array of keys
  // whose values are strings.
  // Requirements:
  // - Use a loop or Object.keys() to iterate through the object.
  // - Return only the keys where the value is of type 'string'.
  
  function getStringKeys(obj) {
    const stringKeys = [];
  
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') {
        stringKeys.push(key);
      }
    }
  
    return stringKeys; 
  }
  
  const user1 = {
    name: 'Manuk',
    age: 27,
    city: 'Yerevan',
    isAdmin: false,
  };
  
  console.log(getStringKeys(user1))
  
  // ✅ Task 5: Merge Two Objects
  // Description:
  // Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
  // If the same key exists in both, the value from the second object should overwrite the first.
  // Requirements:
  // - Do not modify the original objects.
  
  function mergeObjects(obj1, obj2) {
    const merged = {}

    for (let key in obj1){
        merged [key] = obj1[key];
    }
    for (let key in obj2){
        merged [key] = obj2 [key] ;
    }
    return merged;
  }
  const obj1 ={name:"Manuk",age:"27"};
  const obj2 ={age:25,city:"Yerevan"};
  const result = mergeObjects(obj1, obj2)
  console.log(result)
