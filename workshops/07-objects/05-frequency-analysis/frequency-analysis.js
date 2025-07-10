/*
### Frequency Analysis

Define a function `frequencyAnalysis` that accepts a string of lower-case
letters.

`frequencyAnalysis` should return an object containing the count for each letter
in the string.

```javascript
frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
```
*/
// YOUR CODE BELOW
function frequencyAnalysis(string){
  let result={}
  for(let i=0;i<string.length;i++){
    result[string[i]]=0
  }
  for(let i=0;i<string.length;i++){
    result[string[i]]+=1
  }
  return result
}
console.log(frequencyAnalysis('abcaacaa'))