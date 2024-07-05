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
// ! Practice Questions

// *Que: Push an object with sub: Science and point: 92 on Suyasha
db.scores.updateOne(
  { name: "Rajan" },
  {
    $addToSet: {
      points: { sub: "Social", point: 83 },
    },
  }
);

// *Que: Push 57, 88, 96 on Suyasha's marks such that no value is duplicated
db.scores.updateOne(
  { name: "Suyasha" },
  {
    $addToSet: {
      marks: { $each: [57, 88, 96] },
    },
  }
);

// *Que: Change Rajan's lucky color to 'Orange'
db.scores.updateOne(
  { name: "Rajan" },
  {
    $set: {
      "luckyThings.color": "Orange",
    },
  }
);

// *Que: Pull last item from Rajan's points
db.scores.updateOne(
  { name: "Rajan" },
  {
    $pop: {
      luckyThings: 1,
    },
  }
);

// *Que: Decrease age of Smarika by 20
db.scores.updateOne(
  { name: "Smarika" },
  {
    $inc: {
      age: -20,
    },
  }
);

// *Que: Divide age of Rajan by 2
db.scores.updateOne(
  { name: "Smarika" },
  {
    $mul: {
      age: 1 / 2,
    },
  }
);

// *Que: Push {sub:"C Program",point:72} and {sub:"C++",point:65} on Smarika's points
db.scores.updateOne(
  { name: "Smarika" },
  {
    $push: {
      points: {
        $each: [
          { sub: "C", point: 72 },
          { sub: "C++", point: 65 },
        ],
      },
    },
  }
);

db.scores.find();
