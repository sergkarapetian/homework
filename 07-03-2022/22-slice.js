// Using slice, Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.

let array = [6, 4, 7, 3, 7, 4, 2, 3, 1, 0];
let n = 6

function getElements(arr, count){
let result = arr.slice(0, count);
return result;
}

console.log(getElements(array, n));