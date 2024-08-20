// customer_car
class Customer_Car {
  constructor(carObj, customerObj) {
    this.carObj = carObj;
    this.customerObj = customerObj;
  }
  getCars() {
    console.log("pivote table is created");
    console.log(`${this.carObj.model}`);
  }
}
module.exports = Customer_Car;
