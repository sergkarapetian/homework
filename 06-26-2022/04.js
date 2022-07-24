// Write a function to return only unique values of the given array. 
// Ստեղծել ֆւնկցիա որը վերադարծնում է տրված զանգվածի միայն չկրկնվող անդամները։
function notRepeatedValue(arr) {
    let values = ""
    root: for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] === arr[j]) && (i !== j)) {
                continue root;
            }
        }
        values += " " + arr[i];
    }
    return values;
};
const array = ["b", "c", "x", "a", "b", "y", "c", "z", "a",];
console.log(notRepeatedValue(array));