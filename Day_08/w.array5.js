// find
// ? finds first item in array which satisfies the condition
// ? it returns value not array
// ? if any item does not satisfy condition, it returns undefined

// const numList = [-15, 25, 10, 55, -95, -63, -75];

// ? find item greater than 20

// const value = numList.filter((item, index, array) => {
//   return item > 20;
// });

// console.log(value);

const userList = [
  {
    id: 1,
    name: "Smriti",
    email: "smriti@gmail.com",
  },
  {
    id: 2,
    name: "Shubham",
    email: "suv@gmail.com",
  },
  {
    id: 3,
    name: "Samundra",
    email: "sam@gmail.com",
  },
  {
    id: 4,
    name: "Utsarga",
    email: "uts@gmail.com",
  },
  {
    id: 5,
    name: "Smarika",
    email: "smk@gmail.com",
  },
];

// ? find user whose email is "sam@gmail.com"

// const requiredUser = userList.find((item, index, self) => {
//   if (item.email === "sam@gmail.com") {
//     return item;
//   }
// });

// ? variant 2
// const requiredUser = userList.find((item, index, self) => {
//   return item.email === "samfada@gmail.com";
// });

// console.log(requiredUser);
// ? variant 3
// const requiredUser = userList.find((item) => item.email === "sam@gmail.com");

// console.log(requiredUser);

// ? findIndex
// ? returns index of that item
// const index = userList.findIndex((item) => item.email === "sam@gmail.com");

// console.log(index);
