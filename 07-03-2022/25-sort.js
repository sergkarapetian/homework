// Using sort, Write a JavaScript function to
//  get the min element of an array of numbers

let array = [3, 5, 8, 3, 9, -3, 6, 4, 8, 3, 23];

function getMinElement(arr) {
    arr.sort((a, b) => a - b);
let minElement = arr[0];
return minElement;
}

console.log(getMinElement(array));