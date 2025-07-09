// YOUR CODE BELOW
function bacteriaTime(currentNum,targetNum){
  let time=0
  if(targetNum<currentNum){
    return 'targetNum must be larger than currentNum';
  }
  while(currentNum<targetNum){
    currentNum*=2;
    time+=20;
  }
  return time;
}
console.log(bacteriaTime(3, 6000));