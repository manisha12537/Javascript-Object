var dict={11:7,65:43,98:9,32:8,12:3,4:89}
var list=[]
for(var i in dict){
    list.push(dict[i])
}var j=0
var l=[]
while(j<list.length){
    var k=0
    while(k<list.length){
        if(list[j]>list[k]){
            var a=list[j]
            list[j]=list[k]
            list[k]=a
        }k++

    }j++
    for(var x in list){
        dict[i]=list[x]
    }
}
console.log(dict)
