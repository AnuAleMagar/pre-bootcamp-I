
/*
### Say My Name

Define an object, `me`, that has a `name` property and a `getGreeting` method.
`getGreeting` should return a greeting.

```javascript
console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'
```

*/
// YOUR CODE BELOW
const me={
    name:'Kat',
    getGreeting:function(){
        return `Hi, my name is ${this.name}.`
    }
}