const data = require("./data");
class Car {
  #carId; // Private property
  #price; // Private property
  #locationId; // Private property

  constructor(
    carId,
    model,
    price,
    manufactureYear,
    mileage,
    isAvailable,
    locationId
  ) {
    this.#carId = carId;
    this.model = model; // Public property
    this.#price = price;
    this.manufactureYear = manufactureYear; // Public property
    this.mileage = mileage; // Public property
    this.isAvailable = isAvailable; // Public property
    this.#locationId = locationId;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    this.#price = newPrice;
  }

  displayCarInfo() {
    console.log(
      `Car Model: ${this.model}, Price: ${this.#price}, Available: ${
        this.isAvailable
      }`
    );
  }
  displayCars(CId) {
    let cars = data.cars.find((car) => car.carId === CId);
    // console.log(`Car names: ${cars.carId}`);
    console.log(cars);
    return new Car(...Object.values(cars));
  }
}

module.exports = Car;
