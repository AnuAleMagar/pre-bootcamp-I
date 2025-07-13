
/*
### Sum Digits

Write a function, sumDigits, that sums all the digits of a given integer
(assume positive). Use recursion.

```javascript
sumDigits(1234) // => 10
```

*/
// YOUR CODE BELOW
const sumDigits=function(number){
    if((number/10)<1){
        return number;
    }else{
        return (number%10+sumDigits(parseInt(number/10)))
    }
}
console.log(sumDigits(12346)) // => 10)