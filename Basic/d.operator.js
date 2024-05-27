// operator  => symbol which has certain meaning

// ? arithmetic operatator
// ? assignment operatator
// ? comparison operatator

// ? arithmetic operatator
// ? + , - , * , / , ** , %

// x + 2 = 5

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 ** 3);  // "**" bhane ko power
console.log(25 % 3);  // remainder chaiyo bhane
console.log(Math.floor(25/2));  //yesma multiple flies haru use garna milxa

// ? assignment operator
// let x = 2
// const x =2;
// x = 5;  // cannot be assigned
//console.log(x);

// ? = , += , -= , *= , **= , %=
// let x = 5;
// x += 2;      // yesma x = x + 2 use gareko jastai hunxa
// console.log(x);

// let num = 51;
// num %= 2;  // yesma num = num % 2 use gareko jastai hunxa
// console.log(num);

// ? comparision operator
// ? == , === , != , !== , < , <= , > , >=

// let x = 3;
// let y = 3;
//? == => weak comparison , checks only value
// console.log(x == y);

let x = 3;
let y = '3';
//? === => strict comparison , checks value + data type
// console.log(x === y);

// use === instead of ==

let m = "A";
let n = 'a';
console.log(m.toLowerCase === n.toLowerCase);

let p = 3;
let q = 3;
console.log(p !== q); // tips paila equal le herne ani paxi not halera logic lagaune

// ? logical operator
// ? AND (&&)
// ? OR (||)
// ? NOT (!)

let condition1 = 3 > 5; //false
let condition2 = "nepal" === "Nepal"; //false
console.log(true && false);
console.log(true || false);
console.log(!false);

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!false);
