/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
function add(nums, length, index) {
    let sum = 0;
    for (let i = index; i < length + index; i++) {
        sum += nums[i];
    }
    return sum;
}

var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
    let ans = 0;
    for (let i = 0; i + firstLen - 1 < nums.length; i++) {
        let sum1 = add(nums, firstLen, i);
        for (let j = 0; j + secondLen - 1 < nums.length; j++) {
            if (j > i + firstLen - 1 || j + secondLen - 1 < i) {
                let sum2 = add(nums, secondLen, j);
                console.log(sum1, sum2,i, j);
                let newSum = sum1 + sum2;
                ans = ans > newSum ? ans : newSum;
            }

        }
    }
    return ans;
};