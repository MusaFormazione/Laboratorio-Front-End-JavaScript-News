console.log('*** replaceAll');
let text = 'This is Davide. Davide is a programmer.'
// Returns a new string replacing first occurence of a specified value
text2 = text.replace('Davide', 'Alice');
// Is case sensitive
// text2 = text.replace('davide', 'Alice'); // davide is not found!
console.log(text2);
// Need to replace every occurence?
// Use replaceAll!
text3 = text.replaceAll('Davide', 'Charlie');
console.log(text3);


console.log('*** matchAll');
// returns a single value
console.log(text.match('Davide'))
// returns all valuesf
let matchResult = text.matchAll('Davide');
console.log(matchResult) // returns an iterator
// let's check inside the iterator!
for (let match of text.matchAll('Davide')) {
  console.log(match)
}
console.log('finished search for matches')