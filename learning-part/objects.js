// creating objects in JS

// Method 1
var profile = new Object();
profile.name = "vikash";
profile.age = 1;
profile.location = 'Noida';


function information() {
	console.log("name of player is " + this.name + "& its rank is " + this.rank);
}

// Attaching function in object
profile.info = information;

// Call object function
profile.info();


//Method 2
// Second way is to use Object Literal Syntax

let vikash = {
    name : 'Vikash Kumar',
    age : 23,
    location : 'Noida'
}

// console.log(vikash);

vikash.hobby = ['coding', 'cooking', 'movies', 'music'];

// console.log(vikash);

vikash.address = {
    houseNumber: '30/10',
    locality: 'DDA Flats',
    street : '13, xyz',
    city : 'noida',
    state : 'UP',
    country : 'IN'
}

let data = JSON.stringify(vikash, undefined, 2);
//console.log(data);

// log the following properties in the console
// name, 2 hobby
// state and country

console.log(vikash.name);
console.log(vikash.hobby[1]);
console.log(vikash.address.city);

// using function conbstructor to resuce coding
// Person is a function constructor
var Person = function (name, age, city, job) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.job = job;
    this.getName = function() {
        return this.name;
    }
}

Person.prototype.setName = function (name) {
        this.name = name;
    }

let harry = new Person ('Harry Baweja', 25, 'Noida', 'Developer');

console.log(harry);

harry.setName('Garry');
console.log(harry);

console.log(harry.getName());


