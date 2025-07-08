// YOUR CODE BELOW
function maxOfThree(num1,num2,num3){
 if(num1>=num2 && num1 >=num3){
    return Number(num1);
 }else if(num2>=num3 && num2>=num1){
    return Number(num2);
 }
 else{
   return Number(num3);
 }
}
console.log(maxOfThree(20,40,10))