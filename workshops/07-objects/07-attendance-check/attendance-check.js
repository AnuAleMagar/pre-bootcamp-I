
/*
### Attendance Check

Define a function, `attendanceCheck`, that accepts a day of the week as a string.

Using the globally-defined classRoom array, `attendanceCheck` should return a
new array with only the names of the students present on the inputted day of
the week.

```javascript

classCheck('Monday'); // => ['Marnie', 'Shoshanna']

classCheck('Wednesday'); // => ['Marnie', 'Lena']
```
*/
let classRoom = [ //[{"key":[{}]}]
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day){
    let newArray=[]
    for(let i=0;i<classRoom.length;i++){
        let keys=Object.keys(classRoom[i])
        let a=classRoom[i][keys]
        for(let key of a){
            if(key[day]){
                newArray.push(keys[0])
            }
        }
     } 
    return newArray
}
console.log(attendanceCheck("Friday"));