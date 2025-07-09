// YOUR CODE BELOW
function onlyOdds(num){
    let sum=0
    if(num<0){
        return sum;
    }else{
        for(let i=num;i>0;i--){
            if(i%2!=0){
                sum+=i;
            }
        }
        return sum;
    }
}
console.log(onlyOdds(5))