// function scope
function greeting() {
  const msg = "We are partying on the Mothership!";
  console.log(msg);
}
greeting();

function place() {
  let city = "Miami";
  const placeOfBirth = "St. Louis, MO";
  console.log(`Have you ever been to ${city}?`);
  console.log(`I was born in ${placeOfBirth}.`);
}
place();

let animal = "lion";

function bigCat() {
  const animal = "tiger";
  console.log(`I saw the ${animal} at the zoo today.`);
}
bigCat();
console.log(`I saw the the ${animal} documentary on National Geographic.`);

// block scope
if (true) {
  const name = "Kevin Doyle";
  console.log(name);
}

// lexical scope
function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero}, please help me!`;
    console.log(cryForHelp);
  }
  inner();
}

outer();

function team() {
  let teamMember = "Thor";

  function member() {
    let teamName = `${teamMember} is a member of the Avengers.`;
    console.log(teamName);
  }
  member();
}
team();

// function expressions
const square = function (num) {
  return num * num;
};
console.log(square(9));

const add = function (x, y) {
  return x + y;
};
console.log(add(22, 18));
console.dir(add);

const sum = function divide(a, b) {
  return a / b;
};
console.log(sum(100, 5));

// higher order functions
function addition(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

const math = [addition, subtract, multiply, division];

for (let func of math) {
  let result = func(50, 5);
  console.log(result);
}

const action = {
  doSomething: add,
};
console.log(action);

// functions as arguments
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("Ha-ha-ha-HA-ha! Ha-ha-ha-HA-ha!");
}
callTwice(laugh);

function happy() {
  console.log("Happy, happy, joy, joy!");
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(happy, 5);

// callbacks
/*
setTimeout(function () {
  alert("COULD YOU PASS THE JELLY?");
}, 5000);
*/

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("I knew you'd me click loser!!");
});
