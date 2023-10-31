function count(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            x=x+1;
        }
    }
    return x;
}
let result=count([20,15,18,32,55]);
console.log(result);