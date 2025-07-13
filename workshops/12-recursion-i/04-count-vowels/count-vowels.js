
/*
### Count Vowels

Write a function, countVowels, that accepts a string and returns the number of
vowels in that string. Use recursion.

```javascript
countVowels('Four score and seven years'); // => 9
```

*/
// YOUR CODE BELOW
function countVowels(string){
    let vowels='aeiou'
     if(string===''){
        return 0
    }
    if(vowels.includes(string[0].toLowerCase())){
        return 1+countVowels(string.slice(1));
    }
    else{
        return(0+countVowels(string.slice(1)))
    }
}
console.log(countVowels('Four score and seven years'))