
/*
### Reverse Array

Write a function, reverseArray, that accepts an array and returns a reversed
copy of that array. Use recursion.


```javascript
let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]
```

*/
// YOUR CODE BELOW
const reverseArray=function(array){
    let arrayResult=[]
    if(array.length===0){
        return []
    }else{
        arrayResult.push(array[array.length-1])
        return arrayResult.concat(reverseArray(array.slice(0,-1)))
    }
}
let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]