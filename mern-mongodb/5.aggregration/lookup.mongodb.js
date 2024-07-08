const { ObjectId } = require("mongodb");

use("kec-curd");
// ? $lookup

// ? to query between  collections
// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "kathmandu",
//   },
// ]);

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb7e94b1357e615741922"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb7e94b1357e615741923"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb7e94b1357e615741924"),
//   },
// ]);

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },

//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vechileDetails",
//     },
//   },
//   // {
//   //   $project: {
//   //     firstName: 1,
//   //     carModel: { $arrayElemAt: ["$vechileDetails.model", 0] },
//   //     carBrand: { $arrayElemAt: ["$vechileDetails.brand", 0] },
//   //   },
//   // },
//   // arko method to project
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       carModel: { $first: "$vechileDetails.model" },
//     },
//   },
// ]);

// db.person.find();
// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: new ObjectId("668bb7e94b1357e615741924"),
// });

db.person.aggregate([
  {
    $match: {
      firstName: "Enish",
    },
  },
  {
    $lookup: {
      localField: "_id",
      from: "vehicle",
      foreignField: "ownerId",
      as: "vehicleData",
    },
  },
  {
    $project: {
      firstName: 1,
      lastName: 1,
      models: "$vechileData.model",
      "vechileData.model": 1,
      "vechileData.brand": 1,
      lastCarBrand: { $first: "$vechileData.brand" },
    },
  },
]);
