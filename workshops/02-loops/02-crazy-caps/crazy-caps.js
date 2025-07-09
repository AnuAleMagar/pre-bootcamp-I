// YOUR CODE BELOW
function crazyCaps(string){
  let result='';
  for(let i=0;i<string.length;i++){
    if(i%2==0){
        result+=string[i].toLowerCase()
    }else{
         result+=string[i].toUpperCase()
    }
  }
  return result;
}
console.log(crazyCaps('fullstack is amazing'))