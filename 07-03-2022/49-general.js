// Write a function to find the difference of two arrays

let firstArr = [1, 3];
let secondArr = [1, 2, 1];

function findDifferences(arr1, arr2){
    let arr = arr1.concat(arr2);
    let differences = [...new Set(arr)];
    return differences;
}

console.log(findDifferences(firstArr, secondArr))
