// error
// ? error is inevitable

// ? error handling

// const x = 2;

// try {
//   x = 5;
//   console.log("Hit");
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Send email");
// }

// console.log("Hi");

// try block ma error bhaye paxi catch herxa
// catch thik xa bhane tyo auxa
// thik xa bhane dutai ko auxa output auxa
// finally chai right bhaye ne worng bhaye yo chai auna paro

// ? example

let user = null;

try {
  if (!user) {
    throw new Error("User does not exist.");
  }
  console.log("Hey man, Wassssssup");
} catch (error) {
  console.log(error.message);
}
