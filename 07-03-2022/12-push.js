// Create a custom Array.prototype.myPush should work similarly 
// to Array.prototype.push

Array.prototype.myPush = function (...el) {
    let newArr = [...this, ...el];
    this = newArr;
    return this;
}

let array = [1, 2, 3, 4]
console.log(array.myPush(5, 6))
console.log(array);