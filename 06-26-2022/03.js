// From the given array of numbers create two arrays one containing only 
// odd and the other only even numbers.
// Տրված թվային զանգվածից ստանալ երկու զանգվածներ, 
// որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:
let evenArr = [];
let oddArr = [];
function createArrsForOddAndEvenNums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        }
        if (arr[i] % 2 === 1) {
            oddArr.push(arr[i]);
        }
    }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
createArrsForOddAndEvenNums(array);
console.log(evenArr, oddArr)