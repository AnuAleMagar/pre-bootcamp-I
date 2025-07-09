/*
### My Index Of

Define a function, `myIndexOf`, that accepts three arguments:
  1. source (string)
  2. searchValue (string)
  3. startIdx (number) - optional

If the `source` contains the `searchValue`, return the index at which the
`searchValue` starts. If the `searchValue` appears more than once in the
`source`, return the index from the first occurance of the `searchValue`.
If the `searchValue` doesn't exist in the `source`, return -1.

If a startIdx is passed into the function, ignore any instances of the
`searchValue` that occur before that index. If no `startIdx` is provided,
start searching from the beginning of the `source`.

Do not use the built-in [`.indexOf` string method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) in your answer. Feel free to
use it in all future workshop problems though!

```javascript
myIndexOf('hello', 'h'); // => 0
myIndexOf('hello', 'e'); // => 1
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'o'); // => 4

myIndexOf('twice twice', 'ice'); => 2

// find the index of the first instance of 'ice' starting at index 5.
myIndexOf('twice twice', 'ice', 5); => 8

myIndexOf('happy string', 'sad'); => -1
```

*/
// YOUR CODE BELOW
function myIndexOf(source,searchValue,startIdx=0){
 
    for(let i=startIdx;i<source.length;i++){
        for(let j=0;j<searchValue.length;j++){
          
            if(source[i+j]==searchValue[j]){
                if(j==searchValue.length-1){
                return i;
                }
            }else{
                break;
            }
        }
    }
    return -1;
}
console.log(myIndexOf('hello', 'h'))
console.log(myIndexOf('twice twice', 'ice'))
console.log(myIndexOf('twice twice', 'ice', 5))
console.log(myIndexOf('happy string', 'sad'))
