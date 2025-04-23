// Homework: Create a `Car` Class with Inheritance, Encapsulation, and Polymorphism in JavaScript

// 🚀 **Objective**:
// Create a `Car` superclass and two subclasses: `ElectricCar` and `GasCar` with inheritance, encapsulation, and polymorphism.

// ---

// ### **Super Class: `Car`**

// ✅ **Properties**:
// - `make` (String): Must be a non-empty string. Capitalize first letter.
// - `model` (String): Must be a non-empty string. Capitalize first letter.
// - `year` (Number): Must be >= 1886. Defaults to 2025 if not provided.

// ✅ **Methods**:
// - **Setters** and **Getters** for `make`, `model`, and `year`.
// - **Private Method** `#checkServiceStatus()`: Logs `"Service status: OK"`.
// - **Static Method** `vehicleType()`: Returns `"Car"`.
// - **`displayDetails()`**: Returns `"This is a car model [model] of the year [year]."`

// ---

// ### **Child Class: `ElectricCar`**

// ✅ **Properties**:
// - `batteryCapacity` (Number): Indicates the battery capacity in kWh (default: `50`).
// - `electricRange` (Number): Indicates the maximum driving range on a single charge in kilometers (default: `350`).
// - `chargingTime` (Number): Time in hours to fully charge the car (default: `8`).

// ✅ **Methods**:
// - **Constructor**: Call `super(make, model, year)` and initialize `batteryCapacity`, `electricRange`, and `chargingTime`.
// - **Setter and Getter** for `batteryCapacity`, `electricRange`, and `chargingTime`.
// - **`chargeBattery()`**: Logs `"Charging the battery..."`.
// - **`displayDetails()`**: Override to return `"This is an Electric Car model [model] of the year [year], with a [batteryCapacity] kWh battery, [electricRange] km range, and charging time of [chargingTime] hours."`
// - **Static Method** `isEcoFriendly()`: Returns `true`.

// ---

// ### **Child Class: `GasCar`**

// ✅ **Properties**:
// - `fuelCapacity` (Number): Indicates the fuel tank capacity in liters (default: `50`).
// - `fuelEfficiency` (Number): Indicates the fuel efficiency in kilometers per liter (default: `15`).
// - `emissions` (Number): CO2 emissions in grams per kilometer (default: `120`).

// ✅ **Methods**:
// - **Constructor**: Call `super(make, model, year)` and initialize `fuelCapacity`, `fuelEfficiency`, and `emissions`.
// - **Setter and Getter** for `fuelCapacity`, `fuelEfficiency`, and `emissions`.
// - **`refuel()`**: Logs `"Refueling the car..."`.
// - **`displayDetails()`**: Override to return `"This is a Gas Car model [model] of the year [year], with a [fuelCapacity]L fuel tank, [fuelEfficiency] km/L efficiency, and [emissions] g/km CO2 emissions."`
// - **Static Method** `isEcoFriendly()`: Returns `false`.

// ---

// ### **Requirements**:
// - Use **inheritance** (`super()`).
// - Implement **encapsulation** (private properties, setters, getters).
// - Apply **polymorphism** (override `displayDetails()`).
// - Implement **static methods**.



class Car {
    #make;
    #model;
    #year;

    constructor(make,model,year = 2025){
        this.make = make;
        this.model = model;
        this.year = year;
        this.#checkServiceStatus();
    }

    get make(){
        return this.#make;
    }

    set make(value) {
        if (typeof value === 'string' && value.trim()) {
          this.#make = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          throw new Error("Make must be a non-empty string.");
        }
      }
    get model(){
        return this.#model;
    }

    set model(value) {
        if (typeof value === 'string' && value.trim()) {
          this.#model = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          throw new Error("Model must be a non-empty string.");
        }
      }

    get year(){
        return this.#year
    }

    set year(value){
        if(typeof value === 'number' && value >= 1886){
            this.#year = value;
        } else {
            this.#year = 2025;
        }
    }

    #checkServiceStatus(){
        console.log("Service status : Ok")
    }

    static vehicleType(){
        return "Car";
    }


    displayDetails(){
        return `This is a car model ${this.model} of year ${this.year}.`;
    }
}


class ElectricCar extends Car {
    #batteryCapacity;
    #electricRange;
    #chargingTime;

    constructor(make,model,year,batteryCapacity = 50, electricRange = 350, chargingTime = 8){
        super(make,model,year);
        this.#batteryCapacity = batteryCapacity;
        this.#electricRange = electricRange;
        this.#chargingTime = chargingTime;
    }

    get batteryCapacity(){
        return this.#batteryCapacity;
    }

    set batteryCapacity(value){
        this.#batteryCapacity = value;
    }

    get electricRange(){
        return this.#electricRange;
    }

    set electricRange(value){
        this.#electricRange = value;
    }

    get chargingTime(){
        return this.#chargingTime;
    }

    set chargingTime(value){
        this.#chargingTime = value;
    }

    chargeBattery(){
        console.log("Charging the battery . . .")
    }
    displayDetails() {
        return `This is an Electric Car model ${this.model} of the year ${this.year}, with a ${this.batteryCapacity} kWh battery, ${this.electricRange} km range, and charging time of ${this.chargingTime} hours.`;
      }

      static isEcoFriendly() {
        return true;
      }  
}

class GasCar extends Car {
    #fuelCapacity;
    #fuelEfficiency;
    #emissions;
  
    constructor(make, model, year, fuelCapacity = 50, fuelEfficiency = 15, emissions = 120) {
      super(make, model, year);
      this.fuelCapacity = fuelCapacity;
      this.fuelEfficiency = fuelEfficiency;
      this.emissions = emissions;
    }
  
    get fuelCapacity() {
      return this.#fuelCapacity;
    }
  
    set fuelCapacity(value) {
      this.#fuelCapacity = value;
    }
  
    get fuelEfficiency() {
      return this.#fuelEfficiency;
    }
  
    set fuelEfficiency(value) {
      this.#fuelEfficiency = value;
    }
  
    get emissions() {
      return this.#emissions;
    }
  
    set emissions(value) {
      this.#emissions = value;
    }
  
    refuel() {
      console.log("Refueling the car...");
    }
  
    displayDetails() {
      return `This is a Gas Car model ${this.model} of the year ${this.year}, with a ${this.fuelCapacity}L fuel tank, ${this.fuelEfficiency} km/L efficiency, and ${this.emissions} g/km CO2 emissions.`;
    }
  
    static isEcoFriendly() {
      return false;
    }
  }


  const car1 = new ElectricCar("lixiang","model L7",2024,75,550,7);
  console.log(car1.displayDetails());
  car1.chargeBattery();    
  
  const car2 = new GasCar("Mazda","model 6",2016);
  console.log(car2.displayDetails());
  car2.refuel();          
  
  console.log(Car.vehicleType());    
  console.log(ElectricCar.isEcoFriendly());   
  console.log(GasCar.isEcoFriendly());      