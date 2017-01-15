// in js, functions are first class objects which means we can assign a function to a variable

let sum = function (a,b) {return a+b}
console.log(sum(10, 20));
//console.log(add(10, 20)); there is no need of giving a name to a function when you are assigning it to a variiable

/**
 * You cannot call a FE before definig it.
 * You first have to define a FE to call it
 *  */

let square = (a) => a * a;  // ES6 arrow function

console.log(square(10));