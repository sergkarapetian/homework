// Using the splice method, create a function which 
// is removing duplicated numbers from a sorted array of numbers;

let array = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7];

array.forEach((el, index, arr) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
        arr.splice(index, 1);
        index--;
    }
});
console.log(array);