const fs=require('fs');
fs.writeFile("./module/test.js",'utf8',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("create file successfully");
});