console.log('*** bigint is a new primitive ***');
let x = 10;
let y = '10';
// x is a number, and y is a string (of course!)
console.log(typeof(x), typeof(y))
let z = 10n;
// z is a new kind of primitive: a bigint!
console.log(typeof(z))

console.log('*** numeric separator ***');
console.log(3000) // 3000
console.log(3_000) // number is the same as above, but much more readable inside your code!
console.log(3_000_000) // very useful when you have to read big numbers
console.log(3_000 === 3000) // true

console.log('*** JS problems with decimals (not strictly JS related...) ***');
let result = 0.1 + 0.2;
console.log(result ===  0.3) // false!!! Why?
console.log(result); // 0.30000000004 Because adding decimals sometimes can cause this kind of issue
console.log(result.toPrecision(3)); // 0.300000

let a = 1234567890123456; // ok
let b = 123456789012345678; // number is too big: JS cannot handle it correctly (see logs in the console)
let c = 123456789012345678n; // with bigint, everything's fine!
console.log(a,b,c)

console.log('*** BONUS: negative zero! ***');
console.log(3 * 0)
console.log(-3 * 0) // yes, we even have -0 as a value!
console.log(-0 === 0) // don't worry, this returns true