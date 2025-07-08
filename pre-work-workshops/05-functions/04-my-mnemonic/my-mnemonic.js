// YOUR CODE BELOW
function myMnemonic(string1,string2,string3,string4){
let str=''
if(string1!=undefined){
    str+=string1[0]
}
if(string2!=undefined){
    str+=string2[0]
    
}
if(string3!=undefined){
    str+=string3[0]
  
}
if(string4!=undefined){
    str+=string4[0]
 
}
 return str;
}

console.log(myMnemonic(''))