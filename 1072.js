/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 1) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 1) {
          matrix[i][j] = 0;
        } else if (matrix[i][j] === 0) {
          matrix[i][j] = 1;
        }
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = i; j < m; j++) {
      if (matrix[i] === matrix[j]) {
        sum++;
      }
    }
    ans = ans > sum ? ans : sum;
  }
};
