/*
### Compare Objects

Define a function, `compareObjects`, that accepts two objects as arguments.

`compareObjects` should return true if both objects have exactly the same
key/value pairs. Otherwise, `compareObjects` should return false. Assume the
objects are not nested.

```javascript
compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
```

*/
// YOUR CODE BELOW
function compareObjects(obj1,obj2){
    let obj1Keys=Object.keys(obj1)
    let obj2Keys=Object.keys(obj2)
    if(obj1Keys.length!=obj2Keys.length){
        return false
    }else{
       for(let key in obj1){
        if(obj1[key]!=obj2[key]){
            return false
        }
       }
       return true
    }
}
console.log(compareObjects({ name: 'nick' }, { name: 'Nick' }))