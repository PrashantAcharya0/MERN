use("kec-curd");

// ? logical operator
// ? $and, $or, $not, $nor

// ? find movies whose genre is "Action" and rating is greater than 7

// auta method
// db.movies.find({
//   $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }],
// } );

// arko method
// db.movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

// *$or

// ? find movies whose genres is "crime" or network country is "United states".

// db.movies.find({
//   $or: [
//     { genres: "Crime" },
//     { "network.country.name": { $eq: "United states" } },
//   ],
// });

// * $nor => all applied should not match
// ? find movies whose rating id neither greater than 7 nor genres is Drama

// db.movies.find(
//   {
//     $nor: [{ genres: "Drama" }, { "rating.average": { $gt: 7 } }],
//   },
//   { name: 1, genres: 1, rating: 1 }
// );
