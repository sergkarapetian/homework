// Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join

Array.prototype.myJoin = function (symbol) {
    let joinedString = "";
    for (let element of this) {
        if (symbol === undefined) {
          
            element < this.length ? joinedString += element + ',' : joinedString += element;
        } else if (symbol !== '') {
            element < this.length ? joinedString += element + symbol : joinedString += element;
        } else if (symbol === '') {
            if (element) {
                joinedString += element;
            }
        }
    }
    return joinedString;
}

console.log([1, 2, 3, 4, 5].myJoin('*'))
console.log([1, 2, 3, 4, 5].myJoin(''))
console.log([1, 2, 3, 4, 5].myJoin())
