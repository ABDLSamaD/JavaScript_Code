try {
  let age = prompt("Enter age: ");
  age = Number.parseInt(age);
  if (age > 100) {
    throw new ReferenceError("Please enter a valid number");
  }
  console.log(hey);
} catch (error) {
  console.log(error);
  //   console.error(error.message);
  //   console.log(error.name);
  // console.log(error.stack);
}
console.log("Script is still running");
