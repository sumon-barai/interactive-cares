// const numbers = [15.5, 2.3, 1.1, 4.7];

// let n = 0;
// numbers.forEach((i) => {
//   n = i + n;
// });

// console.log(n);
/* 
const res = numbers.reduce((total, currentValue) => {
  const sum = total + currentValue;
  return sum;
});

console.log(res); */

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
