class Car {
  // builds the initial object
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  // methods
  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color.`;
  }

  // static method
  // not accessible from the instances
  static totalDoors(car1, car2) {
    const door1 = car1.doors;
    const door2 = car2.doors;

    return door1 + door2;
  }
}

const myCar = new Car(4, "v6", "black");

console.log(myCar);
console.log(myCar.carStats());

const civic = new Car(4, "v4", "blue");

// console.log(myCar.totalDoors(myCar, civic));  // will throw error

console.log(Car.totalDoors(myCar, civic));

// extending a class
class SUV extends Car {
  constructor(doors, engine, color, brand) {
    super(doors, engine, color); // initialize the object from previous class
    this.brand = brand;
    this.ac = true;
  }

  myBrand() {
    return `This SUV is a ${this.brand}.`;
  }
}

const mySUV = new SUV(4, "v6", "red", "mazda");

console.log(mySUV);
console.log(mySUV.carStats());
console.log(mySUV.myBrand());
