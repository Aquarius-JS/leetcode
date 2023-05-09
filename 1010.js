/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let ans=0;
    const arr=[];
    for(let i=0;i<60;i++){
        arr[i]=0;
    }
    for(let i=0;i<time.length;i++){
        arr[time[i]%60]++;
    }
    for(let i=1;i<30;i++){
        ans+=arr[i]*arr[60-i];
    }
    ans+=arr[0]*(arr[0]-1)/2+arr[30]*(arr[30]-1)/2;
    return ans;
};