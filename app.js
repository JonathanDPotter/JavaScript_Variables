console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1

// ￬￬￬although the instructions say to do this, it produces a syntax error￬￬￬
// const firstName;
let lastName;
var age;

// Exercise 2

// ￬￬￬this won't work if firstName is declared as a const￬￬￬
// firstName = "Jonathan";
const firstName = "Jonathan";
lastName = "Potter";
age = 46;

// Exercise 3

let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;

// Exercise 4

let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";

// Exercise 5

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let hasRead = true;

console.log({
  firstName,
  lastName,
  age,
  language,
  createdYear,
  isCaseSensitive,
  isOnSale,
  salePercentage,
  stock,
  inStock,
  selectedSize,
  title,
  author,
  pageCount,
  hasRead,
});
