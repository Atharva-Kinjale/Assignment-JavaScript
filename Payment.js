class Payment {
  #paymentId; // Private property
  #paymentStatus; // Private property
  #orderId; // Private property

  constructor(paymentId, paymentType, paymentStatus, orderId) {
    this.#paymentId = paymentId;
    this.paymentType = paymentType; // Public property
    this.#paymentStatus = paymentStatus;
    this.#orderId = orderId;
  }

  getPaymentStatus() {
    return this.#paymentStatus;
  }

  setPaymentStatus(newStatus) {
    this.#paymentStatus = newStatus;
  }

  displayPaymentInfo() {
    console.log(
      `Payment ID: ${this.#paymentId}, Status: ${this.#paymentStatus}`
    );
  }
}
module.exports = Payment;
