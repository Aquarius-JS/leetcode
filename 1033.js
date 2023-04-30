/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let min=a>(b>c?c:b)?(b>c?c:b):a;
    let max=a>(b>c?b:c)?a:(b>c?b:c);
    let mid=a+b+c-max-min;
    console.log(min,mid,max);
    const ans=[];
    ans[1]=max-min-2;
    if(max-min===2){
        ans[0]=0;
    }else if(max-min===3){
        ans[0]=1;
    }else if(max-min>3){
        if(max-mid<3||mid-min<3){
            ans[0]=1;
        }else{
            ans[0]=2;
        }
    }
    return ans;
};