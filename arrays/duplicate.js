function getduplicate(arr){
    let getduplicate=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                y=arr[i];
                getduplicate.push(y);
            }
        }
    }
    return getduplicate;
}
let result=getduplicate([21,35,64,84,20]);
console.log(result);