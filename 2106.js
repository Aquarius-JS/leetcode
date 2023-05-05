/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let ans=0;
    //只能往右
    if(startPos<=fruits[0][0]){
        for(let i=0;i<fruits.length;i++){
            if(startPos+k>=fruits[i][0]){
                ans+=fruits[i][1];
            }else if(startPos+k<fruits[i][0]){
                break;
            }
        }
        return ans;
    }
    //只能往左
    if(startPos>=fruits[fruits.length-1][0]){
        for(let i=fruits.length-1;i>-1;i--){
            if((startPos-k)<=fruits[i][0]){
                ans+=fruits[i][1];
            }else if(startPos-k>fruits[i][0]){
                break;
            }
        }
        return ans;
    }
    //只向右
    let min=fruits.length/2;
    let left=0;
    let right=fruits.length-1;
    let sum=0;
    while(true){
        if(startPos>=fruits[min-1][0] && startPos<=fruits[min][0]){
            break;
        }
        if(startPos>fruits[min][0]){
            left=min;
            min=(left+right)/2;
        }
        if(startPos<fruits[min-1][0]){
            right=min;
            min=(left+right)/2;
        }
    }
    for(let i=min;i<fruits.length;i++){
        sum+=fruits[i][1];
    }
    ans=ans>sum?ans:sum;
    //先向右再向左
    
};