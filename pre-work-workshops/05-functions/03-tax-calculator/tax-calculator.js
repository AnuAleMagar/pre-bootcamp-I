// YOUR CODE BELOW
function taxCalculator(amount,city){
 if(city==='NY'){
    return amount+0.04*amount;
 }else{
   return amount+0.06625*amount;
 }
}
console.log(taxCalculator(100,'NJ'))