// inside a module, you can use await without wrapping it inside an async function
let response = await fetch('https://fakestoreapi.com/products');
let products = await response.json();

export {products}