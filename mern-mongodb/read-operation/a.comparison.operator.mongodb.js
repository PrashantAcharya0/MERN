use("kec-curd");

// ? comparison operator
// ? $eq, $ne, $gt, $gte, $lte, $in, $nin

// TODO : $in, #nin
// * $eq
// ? find movie whose name is "Glee"
// ? name ==="Glee"

// first le chai sab herxa 2nd curly braket chai select option haru ko lai
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, genres: 1 });

// equivalent code
// db.movies.find({ name: "Glee" });

// * $gt
// db.movies.find({ runtime: { $gt: 70 } });

// ? find movies whose rating is greater than 9
// db.movies.find({ "rating.average": { $gte: 9 } }, { name: 1, rating: 1 });

// *ne -> notequalto
// db.movies.find({ id: { $ne: 1 } });
// db.movies.find({ id: { $not: { $eq: 1 } } });

// db.movies.find();
