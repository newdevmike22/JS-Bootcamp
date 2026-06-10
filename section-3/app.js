// Comparisons
console.log(-2 > 5);

let scoreOne = 56;
let scoreTwo = 75;
console.log(scoreOne < scoreTwo);
console.log(75 >= scoreTwo);
console.log(scoreOne <= 12);

// If Statement
let Betty = 22;

if (Betty >= 21) {
  console.log("Betty is old enough to drink.");
}

let rating = 5;
if (rating === 5) {
  console.log("You are the highest rated all star!");
}

let oldEnough = 35;
if (Betty >= oldEnough) {
  console.log("Betty is full grown and sexy!");
} else if (Betty < oldEnough) {
  console.log("Sorry Betty. You are sexy but not old enough.");
}

if (oldEnough >= 35) {
  console.log("You can go on the gambling trip!");
} else if (oldEnough < 34) {
  console.log("Sorry but you can't come with us.");
}

let weatherOne = 50;
let weatherTwo = 70;

if (weatherOne >= 55) {
  console.log("We will have the party inside.");
} else if (weatherTwo >= 75) {
  console.log("We will have the party in the backyard.");
} else {
  console.log("We will have the party at the beach.");
}

let highScore = 4750;
let userScore = 4800;

if (userScore >= highScore) {
  console.log(`Congratulations! Your score of ${userScore} is now the highest of all time!`);
} else {
  console.log(`Sorry but your score of ${userScore} fell short of the record score of ${highScore}. `);
}

// Logical Operators

// When Using && both sides must be true to be true.

let members = 20;
if (members >= 20 && 10 + 10 === 20) {
  console.log(`Our group has ${members} members.`);
} else {
  console.log("I don't know how many members our group has.");
}

let passWord = "loslobos2026";
if (passWord.length <= 13 && passWord.length >= 8) {
  console.log("Your password is valid.");
} else {
  console.log("Your password is invalid. It must contain at least 8 characters.");
}

// When Using || if one side is true then everything is true.
console.log(2 === "2" || 2 + 2 === 4);

yourAge = 35;
if (yourAge < 10 || yourAge >= 55) {
  console.log("YOUR MEAL IS FREE!");
} else {
  console.log("YOU MUST PAY.");
}

let cookies = "oreo";

if (cookies === "chocolate chip" || cookies === "oreo" || cookies === "oatmeal") {
  console.log(`I just love ${cookies.toUpperCase()} cookies!`);
}

// ! returns true if the expression is false.
console.log(!(4 >= 7));
console.log(!(17 === 17));

let loggedInUser = "";
if (!loggedInUser) {
  console.log("HIT THE ROAD JACK!!");
}

let flavor = "grape";
if (flavor !== "rootbeer" && flavor !== "orange") {
  console.log(`Sorry but we are out of ${flavor}.`);
}

// In operator precedence && is above ||
console.log(7 + 3 === 10 || (6 > 11 && 12 > 10));

team = "Cardinals";
console.log(team.length === 9 || (10 > 16 && team.length >= 9));

// Switch Statement
let day = 3;

switch (day) {
  case 1:
    console.log("SUNDAY");
    break;
  case 2:
    console.log("MONDAY");
    break;
  case 3:
    console.log("TUESDAY");
    break;
  case 4:
    console.log("WEDNESDAY");
    break;
  case 5:
    console.log("THURSDAY");
    break;
  case 6:
    console.log("FRIDAY");
    break;
  case 7:
    console.log("SATURDAY");
    break;
  default:
    console.log("That day does not exist!");
}

// Ternary Operator
let num = 50;
num === 49 ? console.log(`I am ${num} years old`) : console.log(`I'm almost ${num}.`);

let status = "online";
let color = status === "offline" ? "red" : "green";
console.log(color);
