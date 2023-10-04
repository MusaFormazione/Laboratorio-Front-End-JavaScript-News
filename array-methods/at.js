const fruit = ['Apple', 'Banana', 'Carrot'];
// Classic way of accessing values from the end of the array
let lastFruit = fruit[fruit.length -1]; // Carrot
let lastFruit2 = fruit[fruit.length -2]; // Banana
// New way using .at() with a negative value
let lastFruit3 = fruit.at(-1); // Carrot
let lastFruit4 = fruit.at(-2); // Banana
// You can always start from the beginning
let firstFruit = fruit.at(0); // Apple

console.log('*** values from array');
console.log(lastFruit)
console.log(lastFruit2)
console.log(lastFruit3)
console.log(lastFruit4)
console.log(firstFruit)

// Works with strings as well!
let fruitString = 'Apple';
let fruitLetter = fruitString[fruitString.length - 1]; // e
let fruitLetter2 = fruitString.at(-1); // e
console.log('*** values from string');
console.log(fruitLetter)
console.log(fruitLetter2)