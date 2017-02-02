class Bird {
    constructor (name, height) {
        this.name = name;
        this.height = height;
    }

    fly() {
        console.log('I can fly');
    }

    toString() {
        return 'I am a Bird';
    }
}

let myBird = new Bird('myBird', 'small');

myBird.fly();

console.log(myBird.toString());

console.log(x);


