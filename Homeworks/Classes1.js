// Homework: Create an `Employee` Class (No Inheritance)

// 🚀 Objective:
// Create a JavaScript class named `Employee` that represents an employee with strict validation rules 
// and meaningful output using getters and methods.

// ✅ Properties:
// Your class should have the following properties, all validated via setters:

// 1. name (String):
//    - Must be between 2 and 15 characters.
//    - Must be a string.
//    - Normalized: first letter uppercase, the rest lowercase.

// 2. surname (String):
//    - Same validation rules and normalization as name.

// 3. email (String):
//    - Must follow the basic format: x.x@xx.
//    - Should be trimmed (no leading/trailing spaces).
//    - Must be converted to lowercase.

// 4. phoneNumber (String):
//    - Must be a string.
//    - Must be exactly 9 digits.
//    - Must start with one of the valid Armenian mobile prefixes: 
//      091, 093, 094, 095, 096, 097, 098, or 099.
//    - No extra characters allowed (only digits, no "+" or dashes).

// 5. position (String):
//    - Must be between 2 and 50 characters.

// 6. salary (Number):
//    - Must be a number.
//    - Must be greater than or equal to 68,000 AMD (minimum net salary in Armenia).

// 7. isRemote (Boolean):
//    - Must be either true or false.

// All values must be assigned through their respective setters during object construction. 
// If any validation fails, throw an Error with a descriptive message.

// 📤 Getter:
// Create a getter named `info` that returns a complete summary of the employee:

// Example:
// "Employee information: Bob Henderson is a QA Automation Engineer. He works remotely. 
// His salary is 670000 AMD. Phone number: 098666666. 
// Email: bob.henderson@email.com"

// - If `isRemote` is false, the sentence should say: "He works on-site."

// 🔧 Methods:

// 1. giveRaise(amount):
//    - Increases the salary by the given amount (number).
//    - Validates that the input is a number.

// 2. raiseSalary(percent):
//    - Increases the employee’s current salary by the given percent.
//    - The percent input:
//      - Must be a number.
//      - Must be greater than 0.
//    - Throws an error if input is invalid.

// 3. changePosition(newPosition):
//    - Changes the employee’s position to the given value.
//    - Validation rules:
//      - Must be a string.
//      - Must be between 2 and 50 characters.
//    - Throws an error if the input is invalid.
// */
// class Employee {
//   // Your code here
// }

// // 💡 Example Usage:
// const emp = new Employee(
//   "bob",
//   "henderson",
//   "  Bob.Henderson@email.com ",
//   "098666666",
//   "QA Automation Engineer",
//   780000,
//   true
// );

// console.log(emp.info);
// // Employee information: Bob Henderson is a QA Automation Engineer. He works remotely./He works on-site. (if isRemote = false)
// // His salary is 780000 AMD. Phone number: 098666666.
// // Email: bob.henderson@email.com

// emp.raiseSalary(10);
// emp.giveRaise(30000);
// emp.changePosition("Senior QA Automation Engineer");
// console.log(emp.info);
// // Updated info reflecting new salary and position




class Employee {
    constructor(name,surname,email,phoneNumber,position,salary,isRemote) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.salary = salary;
        this.isRemote = isRemote;
    }

    set name(value){
        if(typeof value !== 'string'){
            throw new Error ("Name must be a string.");
        }
        if (value.leght < 2 || value.leght > 15){
            throw new Error ("Name must be between 2 and 15 characters.");
        }
        this._name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    get name(){
        return this._name;
    }

    set surname(value) {
        if (typeof value !== 'string') {
            throw new Error("Surname must be a string.")   
        }
        if (value.length < 2 || value.length > 15) {
            throw new Error("Surname must be between 2 and 15 characters.");
    }
    this._surename = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

}
get surname(){
    return this._surename;
}
set email(value) {
    if (typeof value !== 'string') {
      throw new Error("Email must be a string.");
    }
    const trimmed = value.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      throw new Error("Invalid email format.");
    }
    this._email = trimmed;
  }

  get email() {
    return this._email;
  }
  set phoneNumber(value) {
    if (typeof value !== 'string') {
      throw new Error("Phone number must be a string.");
    }
    const validPrefixes = ['091', '093', '094', '095', '096', '097', '098', '099','077'];
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(value)) {
      throw new Error("Phone number must be exactly 9 digits with no extra characters.");
    }
    const prefix = value.slice(0, 3);
    if (!validPrefixes.includes(prefix)) {
      throw new Error("Invalid Armenian mobile prefix.");
    }
    this._phoneNumber = value;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set position(value) {
    if (typeof value !== 'string') {
      throw new Error("Position must be a string.");
    }
    if (value.length < 2 || value.length > 50) {
      throw new Error("Position must be between 2 and 50 characters.");
    }
    this._position = value;
  }

  get position() {
    return this._position;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error("Salary must be a number.");
    }
    if (value < 68000) {
      throw new Error("Salary must be at least 68,000 AMD.");
    }
    this._salary = value;
  }

  get salary() {
    return this._salary;
  }
  set isRemote(value) {
    if (typeof value !== 'boolean') {
      throw new Error("isRemote must be a boolean.");
    }
    this._isRemote = value;
  }

  get isRemote() {
    return this._isRemote;
  }

  get info() {
    const workLocation = this.isRemote ? "remotely" : "on-site";
    return `Employee information: ${this.name} ${this.surname} is a ${this.position}. ` +
           `He works ${workLocation}. His salary is ${this.salary} AMD. ` +
           `Phone number: ${this.phoneNumber}. Email: ${this.email}`;
  }
  giveRaise(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error("Raise amount must be a number.");
    }
    this.salary += amount;
  }
  raiseSalary(percent) {
    if (typeof percent !== 'number' || percent <= 0) {
      throw new Error("Percent must be a number greater than 0.");
    }
    this.salary += this.salary * (percent / 100);
  }

  changePosition(newPosition) {
    if (typeof newPosition !== 'string') {
      throw new Error("New position must be a string.");
    }
    if (newPosition.length < 2 || newPosition.length > 50) {
      throw new Error("New position must be between 2 and 50 characters.");
    }
    this.position = newPosition;
  }

}


const employee = new Employee(
    "Manuk",
    "Goroyan",
    "manuk_g@purlin.com",
    "077777777",
    "QA Engineer",
    68000,
    false
);

console.log(employee.info);


employee.giveRaise(50000);
employee.raiseSalary(20);
employee.changePosition("QA 2 Engoneer" );

console.log(employee.info);