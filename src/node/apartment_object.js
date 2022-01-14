const apartment = {
  owner: "Pranab",
  numBedroom: 2,
  address: "Singapore",
  size: {
    breadth: 20,
    width: 10,
    height: 3,
  },
  doorOpen: false,
  toggleDoor: function () {
    this.doorOpen = !this.doorOpen;
  },
  setSize: function (breadth, width, height) {
    this.size.breadth = breadth;
    this.size.width = width;
    this.size.height = height;
  },
};

console.log("Apartment height =", apartment.size.height);

console.log("Before toggleDoor):", apartment.doorOpen);

apartment.toggleDoor();
console.log("After toggleDoor():", apartment.doorOpen);

apartment.setSize(20, 15, 4);

console.log(apartment);
