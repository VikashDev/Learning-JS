'use strict';

//  create a normal function in JS
function add (a, b) {
    return a+ b;
}

const res = add(2, 4);
console.log(res);

// difference between var and let
let person = 'Vikash Kumar';

{
    let person = 'Ashok';
    console.log(person);

}

console.log(person);
