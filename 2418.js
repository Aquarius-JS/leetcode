/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const arr3=[];
    for(let i=0;i<names.length;i++){
        arr3.push({'name':names[i],height:heights[i]});
    }
    var arySortD = arr3.sort((s, t) => {
        const _s = s.height; // 'D李四' -> 'd李四'
        const _t = t.height;
        return _t-_s;
    });
    // console.log(arySortD);
    const arrName=[];
    for(let i=0;i<heights.length;i++){
        arr3.push(arr3[i].name);
    }
    return arr3;
};
