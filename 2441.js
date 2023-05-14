/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let ans=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            if(nums.indexOf(-nums[i])!==-1){
                ans=ans>nums[i]?ans:nums[i];
            }
        }
    }
    return ans;
};