// Using slice, write a JavaScript function to clone an array

let array = [6, 5, 4, 3, 2, 1];

function cloneArr(arr) {
    let newArr = arr.slice(0); // [start; end)
    return newArr;
}

console.log(cloneArr(array));

