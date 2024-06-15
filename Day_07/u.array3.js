// ? map, filter, find, findIndex, reduce
// ? loop based

let studentList = ["Saugat", "Shubham", "Suyasha", "Smriti", "Utsarga", "Unik"];

// ? map
// ? it returns new array
// ? to alter values of array
// ? original array length === returned array length

// const newStudentList = studentList.map((item, index, array) => {
//   //   console.log(item, index, array);

//   return 0;
// });

// const newStudentList = studentList.map((item, index, array) => {
//   let uppercaseName = item.toUpperCase();

//   return uppercaseName;
// });

// console.log(newStudentList);

const priceList = [25, 35, 11, 9, 5, 99];

// increase price of every item by 3 dollar

// const newPriceList = priceList.map((item, index, array) => {
//   const newPrice = item + 3;

//   return newPrice;
// });

// ? improved aesthetic

// const newPriceList = priceList.map((item) => item + 3);

// console.log(newPriceList);

// ? array of object
const productList = [
  {
    id: 1,
    name: "Night vision glass",
    price: 5,
  },
  {
    id: 2,
    name: "Gloves",
    price: 7,
  },
  {
    id: 3,
    name: "Helmet",
    price: 25,
  },
];

// ? increase price of each item by 10% due to recent raise in taxes
// const newProductList = productList.map((item, index, array) => {
//   const newPrice = item.price + (1 / 10) * item.price;

//   return {
//     ...item,
//     price: newPrice,
//   };
// });

// console.log(newProductList);
