/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    for(let i=1;i<=n;i++) {
        let shortStr=i.toString(2);
        if(s.indexOf(shortStr)===-1) return false;
    }
    return true;
};