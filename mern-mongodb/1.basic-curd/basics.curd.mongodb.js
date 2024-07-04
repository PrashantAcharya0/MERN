use("kec-curd");

// to insert data
// ? insertOne
// ? insertMany

// ? mangodb le nai unique id create garxa
// db.student.insertOne({
//   name: "Unik",
//   address: "Imadol",
// });

// ? yeama chai hamle nai id deko xa
// db.student.insertOne({
//   _id: 101,
//   name: "smarika",
//   address: "Imadol",
// });

// ? multiple add garna ko lai
// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },

//   {
//     name: "Prashant",
//     address: "Balaju",
//   },
// ]);

// ? read operation
// ? findOne
// ? find

// db.student.find(); // {} yesma condtion deko
// db.student.find({ address: "Imadol"});

// db.student.find({ name: "Samundra" });

// db.student.findOne({ address: "Imadol" });

// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e9823aa2c32bf2586fed3") });

// ? delete => remove data
// whole row nai hune ki na hune bhane.
// ? deleteOne
// ? deleteMany

// db.student.deleteOne({ address: "Balaju" });

// db.student.deleteMany({ address: "Imadol" });

// db.student.find();

// ? update => to change field data(s)
// ? updateOne
// ? updateMany

// db.student.updateOne(
//   {
//     name: "Samundra",
//   },
//   {
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

// db.student.updateMany(
//   {
//     address: "Dhapakhel",
//   },
//   {
//     $set: {
//       address: "Nakipot",
//     },
//   }
// );

// db.student.updateOne(
//   { name: "Saugat" },
//   {
//     $set: {
//       address: "Imadol",
//     },
//   },
//   {
//     upsert: true,
//   }
// );

db.student.find();
