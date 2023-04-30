/**
 * @param {string[]} words
 * @return {number}
 */
function isOK(wordsRise,str){
    for(let i=0;i<wordsRise.length;i++){
        if(str===wordsRise[i]){
            return i;
        }
    }
    return false;
}
var longestStrChain = function(words) {
    let wordsRise=words.sort((a,b)=>{
        return a.length-b.length;
    });
    let ans=0;
    let dp=[];
    for(let i=0;i<wordsRise.length;i++){
        dp[i]=1;
        for(let j=0;j<wordsRise[i].length+1;j++){
            if(newIndex=isOK(wordsRise,wordsRise[i].substring(0, j) + wordsRise[i].substring(j + 1))){
                console.log(newIndex);
                dp[i]=Math.max(dp[i],dp[newIndex]+1);
                console.log(dp[i],i)
            }
        }
    }
    for(let i=0;i<wordsRise.length;i++){
        ans=ans>dp[i]?ans:dp[i];
    }
    return ans;
};