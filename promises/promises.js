// let's start with a simple example: we need to access async data from another server
// we can create a function that returns a promise
function getProducts() {
 return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
}
function getCategories() {
  return fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
}

/* now we can call the function: the promise will be pending until it's resolved
when it fulfills, the logic inside the .then() method is executed, because we have access to the actual data returned by the promise */
getProducts().then(json=>console.log(json));
getCategories().then(json=>console.log(json));

/* A promise can settle in two ways: it resolves correctly (fulfills), or it throws an error (rejects)
That's why you have two parameters when you create a promise: they are two functions
The first one is executed when the promise is resolved correctly, the second one is used to reject the promise, throwing an error */
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // this promise fails after 1 second
    rej('oh no!!!')
    // if you want to have a resolved promise that fulfills, comment the line above and uncomment the line below
    // res('oh yes!!!')
  }, 1000);
})

const myPromise2 = new Promise((res, rej) => {
  setTimeout(() => {
    // this promise is fulfilled after 2 seconds
    res('OK!')
  }, 2000);
})



/* any(), race(), all(), allSettled() are methods to handle promise concurrency!
This means that we can execute an array of promises and get the values we actually need
*/

/*
If we need to get just one promise from the array, we can choose between any() and race()
any(): Do we need the first fulfilled promise? Use any(): it fulfills with first fulfillment value, rejects if all promises reject
race(): Do we need the first settled promise, even if it is rejected? Use race(): it settles with first settled promise (resolved or rejected, it doesn't matter)
*/
Promise
  .any([myPromise, myPromise2])
  .then(data=>console.log('*** any() ***',data))
  .catch(err => console.log('*** any() ***',err))
  
Promise
  .race([myPromise, myPromise2])
  .then(data=>console.log('*** race() ***',data))
  .catch(err => console.log('*** race() ***',err))

/*
  If we need to get multiple promises from the array, we can choose between all() and allSettled()
  all(): If all the promises must be successfull, use all(): it fulfills when all promises fulfill, and rejects when any promise rejects
  allSettled(): If we need to access all the promises, use allSettled(): it Fulfills when all promises settle (resolved or rejected)
*/
Promise
  .all([myPromise, myPromise2])
  .then(data=>console.log('*** all() ***',data))
  .catch(err => console.log('*** all() ***',err))

Promise
  .allSettled([myPromise, myPromise2])
  .then(data=>console.log('*** allSettled() ***',data))
  .catch(err => console.log('*** allSettled() ***',err))