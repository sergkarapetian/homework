// Write a function that accepts 2 array arguments and returns a 
// boolean value - Does the first array contain all elements represented in the second array.
// Ստեղծել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում boolan - 
// ստուգելով արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները

function checkRepresentation(arr1, arr2) {
    let verify;
    root: for (let i = 0; i < arr2.length; i++) {
        verify = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                verify = true;
                continue root;
            }
        }
        verify = false;
    }
    return verify;
};

const firstArray = [1, 3, 6, 5, 4, 8, 9, 12, 2, 11, 7];
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(checkRepresentation(firstArray, secondArray));

