let sum=0;
function vowel(a){
    for (const val of a) {
        if(val=='a' || val=='e'|| val=='i' || val=='o' || val=='u')
            sum++;   
    }
return sum;
}
const answer=vowel("i am sadia ijaz, working on javascript")
console.log(`num of vowel letters: ${answer}`)