var d={}
var i=0
readlinesync=require("readline-sync")
var a=readlinesync.questionInt("enter the number")
var i=0
var k=10
while(i<a){
    d[i]=k
    i++
    k+=10

}
console.log(d)