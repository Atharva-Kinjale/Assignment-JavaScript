// car_services

class Car_Services {
  constructor(carObjs, serviceObj) {
    this.carObjs = carObjs;
    this.serviceObj = serviceObj;
  }
  getService() {
    console.log("pivote table is created");
    console.log(`${this.serviceObj.name}`);
  }
}

module.exports = Car_Services;
