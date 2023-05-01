/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let ans=0;
    for(let i=0;i<n;i++){
        let sumTime=0;
        let j=i;
        while(manager[j]!==-1){
            sumTime+=informTime[manager[j]];
            j=manager[j];
        }
        ans=ans>sumTime?ans:sumTime;
    }
    return ans;
};