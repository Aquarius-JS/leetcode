/**
 * @param {number} capacity
 */
let dinnerPlates=[];
let len=[]; //记录每个盘子中元素个数的数组;
let maxLen; //记录每一个盘子的最大元素数;
let maxNum; //记录所用盘子的最大编号;
var DinnerPlates = function(capacity) {
    maxLen=capacity;
    maxNum=0;
    for(let i=0;i<100000*capacity;i++){
        dinnerPlates[i]=0;
    }
    for(let i=0;i<100000;i++){
        len[i]=0;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */

DinnerPlates.prototype.push = function(val) {
    for(let i=0;i<100000;i++){
        if(len[i]<maxLen){
            dinnerPlates[i*maxLen+len[i]]=val;
            len[i]++;
            maxNum=maxNum>i?maxLen:i;
            return;
        }
    }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    for(let i=maxNum;i>-1;i--){
        if(len[i]>0){
            len[i]--;
            if(len[i]===0 && i===maxNum) maxNum--;
            return dinnerPlates[i*maxLen+len[i]];
        }
    }
    return -1;
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if(len[index]===0) return -1;
    len[index]--;
    if(index===maxNum && len[index]===0) maxNum--;
    return dinnerPlates[index*maxLen+len[index]];
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */