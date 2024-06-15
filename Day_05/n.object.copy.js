// object copy

const print = (values) => {
  console.log(values);
};

const student1 = {
  name: "Raaju",
  college: "KEC",
  isGraduated: false,
  image: null,
};

print(student1);

// ? shallow copy
// ? example1
// const student2 = { ...student1 };
// student2.name = "Yadav";
// console.log(student1);

// ? example2
// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// console.log(student1);

// ? deep copy
// structuredClone

const student2 = structuredClone(student1);
student2.address.permanent = "Z";
console.log(student1);
