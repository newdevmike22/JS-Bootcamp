let nfcWestTeams = ["Seahawks", "Rams", "49ers", "Cardinals"];
console.log(`I want the ${nfcWestTeams[1]} to win the Super Bowl.`);
console.log(`The Seattle ${nfcWestTeams[0]} are the current Super Bowl champs.`);
console.log(nfcWestTeams.length);

let testScores = [65, 75, 92, 100];
let students = ["Marie", "Westly", "Fran", "George"];
console.log(`${students[1]} had the lowest test score at ${testScores[0]}.`);
console.log(`${students[2]} had the highest test score at ${testScores[3]}.`);
console.log(typeof testScores);

let shoppingList = ["bread", "yogart", "cheese", "chicken breasts", "whole milk", "orange juice"];
// Changing an array item
shoppingList[5] = "fruit juice";
console.log(`Please don't forget the ${shoppingList[5]} ${students[2]}.`);

// Adding an array item at the end.
shoppingList[6] = "cherry pop tarts";
console.log(shoppingList);

// Another way to add an array item at the end.
shoppingList[shoppingList.length] = "blueberry muffins";
console.log(shoppingList);

let bestCandy = ["Snickers", "Skittles", "M&M'S"];

// Push - add to the end
bestCandy.push("Milky Way");
console.log(`I just love those ${bestCandy[3]} bars.`);

bestCandy.push("Kit Kat");
console.log(`I could eat ${bestCandy[2]} and ${bestCandy[4]}s all day!`);
console.log(bestCandy.length);

// Pop - remove from the end
let greatestVillains = ["Darth Vader", "Doctor Doom", "The Terminator", "Thanos", "The Predator"];
console.log(greatestVillains);

greatestVillains.pop();
console.log(greatestVillains);

// Shift - remove from the start
greatestVillains.shift();
console.log(greatestVillains);

// Unshift - add to the start
greatestVillains.unshift("Darth Vader");
console.log(`${greatestVillains[0]} is perhaps the greatest sci-fi villain of all time.`);

// Concat
let lettersOne = ["a", "b", "c"];
let lettersTwo = ["d", "e", "f"];
let numbers = [1, 2, 3, 4, 5, 6];
console.log(lettersOne.concat(lettersTwo));
console.log(numbers.concat(lettersOne, lettersTwo));

// Includes checks to see if an array contains a certain item. is either true or false
let fruits = ["watermelon", "oranges", "grapes", "apples", "cherrys"];
console.log(fruits.includes("pears"));
console.log(fruits.includes("grapes"));

// indexOf will find the index of an existing item in an array
console.log(fruits.indexOf("cherrys"));
console.log(fruits.indexOf("watermelon"));

// Reverse
let letters = ["t", "c", "e", "p", "s", "e", "r"]; //respect
console.log(letters.reverse());

// Join
let elements = ["Earth", "Wind", "Fire"];
console.log(elements.join());

let organization = ["A", "R", "D", "Y", "H"]; //hydra
console.log(organization.reverse().join("."));

// slice
let footballTeams = ["Rams", "Bears", "Cardinals", "Eagles", "Chargers", "49ers"];
let football = footballTeams.slice(0, 4);
console.log(football);

let animals = footballTeams.slice(1, 3);
console.log(animals);

// splice
let aunts = ["Alice", "May", "Barbara", "Helen", "Celeste", "Sarah"];
aunts.splice(2, 0, "Bebe");
console.log(aunts);

aunts.splice(5, 1);
console.log(aunts);

// sort
let women = ["Ret", "Glenny", "Christy", "Sabrina", "Athena"];
console.log(women.sort());

// const
const icecream = ["chocolate", "strawberry"];
icecream.push("rocky road", "butter peacan");
console.log(icecream);

icecream.push("cherry vanilla");
console.log(`I just love ${icecream[4]} ice cream with chocolate cake.`);

icecream.unshift("black walnut");
console.log(icecream);

// nested arrays
const comicTeams = [
  ["Moe", "Larry", "Curly"],
  ["Laurel", "Hardy"],
  ["Abbott", "Costello"],
  ["Cheech", "Chong"],
];

console.log(`Some of the best comedy teams had ${comicTeams[0][0]} Howard, Oliver ${comicTeams[1][1]}, Lou ${comicTeams[2][1]}, and Tommy ${comicTeams[3][1]}.`);
