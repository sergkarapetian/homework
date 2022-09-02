class Human {
    constructor(name) {
        this._name = name
    }
    sayName() {
        console.log(this._name)
    }
};

class Developer extends Human {
    constructor(name, age) {
       super(name)
        this._age = age;
    }
    writing() {
        return("and he is hungry")
    }
    getInfo() {
        return `${this._name} is ${this._age} old ${this.writing()}`
    }
}

let dev = new Developer("John", 25)
console.log(dev.getInfo())