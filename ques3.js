function gcd(n1,n2){
    while(!n2==0){
        let temp=n2;
        n2=n1%n2;
        n1=temp;
    }
    return n1;
}
const gcd_ans=gcd(20,8)
console.log(gcd_ans);