function func(myfunc,x,y){
    console.log("inside func");
    let result=myfunc(x,y);
    return result;
}
function myfunc(x,y){
    let z=x+y;
    return z;
}
let result=myfunc(8,9);
console.log(result);