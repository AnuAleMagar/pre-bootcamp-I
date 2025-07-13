
/*
### Call Count

Write a function, callCount, that returns a new function. The new function
should return the number of times its been called.

```javascript
let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2
```

*/
// YOUR CODE BELOW

function callCount(){
    let count=0;
    return function(){
        count++
        return count;
    }
}
let newFunction1 = callCount();
let newFunction2 = callCount();
console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2
console.log(newFunction2()); // => 1
console.log(newFunction2()); // => 2