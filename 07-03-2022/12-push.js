// Create a custom Array.prototype.myPush should work similarly 
// to Array.prototype.push

Array.prototype.myPush = function (...el) {
    for (let elements of el) {
        this[this.length] = elements
    }
    return this.length;
}

let array = [1, 2, 3, 4]
console.log(array.myPush(5, 6))
console.log(array);
