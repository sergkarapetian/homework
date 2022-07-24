// Create a function that is receiving a sting argument
// and checks if it is a palindrome using pop() 
function checkPalindrome(givenArr) {
    let halfArr = [];
    while (givenArr.length > halfArr.length) {
        halfArr.push(givenArr.pop());
    }
    if (halfArr.toString() === givenArr.toString()) {
        console.log("true")
    }
    else {
        console.log("false");
    }
}

let array = [1, 2, 3, 4, 4, 3, 2, 1];
checkPalindrome(array)
