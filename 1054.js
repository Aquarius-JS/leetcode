/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let arr=[];
    for(let i=0;i<10;i++){
        arr[i]=[];
        arr[i][0]=i;
        arr[i][1]=0;
    }
    for(let i=0;i<barcodes.length;i++){
        arr[barcodes[i]][1]++;
    }
    arr.sort((a,b)=>{
        return b[1]-a[1];
    })
    console.log(arr);
    let ans=[];
    for(let i=0;i<10;i++){
        for(let j=0;j<barcodes.length;j+=2){
            if(arr[i][1]>0){
                ans[j]=arr[i][0];
                arr[i][1]--;
            }else if(arr[i][1]===0){
                i++;
                j-=2;
            }
        }
        for(let j=1;j<barcodes.length;j+=2){
            if(arr[i][1]>0){
                ans[j]=arr[i][0];
                arr[i][1]--;
            }else if(arr[i][1]===0){
                i++;
                j-=2;
            }
        }
    }
    return ans;
};