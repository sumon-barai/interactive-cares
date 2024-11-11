console.log("1");
console.log("2");

try {
  const val = 50;
  throw new Error("this my custom error");
} catch (error) {
  console.dir(typeof error);
}

console.log("3");
console.log("4");

// throw new Error("this my custom error");
