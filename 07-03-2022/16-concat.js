// Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

Array.prototype.myConcat = function (array2) {
    return [...this, ...array2];
}

let arr1 = [1, 2, 3, 4];
let arr2 = [20, 19, 18, 17];

let arr3 = arr1.myConcat(arr2)
console.log(arr3);