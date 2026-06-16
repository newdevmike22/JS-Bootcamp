// Create an array full of New York City sports teams.
let newYorkTeams = ["Yankees", "Mets", "Giants", "Jets", "Knicks", "Nets", "Liberty"];
console.log(newYorkTeams);

// Check the length of the array.
console.log(newYorkTeams.length); //7

// Use the array's index of 0 and 4 in a sentence.
console.log(`Curt has been a huge ${newYorkTeams[0]} and ${newYorkTeams[4]} fan most of his life.`);

// Use pop to delete an item from the end of the array.
newYorkTeams.pop();
console.log(newYorkTeams);

// Use push to add an item to the end of the array.
newYorkTeams.push("Rangers");
console.log(newYorkTeams);

// Use unshift to add an item to the front of the array.
newYorkTeams.unshift("Islanders");
newYorkTeams.unshift("Liberty");
console.log(newYorkTeams);

// Use shift to remove an item from the front of the array.
newYorkTeams.shift();
console.log(newYorkTeams);

// Create 3 variables and use concat to combine them.
let numsOne = [11, 75, 45, 100];
let numsTwo = [88, 17, 81, 120];
let letters = ["v", "w", "x", "y", "z"];
console.log(numsOne.concat(numsTwo, letters));

// Use an array in an if statement
if (numsOne[3] > numsTwo[1]) {
  console.log(`${numsOne[3]} is greater than ${numsTwo[1]}.`);
} else {
  console.log(`${numsOne[3]} is not greater than ${numsTwo[1]}.`);
}

// Use the newYorkTeams array in a Switch Statement.
let team = 3;

switch (team) {
  case 1:
    console.log(`Tonight we are going to a ${newYorkTeams[0]} game.`);
    break;
  case 2:
    console.log(`Tonight we are going to a ${newYorkTeams[1]} game.`);
    break;
  case 3:
    console.log(`Tonight we are going to a ${newYorkTeams[2]} game.`);
    break;
  case 4:
    console.log(`Tonight we are going to a ${newYorkTeams[3]} game.`);
    break;
  default:
    console.log("Team does not exist");
}

// Replace of value of an index inside the array
let bigCity = ["New York", "Paris", "London", "Chicago"];
bigCity[1] = "Los Angeles";
console.log(bigCity);
console.log(`Curtis have you ever been to ${bigCity[1]} or even ${bigCity[3]}?`);
