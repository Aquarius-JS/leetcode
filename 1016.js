/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
function isTrue(shortStr){

}
var queryString = function(s, n) {
    for(let i=1;i<=n;i++){
        let shortStr=i.toString(2);
        if(!isTrue(shortStr,s)){
            return false;
        }
    }
    return true;
};