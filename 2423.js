/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    let arr = [];
    for (let i = 97; i < 123; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < word.length; i++) {
        arr[word[i].charCodeAt(0)]++;
    }
    let flag = 1;
    let sum=0;
    for (let i = 97; i < 123; i++) {
        flag = 1;
        if (arr[i] === 0) continue;
        arr[i]--;
        for(let k=97;k<123;k++){
            if(arr[k]!==0){
                sum = arr[k];
                break;
            }
        }
        for (let j = 97; j < 123; j++) {
            if (arr[j] === 0) continue;
            if (arr[j] !== sum) {
                flag = 0;
                break;
            }
        }
        arr[i]++;
        if (flag === 1) return true;
    }
    return false;
};
