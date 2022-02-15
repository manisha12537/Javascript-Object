var a='w3resource'
var i=0
var dict={}
while(i<a.length){
    var j=0
    var count=0
    while(j<a.length){
        if(a[i]==a[j]){
            count+=1
        }j+=1
    }
    dict[a[i]]=count
    i+=1
}
console.log(dict)