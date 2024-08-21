const User = require("./User");
const data = require("./data");

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
  //   polymorphism
  getInfoByID(id) {
    console.log("call from emp");
    // console.log(`User: ${this.firstName} ${this.lastName},
    //     employeeId: ${this.empId},
    //      Contact: ${this.contactNo}`);

    let employee = data.employees.find((x) => x.empId == id);
    // console.log("log", employee);

    return new Employee(...Object.values(employee));
  }
}

module.exports = Employee;
