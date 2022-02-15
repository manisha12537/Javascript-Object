
var dict={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 100}
var list=[]
for(var i in dict){
  list.push(dict[i])
}
var a=list[0]
for(var b in list){
  if(a<list[b]){
    a=list[b]
  }
}
var list2=[]
for(var k in dict){
  if(dict[k]==a){
      list2.push(k)
    console.log(dict[k],k)
  }
}console.log(list2)
