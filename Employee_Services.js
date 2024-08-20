class Employee_Services {
  constructor(employeeObj, serviceObj) {
    this.employeeObj = employeeObj;
    this.serviceObj = serviceObj;
  }
  getEmployeServices() {
    console.log("pivote table is created");

    console.log(`${this.employeeObj.empRole}`);
  }
}

module.exports = Employee_Services;
