var i=0
var obj={}
while(i<5){
    var readlinesync=require("readline-sync")
    var key=readlinesync.question("eneter the key")
    var value=readlinesync.question("eneter the value")
    obj[key]=value
    i+=1
}console.log(obj)