// object destructure

// const bookDetail = {
//   name: "Operating System",
//   author: "A. Tanenbaum",
//   publishedDate: "1990/01/01",
//   numberOfPages: 500,
//   coverPhoto: null,
//   price: undefined,
// };

// console.log(bookDetail.name);
// console.log(bookDetail.author);
// console.log(bookDetail.publishedDate);
// console.log(bookDetail.numberOfPages);
// console.log(bookDetail.coverPhoto);
// console.log(bookDetail.price);

// const { name, author } = bookDetail;

// console.log(name);

// ? ======================example 2===========================================

// const obj1 = {
//   name: "Cup",
//   price: 7,
// };

// const obj2 = {
//   name: "Mouse",
//   price: 15,
// };

// const { price } = obj1;

// const { price: priceOfProduct2 } = obj2; // renaming price as priceOfProduct2
// console.log(priceOfProduct2);

// ? =======================example 3==========================================

// const student = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// const {
//   name,
//   college,
//   isGraduated,
//   image,
//   address: { permanent, temporary },
// } = student;

// console.log(`My name is ${name}.`);
//
