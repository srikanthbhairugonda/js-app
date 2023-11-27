const fs=require('fs');
fs.rename("./module/index1.js",newchangedfile.js,(err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("modified success");
    }
});