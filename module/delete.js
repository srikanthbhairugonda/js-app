const fs=require('fs');
fs.unlink("./module/index1.js",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file delete success");
    }
});