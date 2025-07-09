// YOUR CODE BELOW
function getMax(firstNum, secondNum, thirdNum){
 if (firstNum > secondNum){
    if (firstNum > thirdNum) {
        return firstNum;
    } 
    return thirdNum;
 } else if (secondNum > thirdNum) {
    return secondNum;
 }else {
    return thirdNum;
 }
}
