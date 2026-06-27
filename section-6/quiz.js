// for loop
for (let i = 0; i <= 5; i++) {
  console.log("We want food!", i);
}

for (let theCountdown = 10; theCountdown >= 0; theCountdown -= 1) {
  console.log(theCountdown);
}

// for loop and an array
const burgerPlaces = ["Wendy's", "Burger King", "McDonald's", "Rally's", "Sonic"];

for (let x = 0; x < burgerPlaces.length; x++) {
  console.log(x, burgerPlaces[x]);
}

// for loop and a string
const funkSong = "Supergroovalisticprosifunkstication";

for (let song = funkSong.length - 1; song >= 0; song--) {
  console.log(funkSong[song]);
}

// while loop
let num = 0;
while (num <= 15) {
  console.log(num);
  num++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("YOU WIN!!");

// For Of
let chickenRestaurants = ["Popeye's", "KFC", "Church's", "Chick-fil-A"];
for (let food of chickenRestaurants) {
  console.log(food);
}

for (let char of "Hip hop hooray Ho, hey, ho") {
  console.log(char.toUpperCase());
}

// For In
const gameScores = {
  sidVicious: 45627,
  maryMary: 44106,
  larryLuv: 43896,
  poopDeckPapy: 43657,
  mistyCarter: 42899,
};

for (let prop in gameScores) {
  console.log(prop);
  console.log(gameScores[prop]);
}
