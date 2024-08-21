const User = require("./User");
const Employee = require("./Employee");
const Customer = require("./Customer");

const Car = require("./Car");
const OrderDetails = require("./OrderDetails");
const Service = require("./Services");

const Location = require("./Location");
const Payment = require("./Payment");

// junction tables
const Car_Services = require("./Car_Services");
const Customer_Car = require("./Customer_Car");
const Employee_Services = require("./Employee_Services");
const data = require("./data");
// ----------------

// console.log(data.users);
const us = data.users.find((user) => user.id === 1);
// console.log(us);
let usr = new User();
console.log(usr.getInfoByID(1));

let c3 = new Car();
c3.displayCars("C010");

// inheritance testing
let cust = new Customer();
console.log(cust.getInfoById("C001"));

// polymorphisum test
let emp = new Employee();
console.log(emp.getInfoByID("E003"));
