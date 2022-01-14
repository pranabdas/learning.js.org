// .mjs extensions for modules
import Apartment from "./apartment_class.mjs";

const myApartment = new Apartment(
  "Pranab",
  2,
  "Singapore",
  10,
  20,
  4,
  false
)

console.log("Apartment height =", myApartment.size.height);

console.log("Before toggleDoor()):", myApartment.doorOpen);

myApartment.toggleDoor();
console.log("After toggleDoor():", myApartment.doorOpen);

myApartment.setSize(20, 15, 4);

console.log(myApartment);
