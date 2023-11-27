let x=[[1,2,3],[6,8,5]];
let y=[[7,8,4],[6,8,7]];
let xy=[[],[]];
let r=3;
let c=3;
for (let i=0;i<r;i++){
    let sum=0;
    for (let j=0;j<c;j++){
        sum=sum+x[i][j]*y[j][i];
    }
for (let k=0;k<c;k++){
    xy[i][k]=sum;
}
}
console.log(xy);