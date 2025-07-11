/*
### Very Odd

Write a function, veryOdd. The function accepts an array of numbers.
It should return a new array that contains only the odd numbers from the given
array. veryOdd must not mutate the given array.

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]
```
*/

// YOUR CODE BELOW
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
function veryOdd(array){
  let newArr=[]
  for(let i=0;i<array.length;i++){
    if(array[i]%2!=0){
        newArr.push(array[i])
    }
  }
  return newArr;
}
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]