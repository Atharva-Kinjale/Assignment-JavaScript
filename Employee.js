const User = require("./User");
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
