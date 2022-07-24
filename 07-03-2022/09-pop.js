// Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop
// let arr = [1, 2];
// delete arr[1];
// arr.length -= 1
// console.log(arr);

Array.prototype.myPop = function () {
    let deletedElement;
    let length = this.length
    if (length > 0) {
        deletedElement = this[length - 1];
        delete this[length - 1];
        this.length -=1;
    }
    return deletedElement;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myPop())
console.log(arr);