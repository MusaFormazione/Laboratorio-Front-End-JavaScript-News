let fruit = ['apple', 'peach', 'banana'];
// returns copy of modified array
let slicedFruit = fruit.slice(0,2); // apple, peach
console.log('original array not modified', fruit, slicedFruit) // ['apple', 'peach', 'banana'] (2) ['apple', 'peach']
// mutates original, returns removed element as string
let poppedFruit = fruit.pop(); // apple, peach and 'banana' popped as string
console.log('original array has been modified', fruit, poppedFruit); //  ['apple', 'peach'] 'banana'

console.log('*** reverse - toreversed ***');
let number = [12, 6, 9, 32, 0, 4];
console.log(number)
// flips the order of the array, mutating the original
let reversed = number.reverse();

console.log('original array has been modified',reversed, number) // MUTATION: original array is changed as well
// NEW METHOD: .toreversed() does not modify the original array!
let reversed2 = number.toReversed();

console.log('original array not modified',reversed, reversed2) // only copy is changed, original is untouched

// SORT VS TOSORTED
console.log('*** sort - tosorted ***');
fruit = ['apple', 'peach', 'banana', 'lemon'];
let fruit2 = fruit.sort(); // mutates original
console.log('original array has been modified',fruit, fruit2);
// let's try with new .toSorted() method! It does not modify the original array
fruit = ['apple', 'peach', 'banana', 'lemon'];
let fruit3 = fruit.toSorted();
console.log('original array not modified',fruit, fruit3) 

console.log('*** with ***');
fruit = ['apple', 'peach', 'banana', 'pear'];
// mutation
fruit[2] = 'mango';
// .with() returns a new array!
let replaced2 = fruit.with(1, 'lemon');
console.log('using .with() we create a new array, and the original is not modified', fruit, replaced2)

console.log('*** splice - toSpliced ***');
// with splice you can specify a few arguments (starting position, how many elements to be deleted, new values to be inserted)
// it returns the deleted elements and mutates the original array
let spliced = fruit.splice(0,1,'strawberry', 'apricot')
console.log('splice', fruit, spliced)
// .toSpliced() returns a new array, without mutating the original one
let spliced2 = fruit.toSpliced(0,1, 'blueberry', 'lemon');
console.log('toSpliced', fruit, spliced2)

console.log('*** findLast ***')
users = [
  {name: 'Davide', surname: 'Bonifacio'},
  {name: 'Anna', surname: 'Rossi'},
  {name: 'Andrea', surname: 'Verdi'},
  {name: 'Olivia', surname: 'Bonifacio'},
  {name: 'Anna', surname: 'Bianchi'},
  {name: 'Mark', surname: 'Rossi'}
];
// the .find() method returns the first occurrence
let selectedName = users.find(user => user.name === 'Anna'); // Anna Rossi
// the .findLast() method returns the first occurrence, but starting from the end of the array
let selectedName2 = users.findLast(user => user.name === 'Anna'); // Anna Bianchi
console.log(selectedName, selectedName2);

console.log('*** findLastIndex ***')
// the .find() method returns the index of the first occurrence
let selectedName3 = users.findIndex(user => user.name === 'Anna'); // 1
// the .findLast() method returns  the index of the first occurrence, but starting from the end of the array
let selectedName4 = users.findLastIndex(user => user.name === 'Anna'); // 4
console.log(selectedName3, selectedName4)