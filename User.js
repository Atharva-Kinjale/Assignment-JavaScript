const data = require("./data");
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
  //   polymorphism
  displayInfo() {
    console.log(
      `User: ${this.firstName} ${this.lastName}, Contact: ${this.#contactNo}`
    );
  }

  getInfoByID(id) {
    // const user = data.users.find((user) => user.id === id);

    const user = data.users.find((user) => user.id === id);
    // console.log(...Object.values(user));
    // console.log(typeof user);

    return new User(...Object.values(user));
    // return user;
  }
}
// console.log(User.getUserByID(1));

module.exports = User;
