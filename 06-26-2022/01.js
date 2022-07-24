// 1. Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'

// function notRepeatedValue(arr) {
//    root: for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-1; j++) {
//             if ((arr[i] === arr[j]) && (i !== j)){ 
//                 continue root;
//             }
//         }
//         return arr[i];
//     }
// };
// const array = ["b", "c", "k", "a", "b", "c", "a"];
// console.log(notRepeatedValue(array));

let array = ['a', 'a', 'b', 'a'];

function findNonRepited(arr) {
    let obj = {};
    let count = 1
    for (let element of arr) {
        if (obj[element]) {
            obj[element]++;
        }
        else {
            obj[element] = count;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
}
console.log(findNonRepited(array));