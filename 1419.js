/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    let ans = 0;
    let cnt = [];
    for (let i = 0; i < 5; i++) {
        cnt[i] = 0;
    }
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (croakOfFrogs[i] === 'c') {
            if (cnt[4] > 0) {
                cnt[0]++;
                cnt[4]--;
            } else if (cnt[4] === 0) {
                ans++;
                cnt[0]++;
            }
        }
        if (croakOfFrogs[i] === 'r') {
            if (cnt[0] === 0) {
                return -1;
            } else if (cnt[0] > 0) {
                cnt[0]--;
                cnt[1]++;
                console.log(cnt[1]);
            }
        }
        if (croakOfFrogs[i] === 'o') {
            if (cnt[1] === 0) {
                return -1;
            } else if (cnt[1] > 0) {
                cnt[1]--;
                cnt[2]++;
            }
        }
        if (croakOfFrogs[i] === 'a') {
            if (cnt[2] === 0) {
                return -1;
            } else if (cnt[2] > 0) {
                cnt[2]--;
                cnt[3]++;
            }
        }
        if (croakOfFrogs[i] === 'k') {
            if (cnt[3] === 0) {
                return -1;
            } else if (cnt[3] > 0) {
                cnt[3]--;
                cnt[4]++;
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        if (cnt[i] !== 0) return -1;
    }
    return ans;
};