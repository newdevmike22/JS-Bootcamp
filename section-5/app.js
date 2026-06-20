// Objects are a collection of properties.
const person = {
  firstName: "Rod",
  lastName: "Munch",
  age: 26,
  job: "Graphic Designer",
  location: "Sweetwater, Texas",
};

console.log(`${person.firstName} ${person.lastName} is one cool ${person.job}.`);

// Modify the object
person.firstName = "Dirk";
person.job = "Bio Chemist";
console.log(`${person.firstName} ${person.lastName} is one cool ${person.job}.`);

// Adding a new property
person.eyeColor = "hazel brown";
console.log(`${person.firstName} has ${person.eyeColor} eyes.`);

// Using brackets
const palette = {
  red: "#eb4d4b",
  yellow: "#fcba03",
  blue: "#180794",
  green: "#026312",
  purple: "#7703a8",
};

console.log(palette["blue"]);

let secretColor = "green";
console.log(palette[secretColor]);

// Nested arrays and objects
const student = {
  firstName: "Rose",
  lastName: "Redwine",
  strengths: ["Singing", "Acting"],
  exams: {
    midterm: 96,
    final: 98,
  },
};

console.log(`${student.firstName} is a talented student who excells in ${student.strengths[0]}.`);
console.log(`Miss ${student.lastName} is also very talented at ${student.strengths[1]}.`);
console.log(`${student.firstName} is such a great student that she got an average score of ${(student.exams.midterm + student.exams.final) / 2} on all her exams.`);

const foodCart = [
  {
    item: "Fruity Pebbles",
    price: 4.99,
    quantity: 1,
  },
  {
    item: "DiGiorno Pizza",
    price: 9.99,
    quantity: 1,
  },
  {
    item: "Oreos",
    price: 3.99,
    quantity: 2,
  },
];

console.log(foodCart);

// Array/Object Equality
const digits = [1, 3, 5];
const moreDigits = digits;
console.log(moreDigits === digits);
