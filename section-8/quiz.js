// function scope
function cheer() {
  const msg = "Let's go Tigers, let's go!!";
  console.log(msg);
}
cheer();

function career() {
  let job = "fullstack web developer";
  const placeOfJob = "St. Louis, MO";
  console.log(`I just took a new job as a ${job} in ${placeOfJob}.`);
}
career();

let food = "deep dish pizza";

function pizzaType() {
  const food = "thin crust pizza";
  console.log(`Today I tried ${food} from Imo's for the very first time.`);
}
pizzaType();
const restaurant = "Pizza Hut";
console.log(`The ${food} I had from ${restaurant} today was so amazing.`);

// lexical scope
function outer() {
  let darkVillain = "Darth Vader";
  let hero = "Luke Skywalker";

  function inner() {
    let powerBoast = `"${hero}, you are no match for dark side!", said ${darkVillain}.`;
    console.log(powerBoast);
  }
  inner();
}

outer();

function team() {
  let teamMember = "Wolverine";

  function member() {
    let teamName = `${teamMember} is a member of the X-Men.`;
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
console.log(add(68, 32));

const sum = function divide(a, b) {
  return a / b;
};
console.log(sum(2000, 50));

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
console.log(repeatNTimes(happy, 5));

// callbacks
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("Jetson, you're fired!!");
});
