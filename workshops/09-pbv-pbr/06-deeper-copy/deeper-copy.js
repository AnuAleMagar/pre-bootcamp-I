
/*
### Deeper Copy

Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
dimensional array.

```javascript
let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);//[1, [2, 3, 4]];
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]
```

*/
// YOUR CODE BELOW
function deeperCopy(array){
  let newArray=[]
  for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
        let newArraySub=[]
        for(let j=0;j<array[i].length;j++){
            newArraySub.push(array[i][j])
        }
        newArray.push(newArraySub)
    }else{
         newArray.push(array[i])
    }
   }
  return newArray;
}




