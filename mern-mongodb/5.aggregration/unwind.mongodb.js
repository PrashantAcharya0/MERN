use("kec-curd");

// ? $unwind
// ? unwind => undo or be undone after winding or being wind

// db.products.insertOne({
//   name: "bottle",
//   price: 400,
//   availableColor: ["blue", "green", "white"],
// });

// db.products.find();

// db.products.aggregate([
//   { $match: {} },
//   {
//     $unwind: "$availableColor",
//   },
// ]);

// db.learner.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       sub: "Computer Network",
//       marks: 68,
//     },
//     {
//       sub: "Project Management",
//       marks: 72,
//     },
//     {
//       sub: "Organization and Management",
//       marks: 58,
//     },
//   ],
// });

// db.learner.find();

db.learner.aggregate([
  {
    $match: {},
  },
  {
    $unwind: {
      path: "$scores",
    },
  },
  {
    $sort: {
      "scores.marks": -1,
    },
  },
]);
