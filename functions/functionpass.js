function f(myfunc,x,y){
    let result=myfunc(x,y);
    return result;
}
let add=function(x,y){
    sum=x+y;
    return sum;
}
let sub=function(x,y){
    sum=x-y;
    return sum;
}
let res=f(add,6,9);
console.log(res);
let res1=f(sub,5,4);
console.log(res1);