// Using from, turn the string into an array

let string = "some string from some words"
function createArrfromStr(str) {
    let stringArr = Array.from(str);
    return stringArr;
    }
    
    console.log(createArrfromStr(string));