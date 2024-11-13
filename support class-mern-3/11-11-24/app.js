/* const obj = {
  name: "sumon",
  edu: "mba",
  location: "khulna",
  age: undefined,
  math: () => {},
  ad: Symbol(),
  date: new Date(),
};

const jsonData = JSON.stringify(obj);

const realObj = JSON.parse(jsonData);
console.log(jsonData);
console.log(realObj); */

/* const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';


const obj = JSON.parse(text,function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
}); */

const text =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';

const obj = JSON.parse(text, function (key, value) {
  if (key == "age") {
    return new Date(value);
  } else {
    return value;
  }
});
