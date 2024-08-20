const data = require("./data");
// import users from "./data.js";
// let data = users;
// console.log(users);
// console.log(data);

class User {
  #id; // Private property
  #contactNo; // Private property
  #pincode; // Private property

  constructor(id, firstName, lastName, gender, contactNo, pincode) {
    this.#id = id;
    this.firstName = firstName; // Public property
    this.lastName = lastName; // Public property
    this.gender = gender; // Public property
    this.#contactNo = contactNo;
    this.#pincode = pincode;
  }

  getContactNo() {
    return this.#contactNo;
  }

  setContactNo(newContactNo) {
    this.#contactNo = newContactNo;
  }

  displayUserInfo() {
    console.log(
      `User: ${this.firstName} ${this.lastName}, Contact: ${this.#contactNo}`
    );
  }

  static getUserByID(id) {
    // const user = data.users.find((user) => user.id === id);

    const user = data.users.find((user) => user.id === id);
    // console.log(...Object.values(user));
    // console.log(typeof user);

    return new User(...Object.values(user));
    // return user;
  }
}

// sample data try for id 1
// static method so no need to create user class object
console.log(User.getUserByID(1));

//
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
}

class Location {
  constructor(pincode, city, state, country) {
    this.pincode = pincode;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  displayLocation() {
    console.log(`Location: ${this.city}, ${this.state}, ${this.country}`);
  }
}

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

class Employee extends User {
  #empId; // Private property
  #salary; // Private property

  constructor(
    id,
    firstName,
    lastName,
    gender,
    contactNo,
    pincode,
    empId,
    empRole,
    salary
  ) {
    super(id, firstName, lastName, gender, contactNo, pincode);
    this.#empId = empId;
    this.empRole = empRole; // Public property
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(newSalary) {
    this.#salary = newSalary;
  }

  displayEmployeeInfo() {
    console.log(
      `Employee ID: ${this.#empId}, Role: ${this.empRole}, Salary: ${
        this.#salary
      }`
    );
  }
}

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

// pivor=te tables

// customer_car
class customer_car {
  constructor(carObj, customerObj) {
    this.carObj = carObj;
    this.customerObj = customerObj;
  }
  getCars() {
    console.log("pivote table is created");
    console.log(`${this.carObj.model}`);
  }
}

// car_services

class car_services {
  constructor(carObj, serviceObj) {
    this.carObj = carObj;
    this.serviceObj = this.serviceObjObj;
  }
  getService() {
    console.log("pivote table is created");
    console.log(`${this.serviceObj.name}`);
  }
}

class employee_services {
  constructor(employeeObj, serviceObj) {
    this.employeeObj = employeeObj;
    this.serviceObj = serviceObj;
  }
  getEmployeServices() {
    console.log("pivote table is created");
    console.log(`${this.employeeObj.empRole}`);
  }
}
