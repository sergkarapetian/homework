// Using concat compute the union of two arrays and
//  then remove all duplicated items if they exist

let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [5, 6, 7, 8, 9, 10];

mixedArr = firstArr.concat(secondArr);

function findDuplicates(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((j !== i) && (arr[j] === arr[i])) {
                arr.splice(j, 1);
                break;
            }
        }
    }
    return arr;
}
console.log(findDuplicates(mixedArr))