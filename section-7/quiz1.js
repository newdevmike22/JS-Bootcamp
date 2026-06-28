// basic functions
function thingsILove() {
  (console.log("I love chocolate!"), console.log("I love reading!"), console.log("I love music!"), console.log("I love football!"));
}
thingsILove();

function nurseryRhyme() {
  console.log("Tell Tale Tit, Your tongue shall be slit; And all the dogs in the town Shall have a little bit.");
}
nurseryRhyme();

function determination() {
  console.log("I will never give up!");
}

// for loop
for (let i = 0; i <= 5; i++) {
  determination();
}

// Using two functions together
function luckyNumber() {
  let spin = Math.floor(Math.random() * 26);
  console.log(`You spun a ${spin}.`);
}

luckyNumber();

function spinTheWheel() {
  luckyNumber();
}

spinTheWheel();

// functions with arguements
function favPerson(wife) {
  console.log(`My wife ${wife} is my most favorite person in the world!`);
}
favPerson("Charmaine");

function addiction(firstName, lastName, problem, amountOne, amountTwo) {
  console.log(`${firstName} ${lastName} has a ${problem} problem. He has already lost $${amountOne + amountTwo} this week alone.`);
}
addiction("Fred", "Stark", "gambling", 1500, 600);

// Return Statements
function multiply(a, b) {
  return a * b;
}

const total = multiply(50, 2);
console.log(`Karen aced her history test with a score of ${total}%.`);

function father(x) {
  return x;
}

const bestDad = father("Roy Doyle and Pastor Arthur Roy Johnson");
console.log(`${bestDad} were two amazing dads!`);
