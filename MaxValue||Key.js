var dic={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'p': 100}
var list=[]
for(var p in dic){
  list.push(dic[p])
}
var k=list[0]
for(var j in list){
  if(k<list[j]){
    k=list[j]
  }
}
console.log(k,p)