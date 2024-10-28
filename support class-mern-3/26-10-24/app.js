// const person = {
//   age: 45,
//   math() {
//     console.log("this is math fn");
//   },
//   edu: "MBA",
//   city: "Dhaka",
//   10: "sssss",
//   age: 450,
// };

// console.dir(Object.keys());

// person.math()

// Create an Object
/* const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Get the Keys
const keyOfPerson = Object.values(person);

console.log(keyOfPerson);
 */

// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "oranges", quantity: 300 },
//   { name: "kiwi", quantity: 150 },
//   { name: "apples", quantity: 500 },
// ];

// const res = Object.groupBy(fruits, (ele) => {
//   return ele.quantity;
// });

// console.log(res);

const person = {
  age: 45,
  math() {
    console.log("this is math fn");
  },
  edu: "MBA",
  city: "Dhaka",
  10: "sssss",
  age: 450,
  info: {
    id: 50,
    name: "sumon",
  },
};

// const myEdu = person.edu;
// const myage = person.age;
// const mycity = person.city;

const { age, edu, math, info } = person;
const { name } = info;

// console.log(name);

const arr = [10, "sumon", true];

const [, , third] = arr;

console.log(third);
