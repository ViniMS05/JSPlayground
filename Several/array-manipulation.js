const classroom = [
  "Jonh",
  "Albert",
  "Newton",
  "Kant",
  "Locke",
  "João",
  "Jonas",
];

const student = ["Tobias", "Haley"];

// const newarray = (array, search) => {
//   if (array instanceof Array) {
//     array.filter((item) => {
//       return item.includes(search);
//     });
//   } else {
//     throw new Error("Please provide an array!");
//   }
// };

const newarray = (array, search) => {
  if (array instanceof Array) {
    const arrayZ = [];
    const narray = array.map((item, _, arr) => {
      const idx = arr.indexOf(item);
      arrayZ.push(idx);

      return (arr = arrayZ);
    });

    return narray;
  } else {
    throw new Error("Please provide an array!");
  }
};

const go = newarray(classroom, "J");

console.log(go);
