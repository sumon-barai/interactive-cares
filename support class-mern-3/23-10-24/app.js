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

const data = [
  { id: 10, name: "Apple", type: "Fruit", price: 1.2 },
  { id: 2, name: "Toyota", type: "Car", year: 2020 },
  { id: 32, name: "Tesla", type: "User", age: 28 },
  { id: 14, name: "sumon", type: "Book", author: "George Orwell" },
  { id: 5, name: "Inception", type: "Movie", director: "Christopher Nolan" },
  { id: 6, name: "Samsung", type: "Electronic", category: "Phone" },
  { id: 64, name: "Tesla", type: "Car", year: 2023 },
  { id: 8, name: "Jane Smith", type: "User", age: 34 },
  { id: 862, name: "Cucumber", type: "Vegetable", price: 0.8 },
];

const res = data.reduce((accu, curr) => {
  const value = curr.name;
  const isExist = accu.includes(value);

  // if (isExist) {
  //   return accu;
  // } else {
  //   accu.push(value);
  //   return accu;
  // }

  if (isExist) return accu;
  accu.push(value);
  return accu;
}, []);

console.log(res);

// ["Apple","Toyota","Toyota"]
