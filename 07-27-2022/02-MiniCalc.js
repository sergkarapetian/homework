// Create an object and methods to support the following functionality 
class Obj {
    constructor(number) {
        this.number = number
    }
    setSum(setNumber) {
        this.setNumber = setNumber
        this.number = setNumber
    }
    add(addNumber) {
        this.addNumber = addNumber
        this.number += addNumber
    }
    getSum() {
        return `${this.number}, ${this.setNumber} + ${this.addNumber} = ${this.number}`
    }
};

let obj = new Obj();
obj.setSum(10);
obj.add(20);
console.log(obj.getSum()); // Should log 30, 10 + 20 = 30
obj.setSum(100);
