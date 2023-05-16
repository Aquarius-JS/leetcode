/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
	if (jobDifficulty.length < d) return -1;
	let dp = [];
	for (let i = 0; i < d; i++) {
		dp[i] = [];
		for (let j = i; j < jobDifficulty.length; j++) {
			dp[i][j] = 0;
		}
	}
	let max = 0;
	for (let i = 0; i < jobDifficulty.length; i++) {
		max = Math.max(jobDifficulty[i], max);
		dp[0][i] = max;
	}
	for (let i = 1; i < d; i++) {
		for (let j = i; j < jobDifficulty.length; j++) {
			let maxJobDifficulty=0;
			for (let k = j; k > i-1; k--) {
				maxJobDifficulty = Math.max(maxJobDifficulty, jobDifficulty[k]);
				dp[i][j] = Math.min(dp[i][j], dp[i - 1][k - 1] + maxJobDifficulty);
			}
		}
	}
    console.log(dp[1]);
	return dp[d - 1][jobDifficulty.length - 1];
};
