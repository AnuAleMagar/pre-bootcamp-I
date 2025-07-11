
/*
### Clone Machine

Write a function `cloneMachine`, that, given an animal (represented as an object),
returns a clone of the original animal.

The name of the clone should be the name of its parent, concatenated with the word
'Clone'.

`cloneMachine` should also push the name of the clone to the parent's offspring
array.

```javascript
let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
```

*/
// YOUR CODE BELOW
let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
};
function cloneMachine(obj){
    let newClone={};
    for(let key in obj){
        if(key==='name'){
            newClone[key]=obj[key]+'Clone'
        }else if(key==='offspring'){
            newClone[key]=[...obj[key]]
        }else{
          newClone[key]=obj[key]
        }
        
    }
    let length=obj['offspring'].length;
    obj['offspring'][length]=newClone.name
    return  newClone

}
let dollyClone = cloneMachine(dolly);
let newObject=cloneMachine(dollyClone)
console.log(dollyClone) 
console.log(dolly) 
console.log(newObject) 

