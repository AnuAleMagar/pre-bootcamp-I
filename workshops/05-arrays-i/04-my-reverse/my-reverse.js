
/*
### My Reverse

Define a function `myReverse` that accepts an array.

`myReverse` should return a new array with the elements in reverse order.

```javascript
myReverse([1, 2, 3]);    // => [3, 2, 1]
```

Do not use the built-in [.reverse method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for this problem. You can use it on all
future problems though!

*/
// YOUR CODE BELOW
function myReverse(array){
    for(let i=0;i<array.length/2;i++){
         
        let temp=array[i]
        array[i]=array[array.length-1-i]
       array[array.length-1-i]=temp
    }
    return array
}
console.log(myReverse([1, 2,6,3,4]))