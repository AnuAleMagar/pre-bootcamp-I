
/*
### Array Sum

Write a function, arraySum, that accepts an array of numbers and returns the sum
of all the numbers in the array (no matter how nested!).

```javascript
arraySum([1, [2, 3, [4]]]) // => 10
```

*/
// YOUR CODE BELOW
const arraySum=function(array){
    debugger  
   if(array.length===0){ [10]
     return 0
   }else if(Array.isArray(array[0])){
     return arraySum(array[0])+arraySum(array.slice(1))
    }else{
       return array[0]+arraySum(array.slice(1))
    }
}

console.log(arraySum([[10], [10], [10]]))