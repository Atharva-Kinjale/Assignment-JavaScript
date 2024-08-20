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

module.exports = Location;
