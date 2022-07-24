// Using from, write a JavaScript function to clone an array

let array = [7, 12, 5, 91, NaN, null, undefined, 'String'];
function cloneArr(arr) {
let cloneArr = Array.from(arr);
return cloneArr;
}

console.log(cloneArr(array));