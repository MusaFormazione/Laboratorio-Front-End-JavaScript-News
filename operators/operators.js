console.log('*** nullish coalescing ***')
let userName = null;
let text = 'Missing name!';
// nullish coalescing: if null or undefined, then assign the second value
let userDetails = userName ?? text;
console.log(userDetails);

// nullish is different from falsy
console.log('*** nullish vs falsy ***');
// falsy values are: false, empty string, 0, NaN, null, undefined
// Using || you check for all falsy values
// Using ?? you check for null or undefined values
userItems = 0;
console.log(userItems || 'No items selectd'); // sometimes you just want to check all falsy values
console.log(userItems ?? 'No items selectd'); // sometimes you may want a falsy value to pass, but not if null or undefined!

console.log('*** optional chaining ***')
// optional chaining ?.
let car = {
  type: 'Fiat',
  model: 'Panda',
  color: 'red',
  // owner: {
  //   name: 'Davide'
  // }
}
// with optional chaining we check if a value exists before accessing its properties.
// this avoids throwing errors and returns undefined (or the actual value, if it exists)
console.log(car.owner?.name)  
// Try to uncomment the line below to see the behavior without the chaining operator
//console.log(car.owner.name)  // car.owner is a property that does not exist, so it is considered undefined: we try to access undefined.name and get a TypeError!

console.log('*** logical and assignment ***');
// if truthy, assign new value
let existingUser = true;
existingUser &&= 'Hi user!';
// we can obtain the same logic with an if statement, but the operator syntax is shorter
// if(existingUser) {
//   existingUser = 'Hi user!'
// }
console.log(existingUser);

console.log('*** logical or assignment ***');
// if falsy, assign new value
existingUser = 0;
existingUser ||= 'No User!';
// we can obtain the same logic with an if statement, but the operator syntax is shorter
// if(!existingUser) {
//   existingUser = 'No user!'
// }
console.log(existingUser);

console.log('*** logical nullish assignment ***');
// if nullish, assign new value
existingUser = null;
existingUser ||= 'Hi User!';
console.log(existingUser);