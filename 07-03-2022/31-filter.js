// Using the filter, write a JavaScript function to clone an array

function cloneArr(arr) {
    let cloneArr = arr.filter(item => item || true);
    return cloneArr;
}

let array = [2, 4, 6, 8, null, 10];
console.log(cloneArr(array));