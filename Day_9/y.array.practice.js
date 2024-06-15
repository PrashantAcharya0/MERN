const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

// ? 1.give 6 percent on occasion of June:6 on each laptop
// const newLaptopList = laptopList.map((item, index, array) => {
//   const discountedPrice = item.price - (6 / 100) * item.price;

//   return {
//     ...item,
//     price: discountedPrice,
//   };
// });

// console.log(newLaptopList);
// ? 2.increase price of Dell laptops by 10%
// const newLaptopList = laptopList.map((item) => {
//   if (item.brand === "Dell") {
//     let newPrice = item.price + (1 / 10) * item.price;

//     return {
//       ...item,
//       price: newPrice,
//     };
//   }

//   return { ...item };
// });

// console.log(newLaptopList);

// ? 3.find all lenovo laptops
// const lenovoLaptops = laptopList.filter((item) => {
//   return item.brand === "Lenovo";
// });

// console.log(lenovoLaptops);

// ? 4.update name of "Idea Pad" to "Idea Pad Ultra"
// const newList = laptopList.map((item) => {
//   if (item.name === "Idea Pad") {
//     return { ...item, name: "Idea Pad Ultra" };
//   }

//   return { ...item };
// });
// console.log(newList);

// ? 5.get all laptops whose price is below $1050

// const laptopsBelow1050 = laptopList.filter((item) => item.price < 1050);
// console.log(laptopsBelow1050);

// ? 6.find "Zenbook 15" laptop details
// const requiredLaptop = laptopList.find((item) => item.name === "Zenbook 15");
// console.log(requiredLaptop);

// ? 7.find sum of prices of all laptops
// const total = laptopList.reduce((sum, item) => {
//   sum = sum + item.price;

//   return sum;
// }, 0);

// console.log(total);
