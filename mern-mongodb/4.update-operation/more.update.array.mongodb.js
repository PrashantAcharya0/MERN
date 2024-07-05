const { ObjectId } = require("mongodb");

use("kec-crud");

// ? $ operator
// $: element which matched the document

// *Que: change only specific data within an object
db.scores.updateOne(
  { name: "Smarika", "points.sub": "Social" },
  {
    $set: {
      "points.$.sub": "C#",
    },
  }
);

db.scores.updateOne(
  { name: "Smarika", "points.sub": "C" },
  {
    $set: {
      "points.$.point": 60,
    },
  }
);

// *Que: Update sub from "C" to "Objective C" and point to 69 for "Smarika"
db.scores.updateOne(
  { name: "Smarika", "points.sub": "C" },
  {
    $set: {
      "points.$.sub": "Objective C",
      "points.$.point": 69,
    },
  }
);

// *Que: Update points to 80 for all subjects for Smarika
db.scores.updateOne(
  { name: "Smarika" },
  {
    $set: {
      "points.$[].point": 80,
    },
  }
);

// *Que: Update points to 95 for each sub which has point below 95 for Rajan
db.scores.updateOne(
  {
    _id: new ObjectId("66829f9b98493c7d6f718593"),
  },
  {
    $set: {
      "points.$[element].point": 95,
    },
  },
  {
    arrayFilters: [{ "element.point": { $lt: 95 } }],
  }
);

// *Que: Decrease each marks of Rajan by 100
db.scores.updateOne(
  { name: "Rajan" },
  {
    $inc: {
      "marks.$[]": -100,
    },
  }
);

// *Que: Set 0 marks to 2 to Smarika's marks
db.scores.updateOne(
  { name: "Smarika", marks: 2 },
  {
    $set: {
      "marks.$": 0,
    },
  }
);

// *Que: Decrease each marks which are greater than 80 by 10
db.scores.updateOne(
  { name: "Smarika" },
  {
    $inc: {
      "marks.$[condition]": -10,
    },
  },
  {
    arrayFilters: [{ condition: { $gt: 80 } }],
  }
);

db.scores.find();
