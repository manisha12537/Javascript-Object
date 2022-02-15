var mainString="My name is kumar, and my friend’s name is Dhamu"
var subString="is"
var a=mainString.split(" ")
var count=0
for(var i in a){
    if(a[i]===subString){
        count+=1
    }
}
console.log("count how many time \"is\" in string:- ",count)
