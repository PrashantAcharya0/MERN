use("kec-curd");

// ? update on array
// ? add 92 on marks of Subham
// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

// ? add 87 and 93 to marks of suyasha
// $each chai array ma matra
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       marks: { $each: [87, 93] },
//     },
//   }
// );

// ? pop
// ? 1 => removes item from end of array
// ? -1 => removes item from starting of array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: 1,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: -1,
//     },
//   }
// );

// ? pull => removes item based upon condition
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

// ? pull item which has sub "science" to "maths"
// db.scores.updateMany(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     // $set: {
//     //   points: { sub: { Science: "Maths" } },
//     // },
//     $set: {
//       "points.$.sub": "Maths",
//     },
//   }
// );

db.scores.find();
