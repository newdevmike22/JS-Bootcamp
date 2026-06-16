// Create an array and use icludes to check it to see if it contains a certain item
const boxingLegends = ["Ali", "Louis", "Tyson", "Frazier", "Foreman"];
console.log(boxingLegends.includes("Tyson"));
console.log(boxingLegends.includes("Holyfield"));
console.log(boxingLegends.includes("Foreman"));

// Use indexOf to find the index of an existing item in the array
console.log(boxingLegends.indexOf("Louis"));
console.log(boxingLegends.indexOf("Frazier"));

boxingLegends.push("Rocky", "Leonard");
console.log(boxingLegends.indexOf("Leonard"));

boxingLegends.unshift("Robinson");
console.log(boxingLegends.indexOf("Ali"));

// Create an array of letters and reverse their order
const letters = ["O", "B", "M", "U", "D"];
console.log(`That Fred is such a ${letters.reverse()}.`);

// Create an array and use join
const elements = ["Earth", "Wind", "Fire", "Water"];
console.log(elements.join());

// Create an array and use reverse and join
const initials = ["K", "O", "D", "O", "M"];
console.log(`${initials.reverse().join(".")}. Mechanized Organism Designed Only for Killing.`);
