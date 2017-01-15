'use strict';

//  create a normal function in JS

const res = add(2, 4);
console.log(res);

// difference between var and let
let person = 'Vikash Kumar';

{
    let person = 'Ashok';
    console.log(person);

}

console.log(person);


function add (a, b) {
    return a+ b;
}
