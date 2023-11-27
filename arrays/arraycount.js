function count(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++;
        }
    }
    return count;
}
let result=count([20,15,18,32,55]);
console.log(result);