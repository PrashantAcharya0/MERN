use("kec-curd");

// ? evaluation operator
// ? $regrx, $expr

// $option:"i" chai case insensative bhanauna use hunxa.

// db.movies.find({ name: { $regex: "top model" }, $option: "i" });

// db.movies.find({ summary: { $regex: "dark comical" }, $option: "i" });

// db.employee.insertMany([
//   { name: "Utsarga", income: 800, expense: 600 },
//   { name: "Smriti", income: 900, expense: 1100 },
//   { name: "Samrat", income: 1100, expense: 700 },
// ]);

// ? find employees whose expense is greater than their income

// db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });

// ? find employee whose income is less than 850

// db.employee.find({ income: { $lt: 850 } });

// ? income less than 850
