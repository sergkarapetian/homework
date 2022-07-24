// Using the splice method, write a function that will fill the missing 
// numbers of a sorted array of numbers, to make it consecutive. 
// Example: [1,2,3,6] should become [1,2,3,4,5,6]

// function addElems(arr) {
// let length = arr[arr.length-1]
//     for (let i = 0; i < length; i++) {
//         if ((arr[i] + 1 < arr[i + 1]) && (arr[i]+1===arr[i]+1)) {
//             arr.splice(arr[i], 0, arr[i]+1);
//         }
//     }
//     return arr;
// }

function AddElems(arr) {
    this.arr = arr;
    let length = this.arr[this.arr.length-1]
        for (let i = 0; i < length; i++) {
            if ((this.arr[i] + 1 < this.arr[i + 1]) && (!isNaN(arr[i]))) {
                this.arr.splice(this.arr[i], 0, this.arr[i]+1);
            }
        }
        return this.arr;   
    }



let array = [1, 2, 5, 95];
let sortedArr = new AddElems(array)
console.log(sortedArr);
