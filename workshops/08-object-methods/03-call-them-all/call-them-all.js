
/*
### Call Them All

Write a function `callThemAll`, that, given an object and a value, calls every
method in the object, passing in the value as the argument with each call.

`callThemAll` should return an array with all of the returned values from each
method invocation. The order of the elements in the returned array does not
matter.

```javascript
let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

callThemAll(addNums, 100); // => [110, 120]
```

*/
// YOUR CODE BELOW

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};
function callThemAll(addNums,num){
    let array=[]
    let keys=Object.keys(addNums);
    for(let i=0;i<keys.length;i++){
        // console.log(key)
        if(typeof(addNums[keys[i]])==='function'){
           array.push( addNums[keys[i]](num))
        }
       
    }
    return array
   
}
callThemAll(addsNums, 100); // => [110, 120]