/*
### Zoo Inventory

Define a function, `zooInventory`, that accepts a multi-dimensional array of
animal facts.

`zooInventory` should return a new, flat array. Each element in the new array
should be a sentence about each of the animals in the zoo.

```javascript
let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

zooInventory(myZoo);
/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/

// YOUR CODE BELOW
   let zoo = [
      ["Hobbes", ["tiger", 32]],
      ["Simba", ["lion king", 23]],["Hobbes", ["tiger", 32]]
    ];

function zooInventory(arr) {
 let arrRslt=[]

 for(let k=0;k<arr.length;k++){
    let rslt=''
    for(let i=0;i<arr[k].length;i++){
    if(Array.isArray(arr[k][i])){
        for(let j=0;j<arr[k][i].length;j++){
            if(j%2===0){
                 rslt+=`the ${arr[k][i][j]} `
            }else{
                 rslt+=`is ${arr[k][i][j]}.`
            }
        }
    }else{
      rslt+=`${arr[k][i]} `
    }
    }
  arrRslt.push(rslt)
 }
 return arrRslt
}
console.log(zooInventory(zoo))