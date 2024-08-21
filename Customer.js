const data = require("./data");
const User = require("./User");

class Customer extends User {
  #customerId; // Private property

  constructor(id, firstName, lastName, gender, contactNo, pincode, customerId) {
    super(id, firstName, lastName, gender, contactNo, pincode);
    this.#customerId = customerId;
  }

  getCustomerId() {
    return this.#customerId;
  }

  setCustomerId(newCustomerId) {
    this.#customerId = newCustomerId;
  }

  displayCustomerInfo() {
    console.log(
      `Customer ID: ${this.#customerId}, Name: ${this.firstName} ${
        this.lastName
      }`
    );
  }

  displayInfo() {
    console.log(`User: ${this.firstName} ${this.lastName} 
        customerId: ${this.#customerId}
         Contact: ${this.contactNo}`);
  }
  //   polymorphism
  getInfoById(id) {
    let customer = data.customers.find((c) => c.customerId === id);
    // console.log(`Car names: ${cars.carId}`);
    // console.log(customer);
    return new Customer(...Object.values(customer));
  }
}

module.exports = Customer;
