/**
 * @param {string} time
 * @return {number}
 */
function sum1(a,b){
    if(a==='?'){
        if(b!=='?'){
            b=b*1;
            if(b>3){
                return 2;
            }else if(b<=3){
                return 3;
            }
        }else if(b==='?'){
            return 24;
        }
    }else if(a!=='?'){
        a=a*1;
        if(b!=='?'){
            return 1;
        }else if(b==='?'){
            if(a===2){
                return 4;
            }else if(a<2){
                return 10;
            }
        }
    }
    return 1;
}
var countTime = function(time) {
    let ans=0;
    ans= sum1(time[0],time[1]);
    if(time[3]==='?') ans*=6;
    if(time[4]==='?') ans*=10;
    return ans;
};