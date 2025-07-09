// YOUR CODE BELOW
function mySlice(originalString,startIdx,endIdx){
 let result=''
 if(startIdx===undefined){
    return originalString;
 }
 if(endIdx===undefined){
    for(let i=startIdx;i<originalString.length;i++)
        result+=originalString[i]
 }else{
     for(let i=startIdx;i<endIdx;i++)
        result+=originalString[i]
 }
 return result;
}
console.log(mySlice('slice and dice',2))