function divi(n1,n2){
   let d_n1=[]
    let d_n2=[]
    let ans=[]
    let large_n=0
   //for num1
    for(let i=1; i<=n1; i++){
        if(n1%i===0)
        d_n1.push(i);
    }
    // for num2
    for(let i=1; i<=n2; i++){
        if(n2%i===0)
        d_n2.push(i);
    }
    //for obtaining common divisor
    d_n1.forEach((val)=>{
        if(d_n2.includes(val))
            ans.push(val);
    })
    // for largest common divisor
  large_n=Math.max(...ans);
    return large_n
}
const large_divisor=divi(36,20);
console.log(`largest common divisor is: ${large_divisor}`)