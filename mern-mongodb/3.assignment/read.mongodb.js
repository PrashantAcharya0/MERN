use("kec-curd");

// ?read operations

//?Find movies whose status is "Ended"

// db.movies.find({ status: "Ended" }, { name: 1, status: 1 });

// ?find movies whose rating is 9

// db.movies.find({ "rating.average": { $gt: 9 } }, { name: 1, rating: 1 });

// ?find movies whose rating is greater than 7 and less than 9

// db.movies.find(
//   {
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },
//   { name: 1, rating: 1 }
// );

// ?find movies whose genres is Thriller

// db.movies.find({ genres: "Thriller" }, { name: 1, genres: 1 });

// ?find movies whose status is Running

// db.movies.find({ status: "Running" }, { status: 1 });

//? find movies whose status is Ended and runtime is 60

// db.movies.find(
//   { $and: [{ status: "Ended" }, { runtime: { $eq: 60 } }] },
//   { status: 1, runtime: 1 }
// );

// ?find movies whose weight is 75 and network country is Canada

// db.movies.find(
//   {
//     $and: [{ weight: { $eq: 75 } }, { "network.country.name": "Canada" }],
//   },
//   { weight: 1, network: 1 }
// );

// ?find movies whose weight is 96 or runtime is 60

// db.movies.find(
//   { $or: [{ weight: { $eq: 96 } }, { runtime: { $eq: 60 } }] },
//   { weight: 1, runtime: 1 }
// );

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } }, { name: 1, rating: 1 });

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });

// ? find movies whose status is neither "Ended" not genres is "Action"
// db.movies.find(
//   { $nor : [{ status: "Ended" }, { genres: "Action" }] },
//   { name: 1 }
// );

// ? find movies whose genres includes 'Drama' , "Comedy" and "Action"
// db.movies.find(
//   { genres: { $all: ["Drama", "Comedy", "Action"] } },
//   { name: 1 ,genres: 1}
// );

// ? find movies whose genre size is 3
// db.movies.find({ genres: { $size: 3 } }, { name: 1, genres: 1 });

