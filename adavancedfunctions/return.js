let parentfunc=()=>{
    console.log("parentfunc");
    return refunc=(x,y)=>{
        return x+y

    }
}
let parentres=parentfunc();
console.log(parentres);
let result=parentres(51,25);
console.log(result);