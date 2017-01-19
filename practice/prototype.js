'use strict';

function Person(name, age, gender) {
    this.name = name,
    this.age = age,
    this.gender = gender

   // this.cal = function() {
     //   return 'My name is ' + this.name;
   // }
}

  Person.prototype.call = function() {
    return this.name + " " + this.gender;
};

let mySelf = new Person('vikash', 24, 'm');
let mySelf2 = new Person('v', 25, 'm');

mySelf2.call();

console.log(mySelf);
console.log(mySelf2.name);
console.log(mySelf2.call());