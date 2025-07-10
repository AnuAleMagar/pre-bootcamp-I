
/*
### My Unshift

Write a function `unShift` that takes an array and a value of any type as arguments.

`unShift` should return a new array, with the given value as the first element
in the new array.

```javascript
unShift([1, 2, 3], 0); / => [0, 1, 2, 3];
```

Do not use the built-in .shift method for this problem!

*/
// YOUR CODE BELOW
function myUnshift(array,value){
    let result=[]
    result.push(value)
    for (let i=0;i<array.length;i++){
        result[i+1]=array[i]
    }
    return result
}
console.log(myUnshift([1, 2, 3], 0))