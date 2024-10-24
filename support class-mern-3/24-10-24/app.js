/* // Create an Array
const ages = [32, 33, 18, 40];

// Create a Test Function
function checkAge(age) {
  return age < 20;
}

// Are all ages over 18?
const result = ages.every(checkAge);
console.log(result);
 */

// function parseString(...arr) {
//   console.log(Number(arr[0]));
//   console.log(isNaN(arr[0]));
// }

// const result = parseString("21", "24", "40");
// console.log(result);

/* function parseString(...arr) {
  const isString = arr.every((element) => {
    return isNaN(element);
  });

  if (isString) {
    let result = "";

    arr.forEach((item) => {
      result = result + item + " ";
    });

    return result.trim();
  } else {
    let result = 0;

    arr.forEach((item) => {
      result = result + Number(item);
    });

    return result;
  }
}

const result = parseString("hello", "khulna", "sss");
console.log(result); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
const res = fruits.fill("sumon");
console.log(res);
 */

// const arr = Array(100).fill(undefined);

// arr.forEach((ele, index) => {
//   console.log(index + 1);
// });
