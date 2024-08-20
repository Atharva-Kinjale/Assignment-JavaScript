class OrderDetails {
  #orderId; // Private property
  #amount; // Private property
  #locationId; // Private property

  constructor(
    orderId,
    empId,
    customerId,
    carId,
    amount,
    orderDate,
    locationId
  ) {
    this.#orderId = orderId;
    this.empId = empId; // Public property
    this.customerId = customerId; // Public property
    this.carId = carId; // Public property
    this.#amount = amount;
    this.orderDate = orderDate; // Public property
    this.#locationId = locationId;
  }

  getAmount() {
    return this.#amount;
  }

  setAmount(newAmount) {
    this.#amount = newAmount;
  }

  displayOrderDetails() {
    console.log(
      `Order ID: ${this.#orderId}, Amount: ${this.#amount}, Date: ${
        this.orderDate
      }`
    );
  }
}

module.exports = OrderDetails;
