/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function(nums) {
    let s1=0
    for(let i=0;i<nums.length-1;i++){
        s1+=Math.abs(nums[i]-nums[i+1]);
    }
    
};