/*
### Fullstack HQ

Refactor the function `fullstackHQ` so that it returns the correct string:

```javascript
fullstackHQ();
// => Fullstack HQ is at Planet Earth, United States, New York State, New York City
```

The only things you should change are the parameter and/or variable names.

*/
// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(place2) {
    return innerFunction('New York State');

    function innerFunction(place3) {
      let place4 = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + place2 + ', ' + place3 + ', ' + place4;
      }
    }
  }
}
console.log(fullstackHQ())