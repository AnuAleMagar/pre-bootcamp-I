// YOUR CODE BELOW
function exponentiate(base,power){
  let result=1;
  for(let i=0;i<power;i++){
    result *=base;
  }
  return result;
}
console.log(exponentiate(3, 4) )