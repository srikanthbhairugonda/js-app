function max(arr){
    let x=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            x=arr[i];
        }
    }
    return x;
}
let result=max([2,5,41,3,8,6]);
console.log(result);