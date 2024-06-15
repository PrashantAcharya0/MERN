// rest operator => acts as collector
// (...)

// const getSum = (a, b, ...otherValues) => {
//   const total = otherValues.reduce((total, item) => {
//     total = total + item;

//     return total;
//   }, 0);

//   return total + a + b;
// };

// const result = getSum(1, 2, 3, 4, 5, 6, 7, 9, 10);
// console.log(result);

// const getProduct = (x, y, ...otherValues) => {
//   let product = otherValues.reduce((total, item) => {
//     total = total * item;
//     return total;
//   }, 1);

//   let totalProduct = product * x * y;

//   return totalProduct;
// };

// const result = getProduct(1, 2, 3, 4, 5, 6);

// console.log(result);

const getProduct = (...otherValues) => {
  let product = otherValues.reduce((total, item) => {
    total = total * item;
    return total;
  }, 1);

  return product;
};

const result = getProduct(1, 2, 3, 4, 5, 6);

console.log(result);
