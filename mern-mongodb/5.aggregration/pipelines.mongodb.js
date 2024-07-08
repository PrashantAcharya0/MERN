use("kec-curd");

// ? aggregarion => powerful query tool
// aggregate le chai database ma change gardaina
// ? uses pipeline stage
// ? $match => kun document select bhako sab dekhaune
// ? $project => specific data herna lai use garne
// ? $sort => order ma data dekuna
// ? $limit => max ma yeti data dekhaune bhanera use garne
// ? $skip
// ? $lookup
// ? $unwind
// TODO: $group

// db.movies.aggregate([
//   {
//     $match: {
//       name: "Glee",
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },

//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

// ? find movies whose gener is "Crime" or network country is United states

// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country": "United states" }],
//     },
//   },

//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

// ? find movies whose genre include both "Drama" and "comedy"
// ? and project "name" and "genre" field
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ genres: "Drama" }, { genres: "Comedy" }],
//     },
//   },

//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ? arko method

// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },

//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// $sort => arrange data in either asscending or descending order
// ?  1 => ascending sort
// ? -1 => desecending sort

// yedi sort garda id same bhayo bhane name le pani sort garne same id lai bhaye testo lai ==> compound sort
// db.movies.aggregate([
//   {
//     $match: {},
//     //sabai bhane indicate garxa khali rakhyo bhane
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: -1, //descending sort
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

// ? $limit => number of documents to be returned

// db.movies.insertOne({ id: 17, name: "Money Heist" });

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ? find 5 movies whose rating is greater than 8 and id is sorted in ascending order
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
//   { $skip: 5 },
//   { $limit: 2 },
// ]);

// let page = 2;
// let limit = 30;
// let skip = (page - 1) * limit;

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $skip: skip },
//   { $limit: limit },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);
