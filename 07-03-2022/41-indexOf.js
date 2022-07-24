// Write a function which is checking if a given element contains inside an array 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 4;

function checkElement() {
    return array.indexOf(n) //Returns index of element;
}
console.log(checkElement(array))