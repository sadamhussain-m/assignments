let fs=require("fs");



fs.readFile("a.txt","utf-8",function(err,data){

    let sentence=data.replace("\s/g",' ');

    console.log(sentence)
})