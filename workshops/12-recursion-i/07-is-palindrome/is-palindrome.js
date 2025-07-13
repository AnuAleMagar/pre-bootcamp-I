
/*
### Is Palindrome

A palindrome is a word that is spelled the same forward and backward. For
example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR",
"RUDDER", and "DOGGED" are not palidromes.

Write a recursive function, isPalindrome, to check if a string is a palindrome
or not.

```javascript
isPalindrome('Kayak'); // => true
isPalindrome('NEVERODDOREVEN'); // => true
isPalindrome('Tacocat'); // => true
isPalindrome('SELFLESS'); // => false
```

*/
// YOUR CODE BELOW
const isPalindrome=function(string){
    if(string==='' ||string.length===1){
        return true
    }else{
        let condition=(string[0].toLowerCase()===string[string.length-1].toLowerCase())
        return condition && isPalindrome(string.slice(1,-1))
    }
}
console.log(isPalindrome('Kayak')); // => true
console.log(isPalindrome('NEVERODDOREVEN')); // => true
console.log(isPalindrome('Tacocat')); // => true
console.log(isPalindrome('SELFLESS')); // => false