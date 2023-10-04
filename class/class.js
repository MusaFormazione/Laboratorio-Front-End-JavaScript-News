class Car {
  // field declaration
  type = 'Car';
  // private field
  #duration = 5;
  // private method
  #setModel(name) {
    this.model = name;
  }
  // static field
  static wheels = 4;
  // static method
  static setWheels(wheels) {
    this.wheels = wheels;
  }

  // a class needs a constructor to create an instance
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  getModel() {
    return this.model.toUpperCase();
  }
  // same as above, but using a getter
  get Model() {
    return this.model.toUpperCase();
  }
}

// You can instance a class with the 'new' keyword
let myCar = new Car('Panda', 2020);
console.log(myCar.getModel())
// a getter is accessed without parenthesis, as if it were a property
console.log(myCar.Model)
console.log(myCar.type)
// returns undefined, because we are trying to access a private filed
console.log(myCar.duration)
// if you try to use a private method, an error will be thrown (try to uncomment the line below to see the error in the console)
// myCar.setModel('Punto')
// if you try to access a static field on an instance, you get undefined
console.log(myCar.wheels)
// the right way to access a static field is to use the class, not an instance!
console.log(Car.wheels)
// setting a static method, it modifies the class field!
Car.setWheels(6)
console.log(Car.wheels)