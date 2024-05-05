// index.js - lab 8 anon functions and callbacks
// Author: Caroline Bowen
// Date: 3 May 2024

function isPrime(x) {
    return (x % 2 == 0);
}

//test function 
console.log("Is 1 prime?", isPrime(1));
console.log("Is 2 prime?",isPrime(2));
console.log("Is 7 prime?", isPrime(7));

array = [1,2,3,4,5,6,7,8,9,10]
console.log("My array", array);

function isPrime(x) {
    return (x % 2 == 0);
}
var mapResults = array.map(isPrime)
//should return [false, true, false, true, false, true, false, true, false, true]
console.log("Test of primeness of array:", mapResults); 


var result = array.map(function(x){
    return x ** 0.5;
})
//should return [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903, 3, 3.1622776601683795]
console.log("Squareroot of array:", result);





