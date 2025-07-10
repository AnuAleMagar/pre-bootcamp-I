
/*
### Last Friday Night

According to the song, Katy Perry "maxed our credit cards".

Define a function, `lastFridayNight`, takes an array of transactions.

`lastFridayNight` should return the total amount she spent last Friday night.

```javascript
let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

sumTransactions(transactions) // => 10512
```

*/
// YOUR CODE BELOW
let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];
function lastFridayNight(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++
    ){
        sum+=arr[i].amount;
    }
  return sum;
}
console.log(lastFridayNight(transactions))