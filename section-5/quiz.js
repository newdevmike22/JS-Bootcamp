// Create an object with nesting
const superHero = {
  name: "Spider-Man",
  secretIdentity: "Peter Parker",
  powers: ["Super Strength", "Agility", "Speed", "Spider Sense", "Sticking Ability"],
  hometown: "New York City",
  memberships: "Avengers",
  costumeColors: {
    red: "#eb4d4b",
    blue: "#180794",
  },
};

console.log(`${superHero.secretIdentity}, the Spectacular ${superHero.name}.`);
console.log(`${superHero.name} has ${superHero.powers[0]}, ${superHero.powers[2]}, ${superHero.powers[1]}, and ${superHero.powers[3]}.`);
console.log(`${superHero.name} is a member of the ${superHero.memberships} and a native of ${superHero.hometown}.`);
console.log(`${superHero.name}'s costume colors are ${superHero.costumeColors.red} and ${superHero.costumeColors.blue}.`);

// Combine parts from 2 objects
const newYork = {
  food: "NY style pizza",
  building: "Empire State Building",
  place: "Central Park",
  villain: "Green Goblin",
};

console.log(`${superHero.name} fought the ${newYork.villain} atop the ${newYork.building}.`);
console.log(`After beating the ${newYork.villain}, ${superHero.secretIdentity} ate a ${newYork.food} while relaxing in ${newYork.place}.`);
