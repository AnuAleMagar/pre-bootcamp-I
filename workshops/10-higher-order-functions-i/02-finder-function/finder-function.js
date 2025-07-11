
/*
### Finder Function

Define a function 'finderFunction' that takes an array and a callback. Pass
each element from the array into the callback. If the callback returns true,
return the index of the current element. If the callback never returns true,
return -1;

```javascript
let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1
*/
// YOUR CODE BELOW
function isEven(num) {
  return !(num % 2);
}
function finderFunction(array,callback){
    debugger
    for(let i=0;i<array.length;i++){
        // console.log(callback(array[i]))
        if(callback(array[i])){
            return i;
        }
    }
    return -1;
}
let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];


console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1
