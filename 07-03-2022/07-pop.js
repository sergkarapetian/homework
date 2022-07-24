// Create a function that is receiving an array
//  and returns reversed one using pop()

function reversedArr(arr) {
    let newArr = [];
        while (arr.length > 0) {
            newArr.push(arr.pop());
        }
    return newArr;
}

let array = [1, 2, 3, 7];
console.log(reversedArr(array));

