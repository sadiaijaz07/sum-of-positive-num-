let sum=0;
function array1(arr){
    arr.forEach((val)=>{
        if(val>0)
            sum+=val;
    })
return sum;
}
const answer=array1(arr=[2,7,8,9,-1,5])
console.log(`sum of all positive number is: ${answer}`)