/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
function find(arr1, arr2, k) {
    let ans = [];
    for (let i = 0; i < arr1.length && i < k; i++) {
        for (let j = 0; j < arr2.length && j < k; j++) {
            ans.push(arr1[i] + arr2[j]);
        }
    }
    ans.sort((a, b) => a - b);
    let arr = [];
    for(let i=0;i<ans.length && i<k;i++){
        arr.push(ans[i]);
    }
    return arr;
}
var kthSmallest = function (mat, k) {
    let ans = [];
    ans = mat[0];
    for (let i = 1; i < mat.length; i++) {
        ans = find(ans, mat[i], k);
    }
    return ans[k - 1];
};
