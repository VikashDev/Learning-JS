'use strict';

let Birds = function(name, fly, height) {
    this.name = name,
    this.fly = fly,
    this.height = height
}

Birds.prototype.desc = function() {
    return this.name + this.fly + '& has ' + this.height;
}

let bat = new Birds('bat', 'can fly', 'small height');
let data = JSON.stringify(bat, undefined, 4);
console.log(data);

let duck = new Birds('duck', 'canot fly', 'small height');
console.log(duck.desc());



let arr = ['vikash', 'kumar', 25];

let profile = (x) => {
    return arr[0] + ' ' + arr[1] + ' ' + arr[2];
}

let nums = [1, 2, 3, 4];



let sum = (a, b, c,d) => {
    return a + b + c + d;
}
console.log(sum.apply(this, nums));
console.log(sum(...nums));
console.log(profile(arr));