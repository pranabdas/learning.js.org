// .mjs extensions for modules
const Apartment = class {
  constructor(owner, numBedroom, address, breadth, width, height, doorOpen) {
    this.owner = owner;
    this.numBedroom = numBedroom;
    this.address = address;
    this.size = {
      breadth: breadth,
      width: width,
      height: height,
    };
    this.doorOpen = doorOpen;
  }

  toggleDoor() {
    this.doorOpen = !this.doorOpen;
  }

  setSize(breadth, width, height) {
    this.size.breadth = breadth;
    this.size.width = width;
    this.size.height = height;
  }
};

export default Apartment;
