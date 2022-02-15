var char="MISSISSIPPI" 
var i=0
var a=[]
while(i<char.length){
    if(!a.includes(char[i])){
        a.push(char[i])
    }i++
}
var j=0
var d={}
while(j<a.length){
    var k=0
    var count=0
    while(k<char.length){
        if(char[k]==a[j]){
            count+=1
        }k++
    }d[a[j]]=count
    j++
}
console.log(d)