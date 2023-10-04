let user = 'Davide';
let otherUser = user;

// Primitive values are copied by value
// if we change the user, otherUser stays the same, as expected
user = 'Anna';
console.log('*** assign by value');
console.log(user);
console.log(otherUser);


let fruit = ['apple', 'banana', 'peach'];
let otherFruit = fruit;

// when dealing with arrays, we pass values by reference
// we don't copy the actual values, we share their address in memory

// this means that we are modifying the same array!
fruit[1] = 'pear';
otherFruit[0] = 'lemon';

console.log('*** assign by reference');
// both variables refer to the same array
console.log(fruit);
console.log(otherFruit);
