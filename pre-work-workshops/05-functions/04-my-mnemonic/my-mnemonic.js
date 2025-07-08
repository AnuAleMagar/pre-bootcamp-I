// YOUR CODE BELOW
function myMnemonic(string1,string2,string3,string4){
let str=''
if(string1!=undefined){
    str+=string1.toString()[0]
}
if(string2!=undefined){
     str+=string2.toString()[0]
    
}
if(string3!=undefined){
     str+=string3.toString()[0]
  
}
if(string4!=undefined){
   str+=string4.toString()[0]
 
}
 return str;
}

console.log(myMnemonic(123))