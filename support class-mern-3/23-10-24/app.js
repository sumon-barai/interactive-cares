/* const fruits = ["Banana", "Orange", "Apple", "Mango", "sum", "sss", 50];

const result = fruits.splice(1, 12, "sumon", "khulna");

console.log(result);
console.log(fruits); //original */

const fruits = [
  "Banana",
  "banana",
  "Orange",
  "Lemon",
  "Apple",
  "Mango",
  "apple",
];

const points = [40, 100, 1, 5, 25, 10];
// const points = [4, 1, 1, 5, 2, 1];
const result = points.sort(function (a, b) {
  const ab = a - b;
  console.log(ab);
  return ab;
});

// console.log(result);
console.log(points); //original
