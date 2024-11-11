const obj = {
  age: 100,
  edu: "akcc",
  add: {
    home: "khulna",
    postCode: "9000",
  },
};

const person = {
  ...obj,
};
// const person = obj;

person.age = 50000;
person.add.home = "bangladesh";

console.log(obj);
console.log(person);
