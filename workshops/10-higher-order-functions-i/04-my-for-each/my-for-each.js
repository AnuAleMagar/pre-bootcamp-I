
/*
### My For Each

Write a function myForEach that accepts an array and a callback function. The
behavior of myForEach should mirror the functionality of the native .forEach()
array method as closely as possible

```javascript
let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
```

*/
// YOUR CODE BELOW

let nums = [1, 2, 3];
let sum=0
function addToSum(num) {
    sum += num;
}
function myForEach(array,callback){
   sum = 0;
   for(let i=0;i<array.length;i++){
     callback(array[i],i)
   }
}
myForEach(nums, addToSum);
console.log(sum); 