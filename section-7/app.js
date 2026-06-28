// First Functions
function complainer() {
  (console.log("It's too hot!"), console.log("It's too loud!"), console.log("Nobody ever listens to me!"));
}
complainer();

function tongueTwister() {
  console.log("How much wood could a woodchuck chuck if a woodchuck could chuck wood?");
}
tongueTwister();

for (let i = 0; i <= 3; i++) {
  tongueTwister();
}

function diceRoll() {
  let roll = Math.floor(Math.random() * 7);
  console.log(`You rolled a ${roll}.`);
}

diceRoll();

function throwDice() {
  diceRoll();
}

throwDice();

// Arguements
function girlfriend(name) {
  console.log(`I am in love with ${name}`);
}
girlfriend("Betty.");

function madScientist(character) {
  console.log(`My name is ${character}. I've come to funk with you.`);
}
madScientist("Dr. Funkenstein");

// Multi Arguements
function popStar(firstName, lastName) {
  console.log(`${firstName} ${lastName} was the king of pop music!`);
}
popStar("Michael", "Jackson");

function amount(x, y) {
  console.log(`${x * y}`);
}
amount(4, 12);

// Return Statement
function multiply(a, b) {
  return a * b;
}

const total = multiply(8, 9);
console.log(`Chuck barely passed his algebra test with a score of ${total}.`);


