/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k%2===0 || k%5===0) return -1;
    let n=1;
    let ans=1;
    for(let i=0;i<k;i++){
        if(n%k===0) return ans;
        n=(n*10+1)%k;
        ans++;
    }
    return -1;
};