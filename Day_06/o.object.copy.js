//why  object
// ? 1. structured data => key value pair => group of primary data types === complex data type

// ? 2. encapsulation => hide data , controlled access

// const obj = {
//     name:"Rohan"
// };

// Object.defineProperty(obj, "name", {
//   value: "Shubham",
//   enumerable: true,
//   writable: true,
//   configurable: false,
// });

// // obj.name = "Sona";
// delete obj.name;
// console.log(obj);

// ? 3 dynamic
// ? we can add, edit, update and delete property easily

// const laptopDetails = {
//   name: "F15",
//   brand: "Asus",
//   ram: 16, //GB
//   ssd: 512, //GB
// };

// let key = "ram";

// console.log(laptopDetails[key]);

// ?4. abstraction => hide process

// ?5 . modular, better organization of data

// =====================question 2======================

const myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 4,
  color: "green",
  builtYear: 2002,
  numberOfStorey: 3,
};

// delete myHouseDetails.numberOfMembers;

// myHouseDetails.numberOfRooms += 2;

// myHouseDetails.estimatedPrice = 145000;

// console.log(myHouseDetails);

// console.log(`I have a ${myHouseDetails["color"]} colored house.`);
