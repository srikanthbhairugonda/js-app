function f(arr){
    let evennumberarr=[];
    for(i in arr){
        if(arr[i]%2==0){
            evennumberarr.push(arr[i]);
        }
    }
    return evennumberarr;
}
let result=f([20,51,60,58,98,108,22,32]);
console.log(result);