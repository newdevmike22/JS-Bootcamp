console.log("Hello World!");

//Math Quiz
console.log(1.5 + 1.5 * 2); //4.5
console.log((10 % 6) ** 2); //16
console.log(200 + 0 / 0); //NaN

//Variables - let **let allows you to change the value of the variable**
let someName = "Billy Butcher";
console.log(someName);

someName = "Homelander";
console.log(someName);
console.log(`${someName} is the main villain in the Boys.`);

let apples = 36;
let oranges = 44;
console.log(apples + oranges);
console.log(`${someName} ate ${apples - 16} apples and ${oranges - 24} oranges before he finally left.`);

apples = apples - 5;
console.log(`${someName} ate ${apples - 16} apples and ${oranges - 24} oranges before he finally left.`);

//Unary Operator
oranges += 2;
console.log(`${someName} ate ${apples - 16} apples and ${oranges - 24} oranges before he finally left.`);

someName = "Love Sausage";
console.log(`${someName} is so greedy. He ate ${apples - 16} apples and ${oranges - 24} oranges.`);

counter = 10;
counter++;
console.log(counter);

//Variables - const **const does not allow you to change the value of the variable**
const monthsInYear = 12;
console.log(`There are ${monthsInYear} months in a year.`);

const augustDays = 31;
console.log(`August always has ${augustDays} days.`);

//Variables Quiz
let eggCount = 48;
eggCount = eggCount / 12;
console.log(`I have ${eggCount} dozen eggs to sell.`); // answer = 4

const rating = 8;
//rating = 10;
console.log(rating); // answer = error. rating is a const and its value can't be changed.

let windSpeed = 80;
windSpeed += 5;
windSpeed--;
console.log(windSpeed); // answer = 84
