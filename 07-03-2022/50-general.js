// Write a function that will receive the length and 
// the value and will return a pre-filled array 
// Example: prefillArray(2, ‘Bla Bla`) 
// should return [‘Bla Bla`, ‘Bla Bla`]

function arrCreator(length, value) {
let arr = [];
arr.length = length;
arr.fill(value, 0, length);  // [0; length);
return arr;
}

let length = 3;
let value = "Some Words";
console.log(arrCreator(length, value));
