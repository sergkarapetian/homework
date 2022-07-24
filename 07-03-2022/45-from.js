// Using from, and Set create a function that is removing duplicates from an array 
let array = [1, 2, 3, 3, 4, 3, 5, 6, 6, 7, 8, 8, 9, 1];

function removeDuplicates(arr) {
    let cloneArr = Array.from(arr)
let nonDuplicatesArr = [...new Set(cloneArr)];
return nonDuplicatesArr;
}

console.log(removeDuplicates(array));