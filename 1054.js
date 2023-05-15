/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    let arr = [];
    for (let i = 0; i <= 10000; i++) {
        arr[i] = {
            num: i,
            length: 0
        }
    }
    for (let i = 0; i < barcodes.length; i++) {
        arr[barcodes[i]].length++;
    }
    arr.sort((a, b) => {
        return b.length - a.length;
    })
    let ans = [];
    let index = 0;
    for (let j = 0; j < barcodes.length;) {
        if (arr[index].length > 0) {
            ans[j] = arr[index].num;
            arr[index].length--;
            j += 2;
        }else if(arr[index].length<=0){
            index+=1;
        }
    }
    for (let j = 1; j < barcodes.length; ) {
        if (arr[index].length > 0) {
            ans[j] = arr[index].num;
            arr[index].length--;
            j += 2;
        } else if (arr[index].length === 0) {
            index++;
        }
    }
    return ans;
};