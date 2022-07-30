// Using the constructor function create, an object 
// and methods to support the following functionality 

function Calculator(number) {
    this.number = number;

    this.plus = function (addNum) {
        return number += addNum
    };

    this.minus = function (minusNum) {
        return number -= minusNum;
    };

    this.multiply = function (multiplyNum) {
        return number *= multiplyNum
    };

    this.divide = function (divideNum) {
        return number /= divideNum
    };

    this.getResult = function () {
        return number
    };

    return number;
}

const calculator = new Calculator(0);
console.log(calculator.plus(5));
console.log(calculator.minus(3));
console.log(calculator.multiply(3));
console.log(calculator.divide(2));
console.log(calculator.getResult());


