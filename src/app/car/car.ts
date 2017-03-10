class Engine {
    public cylinders: string = 'much';
}

class Tires {
    public make: string = 'many';
}

export class Car {
  public description = 'No DI';
  constructor(public engine: Engine, public tires: Tires) {
  }
  // Method using the engine and tires
  drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}

var car = new Car(new Engine(), new Tires());
console.log(car.drive());

