// From the given array of numbers and strings create 2 new arrays, 
// one containing only numbers, another one only strings.
// Տրված զանգվածից որը պարունակում թվեր և տողեր, 
// ստեղծել նոր 2 զանգված մեկը միայն թվեր կպարունակի, մյուսը միայն տողեր

function sortNumsAndStringsInNewArrs(arr) {
    let stringArr = [];
    let numArr = [];
    for (let i = 0; (i < arr.length); i++) {
        if (typeof arr[i] === 'string') {
            stringArr.push(arr[i])
        }

        else if (arr[i] === arr[i]) {
            numArr.push(arr[i])
        }

        else stringArr.push(arr[i]);
    }
    console.log(stringArr, numArr);
}

let array = ['one', 2, 3, 4, 'five', 'six', 'seven', 8, NaN, 10];
sortNumsAndStringsInNewArrs(array);

// Create a function that will reverse the given string.
// Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ։

function reversString(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};
let rightString = 'abcdef';
console.log(reversString(rightString));
