// Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift


Array.prototype.myShift = function () {
    let length = this.length;
    let deletedElement;
    if (length > 0) {
        deletedElement = this[0];
        delete this[0];
        for (let i = 0; i < length; i++) {
            this[i] = this[i + 1];
        }
        this.length -= 1;
    }
    return deletedElement;
}

let arr = [7, 1, 2, 3, 4, 5, 6, 7, 8];
arr.myShift();
console.log(arr);