// methods in array

// push, pop, shift, unshift, reverse

// ? push => to add element(s) to end of array
// ? pop => to remove last element from array

// const numList = [10, 11, 12];

// numList.push(13, 14, 15);

// numList.pop();

// console.log(numList);

// ? shift => to remove first item from array
// ? unshift => to add item(s) at starting of array

// let studentList = ["Saugat", "Shubham", "Samundra", "Smriti"];

// studentList.shift();

// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

// ? reverse => reverses order of items in array
// ? toReversed => returns new array after reversing order of original array

// const priceList = [15, 25, 35, 45];

// priceList.reverse();
// const newPriceList = priceList.toReversed();

// console.log(newPriceList);

// ? includes
// ? checks whether array contains specific value or not
// ? results in boolean(true or false)

// const laptops = ["Macbook M3", "TUF F15", "Nitro 5", "A15"];

// const result = laptops.includes("A15");
// console.log(result);

// const currentRoute = "/user/edit/1";
// const result = currentRoute.includes("edit");

// console.log(result);

// ? slice => it does not change original array
// ? returns new array with portion of original array
// ? when given start and end => start is included, item of end index is excluded
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const newList = animals.slice();
// const newList = animals.slice(2);
// const newList = animals.slice(1, 4);
// console.log(newList);

// ? splice => changes original array
// ? remove or replace existing items
// const months = ["Jan", "Mar", "Apr", "May", "Jun"];

// months.splice(2); // removes item from this index
// months.splice(2, 2); //first parameter:startIndex, secondParameter:deleteCount
// months.splice(1, 0, "Feb");
// months.splice(4, 0, "Jul", "Aug", "Sept");
// console.log(months);

// ? sort
// ? ascending or descending

// let studentList = [
//   "Saugat",
//   "Abhishek",
//   "Yadav",
//   "Smriti",
//   "Yeshika",
//   "Lokendra",
// ];

// studentList.sort(); //asc
// studentList.sort().reverse(); //desc

// console.log(studentList);

// let numList = [1, 100, 11, 102, 2, 23, 20, 50, 51, 505, 111];

// numList.sort((a, b) => a - b);//ascending numeric sort
// numList.sort((a, b) => b - a); // descending numeric sort
// console.log(numList);
