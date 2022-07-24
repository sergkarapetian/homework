// Using sort, Write a JavaScript function 
// to get the max element of an array of numbers

let array = [1, 5, 3, 8, 3, 293, 0, 7];

function maxElement(arr) {
    arr.sort((a,b)=>a-b);
    let maxElement = arr[arr.length -1];
    return maxElement;
}

console.log(maxElement(array))