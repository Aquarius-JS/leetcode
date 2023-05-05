/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let ans=logs[0][0];
    let max=logs[0][1];
    for(let i=1;i<logs.length;i++){
        const cost=logs[i][1]-logs[i-1][1];
        if (max===cost){
            ans=ans>logs[i][0]?logs[i][0]:ans;
        }else {
            ans=max>cost?ans:logs[i][0];
        }
        max=max>cost?max:cost;
    }
    return ans;
};