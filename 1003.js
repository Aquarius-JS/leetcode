/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if(s.length%3!==0) return false;
    let reg=new RegExp('abc','g');
    let maxIndex=s.length/3;
    for(let i=0;i<maxIndex;i++){
        s=s.replace(reg,"");
    }
    if(s.length===0) return true;
    return false;
};
//a