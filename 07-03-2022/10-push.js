// Create a function that is receiving a number and returns 
// an array which is containing all even digits. Use push method

function pushEvenNums(arr) {
let evenArr = [];
for(let item of arr){
    if(item%2 === 0){
        evenArr.push(item);
    }
}
return evenArr;
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(pushEvenNums(array));