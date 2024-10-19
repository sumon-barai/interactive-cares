// 07-10-24

// String
// Boolean
// Number
// undefined
// null
// object
// function
// array

// let abcs = "sumon barai";

// let nu = "10";

// let bool = true;
// let un = null;

// console.log(typeof abc);

// **************08-10-24***********

// function

// function child(num1, num2) {
//   return num1 + num2;
// }

// function parentFn(callbackFn) {
//   const output = callbackFn(10, 60);
//   return output;
// }

// const result = parentFn(child);
// console.log(result);

// arrow function

// const arrFn = () => {
//   console.log("arrow function");
// };

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// const combine = arr1.concat(arr2);

// console.log(combine);

// console.log(arr1);
// console.log(arr2);

// object

// const arr = ["khulna", "20", 2050];

// const student = {
//   roll: 2050,
//   name: "sumon",
//   class: 12,
//   gender: "male",
//   dept: "management",
//   math: function () {
//     console.log("this is function");
//   },
//   name: "shohag ",
// };

// // CRUD

// student["name"] = "rahul";

// console.log(student);

// arrry

// const data = [
//   { id: 10, name: "Apple", type: "Fruit", price: 1.2 },
//   { id: 2, name: "Toyota", type: "Car", year: 2020 },
//   { id: 32, name: "John Doe", type: "User", age: 28 },
//   { id: 14, name: "1984", type: "Book", author: "George Orwell" },
//   { id: 5, name: "Inception", type: "Movie", director: "Christopher Nolan" },
//   { id: 6, name: "Samsung", type: "Electronic", category: "Phone" },
//   { id: 64, name: "Tesla", type: "Car", year: 2023 },
//   { id: 8, name: "Jane Smith", type: "User", age: 34 },
//   { id: 862, name: "Cucumber", type: "Vegetable", price: 0.8 },
//   {
//     id: 10,
//     name: "The Great Gatsby",
//     type: "Book",
//     author: "F. Scott Fitzgerald",
//   },
// ];

// const result = data.filter((item, index) => {
//   if (item.type === "Book") return true;
//   return false;
// });

// console.log(result);

// 19/10/2024
/* 
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [10, [5, 8, [98, 70]]],
];
const result = myArr.flat(Infinity);
let total;
result.forEach(function (item) {
  total += item;
});
*/

// console.log(total);

// const fruits = [10, "Banana", "Orange", "Apple", "Mango", true];
// let text = fruits.join("=>");

// console.log(text);

/* const myData = "my sumon name is sumon  barai";
const result = myData.split("sumon");
console.log(result); */
