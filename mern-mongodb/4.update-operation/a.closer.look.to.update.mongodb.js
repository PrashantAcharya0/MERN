const { ObjectId } = require("mongodb");

use("kec-curd");

// ? $set
//.... baki xa code

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );

// ?
// ? update age of Rajan to 30
// ? update age of suyasha to 40

// ? $sinc => increases field value by provided value

// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 30,
//     },
//   }
// );

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );

// db.scores.updateOne(
//     {
//       name: "Suyasha",
//     },
//     {
//       $set: {
//         age: 40,
//       },
//     }
//   );

// db.scores.insertOne({
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//     age: 30,
//   });

// db.scores.updateMany(
//   {name :"smarika"},
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );

// todo :research objected
// ?$mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("66829973e34a24608f51c862") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

// ? decrease age of Suyasha by 2
// db.scores.updateOne(
//   {
//     name: "Suyasha",
//   },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

// ? $rename => renames field
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//     },
//   }
// );

// ? $min ,$max

// ? $min => if field value is more than specified valur, it sets min value to that field
// db.scores.updateMany(
//     {},
//     {
//       $min: {
//         age: 16,
//       },
//     }
//   );

// ? $max => if field value is less than specified valur, it sets max value to that field
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

// db.scores.find();

// ? update lucky color of Suyasha to "Blue"

// db.scores.updateOne(
//   {
//     name: "Suyasha",
//   },
//   {
//     $set: {
//       "luckyThings.color": "Blue",
//     },
//   }
// );

// ? update lucky number of smarika to 8
// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

// ? increase lucky number of Subham by 2
// db.scores.updateOne(
//   {
//     name: "Subham",
//   },
//   {
//     $inc: {
//       "luckyThings.number": +2,
//     },
//   }
// );

db.scores.find();
