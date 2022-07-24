// Using reverse, write a function that checks if the string is a palindrome
let number = 12321;

function checkIfPalindromen(num) {
    let string = num.toString().split('');
    num = num.toString().split('');
    let reversed = string.reverse();
    if(reversed.toString() === num.toString()){
        console.log(true);
    }
    else{
        console.log(false)
    }
}
checkIfPalindromen(number);
