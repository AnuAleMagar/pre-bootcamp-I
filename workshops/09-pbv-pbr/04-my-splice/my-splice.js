
/*
### My Splice

Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
array method. However, mySplice should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method
can actually take any number of values to add).

Do not use .splice in your function.


```javascript
let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3]
```
[1,2,3,4],1,0,'A'//  1,'A',2,3,4
*/                   
//YOUR CODE BELOW   1,2,3,4,5,,,A  1,A,2,3,4,5

function mySplice(myArray,startInd,deletedNUm,item1){
  let removedItem=[];
  for(let i=0;i<deletedNUm;i++){
    removedItem[i]=myArray[startInd+i]
  }
   if(deletedNUm!=0){
    for(let i=startInd;i<myArray.length-deletedNUm;i++){
        myArray[startInd]=myArray[i+deletedNUm]
    }
    myArray.length=myArray.length-deletedNUm
  }

  if(item1!=undefined){
      for(let i=myArray.length;i>startInd;i--){
      myArray[i]=myArray[i-1]
      }
  myArray[startInd]=item1
  }
 
    return removedItem
}
let ourStuff = ['food', 'trash', 'clothes']
let var1=mySplice(ourStuff, 1, 1, 'more food')
console.log(ourStuff)
console.log(var1)