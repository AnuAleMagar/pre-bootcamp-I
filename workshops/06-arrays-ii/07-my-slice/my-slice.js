
/*
### My Slice

Define a function, `mySlice`, that accepts up to three arguments:
  1. originalArray
  2. startIdx (number, optional)
  3. endIdx (number, optional)


`mySlice` should return a copy of the original array. The copy should include
all of the elements from the orignal array, starting at and including the
startIdx, up through and excluding the endIdx.

```javascript
mySlice([1, 2, 3], 1, 2) // => [2]
```

If the endIdx is undefined, include all the indices starting at and including
the startIdx through the end of the original array.

```javascript
mySlice([1, 2, 3], 1) // => [2, 3]
```

If the startIdx is undefined, return a copy of the original array.

```javascript
mySlice([1, 2, 3]) // => [1, 2, 3]
```

startIdx and endIdx can be negative numbers, in which case they count indices
from the back of the array.

```javascript
mySlice([1, 2, 3], -1) // => [3]
```

Do not use the built-in [`.slice` array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) in your answer. Feel free to
use it in all future problems though!

*/
// YOUR CODE BELOW
function mySlice(originalArray,startIdx=0,endIdx){
 let newArr=[]
 if(endIdx===undefined){
    endIdx=originalArray.length;
 }
 if(startIdx<0){
   startIdx=originalArray.length+startIdx
 }
 if(endIdx<0){
   endIdx=originalArray.length+endIdx
 }
 for(let i=startIdx;i<endIdx;i++){
    newArr.push(originalArray[i])
 }
 return newArr
}
console.log(mySlice([1, 2, 3],1,2))