// YOUR CODE BELOW
function mostVowels(str){
    let vowels='aeiou'
    let arrayOfStrings=str.split(' ')
    let vowelCount=[]
    console.log(arrayOfStrings)
    for(let i=0;i<arrayOfStrings.length;i++){
        let count=0;
        for(let j=0;j<arrayOfStrings[i].length;j++){
            if(arrayOfStrings[i][j].toLowerCase()==='a' || arrayOfStrings[i][j].toLowerCase()==='e' ||arrayOfStrings[i][j].toLowerCase()==='i' ||arrayOfStrings[i][j].toLowerCase()==='o' ||arrayOfStrings[i][j].toLowerCase()==='u'){
              count++;
            }
        }
        vowelCount[i]=count;
    }
    let max=vowelCount[0] 
    let maxIndex=0;
    for(let i=1;i<vowelCount.length;i++){
       if(max<vowelCount[i]){
         max=vowelCount[i]
         maxIndex=i;
       }
    }
    console.log(max)
    if(max==0){
        return "";
    }
   return arrayOfStrings[maxIndex].replace(/[^a-zA-Z]/g, '');
}
console.log( mostVowels('Wit beyond measure is man\'s greatest treasure.'))
console.log( mostVowels('Give her hell from us, Peeves.'))
console.log( mostVowels('why dry my sly lynx?'))
console.log(mostVowels('Give her hell from us, Peeves.'))