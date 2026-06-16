// Create different variables with a string, number, and boolean values
let name = "Alice";
console.log(`${name} is a highly educated woman who speaks 3 different languages.`);

let currentYear = 2026;
const yearOfBirth = 1968;
let age = currentYear - yearOfBirth;
console.log(`My friend ${name} just turned ${age} today.`);

let personAge = currentYear - 1966;
console.log(personAge > age);

// Create an if statement
let finalScore = 106;
let prize = "ice cream";
if (finalScore >= 100) {
  console.log(`The Lions scored ${finalScore} points! I get a free ${prize} cone!`);
}

// Use &&
let touchdowns = 2;
let touchdownPasses = 4;
const playerOne = "Otis Anderson";
const playerTwo = "Neil Lomax";
if (touchdowns >= 2 && touchdownPasses >= 4) {
  console.log(`${playerOne} scored ${touchdowns} touchdowns and ${playerTwo} threw ${touchdownPasses} touchdowns today.`);
}

// Use ||
const studentName = "Gloria";
let subjectOne = "Algebra";
let subjectTwo = "Spanish";
let testScoreOne = 92;
let testScoreTwo = 85;
if (testScoreOne >= 90 || testScoreTwo >= 90) {
  console.log(`${studentName} passed ${subjectOne} and ${subjectTwo} so we are going out for pizza!`);
} else {
  console.log(`${studentName} needs to stay home and study more.`);
}

let congratulations = "great work";
testScoreTwo = 100;
console.log(`${studentName} scored ${testScoreOne} in ${subjectOne} and ${testScoreTwo} in ${subjectTwo}. ${congratulations.toUpperCase()}!`);

// Find the length of this
const tongueTwister = "The rain in Spain stays mainly in the plain";
console.log(tongueTwister.length);

// Find the typeof
let amount = 50;
console.log(typeof amount);

// Replace the name in this sentence with another
let rapper = "Rock the house LL Cool J!";
console.log(rapper.replace("LL Cool J", "Run DMC"));

// Use Math.floor and Math.random to get a number between 0 and 25
console.log(Math.floor(Math.random() * 26));

// Create a switch statement featuring 7 foods.
let dinner = 4;

switch (dinner) {
  case 1:
    console.log("We are having pizza for dinner.");
    break;
  case 2:
    console.log("We are having pasta for dinner.");
    break;
  case 3:
    console.log("We are having fried chicken for dinner.");
    break;
  case 4:
    console.log("We are having hamburgers for dinner.");
    break;
  case 5:
    console.log("We are having steak for dinner.");
    break;
  case 6:
    console.log("We are having nachos for dinner.");
    break;
  case 7:
    console.log("We are having pork chops for dinner.");
    break;
  default:
    console.log("That is not on the dinner menu.");
}

// Use slicc()
let cartoonHero = "Mighty Mouse";
console.log(cartoonHero.slice(0, 6));

// Get the index of r from this variable
const userName = "Master Mold";
console.log(userName.indexOf("r")); //5

//  Get the character at index 7
console.log(userName[7]); //M

// Turn to lowerCase()
let giant = "I AM SO HUGE!!";
console.log(giant.toLowerCase());
