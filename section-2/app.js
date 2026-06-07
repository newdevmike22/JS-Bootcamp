// Booleans

let isMarried = true;
let isOverSixty = false;
console.log(isMarried, isOverSixty);

let evilFoe = "Unicron";
let title = "The Monster Planet";
console.log(`${evilFoe} told Megatron, "You belong to me now".`);
console.log(`${evilFoe} ${title} devourers all in his path.`);

let firstName = "Optimus";
let lastName = "Prime";
let autobotLeader = `${firstName} ${lastName}`;
console.log(autobotLeader);

// typeof
console.log(typeof firstName);

// .length
console.log(firstName.length);
console.log(lastName.length);

// index
let person = "Bootzilla";
console.log(person[4]);

// toUpperCase
let msg = "make my funk the p-funk!";
console.log(msg.toUpperCase());

// toLowerCase
let tongueTied = "Who sews Sue's socks? Sue sows Sue's socks.";
console.log(tongueTied.toLowerCase());

// trim
let place = "  Saint Louis, Missouri  ";
console.log(place.trim());
console.log(place.trim().toUpperCase());

// indexOf
let tvShow = "Stranger Things";
console.log(tvShow.indexOf("Things"));
console.log(tvShow.indexOf("a"));

// slice
console.log(tvShow.slice(6));

let song = "Supergroovalisticprosifunkstication";
console.log(song.slice(0, 17));
console.log(song.slice(5, 15));

// replace
let woman = "Samantha is the queen baby!";
console.log(woman.replace("Samantha", "Roxanne"));

// Strings Quiz

// What is the value of age?
let age = "5" + "4";
console.log(age); // answer 54. age is a string

// What does this evaluate to?
let pie = "pecan pie";
console.log(pie[7]); // answer i

// What does this evaluate to?
let pet = "pup";
console.log(pet[3]); // answer is undefined. No index of 3.

// Change to uppercase
let music = "Symphony No. 5";
console.log(music.toUpperCase());

// What is the value of cleanedInput?
let userInput = " BIGMIKE@gmail.com ";
let cleanedInput = userInput;
console.log(cleanedInput.trim().toLowerCase()); // answer = bigmike@gmail.com

// What is the index value?
let park = "Towergrove";
const index = park;
console.log(park.indexOf("Grove")); // answer = -1. Capital G is not apart of the value.

// What is the index value?
let yell = "Get the f#%k outta here!!";
const indexTwo = yell;
console.log(indexTwo.indexOf("!")); // answer 23

// What is the final value?
let trash = "GARBAGE";
console.log(trash.slice(2).replace("B", "")); // answer RAGE

// String Template Literals
console.log(`Marvin got knocked out in the ${3 + 2}th round.`);

let games = 18;
let touchdowns = 2;
console.log(`Drew Wilson threw ${games * touchdowns} touchdowns this season.`);

let animal = "cat";
let sound = "uh like meow man";
console.log(`Rufas the cool ${animal} said "${sound}".`);

let character = "Jerry Maguire";
let shout = "show me the money!";
console.log(`${character} screamed "${shout.toUpperCase()}"`);

// Math
console.log(Math.floor(6.975));
console.log(Math.round(9.75));
console.log(Math.pow(5, 3));
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));

// parseInt & parseFloat
console.log(parseInt("27.6"));
console.log(parseInt("15") + 6);
console.log(parseFloat("29.78"));
