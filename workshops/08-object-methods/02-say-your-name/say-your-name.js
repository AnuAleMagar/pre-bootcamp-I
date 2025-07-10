
/*
### Say Your Name

Create a new object, `me2`. Expand the `myGreeting` method from me so it accepts
another object with a name property. The returned greeting should now greet the
other object by name.

```javascript
console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
```

*/
// YOUR CODE BELOW
const me2={
  name:'Tarana',
  getGreeting:function(obj){
    return `Hi ${obj.name}, my name is ${this.name}.`
  }
}
const you={
  name:'Alyssa'
}
console.log(me2.getGreeting(you)); 
// => 'Hi Alyssa, my name is Tarana.'
