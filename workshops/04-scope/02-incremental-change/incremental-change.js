/*
### Incremental Change

Define a function `incrementalChange` that accepts a number and increments the global
variable counter by that amount. The function should also return the current
value of the counter after the increment operation.

Each successive call to incrementalChange should progressively change the value
held by the counter.

```javascript
let counter = 0;

incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1); // => 7
```
*/


let counter = 0;

// YOUR CODE BELOW
function incrementalChange(num){
 counter+=num;
 return counter;
}
console.log(incrementalChange(2))
console.log(incrementalChange(6))
console.log(incrementalChange(-1))