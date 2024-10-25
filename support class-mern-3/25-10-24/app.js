const abc = "sumon";

const person = {
  age: 45,

  math() {
    console.log("this is math fn");
  },

  edu: "MBA",
  city: "Dhaka",
  10: "sssss",

  [abc]: "my name is sumon",
};

/* for (const element in person) {
  console.log(person[element]);
} */

/* for (const element in person) {
  const check = typeof person[element];

  if (check === "function") {
    person[element]();
  } else {
    console.log(person[element]);
  }
} */

console.log(person);
console.log(person.sumon);
