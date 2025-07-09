
/*
### Zero Dark Thirty

Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

`zeroDarkThirty` should return a number with all of the zeroes removed:

```javascript
zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
```

If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

```javascript
zeroDarkThirty(0) // => NaN
```

*/
// YOUR CODE BELOW
function zeroDarkThirty(num){
 if(num===0){

    return NaN
 }else{
    let result=''
    let stringNum=String(num)
    console.log(stringNum)
    for(let i=0;i<stringNum.length;i++){
        if(stringNum[i]!='0'){
          result+=stringNum[i]
        }
    }
    return (Number(result))
 }
}
console.log(zeroDarkThirty(606.203))