
/*
### Backward String

Write a function, backwardString, that receives a string. It should log every
letter in the string, from the last character to the first. Use recursion.

NOTE: As with the last problem, the tests will check how many times console.log
is called.

```javascript
backwardString('happy');
// y
// p
// p
// a
// h
```

*/
// YOUR CODE BELOW happy
function backwardString(string){
    debugger
     if(string===''){
       return
    }
    console.log(string[string.length-1])
    if(string===''){
       return
    }
    backwardString(string.slice(0,-1))
}
backwardString("Apple")