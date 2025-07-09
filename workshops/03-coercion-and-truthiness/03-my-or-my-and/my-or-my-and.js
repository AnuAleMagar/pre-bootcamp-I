/*
### My Or, My And

Define a function, `myOr`, that accepts three arguments of any type.

`myOr` should return the same result as the buit-in `||` operator:

```javascript
myOr(true, true, false) === (true || true || false); // => true
```

Then, define a function, `myAnd`, that accepts three arguments of any type.

`myAnd` should return the same result as the buit-in `&&` operator:

```javascript
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
```
*/
// YOUR CODE BELOW
function myAnd(a,b,c){
if(a){
  if(b){
    if(c){
        return true
    }else{
        return false
    }
  }else{
    return false
  }
}else{
    return false;
}
}
function myOr(a,b,c){
    if(a){
        return true;
    }
    if(b){
        return true
    }
    if(c){
        return true
    }
    return false;
}
console.log(myAnd(1, 'apples', true) === (1 && 'apples' && true)
)
console.log(myOr(true, true, false) === (true || true || false));