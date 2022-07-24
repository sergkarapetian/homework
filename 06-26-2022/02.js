// 2. Find the smallest and the largest number from the supplied numeric array. 
// Return an array containing these numbers։
// Գտնել զանգվածի ամենափոքր և ամենամեծ տարրերը և վերադարձնել նոր զանգվածի մեջ։ 
function containNums(arr) {
    let newArray = [];
    let max = arr[0];
    let min = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
newArray.push(max, min);
    return newArray;
};

const array = [24, 3, 2, 8, 12, 98, 6, 4, 61];
console.log(containNums(array));