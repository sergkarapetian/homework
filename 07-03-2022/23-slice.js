// Create a custom Array.prototype.mySlice should work similarly to
//  Array.prototype.slice
let array = [ 3, 5, 7, 39, 0, 38, 9, 2, 5];

Array.prototype.mySlice = function(firstIndex, lastIndex){
this.firstIndex = firstIndex;
this.lastIndex = lastIndex
let newArr = [];
newArr.push(...[firstIndex], ...[lastIndex-1])
return newArr;
}

console.log(array.mySlice())