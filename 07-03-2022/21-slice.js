// Using slice, Write a JavaScript function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements of the array


let array = [5, 4, 7, 8, 1, 0, 2, 6, 3];
let n = 3;

function splicedArr(arr, count) {
let result = arr.slice(-count);
return result;
}

console.log(splicedArr(array, n));