var dict={11:7,65:43,98:9,32:8,12:3,4:89}
var d=[]
for(var i in dict){
        d.push(dict[i])
}
var j=d[0]
var k=0
while(k<d.length){
    if(d[k]>j){
        j=d[k]
    }k++
}console.log(j)