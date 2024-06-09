// costant
// ? in js, constant means which cannot be re-assigned
// const x = 7;
// x=9;

// ? mutation => process of having change
// ? mutate => change
// ? mutable => chnageble
// ? immuatabl => unchangeable

// ? primary data types => cannot be reassigned, thus immutable
// ? non-primary data types => cannot be readdigned, but mutable

// ? imutable
// const isDeveloped = false;
// isDeveloped = true;

// const phoneDetail = {
//   brand: "Redmi",
// };

// phoneDetail.brand = "Apple";
// console.log(phoneDetail);

// phoneDetail = true; // constant cannnot be reassigned

// object sanga frezz use garada tyo ne change hudaina
// const obj1 = Object1.freeze({
//   name :"Rohan"
// });

const obj1 = {
  name: "A",
};

const obj2 = {
  name: "A",
};

// TODO after array
const obj1key = Object.keys(obj1);
const obj2key = Object.keys(obj2);
