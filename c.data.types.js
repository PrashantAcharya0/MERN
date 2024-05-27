// ? data types
// string
// number
// boolean
// undefined
// null
// object
// bigInt --> large integer number
//symbol

// ? string
// ? "",'',``(back tick)

let userName = "Prashant@123"; // yesma `` rakh da ne '' rakhda ne string nai hunxa
console.log(userName);
console.log(typeof userName);

let x = "10"; // string nai hunxa
console.log(x, typeof x);

// ? number
// ? NaN => Not a number
let y = 5 / 0; // infinity aayo yesma float jato kei xaina
console.log(y, typeof y);

// ? boolen => true/false
let isSunnyDay = false; // "" ma rakhyo bhane string hunxa natra boolean dinxa
console.log(isSunnyDay, typeof isSunnyDay);

// ? undefined
// ? js cannot guess data type
let b;
console.log(b, typeof b);

// ? Null
let a = null;
console.log(a, typeof a);

// ? object
const studentDetail = {
  fName: "Prashant",
  lName: "Acharya",
  address: "A",
};
console.log(studentDetail, typeof studentDetail);

const numList = [25, 55, 65, 11, 23];
console.log(numList, typeof numList);
