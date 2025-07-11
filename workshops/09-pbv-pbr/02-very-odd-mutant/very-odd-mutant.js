
/*
### Very Odd Mutant
'
Write a function, 'veryOddMutant'. The function accepts an array of numbers.
The function should mutate the given array by replacing every even number in the
array with the string 'normie'.

'veryOddMutant' should return a count of the number of even numbers it replaced.

```javascript
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);

console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4
```

*/
// YOUR CODE BELOW
function veryOddMutant(array){
   let count=0;
   for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        array[i]='normie'
        count++;
    }
   }
  return count
}


