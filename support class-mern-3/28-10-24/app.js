/* let text1 = "sea";
let text2 = "food";
let text3 = "foodsssssssssssssssssssssss";
let result = text1.concat(text2, text3);

console.dir(); */

/* let message = "Hello World!";
let text = message.constructor;

console.log(text);
 */

/* let text = "Hello world, welcome to the universe.";
let result = text.includes(sumon());

console.log(result);

function sumon() {
  return "world";
}
 */

/* function demo(para1, para2) {
  if (typeof para1 === "undefined") {
    para1 = "sumon";
  }

  if (typeof para2 === "undefined") {
    para2 = "barai";
  }

  return para1 + " " + para2;
}

// const a = demo("sumon", "barai");
const a = demo();
console.log(a); */
/* 
function demo(para1 = "sumon", para2 = "barai") {
  return para1 + " " + para2;
}

// const a = demo("sumon", "barai");
const a = demo("sss", "ss");
console.log(a);

 */

let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome", 20);

console.log(result);
