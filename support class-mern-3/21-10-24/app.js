// map method
// const numbers = [65, 44, 12, 4];

// const result = numbers.map((item, index) => {
//   return item * 2;
// });

// console.log(result);

/* const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const result = persons.map((item) => {
  if (item.firstName === "Jayne") {
    item.firstName = "sumon";
    return item;
  } else {
    return item;
  }
});

console.log(result); */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.reverse();
const result = fruits.toReversed();

console.log(result);
console.log(fruits); // original
