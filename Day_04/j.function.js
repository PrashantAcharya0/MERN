// function
// ? DRY => Do not Repeat Yourself
// ? objective: code reusability, to reduce code redundancy, single point of failure

// ?syntax
// function function_name(){
// some code here
// }

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }

// sayHello("Smriti");
// sayHello("Pratik");

// let sum = 0;
// function getSum(x, y) {
//   sum = x + y;
// }

// getSum(2, 3);
// console.log(sum);

// ? arrow function

// const sayHi = (studentName = "user") => {
//     stu
//   console.log(`Hi ${studentName}`);
// };

// sayHi("Suyasha");

// ======== case 2====================
// const sayHi = (studentName) => {
//   studentName = "Prashant";
//   console.log(`Hi ${studentName}`);
// };

// sayHi("Suyasha");

// const doSum = (x, y) => {
//   x = +x;
//   y = +y;

//   let sum = x + y;

//   return sum;
// };
// let result = doSum("5", "7");
// console.log(result);

// ? wap to print product of two numbers

// const doProduct = (num1, num2) => num1 * num2;

// const productResult = doProduct(5, 6);
// console.log(productResult);

// ? WAF that checks whether a number is odd or even

// const isOddEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// };

// const result = isOddEven(46);
// console.log(result);

// ====== 2nd way=======================

// const isOddEven = (num) => (num % 2 === 0 ? "even" : "odd");

// const result = isOddEven(46);
// console.log(result);

// ?WAF to check polarity of a number
// ? function should return "positive"/"negative"/"zero"

// const checkPolarity = (num) => {
//   let result;

//   if (num > 0) {
//     result = "+ve";
//   } else if (num < 0) {
//     result = "-ve";
//   } else {
//     result = "zero";
//   }

//   return result;
// };

// console.log(checkPolarity(5));

//  alternative code
// const checkPolarity = (num) => (num > 0 ? "+ve" : num < 0 ? "-ve" : "zero");

// console.log(checkPolarity(0));