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
}

module.exports = Customer;
