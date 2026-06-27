// For Loops
for (let i = 1; i <= 10; i++) {
  console.log("We want cake!", i);
}

for (let x = 1; x <= 20; x += 2) {
  console.log("Dirty Biggs", x);
}

for (let num = 1; num <= 20; num++) {
  console.log(`${num}*${num} = ${num * num}`);
}

for (let countDown = 15; countDown >= 0; countDown -= 1) {
  console.log(countDown);
}

// arrays
const fruit = ["grape", "strawberry", "apple", "watermelon", "orange"];

for (let f = 0; f < fruit.length; f++) {
  console.log(f, fruit[f]);
}

const favMusic = [
  {
    artist: "Michael Jackson",
    music: "R & B",
  },
  {
    artist: "Prince",
    music: "Pop",
  },
  {
    artist: "Booty Collins",
    music: "Funk",
  },
  {
    artist: "Herbie Hancock",
    music: "Jazz",
  },
];

for (let m = 0; m < favMusic.length; m++) {
  let greatMusic = favMusic[m];
  console.log(greatMusic);
  console.log(`${greatMusic.artist} is one of the greatest ${greatMusic.music} artists of all time.`);
}

// string
const word = "Supergroovalisticprosifunkstication";

for (let w = word.length - 1; w >= 0; w--) {
  console.log(word[w]);
}

// Nested loop
/*
for (let b = 1; b <= 10; b++) {
  console.log("OUTER LOOP:", b);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("INNER LOOP", j);
  }
}
*/

// While Loop
let s = 0;
while (s <= 5) {
  console.log(s);
  s++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`YOU WIN!!`);

// Break
for (let m = 1; m <= 10; m++) {
  console.log(m);
  if (m === 8) {
    break;
  }
}

// For Of
let movieTypes = ["action", "horror", "science fiction", "romance"];
for (let sub of movieTypes) {
  console.log(sub);
}

for (let char of "na na na na hey hey goodbye") {
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
