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
        return c
    }else{
        return c
    }
  }else{
    return b
  }
}else{
    return a;
}
}
function myOr(a,b,c){
    if(a){
        return a;
    }
    if(b){
        return b
    }
    if(c){
        return c
    }
    return c;
}
console.log(myAnd(1, 'apples', true) === (1 && 'apples' && true)
)
console.log(myOr(true, true, false) === (true || true || false));