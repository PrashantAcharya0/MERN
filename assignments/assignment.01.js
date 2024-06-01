// ? 1. Check if a number is odd or even.
const a = 15;
if (a % 2 === 0) {
  console.log(`The number ${a} is even`);
} else {
  console.log(`The number ${a} is odd`);
}

// ? 2. Check if input variable is a number or not
const b = "12";
if (b === +b) {
  console.log(`The variable ${b} is a number`);
}
console.log(`The variable ${b} is not a number`);

// ? 3.Find the largest of two numbers.
const c = 67;
const d = 89;
console.log(c > d ? "The first is greater" : "The second number is greater");

// ? 4.Find the largest of three numbers.
const e = 124;
const f = 456;
const g = 789;

console.log(
  e > f && e > g
    ? "The first number is the largest"
    : f > g
    ? "The second number is the largest"
    : "The third number is the largest"
);

// ? 5.Perform arithmetic operation based on the option provided.
const h = 56;
const i = 6;
const option = "add";

switch (option) {
  case "add":
    console.log(h + i);
    break;
  case "subtract":
    console.log(h - i);
    break;
  case "multiply":
    console.log(h * i);
    break;
  case "divide":
    console.log(h / i);
    break;
  case "power":
    console.log(h ** i);
    break;

  default:
    console.log("Invalid operator");
}

// ? 6.Find grades for student marks.

const j = 83;

if (j >= 90) {
  console.log("The grade is A+");
} else if (j >= 80) {
  console.log("The grade is A");
} else if (j >= 70) {
  console.log("The grade is B");
} else if (j >= 60) {
  console.log("The grade is C");
} else {
  console.log("The grade is F");
}
