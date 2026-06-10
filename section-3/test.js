// Create an example of an if Statement
let favDish = "pizza";
if (favDish === "pizza") {
  console.log(`My favorite dish is ${favDish.toUpperCase()} with lots of cheese.`);
}

// Create an example of an if Statement with an else if
let distance = 600;
let cityName = "Chicago";
if (distance <= 550) {
  console.log(`We are driving to ${cityName}.`);
} else if (distance >= 550) {
  console.log(`We are flying to ${cityName}.`);
}

// Create an example of an if Statement with an else
let weather = "sunny";
let temperature = 75;
if (weather === "rainy") {
  console.log("We will have the party inside.");
} else {
  console.log(`It is a ${weather} day and ${temperature} degrees. We will have the party outside.`);
}

// Create an example using the && Logical Operator
let fruit = "apples";
let color = "red";
if (fruit === "apples" && color === "red") {
  console.log(`I love eating ${color} ${fruit}.`);
} else {
  console.log(`I prefer green ${fruit} instead of ${color} ones.`);
}

// Create an example using the || Logical Operator
fruit = "watermelons";
color = "green";
if (fruit === "apples" || color === "red") {
  console.log("I love fruit!");
} else {
  console.log(`I love ripe ${color} ${fruit}.`);
}

// Create an example using the ! Logical Operator
let stateCapital = "";
if (!stateCapital) {
  console.log(`Jefferson City is the capital of Missouri.`);
}

let month = 4;

switch (month) {
  case 1:
    console.log("We are in January.");
    break;
  case 2:
    console.log("We are in February.");
    break;
  case 3:
    console.log("We are in March.");
    break;
  case 4:
    console.log("We are in April.");
    break;
  case 5:
    console.log("We are in May.");
    break;
  case 6:
    console.log("We are in June.");
    break;
  case 7:
    console.log("We are in July.");
    break;
  case 8:
    console.log("We are in August.");
    break;
  case 9:
    console.log("We are in September.");
    break;
  case 10:
    console.log("We are in October.");
    break;
  case 11:
    console.log("We are in November.");
    break;
  case 12:
    console.log("We are in December.");
    break;
  default:
    console.log("That month does not exist");
}
