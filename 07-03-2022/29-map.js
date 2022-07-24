// Using the map, write a function to clone an array

function cloneArr(arr) {
    let cloneArray = arr.map(function (item) {
        return item;
    });
    return cloneArray;
}

let array = [6, 5, 4, 3, 2, 1]
console.log(cloneArr(array))