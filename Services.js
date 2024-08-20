class Service {
  #serviceId; // Private property
  #cost; // Private property
  #locationId; // Private property

  constructor(
    serviceId,
    serviceName,
    description,
    cost,
    timeRequired,
    locationId
  ) {
    this.#serviceId = serviceId;
    this.serviceName = serviceName; // Public property
    this.description = description; // Public property
    this.#cost = cost;
    this.timeRequired = timeRequired; // Public property
    this.#locationId = locationId;
  }

  getCost() {
    return this.#cost;
  }

  setCost(newCost) {
    this.#cost = newCost;
  }

  displayServiceInfo() {
    console.log(`Service: ${this.serviceName}, Cost: ${this.#cost}`);
  }
}
module.exports = Service;
